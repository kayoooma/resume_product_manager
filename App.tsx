import React, { useState, useEffect, useRef, useMemo } from 'react';
import { flushSync } from 'react-dom';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useVelocity, 
  useAnimationFrame, 
  wrap,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence
} from 'framer-motion';
import { 
  Sun, Moon, Globe, ArrowRight, Download, Mail, Linkedin, 
  Check, Sparkles, Target, Zap, Send, AlertCircle, ArrowUp,
  Plus, BookOpen, TrendingUp, TrendingDown, Terminal, Code,
  Music, ZapOff, Activity, Crosshair, Cpu, HardDrive
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import { Language } from './types';

// --- CONFIGURATION ---
const CV_FILE_NAME = "Султонов Комил Гайратович - Product manager.pdf";

// --- MICRO-INTERACTION COMPONENTS ---

// 1. Magnetic Button Effect
const Magnetic = ({ children }: { children?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const position = { x: useMotionValue(0), y: useMotionValue(0) };

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    position.x.set(middleX * 0.2);
    position.y.set(middleY * 0.2);
  };

  const reset = () => {
    position.x.set(0);
    position.y.set(0);
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ x, y }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block will-change-transform"
    >
      {children}
    </motion.div>
  );
};

// 2. HyperText / Cipher Effect
const HyperText = ({ text, className = "" }: { text: string, className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const trigger = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseEnter={trigger} className={`inline-block cursor-default ${className}`}>
      {displayText}
    </span>
  );
}

