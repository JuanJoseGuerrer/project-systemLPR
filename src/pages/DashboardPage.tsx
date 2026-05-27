import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
import { ScanLine, LogOut, Monitor, Activity, Car, Cpu } from 'lucide-react';

export default function DashboardPage() {
  const { isDark } = useTheme();
  const { user, logout } = useAuth();

  // --- NUEVO: Estado para almacenar las detecciones de la cámara de Python ---
  const [historial, setHistorial] = useState<any[]>([]);

  // --- NUEVO: Conexión en tiempo real con el backend de Python ---
  useEffect(() => {
    const consultarPython = async () => {
      try {
        const respuesta = await fetch('http://localhost:5000/api/detecciones');
        const datos = await respuesta.json();
        setHistorial(datos);
      } catch (error) {
        console.error("Error al conectar con la IA:", error);
      }
    };

    consultarPython();
    const intervalo = setInterval(consultarPython, 1000); // Consulta cada 1 segundo

    return () => clearInterval(intervalo);
  }, []);

  // Extraemos la última detección para la tarjeta principal
  const ultimaDeteccion = historial[0];

  // Modificamos las estadísticas dinámicamente según lo que detecte la cámara
// Modificamos las estadísticas dinámicamente asegurando que existan datos antes de leerlos
  const stats = [
    { label: 'Camaras activas', value: '1', icon: Monitor },
    { label: 'Detecciones hoy', value: historial.length.toString(), icon: Activity },
    { label: 'Vehículos registrados', value: historial.length.toString(), icon: Car },
    { 
      label: 'Precisión promedio', 
      // Si existe ultimaDeteccion, muestra su precisión; si no, muestra un guion '--'
      value: ultimaDeteccion ? `${ultimaDeteccion.precision_ocr}%` : '--', 
      icon: Cpu 
    },
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

        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`rounded-xl p-5 border transition-all duration-300 ${
                isDark ? 'bg-surface-raised border-surface-border' : 'bg-white border-slate-200'
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

        {/* --- NUEVO CONTENEDOR: Panel LPR integrado con Python --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          
          {/* Tarjeta de la última foto capturada */}
          <div className={`rounded-xl p-6 border ${isDark ? 'bg-surface-raised border-surface-border' : 'bg-white border-slate-200'}`}>
            <h2 className={`text-base font-medium mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Última Detección</h2>
            
            {ultimaDeteccion ? (
              <div className="space-y-4">
                <img src={ultimaDeteccion.foto} alt="Frame YOLO" className="w-full h-auto rounded-lg border border-slate-700" />
                <div className="p-3 text-center rounded-lg border border-dashed border-accent-light bg-accent/5">
                  <span className={`text-2xl font-mono font-bold tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {ultimaDeteccion.placa}
                  </span>
                </div>
                <div className={`text-xs space-y-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <p><strong>Hora:</strong> {ultimaDeteccion.hora}</p>
                  <p><strong>Precisión OCR:</strong> {ultimaDeteccion.precision_ocr}%</p>
                  <p><strong>Confianza YOLO:</strong> {ultimaDeteccion.precision_yolo}%</p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500 italic text-center py-12">Esperando vehículos en cámara...</p>
            )}
          </div>

          {/* Tabla con el historial de registros */}
          <div className={`rounded-xl p-6 border lg:col-span-2 ${isDark ? 'bg-surface-raised border-surface-border' : 'bg-white border-slate-200'}`}>
            <h2 className={`text-base font-medium mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Historial de Tránsito</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className={`border-b ${isDark ? 'border-surface-border text-slate-500' : 'border-slate-100 text-slate-400'} text-xs uppercase`}>
                    <th className="pb-3 pl-2">ID</th>
                    <th className="pb-3">Hora</th>
                    <th className="pb-3">Matrícula</th>
                    <th className="pb-3 text-right pr-2">Precisión OCR</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isDark ? 'divide-surface-border text-slate-300' : 'divide-slate-100 text-slate-700'}`}>
                  {historial.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/5">
                      <td className="py-3.5 pl-2 font-medium">#{item.id}</td>
                      <td className="py-3.5">{item.hora}</td>
                      <td className="py-3.5 font-mono font-bold text-accent-light text-base tracking-wider">{item.placa}</td>
                      <td className="py-3.5 text-right pr-2 text-green-500 font-medium">{item.precision_ocr}%</td>
                    </tr>
                  ))}
                  {historial.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center py-12 text-slate-500 italic">No hay registros hoy.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}