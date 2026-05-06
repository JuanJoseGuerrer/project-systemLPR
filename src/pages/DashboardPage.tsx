import { useAuth } from '../context/AuthContext';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
import { ScanLine, LogOut, Monitor, Activity, Car, Cpu } from 'lucide-react';

export default function DashboardPage() {
  const { isDark } = useTheme();
  const { user, logout } = useAuth();

  const stats = [
    { label: 'Camaras activas', value: '3', icon: Monitor },
    { label: 'Detecciones hoy', value: '127', icon: Activity },
    { label: 'Vehiculos registrados', value: '42', icon: Car },
    { label: 'Precision del sistema', value: '99.8%', icon: Cpu },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0f1117]' : 'bg-[#F8FAFC]'}`}>
      {/* Top bar */}
      <header className={`sticky top-0 z-40 backdrop-blur-xl border-b ${isDark ? 'bg-[#0f1117]/80 border-surface-border' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <ScanLine className={`w-7 h-7 ${isDark ? 'text-accent-light' : 'text-slate-800'}`} />
            <span className={`text-base font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Vision<span className="text-accent-light">G</span>
              <span className={`${isDark ? 'text-slate-500' : 'text-slate-400'} font-medium ml-1.5`}>LPR</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {user?.email}
            </span>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 border border-transparent hover:border-red-500/30 text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4" />
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Dashboard
        </h1>
        <p className={`mt-1 text-sm font-light ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
          Bienvenido a tu panel de control
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`rounded-xl p-5 border transition-all duration-300 ${
                isDark
                  ? 'bg-surface-raised border-surface-border'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-accent-light" />
                </div>
                <span className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{stat.label}</span>
              </div>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 rounded-xl p-8 border text-center ${
          isDark ? 'bg-surface-raised border-surface-border' : 'bg-white border-slate-200'
        }`}>
          <Monitor className={`w-12 h-12 mx-auto mb-3 ${isDark ? 'text-slate-700' : 'text-slate-300'}`} />
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            El dashboard completo estara disponible proximamente.
          </p>
        </div>
      </main>
    </div>
  );
}