// 3. CINEMATIC MODE ("Premium Studio" / Konami Code)
const CinematicOverlay = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden will-change-[opacity]"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]/40 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      <motion.div 
        animate={{ x: ["-100%", "100%"], opacity: [0, 0.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-[30%] left-0 w-[50%] h-[2px] bg-blue-500/30 blur-[4px] mix-blend-screen will-change-transform"
      />
      <motion.div 
        animate={{ x: ["100%", "-100%"], opacity: [0, 0.3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 0 }}
        className="absolute bottom-[40%] right-0 w-[70%] h-[1px] bg-purple-500/20 blur-[2px] mix-blend-screen will-change-transform"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
      
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "12vh" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 bg-black z-50 flex items-end justify-center pb-4"
      >
        <div className="text-[10px] text-white/20 font-mono tracking-[0.3em] uppercase opacity-50">K.S // 2026 // STUDIOS</div>
      </motion.div>
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "12vh" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 bg-black z-50 flex items-start justify-center pt-4"
      >
        <div className="flex items-center gap-4 text-[10px] text-white/20 font-mono">
           <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/> REC</span>
           <span>00:04:20:11</span>
           <span>ISO 800</span>
           <span>4K RAW</span>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{__html: `
        html {
          filter: contrast(1.1) brightness(1.05) saturate(1.1);
        }
        body::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          background: linear-gradient(to right, rgba(255,0,0,0.02), rgba(0,255,0,0.02), rgba(0,0,255,0.02));
          mix-blend-mode: color-dodge;
        }
        h1, h2, .font-display {
          text-shadow: 2px 0 2px rgba(255,0,0,0.2), -2px 0 2px rgba(0,255,255,0.2);
        }
      `}} />
    </motion.div>
  )
}

// 4. TACTICAL HUD SYSTEM
const SystemHUD = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let frameId: number;
    const handleMove = (e: MouseEvent) => {
       cancelAnimationFrame(frameId);
       frameId = requestAnimationFrame(() => {
         setCoords({ x: e.clientX, y: e.clientY });
       });
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] text-[#00ffcc] font-mono select-none">
       <style dangerouslySetInnerHTML={{__html: `
         * {
           font-family: 'JetBrains Mono', 'Courier New', monospace !important;
           border-radius: 0 !important;
           cursor: crosshair !important;
         }
         body {
           background-color: #050505 !important;
         }
         .glass-panel, .card, button, a {
           border: 1px solid rgba(0, 255, 204, 0.3) !important;
           background: rgba(0, 20, 20, 0.8) !important;
           box-shadow: none !important;
           color: #00ffcc !important;
         }
         h1, h2, h3, p, span {
            color: #00ffcc !important;
         }
         img {
           filter: grayscale(100%) sepia(100%) hue-rotate(120deg) saturate(2) brightness(0.8) !important;
         }
       `}} />

       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
       
       <div className="absolute top-8 left-8 border-t-2 border-l-2 border-[#00ffcc] w-16 h-16" />
       <div className="absolute top-8 right-8 border-t-2 border-r-2 border-[#00ffcc] w-16 h-16" />
       <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-[#00ffcc] w-16 h-16" />
       <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-[#00ffcc] w-16 h-16" />

       <div className="absolute top-10 right-12 text-xs text-right leading-tight opacity-70">
          <div>SYS.ODIN.VER.2.0</div>
          <div>MEM: 64 TB</div>
          <div>UPTIME: 99.999%</div>
          <div className="mt-2 text-[#00ffcc] font-bold animate-pulse">● LIVE FEED</div>
       </div>

       <div className="absolute bottom-10 left-12 text-xs leading-tight opacity-70">
          <div>COORDS: X:{coords.x} Y:{coords.y}</div>
          <div>TARGET: NULL</div>
          <div>SECURE_CONNECTION: TRUE</div>
       </div>

       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <Crosshair size={400} strokeWidth={0.5} />
       </div>
       
       <motion.div 
         animate={{ top: ["0%", "100%"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         className="absolute left-0 right-0 h-[2px] bg-[#00ffcc]/30 shadow-[0_0_20px_rgba(0,255,204,0.5)] will-change-[top]"
       />
    </div>
  )
}

// --- STUDIO PRELOADER ---
const StudioPreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 20;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, intervalTime);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration + 800);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col justify-between p-6 md:p-12 text-white overflow-hidden will-change-transform"
    >
      <div className="flex justify-between items-start">
        <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           transition={{ delay: 0.2 }}
           className="text-xs md:text-sm font-mono tracking-widest uppercase opacity-50"
        >
           Portfolio 2025
        </motion.div>
        <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           transition={{ delay: 0.2 }}
           className="text-xs md:text-sm font-mono tracking-widest uppercase opacity-50 text-right hidden md:block"
        >
           Tashkent, UZ
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
         <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-display font-bold text-[15vw] md:text-[12vw] leading-none tracking-tighter tabular-nums"
         >
            {count}%
         </motion.div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col">
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="text-xl md:text-3xl font-display font-bold"
           >
             Komil Sultonov
           </motion.div>
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="text-sm text-gray-400 font-mono"
           >
             Product Manager
           </motion.div>
        </div>
        
        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
           <motion.div 
             className="h-full bg-white"
             initial={{ width: 0 }}
             animate={{ width: `${count}%` }}
             style={{ willChange: "width" }}
           />
        </div>
      </div>
    </motion.div>
  );
};

// --- SUB-COMPONENTS ---

// Spotlight Effect Component (Optimized & Updated)
const SpotlightCard = ({ children, className = "", noBorder = false }: { children?: React.ReactNode, className?: string, noBorder?: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className={`group relative overflow-hidden ${noBorder ? '' : 'border border-gray-200 dark:border-white/10'} ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={`pointer-events-none absolute opacity-0 transition duration-300 group-hover:opacity-100 will-change-[opacity] ${noBorder ? 'inset-0' : '-inset-px rounded-xl'}`}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

// Mini Chart Component for Experience
const MiniChart = ({ data, color = "#3b82f6" }: { data: number[], color?: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-24 h-12 md:w-32 md:h-16 relative">
       <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            d={`M 0,100 ${points.split(' ').map(p => `L ${p}`).join(' ')} L 100,100 Z`}
            fill={color}
            stroke="none"
          />
          <motion.path 
             initial={{ pathLength: 0 }}
             whileInView={{ pathLength: 1 }}
             transition={{ duration: 2, ease: "easeInOut" }}
             d={`M ${points.split(' ')[0]} L ${points.split(' ').slice(1).join(' L ')}`}
             fill="none"
             stroke={color}
             strokeWidth="3"
             strokeLinecap="round"
             strokeLinejoin="round"
             vectorEffect="non-scaling-stroke"
          />
       </svg>
    </div>
  )
}

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frameId: number;
    const updateMousePosition = (e: MouseEvent) => {
       cancelAnimationFrame(frameId);
       frameId = requestAnimationFrame(() => {
         setMousePosition({ x: e.clientX, y: e.clientY });
         const target = e.target as HTMLElement;
         setHovering(
           target.tagName === 'BUTTON' || 
           target.tagName === 'A' || 
           target.closest('button') !== null || 
           target.closest('a') !== null ||
           target.classList.contains('interactive')
         );
       });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[9999] hidden md:block mix-blend-difference will-change-transform"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: hovering ? 4 : 1,
        opacity: hovering ? 0.5 : 1
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.1 }}
    />
  );
};

// --- DYNAMIC BACKGROUND (УСИЛЕННЫЙ) ---
const DynamicBackground = () => {
  const { scrollYProgress } = useScroll();
  const hueRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // Увеличили амплитуду движения
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  // Усилили изменение прозрачности
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 0.9, 0.9, 0.2]);
  // Добавили масштабирование
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div 
        style={{ 
          filter: useTransform(hueRotate, (h) => `hue-rotate(${h}deg) blur(100px)`),
          opacity
        }}
        className="absolute inset-0"
      >
        <motion.div 
          style={{ y: y1, scale: scale1 }} 
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-500/20 dark:bg-blue-600/10 mix-blend-multiply dark:mix-blend-screen" 
        />
        <motion.div 
          style={{ y: y2, scale: scale2 }} 
          className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-purple-500/20 dark:bg-purple-600/10 mix-blend-multiply dark:mix-blend-screen" 
        />
      </motion.div>
    </div>
  );
};

// --- MARQUEE (ОПТИМИЗИРОВАННЫЙ) ---
interface ParallaxProps {
  children?: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 }); 
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.5], { clamp: false });
  
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  // Оптимизация: понижаем частоту кадров на мобильных
  const lastTime = useRef(0);
  const isMobile = useRef(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const targetFps = isMobile.current ? 30 : 60;
  const minFrameTime = 1000 / targetFps;

  useAnimationFrame((t, delta) => {
    const now = performance.now();
    if (now - lastTime.current < minFrameTime) return;
    lastTime.current = now;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div 
        className="font-display font-bold uppercase text-6xl md:text-9xl flex whitespace-nowrap items-center text-slate-900 dark:text-white will-change-transform"
        style={{ x, backfaceVisibility: "hidden" }}
      >
        {[...Array(4)].map((_, i) => <div key={i} className="flex items-center flex-nowrap shrink-0">{children}</div>)}
      </motion.div>
    </div>
  );
}

// --- HERO HELPERS ---
const LetterStagger = ({ text, className, delay = 0, gradient = false }: { text: string, className?: string, delay?: number, gradient?: boolean }) => {
  return (
    <motion.div 
      className={`flex overflow-hidden ${className}`}
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
        hidden: {}
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: "110%", opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
          }}
          className={`inline-block ${gradient ? 'bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 dark:from-gray-400 dark:via-gray-200 dark:to-gray-400 bg-[200%_auto] bg-clip-text text-transparent animate-text-shimmer' : ''}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

// --- HERO SECTION ---
const Hero = ({ content, loading }: { content: any, loading: boolean }) => {
  const startAnim = !loading ? "visible" : "hidden";

  return (
    <div className="min-h-screen relative z-10 flex items-center pt-20 pb-10 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={!loading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-24 left-6 hidden md:block"
      >
         <Plus className="text-gray-300 dark:text-gray-700 w-6 h-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <motion.div 
          className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left z-20"
          initial="hidden"
          animate={startAnim}
        >
          <motion.div 
             variants={{
               hidden: { scale: 0, opacity: 0 },
               visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.1 } }
             }}
             className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
             {content.greeting}
          </motion.div>
          
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-black tracking-tighter mb-8 text-slate-900 dark:text-white leading-none">
            <div className="flex flex-col gap-2">
               <HyperText text={content.role_prefix} className="text-primary" />
               <LetterStagger text={content.role_suffix} delay={0.4} gradient className="italic font-serif" />
            </div>
          </div>
          
          <div className="relative pl-6 ml-1 mb-10 max-w-xl">
             <motion.div 
               variants={{
                 hidden: { height: 0 },
                 visible: { height: "100%", transition: { duration: 1, delay: 0.8, ease: "easeInOut" } }
               }}
               className="absolute left-0 top-0 w-1 bg-primary/60"
             />
             <motion.p 
               variants={{
                 hidden: { opacity: 0, x: -20 },
                 visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } }
               }}
               className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium"
             >
               {content.description}
             </motion.p>
          </div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } }
            }}
            className="flex flex-wrap gap-4"
          >
            <Magnetic>
              <a href="#contact" className="interactive px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-xl hover:shadow-2xl hover:shadow-primary/20">
                {content.cta_primary} <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={`./${CV_FILE_NAME}`} download className="interactive px-8 py-4 rounded-full border border-slate-900 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-sm flex items-center gap-2 transition-all">
                <Download size={18} /> CV
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2 lg:col-span-5 relative flex flex-col justify-center items-center h-[50vh] min-h-[400px] lg:h-[70vh]">
           <motion.div
             initial={{ opacity: 0, scale: 1.3, filter: "blur(20px)" }}
             animate={!loading ? { 
               opacity: 1, 
               scale: 1,
               filter: "blur(0px)",
               y: [-15, 15, -15]
             } : {}}
             transition={{ 
               opacity: { duration: 1, delay: 0.3 },
               scale: { duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
               filter: { duration: 1, delay: 0.3 },
               y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
             }}
             className="relative w-full h-full max-w-lg bg-gray-900 rounded-[2.5rem] shadow-2xl border-[4px] border-white/5 overflow-hidden group z-10 will-change-transform"
           >
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src="./avatar.png" 
                  alt="Hero" 
                  className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                  onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center text-gray-500 p-4 text-center z-0">
                   <AlertCircle className="w-8 h-8 md:w-12 md:h-12 mb-2" />
                   <p className="text-sm md:text-base">{content.photo_error_title}</p>
                   <p className="text-[10px] md:text-xs mt-1 md:mt-2 opacity-60">{content.photo_error_msg}</p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex flex-col items-start gap-2">
                   <div className="bg-green-500/20 border border-green-500/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-green-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
                     <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                     {content.open_to_work}
                   </div>
                   <h3 className="text-white text-2xl md:text-3xl font-bold leading-none">{content.name}</h3>
                   <p className="text-gray-300 text-sm">{content.role_prefix} {content.role_suffix}</p>
                </div>
              </div>
           </motion.div>

            <motion.svg 
               className="absolute -z-10 w-[140%] h-[140%] text-primary/20"
               viewBox="0 0 200 200"
               initial="hidden"
               animate={!loading ? "visible" : "hidden"}
            >
               <motion.circle 
                  cx="100" cy="100" r="90" 
                  fill="none" stroke="currentColor" strokeWidth="0.5"
                  strokeDasharray="10 10"
                  variants={{
                    hidden: { pathLength: 0, rotate: -90, opacity: 0 },
                    visible: { 
                      pathLength: 1, 
                      rotate: 0, 
                      opacity: 1,
                      transition: { duration: 2, delay: 0.8, ease: "easeInOut" } 
                    }
                  }}
               />
            </motion.svg>
           
           <motion.div 
             initial={{ opacity: 0 }}
             animate={!loading ? { 
               scale: [1, 1.2, 1],
               opacity: [0.4, 0.2, 0.4]
             } : {}}
             transition={{ 
               opacity: { delay: 1, duration: 0.5 },
               scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
               default: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
             }}
             className="absolute bottom-0 w-[60%] h-10 bg-black/50 blur-2xl rounded-[100%]"
           />
        </div>
      </div>
    </div>
  );
};

