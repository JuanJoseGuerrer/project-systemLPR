/*
  # Create profiles table and auth trigger

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `full_name` (text, user's full name)
      - `plan` (text, selected plan, defaults to 'free')
      - `created_at` (timestamptz, defaults to now())

  2. Security
    - Enable RLS on `profiles` table
    - Add policy: users can only access their own profile row
      - SELECT: USING (auth.uid() = id)
      - INSERT: WITH CHECK (auth.uid() = id)
      - UPDATE: USING (auth.uid() = id) WITH CHECK (auth.uid() = id)
      - DELETE: USING (auth.uid() = id)

  3. Automation
    - Create trigger function `handle_new_user()` that auto-inserts
      a profile row when a new user signs up, pulling full_name and
      plan from the user's raw_user_meta_data
    - Create trigger `on_auth_user_created` on auth.users AFTER INSERT

  4. Important Notes
    - The trigger function uses SECURITY DEFINER so it can insert
      into the profiles table even when called by a non-owner
    - The plan defaults to 'free' if not provided during signup
    - RLS policies are restrictive by default; no data is accessible
      without authentication and ownership verification
*/

CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  plan TEXT DEFAULT 'free',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can delete own profile"
  ON profiles FOR DELETE
  TO authenticated
  USING (auth.uid() = id);

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, full_name, plan)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    COALESCE(NEW.raw_user_meta_data->>'plan', 'free')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();
