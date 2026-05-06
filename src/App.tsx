import { useEffect, useRef, useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTheme, ThemeProvider } from './ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import {
  ScanLine,
  Zap,
  Car,
  Building2,
  MapPin,
  Truck,
  ChevronRight,
  Activity,
  Cpu,
  Radio,
  Monitor,
  Check,
  Github,
  Mail,
  Instagram,
  Facebook,
  Sun,
  Moon,
  Type,
  Code,
  Camera,
  Database,
  FileText,
  Network,
} from 'lucide-react';

function VisionGLogo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const { isDark } = useTheme();
  const dim = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8';
  const textColor = isDark ? 'text-accent-light' : 'text-slate-800';

  return (
    <ScanLine className={`${dim} ${textColor}`} />
  );
}

function AccessibilityIcon({ className }: { className?: string }) {
  const { isDark } = useTheme();
  const color = isDark ? 'currentColor' : '#1e293b';

  return (
    <svg
      viewBox="0 0 200 260"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      {/* Head */}
      <circle cx="100" cy="35" r="25" />
      {/* Body and Arms */}
      <path d="M 60 80 Q 60 60 100 70 Q 140 60 140 80" />
      <path d="M 50 85 L 100 120" />
      <path d="M 150 85 L 100 120" />
      {/* Legs */}
      <path d="M 85 120 L 75 200 Q 70 230 85 235" />
      <path d="M 115 120 L 125 200 Q 130 230 115 235" />
    </svg>
  );
}