// --- EXPERIENCE: STICKY STACKING CARDS ---
const Card = ({ item, i, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="min-h-screen md:h-screen flex items-start md:items-center justify-center sticky top-20 md:top-0 py-8 md:py-0 pointer-events-none">
      <motion.div 
        style={{ scale, top: `calc(0px + ${i * 15}px)` }}
        className="pointer-events-auto flex flex-col relative w-full max-w-5xl rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 bg-white/90 dark:bg-[#111]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden origin-top mb-10 md:mb-0 h-auto md:h-[500px] will-change-transform"
      >
         <div className="grid md:grid-cols-2 gap-6 md:gap-12 h-full">
            <div className="flex flex-col justify-between h-full relative z-10 order-1 md:order-1">
               <div>
                 <div className="flex flex-wrap items-center justify-between gap-2 mb-4 md:mb-6">
                    <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold border border-primary/20">{item.period}</span>
                    <span className="md:hidden text-xs text-gray-400 font-mono">0{i + 1}</span>
                 </div>
                 
                 <h2 className="text-2xl md:text-4xl font-display font-bold mb-1 md:mb-2 text-slate-900 dark:text-white leading-tight">{item.company}</h2>
                 <h3 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mb-4 md:mb-6">{item.role}</h3>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                   {item.tags.map((tag: string) => (
                     <span key={tag} className="px-2 py-1 md:px-3 bg-gray-100 dark:bg-white/5 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>

               {item.metrics && (
                 <div className="grid grid-cols-2 gap-4 mt-auto">
                    {item.metrics.map((metric: any, idx: number) => (
                      <div key={idx} className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5">
                         <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{metric.label}</div>
                         <div className="flex items-end justify-between">
                            <div className="flex items-center gap-1 text-lg font-bold">
                              {metric.value} 
                              {metric.trend === 'up' ? <TrendingUp size={14} className="text-green-500" /> : <TrendingDown size={14} className="text-green-500" />}
                            </div>
                            {metric.data && <MiniChart data={metric.data} />}
                         </div>
                      </div>
                    ))}
                 </div>
               )}
            </div>

            <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/5 p-5 md:p-8 flex flex-col justify-center order-2 md:order-2">
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-[60px] md:blur-[80px]" />
              <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 relative z-10 font-light mb-4 md:mb-6">
                "{item.description}"
              </p>
              <ul className="space-y-2 md:space-y-3 relative z-10">
                {item.achievements.slice(0, 3).map((ach: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    <Check className="text-primary mt-1 shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
         </div>
      </motion.div>
    </div>
  )
}

const Experience = ({ content }: { content: any }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} id="experience" className="relative z-20">
       <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
          <motion.h2 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ margin: "-100px" }}
             className="text-[15vw] md:text-[12vw] font-display font-black text-center mb-6 md:mb-10 text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-gray-200 dark:from-white dark:to-gray-800 tracking-tighter leading-none"
          >
             {content.section_title}
          </motion.h2>
          
          <div className="relative">
             {content.items.map((item: any, i: number) => {
                const targetScale = 1 - ((content.items.length - i) * 0.05);
                return (
                  <Card 
                    key={item.id} 
                    i={i} 
                    item={item} 
                    progress={scrollYProgress} 
                    range={[i * 0.25, 1]} 
                    targetScale={targetScale} 
                  />
                )
             })}
          </div>
       </div>
    </section>
  )
}

