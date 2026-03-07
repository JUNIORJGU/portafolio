import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Heart, Terminal } from "lucide-react";
import devPhoto from "@/assets/developer-photo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const DevSection = () => {
  const { t } = useLanguage();

  const details = [
    { icon: MapPin, label: t("dev.location"), value: t("dev.locationValue") },
    { icon: Briefcase, label: t("dev.role"), value: t("dev.roleValue") },
    { icon: GraduationCap, label: t("dev.education"), value: t("dev.educationValue") },
    { icon: Heart, label: t("dev.passion"), value: "Open Source & UI/UX" },
  ];

  const bioText = t("dev.bio");
  const [textIndex, setTextIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTextIndex(0);
  }, [bioText]);

  useEffect(() => {
    if (textIndex < bioText.length) {
      const timeout = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 35); // Adjusted speed for a more natural typing effect
      return () => clearTimeout(timeout);
    }
  }, [textIndex, bioText]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: 'numeric' });
  };

  useEffect(() => {
    const triggerPhrase = "Me considero una persona responsable, comprometida y capaz de asumir";
    const triggerIndex = bioText.indexOf(triggerPhrase);

    // Only scroll if the ref exists and we've reached or just passed the trigger phrase
    if (consoleRef.current && triggerIndex !== -1 && textIndex >= triggerIndex) {
      // Smoothly scroll to the bottom 
      consoleRef.current.scrollTo({
        top: consoleRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [textIndex, bioText]);

  const renderBioTyped = bioText.slice(0, textIndex);
  const renderBioUntyped = bioText.slice(textIndex);

  return (
    <section id="desarrollador" className="py-24 px-6 w-full">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-10 max-w-4xl mx-auto">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-gradient">{t("dev.title")}</span>
          </h2>

          <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden border border-border shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.3)] bg-slate-200/60 dark:bg-[#0d1117] min-h-[600px] flex flex-col">
            {/* Desktop Background Area */}
            <div className="relative flex-1 p-6 md:p-10 z-10">
              {/* Optional: Simple geometric or blurred desktop wallpaper effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-300/10 to-primary/10 dark:from-blue-900/10 dark:via-background dark:to-purple-900/10 pointer-events-none" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative flex flex-col md:flex-row gap-8 items-stretch max-w-6xl mx-auto h-full">
                {/* Columna Izquierda: Foto y Console Info Mínimo */}
                <div className="shrink-0 flex flex-col items-start gap-6 w-full md:w-[280px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 0.8
                    }}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-black/10 dark:hover:border-white/10"
                  >
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-4 border-white/80 dark:border-white/10 bg-white/50 dark:bg-black/40 p-1.5 overflow-hidden">
                      <img src={devPhoto} alt="Developer photo" className="w-full h-full object-cover rounded-lg shadow-inner" />

                      {/* Shortcut arrow overlay */}
                      <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm rounded border border-black/10 dark:border-white/20 shadow-sm p-0.5 pointer-events-none">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <polyline points="9 10 4 15 9 20"></polyline>
                          <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                        </svg>
                      </div>
                    </div>

                    {/* Icon label */}
                    <div className="px-2 py-0.5 rounded text-xs font-mono group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/30 group-hover:text-blue-700 dark:group-hover:text-blue-200 text-muted-foreground border border-transparent group-hover:border-blue-500/30 dark:group-hover:border-blue-500/50 hover:shadow-sm transition-colors cursor-default select-none pointer-events-none drop-shadow-md">
                      profile.png
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full rounded-xl overflow-hidden border border-slate-300 dark:border-border bg-white/95 dark:bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col flex-1 min-h-[250px] relative z-20 group"
                  >
                    <div className="bg-slate-100/90 dark:bg-[#1a1b26]/90 px-3 py-2 flex items-center justify-between border-b border-slate-200 dark:border-white/5 shrink-0 cursor-default">
                      <div className="flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1.5 text-xs">
                        <Terminal className="w-3 h-3 text-primary/70" />
                        info.sh
                      </span>
                    </div>

                    <div className="p-4 flex flex-col justify-around flex-1 font-mono text-xs">
                      {details.map((item, i) => (
                        <div key={item.label} className="flex flex-col gap-1 w-full overflow-hidden" title={item.value}>
                          <div className="flex items-center gap-1.5 text-muted-foreground shrink-0">
                            <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="opacity-80 truncate">{item.label}</span>
                          </div>
                          <span className="text-green-600 dark:text-green-400 pl-5 truncate w-full block">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Columna Derecha: Bio Console Principal */}
                <div className="flex-1 flex flex-col items-center md:items-end justify-center w-full mt-8 md:mt-0 relative z-20">
                  <div className="w-full max-w-2xl relative bg-white/95 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-slate-300 dark:border-white/10 rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-sm md:text-base h-full max-h-[500px] flex flex-col group">
                    {/* Console Header */}
                    <div className="bg-slate-100/90 dark:bg-[#1a1b26]/90 px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-border/40 shrink-0 cursor-default">
                      <div className="flex gap-2 w-16 opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer"></div>
                      </div>
                      <div className="flex-1 flex justify-center text-xs text-muted-foreground font-mono items-center gap-2">
                        <Terminal className="w-4 h-4 text-primary/70" />
                        <span>junior_gomez.sh</span>
                      </div>
                      <div className="w-16"></div> {/* Spacer for symmetry */}
                    </div>

                    {/* Console Body */}
                    <div
                      ref={consoleRef}
                      className="p-5 md:p-8 text-left flex-1 flex flex-col justify-start overflow-y-auto custom-scrollbar"
                    >
                      <div className="mb-4 text-slate-800 dark:text-slate-200">
                        <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = <span className="text-yellow-600 dark:text-yellow-300">{"{"}</span>
                        <div className="pl-6 mt-1">
                          <span className="text-red-600 dark:text-red-400">name:</span> <span className="text-green-600 dark:text-green-400">"Junior Gómez"</span>,
                        </div>
                        <div className="pl-6 my-1">
                          <span className="text-red-600 dark:text-red-400">username:</span> <span className="text-green-600 dark:text-green-400">"@juniorjgu"</span>,
                        </div>
                        <div className="pl-6 flex">
                          <span className="text-red-600 dark:text-red-400 mr-2">bio:</span>
                          <span className="text-green-600 dark:text-green-400">`</span>
                        </div>
                      </div>

                      {/* Typing text effect */}
                      <div className="pl-10 text-green-600 dark:text-green-400 relative">
                        {/* Capa base transparente para asegurar la altura real de todo el texto */}
                        <div className="opacity-0 pointer-events-none select-none" aria-hidden="true">
                          {bioText}
                        </div>

                        {/* Texto visible animado posicionado encima */}
                        <div className="absolute top-0 left-10 right-0 whitespace-pre-line h-full flex flex-col justify-start">
                          <div>
                            {renderBioTyped}
                            <span className="text-primary animate-blink font-normal bg-primary/20 ml-1">|</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <span className="text-green-600 dark:text-green-400">`</span>
                        <br />
                        <span className="text-yellow-600 dark:text-yellow-300">{"}"}</span>;
                      </div>

                      {textIndex >= bioText.length && (
                        <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                          <span className="text-green-600 dark:text-green-400">visitor@portfolio</span>:<span className="text-blue-600 dark:text-blue-400">~/about</span>$ <span className="animate-pulse text-slate-800 dark:text-slate-200">_</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Desktop Taskbar */}
            <div className="h-12 bg-white/70 dark:bg-[#121212]/90 backdrop-blur-2xl border-t border-slate-300 dark:border-white/5 flex items-center px-4 relative z-30 justify-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)] dark:shadow-none">
              {/* Central Taskbar Icons */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded shrink-0 bg-white dark:bg-primary/20 hover:bg-slate-50 dark:hover:bg-primary/30 flex items-center justify-center cursor-pointer transition-colors shadow-sm dark:shadow-[0_0_10px_rgba(var(--primary),0.2)]">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded shrink-0 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors relative shadow-sm dark:shadow-none">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                </div>
                <div className="w-8 h-8 rounded shrink-0 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors shadow-sm dark:shadow-none">
                  <svg className="w-4 h-4 text-[#E34F26]" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75h9.328l-.16-1.785H6.281l-.16 1.785zm3.438 6.78l3.14-.844.203-2.19h-6.78v-1.781h8.735l-.547 5.86-4.75 1.296-4.75-1.296-.156-1.781h1.844l.14 1.547 2.906.782z" /></svg>
                </div>
                <div className="w-8 h-8 rounded shrink-0 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full shadow-sm dark:shadow-none">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
              </div>

              {/* Right Side Taskbar Details (Time etc) */}
              <div className="absolute right-4 flex items-center gap-3 text-[10px] text-slate-500 dark:text-muted-foreground font-mono">
                <span className="hidden md:inline-block">ENG</span>
                <div className="flex flex-col items-end leading-tight">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatDate(currentTime)}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevSection;
