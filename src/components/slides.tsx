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

// --- Cálculo de Dias Corridos (Telas) ---
const getScreenDays = (hours: string, minutes: string) => {
  const totalHours = Number(hours) + (Number(minutes) / 60);
  const days = Math.floor(totalHours / 24);
  return days;
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
  const screenDays = getScreenDays(APP_DATA.totalHours, APP_DATA.totalMinutes);
  
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
              <p className="text-[32px] leading-none font-semibold tracking-tight text-white">{APP_DATA.totalHours}h <span className="text-[20px]">{APP_DATA.totalMinutes}m</span></p>
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
              <p className="text-[32px] leading-none font-semibold tracking-tight text-white">+{screenDays}</p>
              <p className="text-[13px] font-medium text-white/60 mt-1.5 uppercase tracking-wide">Dias Sem Dormir</p>
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

    <div className="relative w-full h-[52%] mask-image-vertical py-4 overflow-hidden pointer-events-none">
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

    {/* Indicador elegante de Toque e Segure */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex items-center justify-center space-x-2 text-[12px] font-medium text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit mx-auto backdrop-blur-md shadow-lg"
    >
      <motion.span 
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }} 
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" 
      />
      <span className="tracking-wide">Toque e segure para ver mais</span>
    </motion.div>
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
      Para ver o resumo completo, clique na direita
    </motion.p>
  </div>
);


// --- Slide 7: Spotify-Style Summary ---
export const SpotifySummarySlide = () => {
  const screenDays = getScreenDays(APP_DATA.totalHours, APP_DATA.totalMinutes);
  const topMovies = APP_DATA.movies.slice(0, 4);
  const topSeries = APP_DATA.series.slice(0, 4);
  const topSports = APP_DATA.sports.slice(0, 4);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-sm sm:max-w-md mx-auto space-y-4">
      {/* Card Principal - Envolto em um visual Spotify autêntico */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-[36px] bg-gradient-to-b from-[#121212] to-[#1a1a1a] border-2 border-emerald-400/40 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col justify-between"
        style={{ height: 'calc(100% - 20px)', maxHeight: '720px' }}
      >
        {/* Glow de fundo decorativo */}
        <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2 relative z-10">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
              <Heart className="w-3 h-3 text-black fill-black" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase">Nosso #Wrapped</span>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            RETROSPECTIVA
          </span>
        </div>

        {/* Stats Section / Header Title */}
        <div className="text-center space-y-1 mb-3 relative z-10">
          <h3 className="text-[15px] sm:text-lg font-bold text-white tracking-tight leading-tight">O Som e a História de Nós Dois</h3>
          <p className="text-[11px] font-medium text-white/60 tracking-tight">Um ano em revista especial de namoro</p>
          
          <div className="flex items-center justify-center gap-4 py-2 px-3 bg-white/5 rounded-2xl border border-white/5 max-w-[280px] mx-auto mt-2 shadow-inner">
            <div className="text-left">
              <p className="text-[9px] text-white/40 uppercase font-bold tracking-wider leading-none">Dias Seguidos</p>
              <p className="text-[20px] font-bold text-emerald-400 mt-1 leading-none">{screenDays} <span className="text-[11px] font-medium text-white/75">dias</span></p>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="text-left">
              <p className="text-[9px] text-white/40 uppercase font-bold tracking-wider leading-none">Tempo de Telas</p>
              <p className="text-[20px] font-bold text-purple-400 mt-1 leading-none">{APP_DATA.totalHours}h <span className="text-[11px] font-medium text-white/75">{APP_DATA.totalMinutes}m</span></p>
            </div>
          </div>
        </div>

        {/* 3 Categories Grid */}
        <div className="space-y-3.5 flex-1 overflow-y-auto no-scrollbar py-1 relative z-10">
          {/* Filmes category */}
          <div className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors rounded-2xl p-2.5 border border-white/5">
            <div className="flex items-center space-x-1.5 mb-1.5 px-0.5">
              <Film className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase">Top Filmes</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {topMovies.map((movie, idx) => (
                <div key={idx} className="flex items-center space-x-1 p-1 rounded-lg bg-black/30">
                  <span className="text-[10px] font-mono font-bold text-emerald-400/80 w-3 text-right shrink-0">#{idx + 1}</span>
                  <span className="text-[11px] text-white/90 truncate flex-1 leading-tight">{movie.emoji} {movie.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Séries category */}
          <div className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors rounded-2xl p-2.5 border border-white/5">
            <div className="flex items-center space-x-1.5 mb-1.5 px-0.5">
              <Tv className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="text-[11px] font-bold tracking-wider text-purple-400 uppercase">Top Séries</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {topSeries.map((serie, idx) => (
                <div key={idx} className="flex items-center space-x-1 p-1 rounded-lg bg-black/30">
                  <span className="text-[10px] font-mono font-bold text-purple-400/80 w-3 text-right shrink-0">#{idx + 1}</span>
                  <span className="text-[11px] text-white/90 truncate flex-1 leading-tight">{serie.emoji} {serie.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Esportes category */}
          <div className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors rounded-2xl p-2.5 border border-white/5">
            <div className="flex items-center space-x-1.5 mb-1.5 px-0.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase">Nossas Quadras</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {topSports.map((sport, idx) => (
                <div key={idx} className="flex items-center space-x-1 p-1 rounded-lg bg-black/30">
                  <span className="text-[10px] font-mono font-bold text-amber-400/80 w-3 text-right shrink-0">#{idx + 1}</span>
                  <span className="text-[11px] text-white/90 truncate flex-1 leading-tight">{sport.emoji} {sport.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Soundwave & Custom Spotify Mock Code */}
        <div className="mt-3 pt-3 border-t border-white/5 flex flex-col items-center justify-center space-y-2 relative z-10 shrink-0">
          {/* Animated soundwave */}
          <div className="flex items-end justify-center gap-[3px] h-5 w-full max-w-[200px]">
            {[25, 60, 40, 85, 45, 75, 30, 95, 50, 70, 35, 60, 80, 40, 20].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                transition={{
                  duration: 1.0 + (i % 4) * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-[3px] rounded-full bg-emerald-400/80"
              />
            ))}
          </div>
          
          {/* Fake Spotify Barcode Code */}
          <div className="flex items-center justify-center space-x-1 bg-emerald-400/10 text-[9px] font-mono font-semibold tracking-widest text-[#1db954] uppercase px-3 py-1 rounded-full border border-[#1DB954]/20 shadow-inner">
            <Sparkles className="w-2.5 h-2.5 shrink-0 animate-pulse" />
            <span>NÓS DOIS • PREMIUM • PARA SEMPRE</span>
          </div>
        </div>
      </motion.div>

      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/30 text-center select-none pointer-events-none">
        Para repetir, clique na esquerda
      </p>
    </div>
  );
};