// --- BOOK SECTION ---
const BookSection = ({ content }: { content: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [45, -45]);
  const rotateY = useTransform(x, [-100, 100], [-45, 45]);
  const [isDragging, setIsDragging] = useState(false);

  return (
     <section className="py-20 md:py-32 px-4 bg-white/50 dark:bg-black/50 overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
                 {content.label}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
                 <HyperText text={content.title} />
              </h2>
              <div className="pl-6 border-l-2 border-primary/50 mb-8">
                <p className="text-xl italic text-gray-500 font-serif">
                   {content.quote}
                </p>
                <p className="text-sm font-bold mt-2 text-slate-900 dark:text-gray-300">- {content.author}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                 {content.description}
              </p>
           </div>
           
           <div className="order-1 md:order-2 flex justify-center perspective-1000">
              <motion.div
                 style={{ x, y, rotateX, rotateY, z: 100 }}
                 drag
                 dragElastic={0.16}
                 dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                 onDragStart={() => setIsDragging(true)}
                 onDragEnd={() => setIsDragging(false)}
                 whileHover={{ cursor: "grab" }}
                 whileTap={{ cursor: "grabbing" }}
                 animate={{
                   boxShadow: isDragging 
                     ? "0 25px 50px -12px rgba(249, 115, 22, 0.6)" 
                     : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                   scale: isDragging ? 1.05 : 1
                 }}
                 className="relative w-48 h-72 md:w-64 md:h-96 bg-orange-500 rounded-r-xl preserve-3d cursor-grab group will-change-transform"
              >
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/30 blur-[60px] rounded-full -z-10 group-hover:bg-orange-500/50 transition-colors duration-500" />

                 <div className="absolute left-0 top-0 bottom-0 w-12 bg-orange-700 origin-right transform -translate-x-full -rotate-y-90 rounded-l-md" />
                 
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-r-md flex flex-col items-center justify-center p-6 text-center shadow-inner border-l border-white/20">
                    <div className="text-white font-display font-bold text-xl md:text-2xl uppercase tracking-tighter mb-2 mix-blend-overlay break-words">{content.cover_title}</div>
                    <div className="text-white/80 text-xs font-serif italic">{content.cover_subtitle}</div>
                    <div className="mt-8 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                       <BookOpen className="text-white" size={20} />
                    </div>
                    <div className="absolute bottom-6 text-white/60 text-xs font-bold tracking-widest uppercase">{content.author}</div>
                 </div>

                 <div className="absolute top-2 bottom-2 right-1 w-4 bg-white transform translate-z-[-2px] rounded-r-sm" />
              </motion.div>
           </div>
        </div>
     </section>
  )
}

