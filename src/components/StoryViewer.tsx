import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IntroSlide, StatsSlide, MoviesSlide, SeriesSlide, SportsSlide, OutroSlide } from './slides';

const SLIDES = [IntroSlide, StatsSlide, MoviesSlide, SeriesSlide, SportsSlide, OutroSlide];
const DURATION = 8000; // 8 segundos por slide

export default function StoryViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNextAuto();
            return 0;
          }
          return prev + (100 / (DURATION / 60)); // Anima a aprox 60fps
        });
      }, 60);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);
  
  const handleNextAuto = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      // Para o avanço no final
      setProgress(100);
    }
  };

  const handleNext = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      setProgress(0);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      setProgress(0);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsPaused(true);
  };
  
  const handlePointerUp = (e: React.PointerEvent) => {
    setIsPaused(false);
    // Calcular qual lado da tela foi clicado (esquerda volta, direita avança)
    const width = window.innerWidth;
    if (e.clientX < width * 0.3) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const ActiveSlide = SLIDES[currentSlide];

  return (
    <div 
      className="relative w-full h-[100dvh] overflow-hidden select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Background Dinâmico - Profundo e romântico, interagindo com o Liquid Glass */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-rose-800 to-amber-600 animate-gradient -z-20" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[60px] -z-10" />

      {/* Barras de Progresso estilo Stories */}
      <div className="absolute top-0 inset-x-0 z-50 pt-4 px-4 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="flex gap-1.5 w-full max-w-lg mx-auto">
          {SLIDES.map((_, idx) => (
            <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
              <div 
                className="h-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all ease-linear"
                style={{ 
                  width: idx < currentSlide ? '100%' : idx === currentSlide ? `${progress}%` : '0%',
                  transitionDuration: idx === currentSlide && progress > 0 ? '60ms' : '0ms'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Áreas de toque invisíveis (Intercepta cliques para navegar/pausar) */}
      <div 
        className="absolute inset-0 z-40 touch-none flex"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => setIsPaused(false)}
      >
        <div className="w-[30%] h-full" />
        <div className="w-[70%] h-full" />
      </div>

      {/* Conteúdo do Slide ativo reativo à tap/swipe */}
      <div className="absolute inset-0 z-10 pointer-events-none pb-8 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} /* Apple-like easeOutQuint */
            className="w-full h-full flex items-center justify-center p-6 sm:p-8"
          >
            <ActiveSlide />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
