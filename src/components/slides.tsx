import React from 'react';
import { motion } from 'motion/react';
import { Heart, Clock, Film, Tv, Play, Trophy, Sparkles } from 'lucide-react';
import { APP_DATA } from '../data';

// Componente utilitário de Container de Vidro (Liquid Glass)
export const GlassContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`material-glass rounded-[32px] overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Cálculo de Dias Juntos ---
const getDaysTogether = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days > 0 ? days : 0;
};


// --- Slide 1: Introdução ---
export const IntroSlide = () => (
  <div className="flex flex-col items-center justify-center h-full space-y-8 text-center max-w-sm mx-auto">
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 14, stiffness: 100 }}
      className="p-8 rounded-[48px] material-glass relative shadow-2xl"
    >
      <Heart className="w-24 h-24 text-rose-400 drop-shadow-[0_0_30px_rgba(251,113,133,0.5)] fill-rose-400/40" />
      {/* Glow Refletivo do Material iOS */}
      <div className="absolute inset-0 bg-rose-400/20 blur-[40px] rounded-full -z-10 mix-blend-screen" />
    </motion.div>

    <div className="space-y-4">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xs font-bold tracking-[0.2em] uppercase text-white/50"
      >
        Recap Anual
      </motion.p>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[40px] leading-tight font-semibold tracking-tight text-white"
      >
        Nosso Ano <br />Juntos.
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg font-medium text-white/80 tracking-tight"
      >
        Um olhar voltado para os momentos maravilhosos que dividimos.
      </motion.p>
    </div>
  </div>
);


// --- Slide 2: Tempo Juntos ---
export const StatsSlide = () => {
  const days = getDaysTogether(APP_DATA.startDate);
  
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-10 w-full max-w-sm mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center space-y-2"
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-200/60">Estatísticas</p>
        <h2 className="text-4xl font-semibold tracking-tight text-white leading-tight">E o tempo <br/>voou...</h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", damping: 15 }}
          className="h-full"
        >
          <GlassContainer className="flex flex-col items-center justify-center p-6 text-center h-full gap-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Clock className="w-8 h-8 text-sky-300" />
            <div>
              <p className="text-[32px] leading-none font-semibold tracking-tight text-white">{APP_DATA.totalHours}h</p>
              <p className="text-[13px] font-medium text-white/60 mt-1.5 leading-tight uppercase tracking-wide">Assistindo juntos</p>
            </div>
          </GlassContainer>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", damping: 15 }}
          className="h-full"
        >
          <GlassContainer className="flex flex-col items-center justify-center p-6 text-center h-full gap-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Heart className="w-8 h-8 text-rose-300 fill-rose-300/30" />
            <div>
              <p className="text-[32px] leading-none font-semibold tracking-tight text-white">{days}</p>
              <p className="text-[13px] font-medium text-white/60 mt-1.5 uppercase tracking-wide">Dias</p>
            </div>
          </GlassContainer>
        </motion.div>
      </div>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-lg font-medium text-white/80 leading-relaxed"
      >
        E cada segundo pareceu o roteiro de um filme.
      </motion.p>
    </div>
  );
};


// --- Slide 3: Filmes ---
export const MoviesSlide = () => (
  <div className="flex flex-col justify-center h-full space-y-6 w-full max-w-sm mx-auto overflow-hidden">
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="space-y-2 text-center"
    >
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-amber-200/80">Sessão Pipoca</p>
      <h2 className="text-[36px] font-semibold tracking-tight text-white leading-[1.1]">Os filmes que<br/>assistimos</h2>
    </motion.div>

    <div className="relative w-full h-[60%] mask-image-vertical py-4 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="space-y-3"
      >
        {/* Renderize duas vezes para fazer o loop */}
        {[...APP_DATA.movies, ...APP_DATA.movies].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 material-glass p-3 pr-5 rounded-[24px]">
            <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-2xl shadow-inner border border-white/5">
              {item.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold tracking-tight text-white truncate">{item.title}</h3>
              <p className="text-[13px] font-medium text-white/50">Filme</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

// --- Slide 4: Séries ---
export const SeriesSlide = () => (
  <div className="flex flex-col justify-center h-full space-y-8 w-full max-w-sm mx-auto">
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="space-y-2 text-center"
    >
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-300/80">Maratonas</p>
      <h2 className="text-[36px] font-semibold tracking-tight text-white leading-[1.1]">Séries e<br/>Episódios</h2>
    </motion.div>

    <div className="space-y-3">
      {APP_DATA.series.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 * idx, type: "spring", stiffness: 90 }}
        >
          <div className="flex items-center space-x-4 material-glass p-3 pr-5 rounded-[24px]">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl shadow-inner border border-white/5 shrink-0">
              {item.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold tracking-tight text-white truncate">{item.title}</h3>
              <p className="text-[13px] font-medium text-white/50">Série</p>
            </div>
            <Tv className="w-5 h-5 text-white/20 shrink-0" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- Slide 5: Esportes/Tennis ---
export const SportsSlide = () => (
  <div className="flex flex-col justify-center h-full space-y-8 w-full max-w-sm mx-auto">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="space-y-2 text-center"
    >
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-300/80">Nas Quadras</p>
      <h2 className="text-[36px] font-semibold tracking-tight text-white leading-[1.1]">Torcidas<br/>ferrenhas</h2>
    </motion.div>

    <div className="space-y-3">
      {APP_DATA.sports.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 * idx, type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center space-x-4 material-glass p-3 pr-5 rounded-[24px]">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl shadow-inner border border-white/5 shrink-0">
              {item.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold tracking-tight text-white truncate">{item.title}</h3>
            </div>
            <Trophy className="w-5 h-5 text-white/20 shrink-0" />
          </div>
        </motion.div>
      ))}
    </div>
    
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-center text-lg font-medium text-white/80"
    >
      Celebrando cada set <br/> e torcendo muito!
    </motion.p>
  </div>
);


// --- Slide 6: Outro / Fim ---
export const OutroSlide = () => (
  <div className="flex flex-col items-center justify-center h-full space-y-8 text-center w-full max-w-sm mx-auto">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <Sparkles className="w-16 h-16 text-yellow-300 absolute -top-12 right-4 opacity-70 animate-pulse" />
      <div className="p-10 rounded-[48px] material-panel shadow-2xl relative overflow-hidden">
        
        {/* Confetti Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-amber-500/10" />

        <h2 className="text-[32px] font-semibold tracking-tight text-white mb-6 leading-tight relative z-10">
          Feliz Dia dos<br/>Namorados!
        </h2>
        <p className="text-[17px] font-medium text-white/70 leading-[1.4] mb-8 relative z-10">
          Que venham mais séries, filmes, jogos e incontáveis memórias lado a lado. Eu te amo!
        </p>
        
        {/* Botões falsos */}
        <div className="inline-flex items-center justify-center px-6 py-3.5 rounded-full material-glass border border-white/20 text-[13px] font-semibold tracking-widest text-white uppercase relative z-10 shadow-lg">
          Te Amo ❤️
        </div>
      </div>
    </motion.div>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40"
    >
      Para repetir, clique na esquerda
    </motion.p>
  </div>
);