// --- TEXT REVEAL ---
const Word = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-1 md:mr-2 lg:mr-3 mt-1 md:mt-2 inline-block">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

const TextReveal = ({ value }: { value: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  });

  const words = value.split(" ");

  return (
    <p 
      ref={element}
      className="text-xl sm:text-2xl md:text-5xl leading-tight font-medium flex flex-wrap text-slate-900 dark:text-white"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })}
    </p>
  )
}

// --- MAIN APP ---
export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  const [konamiActive, setKonamiActive] = useState(false);
  const [cyberMode, setCyberMode] = useState(false);
  
  const konamiCode = useMemo(() => [
    "ArrowUp", "ArrowUp", 
    "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", 
    "ArrowLeft", "ArrowRight", 
    "KeyB", "KeyA"
  ], []);
  
  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        setKonamiIndex(nextIndex);
        if (nextIndex === konamiCode.length) {
          activateKonami();
          setKonamiIndex(0);
        }
      } else {
        setKonamiIndex(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex, konamiCode]);

  const activateKonami = () => {
    setKonamiActive(true);
    setTimeout(() => setKonamiActive(false), 15000);
  }

  const [clickCount, setClickCount] = useState(0);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    
    clickTimeoutRef.current = setTimeout(() => {
      setClickCount(0);
    }, 2000);

    if (clickCount + 1 >= 5) {
      setCyberMode(!cyberMode);
      setClickCount(0);
      console.log("%cSYSTEM: PROTOCOL ODIN ENGAGED", "color: #00ffcc; font-weight: bold; background: #000; padding: 5px;");
    }
  }

  useEffect(() => {
    console.log("%c👋 Hey there! Looking at the source code?", "color: #3b82f6; font-size: 20px; font-weight: bold; background: #0f172a; padding: 10px; border-radius: 5px;");
    console.log("%cTelegram: https://t.me/+998881116612", "font-size: 16px; color: #229ED9; font-weight: bold;");
    console.log("%cTry the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A", "font-size: 12px; color: #64748b; font-style: italic;");
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const content = RESUME_DATA[lang];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const toggleDarkMode = (e: React.MouseEvent) => {
    // @ts-ignore
    if (!document.startViewTransition) {
      setDarkMode(!darkMode);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setDarkMode(!darkMode);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)"
        }
      );
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div ref={containerRef} className="relative transition-colors duration-0">
      <AnimatePresence>
        {loading && <StudioPreloader onComplete={() => setLoading(false)} />}
        {konamiActive && <CinematicOverlay />}
        {cyberMode && <SystemHUD />}
      </AnimatePresence>
      
      <CustomCursor />
      <DynamicBackground />
      
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 px-4 md:px-8">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div 
              onClick={handleLogoClick}
              className="backdrop-blur-md border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/50 px-3 py-2 md:px-4 md:py-2 rounded-full flex items-center gap-2 cursor-pointer select-none active:scale-95 transition-transform shadow-sm dark:shadow-none"
              title="Click 5 times for System Access"
            >
               <span className={`w-2 h-2 md:w-3 md:h-3 rounded-full animate-pulse ${cyberMode ? 'bg-[#00ffcc] shadow-[0_0_10px_#00ffcc]' : 'bg-primary'}`} />
               <span className="font-bold text-xs md:text-sm tracking-widest text-slate-900 dark:text-white">K.S</span>
               {cyberMode && <span className="text-[10px] text-[#00ffcc] font-mono">SYS.ADMIN</span>}
            </div>
            
            <div className="backdrop-blur-md border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/50 px-1 py-1 md:px-2 md:py-2 rounded-full flex items-center gap-1 md:gap-2 shadow-sm dark:shadow-none">
               <Magnetic>
                 <button 
                   onClick={() => setLang(l => l === 'ru' ? 'en' : l === 'en' ? 'uz' : 'ru')}
                   className="interactive px-3 py-2 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors uppercase tracking-widest flex items-center gap-2 relative overflow-hidden w-[60px] justify-center text-slate-900 dark:text-white"
                 >
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={lang}
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       exit={{ y: -20, opacity: 0 }}
                       transition={{ duration: 0.2 }}
                       className="flex items-center gap-2 absolute"
                     >
                       {content.nav.lang_label}
                     </motion.div>
                   </AnimatePresence>
                   <span className="opacity-0">{content.nav.lang_label}</span>
                 </button>
               </Magnetic>
               <Magnetic>
                 <button 
                   onClick={toggleDarkMode}
                   className="interactive w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white"
                 >
                   {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                 </button>
               </Magnetic>
            </div>
         </div>
      </nav>

      <Hero content={content.hero} loading={loading} />

      <div className="relative z-20">
         <div className="py-10 md:py-20 border-b border-gray-200 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-md">
            <ParallaxText baseVelocity={-3}>
              {content.marquee.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-8 md:gap-12 mx-4 md:mx-6">
                   <HyperText text={item} className="text-slate-900 dark:text-white font-bold opacity-100" />
                   <span className="text-primary text-2xl md:text-3xl">✦</span>
                </div>
              ))}
            </ParallaxText>
         </div>

         <section id="about" className="py-20 md:py-32 px-4 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 md:mb-8 block">{content.nav.about}</span>
               <TextReveal value={content.about.content_p1 + " " + content.about.highlighted_text} />
               
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24 pt-8 md:pt-12 border-t border-gray-200 dark:border-white/10">
                  {content.about.stats.map((stat: any, i: number) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 }}
                     >
                        <div className="text-3xl md:text-6xl font-display font-bold mb-1 md:mb-2 text-slate-900 dark:text-white">{stat.value}</div>
                        <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         <Experience content={content.experience} />
         
         <BookSection content={content.book} />

         <section id="skills" className="py-20 md:py-32 px-4 overflow-hidden bg-white/80 dark:bg-[#050505]/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight text-slate-900 dark:text-white">
                    {content.skills.title_line1} <br/>
                    <span className="text-primary italic font-serif">{content.skills.title_highlight}</span>
                  </h2>
                  <p className="max-w-sm text-gray-500 mt-4 md:mt-0 text-left md:text-right text-sm md:text-base">{content.skills.subtitle}</p>
               </div>

               <motion.div 
                 className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
               >
                  <motion.div variants={cardVariants} className="md:col-span-2 md:row-span-2 h-full">
                    <SpotlightCard noBorder className="rounded-[2rem] md:rounded-[2.5rem] bg-gray-100 dark:bg-[#111] min-h-[300px] h-full will-change-transform">
                       <motion.div style={{ y: parallaxY }} className="absolute -right-6 -top-6 md:top-10 md:right-10 p-0 md:p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none will-change-transform">
                          <Target className="w-[120px] h-[120px] md:w-[250px] md:h-[250px]" />
                       </motion.div>
                       <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10">
                          <div>
                             <motion.div 
                               whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                               className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 md:mb-6"
                             >
                                <Target className="w-5 h-5 md:w-6 md:h-6" />
                             </motion.div>
                             <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">{content.skills.categories[0].title}</h3>
                             <motion.div 
                               variants={listVariants}
                               className="flex flex-wrap gap-2 md:gap-3 max-w-lg"
                             >
                                {content.skills.categories[0].skills.map((s: string) => (
                                   <motion.span 
                                     key={s} 
                                     variants={itemVariants}
                                     className="px-3 py-2 md:px-4 bg-white dark:bg-white/5 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium border border-gray-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                                   >
                                     {s}
                                   </motion.span>
                                ))}
                             </motion.div>
                          </div>
                       </div>
                    </SpotlightCard>
                  </motion.div>

                  <motion.div variants={cardVariants} className="md:row-span-2 h-full">
                    <SpotlightCard noBorder className="rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 text-white min-h-[300px] h-full will-change-transform">
                       <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <div className="relative z-10 flex flex-col h-full justify-between p-6 md:p-10">
                          <div>
                             <div className="w-16 h-16 md:w-20 md:h-20 mb-8 perspective-1000 group-hover:scale-110 transition-transform duration-500">
                                 <div className="relative w-full h-full transform-style-3d animate-[spin_8s_linear_infinite]">
                                    <div className="absolute inset-0 bg-blue-500/10 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] translate-z-[20px]" />
                                    <div className="absolute inset-0 bg-blue-500/10 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] translate-z-[-20px]" />
                                    <div className="absolute inset-0 bg-blue-500/10 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] rotate-y-90 translate-z-[20px]" />
                                    <div className="absolute inset-0 bg-blue-500/10 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] rotate-y-90 translate-z-[-20px]" />
                                    <div className="absolute inset-0 bg-blue-500/10 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] rotate-x-90 translate-z-[20px]" />
                                    <div className="absolute inset-0 bg-blue-500/10 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] rotate-x-90 translate-z-[-20px]" />
                                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full blur-md transform -translate-x-1/2 -translate-y-1/2" />
                                 </div>
                             </div>
                             <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{content.skills.categories[1].title}</h3>
                          </div>
                          <motion.div variants={listVariants} className="space-y-3 md:space-y-4">
                             {content.skills.categories[1].skills.map((s: string) => (
                                <motion.div key={s} variants={itemVariants} className="border-b border-white/10 pb-2 text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">{s}</motion.div>
                             ))}
                          </motion.div>
                       </div>
                    </SpotlightCard>
                  </motion.div>

                  <motion.div variants={cardVariants} className="md:col-span-2 h-full">
                    <SpotlightCard noBorder className="rounded-[2rem] md:rounded-[2.5rem] bg-primary text-white min-h-[200px] h-full will-change-transform">
                       <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-gradient-to-b md:bg-gradient-to-l from-black/10 to-transparent" />
                       <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between h-full p-6 md:p-10">
                          <div className="mb-6 md:mb-0 md:w-1/3">
                              <motion.div 
                                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)" }}
                                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 md:mb-6 md:hidden"
                              >
                                 <Sparkles size={20} />
                              </motion.div>
                              <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                              <motion.span 
                                whileHover={{ scale: 1.2, rotate: 15 }} 
                                className="hidden md:inline-block origin-center"
                              >
                                <Sparkles size={24} />
                              </motion.span> 
                              {content.skills.categories[2].title}
                              </h3>
                          </div>
                          <motion.div variants={listVariants} className="flex flex-wrap gap-2 md:w-2/3 justify-start md:justify-end">
                             {content.skills.categories[2].skills.map((skill: string, index: number) => (
                               <motion.span 
                                 key={index} 
                                 variants={itemVariants} 
                                 className="inline-block px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-sm font-medium backdrop-blur-sm"
                               >
                                 {skill}
                               </motion.span>
                             ))}
                          </motion.div>
                       </div>
                    </SpotlightCard>
                  </motion.div>
                  
                  <motion.div variants={cardVariants} className="h-full">
                    <SpotlightCard className="rounded-[2rem] md:rounded-[2.5rem] bg-gray-100 dark:bg-[#111] min-h-[200px] flex flex-col justify-center h-full will-change-transform">
                       <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-center">
                          <motion.div 
                            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
                            className="w-10 h-10 md:w-12 md:h-12 bg-slate-200 dark:bg-white/5 rounded-full flex items-center justify-center mb-4 md:mb-6"
                          >
                             <Globe className="text-primary w-5 h-5 md:w-6 md:h-6" />
                          </motion.div>
                          <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900 dark:text-white">{content.skills.categories[3].title}</h3>
                          <div className="text-sm text-gray-500">
                            {content.skills.categories[3].skills.join(", ")}
                          </div>
                       </div>
                    </SpotlightCard>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         <section id="contact" className="min-h-screen flex flex-col justify-between bg-black/90 text-white px-4 py-16 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15),transparent_70%)]" />
            
            <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
               <div className="grid md:grid-cols-2 gap-10 md:gap-20">
                  <div className="order-2 md:order-1">
                     <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-bold text-primary mb-6 md:mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {content.contact.available_badge}
                     </div>
                     <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-none mb-6 md:mb-8 tracking-tighter">
                       {content.contact.title_line1} <br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">{content.contact.title_highlight}</span>
                     </h2>
                  </div>
                  
                  <div className="flex flex-col justify-center gap-4 md:gap-6 order-1 md:order-2">
                     <p className="text-lg md:text-xl text-gray-400 mb-4 md:mb-8 font-light">{content.contact.description}</p>
                     
                     <Magnetic>
                       <a href={`mailto:${content.contact.email}`} className="interactive group flex items-center justify-between p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all will-change-transform">
                          <div className="flex items-center gap-4 md:gap-6">
                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                             </div>
                             <div className="overflow-hidden">
                                <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-1">{content.contact.email_label}</div>
                                <div className="text-lg md:text-2xl font-bold truncate">{content.contact.email}</div>
                             </div>
                          </div>
                          <ArrowRight className="transform group-hover:-rotate-45 transition-transform duration-300 shrink-0" />
                       </a>
                     </Magnetic>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <Magnetic>
                           <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="interactive p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 transition-all flex items-center justify-center gap-2 md:gap-3 font-bold text-[#0077b5] text-sm md:text-base w-full">
                              <Linkedin size={18} /> LinkedIn
                           </a>
                        </Magnetic>
                        <Magnetic>
                           <a href="https://t.me/+998881116612" target="_blank" rel="noreferrer" className="interactive p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-[#229ED9]/10 border border-[#229ED9]/20 hover:bg-[#229ED9]/20 transition-all flex items-center justify-center gap-2 md:gap-3 font-bold text-[#229ED9] text-sm md:text-base w-full">
                              <Send size={18} /> Telegram
                           </a>
                        </Magnetic>
                     </div>
                  </div>
               </div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 border-t border-white/10 pt-6 md:pt-10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-10">
               <p className="text-center md:text-left mb-4 md:mb-0">{content.contact.footer}</p>
               <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="interactive flex items-center gap-2 hover:text-white transition-colors">
                 {content.contact.back_to_top} <ArrowUp size={14} />
               </button>
            </div>
         </section>
      </div>
    </div>
  );
}