function BrandName({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const { isDark } = useTheme();
  const textSize = size === 'sm' ? 'text-sm' : 'text-lg';
  return (
    <span className={`${textSize} font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
      Vision<span className="text-accent-light">G</span>
      <span className={`${isDark ? 'text-slate-500' : 'text-slate-400'} font-medium ml-1.5`}>LPR</span>
    </span>
  );
}

function Navbar() {
  const { isDark } = useTheme();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl ${isDark ? 'bg-[#0f1117]/80' : 'bg-white/80'}`}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <VisionGLogo />
          <BrandName />
        </a>
        <div className={`hidden md:flex items-center gap-8 text-sm ${isDark ? 'text-slate-500' : 'text-slate-700'}`}>
          <a href="#technology" className={`${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'} transition-colors`}>Tecnologia</a>
          <a href="#use-cases" className={`${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'} transition-colors`}>Soluciones</a>
          <a href="#pricing" className={`${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'} transition-colors`}>Precios</a>
          <a href="#contact" className={`${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'} transition-colors`}>Contacto</a>
        </div>
        <Link to="/login" className="btn-primary !px-5 !py-2 text-sm inline-flex items-center">
          Comenzar Ahora
        </Link>
      </div>
    </nav>
  );
}

function CameraPanel() {
  const { isDark } = useTheme();
  const [activePlate, setActivePlate] = useState(0);
  const plates = ['ABC-1234', 'XYZ-5678', 'DEF-9012'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlate((prev) => (prev + 1) % plates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto animate-float">
      <div className={`surface-card rounded-2xl overflow-hidden ${isDark ? 'bg-surface-raised' : 'bg-white'}`}>
        <div className={`flex items-center justify-between px-4 py-3 border-b ${isDark ? 'border-surface-border bg-surface-overlay' : 'border-slate-200 bg-slate-50'}`}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className={`text-[11px] font-mono uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>En Vivo</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-accent-light animate-pulse" />
            <span className="text-[11px] font-mono text-accent-light">Deteccion Activa</span>
          </div>
        </div>

        <div className={`relative aspect-[4/3] overflow-hidden ${isDark ? 'bg-surface' : 'bg-slate-100'}`}>
          <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern' : 'bg-grid-pattern-light'} bg-grid ${isDark ? 'opacity-[0.13]' : 'opacity-[0.15]'}`} />
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-scan-line" />

          <div className={`absolute top-5 left-5 w-6 h-6 border-t border-l ${isDark ? 'border-slate-700' : 'border-slate-400'}`} />
          <div className={`absolute top-5 right-5 w-6 h-6 border-t border-r ${isDark ? 'border-slate-700' : 'border-slate-400'}`} />
          <div className={`absolute bottom-5 left-5 w-6 h-6 border-b border-l ${isDark ? 'border-slate-700' : 'border-slate-400'}`} />
          <div className={`absolute bottom-5 right-5 w-6 h-6 border-b border-r ${isDark ? 'border-slate-700' : 'border-slate-400'}`} />

          <div className="absolute inset-0 flex items-center justify-center">
            <Car className={`w-28 h-28 ${isDark ? 'text-white/[0.03]' : 'text-slate-900/[0.04]'}`} />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-14 border border-accent/50 rounded bg-accent/[0.03]">
            <div className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-accent" />
            <div className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-accent" />
            <div className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-accent" />
            <div className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-accent" />
          </div>

          {[
            { top: '30%', left: '25%', delay: '0s' },
            { top: '45%', left: '70%', delay: '0.5s' },
            { top: '60%', left: '35%', delay: '1s' },
            { top: '35%', left: '65%', delay: '1.5s' },
            { top: '55%', left: '45%', delay: '0.8s' },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent/60 animate-dot-pulse"
              style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
            />
          ))}

          <div className={`absolute bottom-3 left-3 text-[10px] font-mono ${isDark ? 'text-slate-600' : 'text-slate-500'}`}>
            CAM-01 | 2026-05-01 | 14:32:0{activePlate}
          </div>

          <div className={`absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 border ${isDark ? 'bg-black/50 border-surface-border' : 'bg-white/70 border-slate-200'}`}>
            <Cpu className="w-3 h-3 text-accent-light" />
            <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>AI 99.8%</span>
          </div>
        </div>

        <div className={`px-4 py-3.5 border-t ${isDark ? 'border-surface-border bg-surface-overlay' : 'border-slate-200 bg-slate-50'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <ScanLine className="w-4 h-4 text-accent-light" />
              </div>
              <div>
                <p className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Matricula Detectada</p>
                <p className={`text-lg font-mono font-semibold tracking-widest transition-all duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {plates[activePlate]}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-emerald-500 font-mono">Verificado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const { isDark } = useTheme();

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern' : 'bg-grid-pattern-light'} bg-grid ${isDark ? 'opacity-[0.15]' : 'opacity-[0.10]'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(99,102,241,0.02)_0%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-[calc(100vh-6rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          <div className="space-y-8">
            <div className="opacity-0-init animate-fade-in-up">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${isDark ? 'border-surface-border bg-surface-raised' : 'border-slate-200 bg-white'}`}>
                <Activity className="w-3.5 h-3.5 text-accent-light" />
                <span className={`text-[11px] font-mono tracking-wide uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Sistema Activo
                </span>
              </div>
            </div>

            <h1 className="opacity-0-init animate-fade-in-up">
              <span className={`block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.2] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Acceso vehicular
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.2] text-accent-light mt-2">
                inteligente
              </span>
            </h1>

            <p className={`opacity-0-init animate-fade-in-up-delay text-base sm:text-lg font-light max-w-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Automatizacion total y reconocimiento de matriculas en tiempo real con{' '}
              <span className={`font-normal ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>99.8% de precision</span>.
            </p>

            <div className="opacity-0-init animate-fade-in-up-delay2 flex flex-wrap gap-4 pt-2">
              <Link to="/login" className="flex items-center gap-2 group px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-slate-100 transition-all duration-300 shadow-sm">
                Ver Demostracion
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <button className="btn-secondary">
                Saber mas
              </button>
            </div>

            <div className={`opacity-0-init animate-fade-in-up-delay2 pt-6 flex items-center gap-6 text-sm ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              <div className="flex items-center gap-2">
                <Zap className={`w-4 h-4 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                <span>Encriptacion E2E</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className={`w-4 h-4 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                <span>Latencia &lt;100ms</span>
              </div>
            </div>
          </div>

          <div className="opacity-0-init animate-fade-in-up-delay">
            <CameraPanel />
          </div>
        </div>
      </div>
    </section>
  );
}


function FlowConnector({ direction = 'right' }: { direction?: 'right' | 'down' }) {
  const isHorizontal = direction === 'right';

  return (
    <div className={`relative flex items-center justify-center ${isHorizontal ? 'w-16 sm:w-20 lg:w-28 self-center' : 'h-12 self-center'}`}>
      {/* Base line */}
      <div
        className={`absolute ${isHorizontal ? 'inset-x-0 top-1/2 h-px' : 'inset-y-0 left-1/2 w-px'}`}
        style={{ backgroundColor: 'rgba(52, 211, 153, 0.25)' }}
      />
      {/* Traveling dot */}
      <div
        className={`flow-travel-dot absolute w-2 h-2 rounded-full ${isHorizontal ? '' : 'flow-travel-dot-vertical'}`}
        style={{
          backgroundColor: '#34d399',
          boxShadow: '0 0 8px rgba(52, 211, 153, 0.6), 0 0 16px rgba(52, 211, 153, 0.3)',
          ...(isHorizontal
            ? { top: 'calc(50% - 4px)', left: 0 }
            : { left: 'calc(50% - 4px)', top: 0 }),
          animationDelay: '0s',
        }}
      />
      <div
        className={`flow-travel-dot absolute w-1.5 h-1.5 rounded-full ${isHorizontal ? '' : 'flow-travel-dot-vertical'}`}
        style={{
          backgroundColor: '#34d399',
          boxShadow: '0 0 6px rgba(52, 211, 153, 0.5)',
          ...(isHorizontal
            ? { top: 'calc(50% - 3px)', left: 0 }
            : { left: 'calc(50% - 3px)', top: 0 }),
          animationDelay: '1s',
        }}
      />
    </div>
  );
}

function FlowNode({
  icon: Icon,
  step,
  title,
  techLabel,
  description,
  isDark,
  delay,
  isVisible,
  minorIcons,
  offsetY,
}: {
  icon: React.ComponentType<{ className?: string }>;
  step: string;
  title: string;
  techLabel: string;
  description: string;
  isDark: boolean;
  delay: number;
  isVisible: boolean;
  minorIcons?: { label: string; color: string }[];
  offsetY: number;
}) {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms`, transform: isVisible ? `translateY(${offsetY}px)` : `translateY(${offsetY + 32}px)` }}
    >
      {/* Floating minor tech icons */}
      {minorIcons?.map((minor, i) => (
        <div
          key={i}
          className="float-minor-icon absolute z-0"
          style={{
            animationDelay: `${i * 1.2}s`,
            ...(i === 0 ? { top: '-10px', right: '-6px' } : { bottom: '-8px', left: '-4px' }),
          }}
        >
          <div
            className={`w-6 h-6 rounded flex items-center justify-center text-[8px] font-mono font-bold border ${
              isDark ? 'bg-[#0f1117]/90 border-[#1e1e2a]' : 'bg-white/90 border-slate-200'
            }`}
            style={{ color: minor.color }}
          >
            {minor.label}
          </div>
        </div>
      ))}

      {/* Node: circle icon + text below */}
      <div className="flex flex-col items-center text-center">
        {/* Icon circle with green border and orange glow */}
        <div
          className="node-orange-glow w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{
            border: '2px solid #34d399',
            backgroundColor: isDark ? 'rgba(15, 17, 23, 0.8)' : 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Icon className="w-7 h-7 text-emerald-400" />
        </div>

        {/* Step label */}
        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          {step}
        </span>

        {/* Title */}
        <h3 className={`text-sm font-semibold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h3>

        {/* Tech label as code tag */}
        <span
          className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-medium mb-3"
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace",
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            color: '#34d399',
            border: '1px solid rgba(52, 211, 153, 0.2)',
          }}
        >
          {techLabel}
        </span>

        {/* Description */}
        <p className={`text-xs leading-relaxed font-light max-w-[180px] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

function TechnologySection() {
  const { isDark } = useTheme();

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const nodes = [
    {
      icon: Camera,
      step: 'Paso 01',
      title: 'Captura & Pre-procesamiento',
      techLabel: 'Python/OpenCV',
      description: 'Adquisicion de video en tiempo real y optimizacion de imagen con Python.',
      minorIcons: [
        { label: 'Py', color: '#3b82f6' },
        { label: 'CV', color: '#22c55e' },
      ],
      offsetY: 0,
    },
    {
      icon: Network,
      step: 'Paso 02',
      title: 'Motor de Inferencia',
      techLabel: 'YOLO',
      description: 'Deteccion rapida y localizacion de matriculas mediante modelos YOLO.',
      minorIcons: [
        { label: 'PT', color: '#eab308' },
        { label: 'ON', color: '#06b6d4' },
      ],
      offsetY: 24,
    },
    {
      icon: FileText,
      step: 'Paso 03',
      title: 'Extraccion de Datos',
      techLabel: 'OCR',
      description: 'Reconocimiento Optico de Caracteres para digitalizar el texto de la matricula.',
      minorIcons: [
        { label: 'TSS', color: '#f97316' },
        { label: 'EZ', color: '#a855f7' },
      ],
      offsetY: -8,
    },
    {
      icon: Database,
      step: 'Paso 04',
      title: 'Almacenamiento & Analitica',
      techLabel: 'DB',
      description: 'Generacion de ID unico y guardado de metadatos (Fecha, Ubicacion, Placa). Base para estadisticas.',
      minorIcons: [
        { label: 'SB', color: '#10b981' },
        { label: 'PG', color: '#3b82f6' },
      ],
      offsetY: 16,
    },
  ];

  return (
    <section id="technology" ref={ref} className="relative py-24 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern' : 'bg-grid-pattern-light'} bg-grid ${isDark ? 'opacity-[0.12]' : 'opacity-[0.08]'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight transition-all duration-700 ${
              isDark ? 'text-white' : 'text-slate-900'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Motor <span className="text-accent-light">inteligente</span> de deteccion
          </h2>
          <p
            className={`mt-4 text-base max-w-2xl mx-auto font-light transition-all duration-700 delay-200 ${
              isDark ? 'text-slate-500' : 'text-slate-600'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Flujo de datos en tiempo real — desde la captura hasta el almacenamiento
          </p>
        </div>

        {/* Flow Diagram - Zig-zag layout */}
        {/* Desktop: horizontal zig-zag */}
        <div className="hidden lg:flex items-start justify-center">
          {nodes.map((node, i) => (
            <div key={i} className="flex items-start">
              <FlowNode
                {...node}
                isDark={isDark}
                delay={300 + i * 200}
                isVisible={isVisible}
              />
              {i < nodes.length - 1 && <FlowConnector direction="right" />}
            </div>
          ))}
        </div>

        {/* Tablet: 2x2 grid with connectors */}
        <div className="hidden sm:flex lg:hidden flex-wrap justify-center items-start gap-y-8">
          <div className="flex items-start w-full justify-center">
            <FlowNode {...nodes[0]} isDark={isDark} delay={300} isVisible={isVisible} />
            <FlowConnector direction="right" />
            <div style={{ marginTop: '24px' }}>
              <FlowNode {...nodes[1]} isDark={isDark} delay={500} isVisible={isVisible} />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <FlowConnector direction="down" />
          </div>
          <div className="flex items-start w-full justify-center">
            <FlowNode {...nodes[2]} isDark={isDark} delay={700} isVisible={isVisible} />
            <FlowConnector direction="right" />
            <div style={{ marginTop: '16px' }}>
              <FlowNode {...nodes[3]} isDark={isDark} delay={900} isVisible={isVisible} />
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex sm:hidden flex-col items-center">
          {nodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center">
              <FlowNode
                {...node}
                isDark={isDark}
                delay={300 + i * 200}
                isVisible={isVisible}
                offsetY={0}
              />
              {i < nodes.length - 1 && <FlowConnector direction="down" />}
            </div>
          ))}
        </div>

        {/* Floating support tech badges */}
        <div
          className={`mt-20 flex flex-wrap items-center justify-center gap-2.5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          {['React', 'Tailwind', 'Supabase', 'Docker', 'FastAPI', 'Redis'].map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded text-[10px] font-mono tracking-wide border ${
                isDark
                  ? 'bg-[#0f1117]/60 border-[#1e1e2a] text-slate-600'
                  : 'bg-white/60 border-slate-200 text-slate-400'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const { isDark } = useTheme();
  const useCases = [
    {
      icon: Building2,
      title: 'Estacionamientos',
      description:
        'Acceso automatico sin tickets ni tarjetas. La matricula es la llave. Reduce costos operativos y elimina colas.',
      features: ['Acceso sin contacto', 'Facturacion automatica', 'Reportes en tiempo real'],
      image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: MapPin,
      title: 'Barrios Cerrados',
      description:
        'Seguridad perimetral inteligente. Identifica vehiculos autorizados al instante y alerta sobre accesos no permitidos.',
      features: ['Lista blanca automatica', 'Alertas de intrusos', 'Registro de visitas'],
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Truck,
      title: 'Control de Flotas',
      description:
        'Monitoreo completo de vehiculos empresariales. Rastreo de entrada y salida con datos precisos para logistica.',
      features: ['Tracking en tiempo real', 'Control de horarios', 'Auditoria completa'],
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="use-cases" ref={ref} className="relative py-24">
      <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern' : 'bg-grid-pattern-light'} bg-grid ${isDark ? 'opacity-[0.12]' : 'opacity-[0.08]'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.01)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight transition-all duration-700 ${
              isDark ? 'text-white' : 'text-slate-900'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-accent-light">Soluciones</span> para cada escenario
          </h2>
          <p
            className={`mt-4 text-base max-w-2xl mx-auto font-light transition-all duration-700 delay-200 ${
              isDark ? 'text-slate-500' : 'text-slate-600'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Adaptado a cada escenario de seguridad vehicular
          </p>
        </div>

        {/* Floating Dashboard Card */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="max-w-4xl mx-auto">
            <div
              className={`relative rounded-2xl overflow-hidden animate-float ${
                isDark ? 'border border-surface-border bg-surface-raised' : 'border border-slate-200 bg-white'
              }`}
              style={{
                boxShadow: isDark
                  ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03)'
                  : '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)',
              }}
            >
              <div className={`flex items-center justify-between px-5 py-3 border-b ${isDark ? 'border-surface-border bg-surface-overlay' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className={`w-3.5 h-3.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                    <span className={`text-[11px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>VisionG Dashboard</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-500/80">Conectado</span>
                </div>
              </div>

              <div className={`relative aspect-[16/8] flex items-center justify-center ${isDark ? 'bg-surface' : 'bg-slate-50'}`}>
                <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern' : 'bg-grid-pattern-light'} bg-grid ${isDark ? 'opacity-[0.06]' : 'opacity-[0.08]'}`} />
                <div className="relative z-10 text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent/8 border border-accent/15 flex items-center justify-center mx-auto">
                    <Monitor className="w-7 h-7 text-accent-light/40" />
                  </div>
                  <p className={`text-sm font-light ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Vista previa del dashboard</p>
                </div>
                <div className={`absolute left-4 top-4 bottom-4 w-1 rounded-full ${isDark ? 'bg-surface-border' : 'bg-slate-200'}`} />
                <div className={`absolute right-4 top-4 bottom-4 w-1 rounded-full ${isDark ? 'bg-surface-border' : 'bg-slate-200'}`} />
              </div>
            </div>

            <div className={`mx-8 h-2 rounded-b-xl blur-sm ${isDark ? 'bg-surface-raised/30' : 'bg-slate-200/30'}`} />
            <div className={`mx-16 h-1.5 rounded-b-xl blur-md ${isDark ? 'bg-surface-raised/15' : 'bg-slate-200/15'}`} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className={`surface-card-hover rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + i * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${isDark ? 'opacity-30' : 'opacity-50'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-surface-raised via-surface-raised/80 to-transparent' : 'from-white via-white/80 to-transparent'}`} />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <useCase.icon className="w-4 h-4 text-accent-light" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className={`text-lg font-semibold group-hover:text-accent-light transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {useCase.title}
                </h3>
                <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  {useCase.description}
                </p>
                <ul className="space-y-2.5 pt-1">
                  {useCase.features.map((feature, j) => (
                    <li key={j} className={`flex items-center gap-2.5 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <div className="w-1 h-1 rounded-full bg-accent/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.01)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`rounded-2xl p-12 sm:p-16 backdrop-blur-xl border transition-all duration-300 ${
          isDark
            ? 'bg-zinc-900/40 border-white/10'
            : 'bg-white/10 border-white/20 bg-grid-pattern-light bg-grid'
        }`}>
          <h2 className={`text-3xl sm:text-4xl font-medium tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Transforma tu <span className="text-accent-light">seguridad vehicular</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto font-light ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
            Implementa VisionG en tu infraestructura y experimenta el futuro del control de acceso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/login" className="btn-primary flex items-center gap-2 group">
              Comenzar Ahora
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button className="btn-secondary">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const { isDark } = useTheme();
  const plans = [
    {
      id: 'free',
      name: 'Starter',
      price: 'Gratis',
      period: '',
      description: 'Para comenzar a explorar el reconocimiento de matriculas.',
      features: [
        '1 camara conectada',
        '50 reconocimientos / dia',
        'Dashboard basico',
        'Soporte por email',
      ],
      cta: 'Comenzar gratis',
      highlighted: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$49',
      period: '/mes',
      description: 'Para negocios que necesitan control de acceso completo.',
      features: [
        'Hasta 10 camaras',
        'Reconocimientos ilimitados',
        'Dashboard avanzado',
        'API completa',
        'Soporte prioritario',
      ],
      cta: 'Comenzar prueba',
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$149',
      period: '/mes',
      description: 'Para operaciones a gran escala con necesidades avanzadas.',
      features: [
        'Camaras ilimitadas',
        'Reconocimientos ilimitados',
        'Dashboard personalizable',
        'API + Webhooks',
        'Soporte dedicado 24/7',
        'SLA garantizado',
      ],
      cta: 'Contactar ventas',
      highlighted: false,
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref} className="relative py-24">
      <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern' : 'bg-grid-pattern-light'} bg-grid ${isDark ? 'opacity-[0.12]' : 'opacity-[0.08]'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.01)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight transition-all duration-700 ${
              isDark ? 'text-white' : 'text-slate-900'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Planes que <span className="text-accent-light">escalan</span> contigo
          </h2>
          <p
            className={`mt-4 text-base max-w-2xl mx-auto font-light transition-all duration-700 delay-200 ${
              isDark ? 'text-slate-500' : 'text-slate-600'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Sin compromisos. Comienza gratis y crece cuando lo necesites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden transition-all duration-700 flex flex-col backdrop-blur-xl ${
                plan.highlighted
                  ? isDark
                    ? 'border border-accent/40 bg-zinc-900/50 shadow-[0_0_40px_rgba(99,102,241,0.12)]'
                    : 'border border-white/30 bg-white/15 shadow-[0_0_40px_rgba(99,102,241,0.08)] bg-grid-pattern-light bg-grid'
                  : isDark
                    ? 'border border-white/10 bg-zinc-900/40'
                    : 'border border-white/20 bg-white/10 bg-grid-pattern-light bg-grid'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-light to-transparent" />
              )}

              <div className="p-8 flex flex-col flex-1">
                {plan.highlighted && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4 self-start">
                    <span className="text-[10px] font-mono text-accent-light uppercase tracking-wider">Popular</span>
                  </div>
                )}

                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm font-light ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{plan.period}</span>
                  )}
                </div>
                <p className={`mt-3 text-sm font-light leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                <div className={`mt-6 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-surface-border' : 'via-slate-200'} to-transparent`} />

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={`flex items-center gap-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <Check className={`w-4 h-4 shrink-0 ${plan.highlighted ? 'text-accent-light' : isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/register?plan=${plan.id}`}
                  className={`mt-8 w-full py-3 rounded-lg font-medium text-sm transition-all duration-300 block text-center ${
                    plan.highlighted
                      ? 'btn-primary !w-full'
                      : isDark
                        ? 'border border-surface-border text-slate-300 hover:border-slate-500 hover:text-white'
                        : 'border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { isDark } = useTheme();
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contacto@visiong.com', label: 'Gmail' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="py-12">
      <div className="relative h-px mb-12">
        <div className={`absolute inset-x-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-surface-border/40' : 'via-slate-200/60'} to-transparent`} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <div className="flex items-center gap-2">
              <VisionGLogo size="sm" />
              <BrandName size="sm" />
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? 'bg-surface-raised border border-surface-border text-slate-500 hover:text-accent-light hover:border-accent/20'
                      : 'bg-white border border-slate-200 text-slate-400 hover:text-accent-light hover:border-accent/20'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            &copy; 2026 VisionG. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function AccessibilityWidget() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [textScale, setTextScale] = useState(1);
  const [monoFont, setMonoFont] = useState(false);

  const toggleHighContrast = useCallback(() => {
    setHighContrast((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('high-contrast', next);
      return next;
    });
  }, []);

  const cycleTextScale = useCallback(() => {
    setTextScale((prev) => {
      const scales = [1, 1.15, 1.3];
      const nextIndex = (scales.indexOf(prev) + 1) % scales.length;
      const next = scales[nextIndex];
      document.documentElement.style.fontSize = `${next * 100}%`;
      return next;
    });
  }, []);

  const toggleMonoFont = useCallback(() => {
    setMonoFont((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('mono-font', next);
      return next;
    });
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {isOpen && (
        <div
          className={`surface-card rounded-xl p-4 min-w-[240px] animate-fade-in-up ${
            isDark ? 'bg-surface-raised border-surface-border' : 'bg-white border-slate-200'
          }`}
          style={{ boxShadow: isDark ? '0 12px 40px rgba(0,0,0,0.5)' : '0 12px 40px rgba(0,0,0,0.1)' }}
        >
          <p className={`text-[11px] font-mono uppercase tracking-wider mb-3 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Accesibilidad</p>

          <div className="space-y-2">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                !isDark
                  ? 'bg-accent/15 text-accent-light border border-accent/20'
                  : 'text-slate-400 hover:text-white hover:bg-surface-overlay border border-transparent'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 shrink-0" /> : <Moon className="w-4 h-4 shrink-0" />}
              <span>{isDark ? 'Modo claro' : 'Modo oscuro'}</span>
              {!isDark && <span className="ml-auto text-[10px] font-mono text-accent-light">ON</span>}
            </button>

            {/* High Contrast */}
            <button
              onClick={toggleHighContrast}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                highContrast
                  ? 'bg-accent/15 text-accent-light border border-accent/20'
                  : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-surface-overlay border border-transparent'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-transparent'
              }`}
            >
              <Sun className="w-4 h-4 shrink-0" />
              <span>Contraste alto</span>
              {highContrast && <span className="ml-auto text-[10px] font-mono text-accent-light">ON</span>}
            </button>

            {/* Text Scale */}
            <button
              onClick={cycleTextScale}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                textScale > 1
                  ? 'bg-accent/15 text-accent-light border border-accent/20'
                  : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-surface-overlay border border-transparent'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-transparent'
              }`}
            >
              <Type className="w-4 h-4 shrink-0" />
              <span>Escalar texto</span>
              {textScale > 1 && <span className="ml-auto text-[10px] font-mono text-accent-light">{Math.round(textScale * 100)}%</span>}
            </button>

            {/* Mono Font (Dyslexic mode) */}
            <button
              onClick={toggleMonoFont}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                monoFont
                  ? 'bg-accent/15 text-accent-light border border-accent/20'
                  : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-surface-overlay border border-transparent'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-transparent'
              }`}
            >
              <Code className="w-4 h-4 shrink-0" />
              <span>Mono fuente</span>
              {monoFont && <span className="ml-auto text-[10px] font-mono text-accent-light">ON</span>}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-accent text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]'
            : isDark
              ? 'bg-surface-raised border border-surface-border text-slate-400 hover:text-accent-light hover:border-accent/20 shadow-[0_4px_16px_rgba(0,0,0,0.4)]'
              : 'bg-white border border-slate-200 text-slate-500 hover:text-accent-light hover:border-accent/20 shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
        }`}
        aria-label="Opciones de accesibilidad"
      >
        <AccessibilityIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

function LandingPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0f1117]' : 'bg-[#F8FAFC]'}`}>
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <UseCasesSection />
      <CTASection />
      <PricingSection />
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
