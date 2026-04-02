import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const greeting = t("hero.greeting");

  const [textIndex, setTextIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState("");

  const part1 = "> ";
  const part2 = greeting + " ";
  const part3 = "Junior";
  const fullText = part1 + part2 + part3;

  useEffect(() => {
    setTextIndex(0);
    setIsGlitching(false);
    setGlitchText(part3);
  }, [greeting, part3]);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const glitchTimeout = setTimeout(() => {
        setIsGlitching(true);
      }, 1000); // 1 second after typing finishes

      const stopGlitchTimeout = setTimeout(() => {
        setIsGlitching(false);
      }, 3500); // 2.5 seconds of glitching, then 1 second of normal view before reset

      const loopTimeout = setTimeout(() => {
        setTextIndex(0);
      }, 4500);

      return () => {
        clearTimeout(glitchTimeout);
        clearTimeout(stopGlitchTimeout);
        clearTimeout(loopTimeout);
      };
    }
  }, [textIndex, fullText]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGlitching) {
      // More chaotic / hacker-like characters
      const chars = "¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿×÷ØÞßæðøþđħıĸłŉŋœŧůźżžƒƍƎƏƐƔƕƖƗƚƛƜƝƞƟƠƢƤƦƧƨƩƪƫƬƭƮƯƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿ";
      let iteration = 0;

      interval = setInterval(() => {
        setGlitchText(part3.split("").map((letter, index) => {
          if (index < iteration) {
            return part3[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(""));

        if (iteration >= part3.length) {
          clearInterval(interval);
        }

        iteration += 1 / 4; // Adjust speed of unscrambling here
      }, 40);
    } else {
      setGlitchText(part3);
    }

    return () => clearInterval(interval);
  }, [isGlitching, part3]);

  const renderPart1Typed = fullText.slice(0, Math.min(textIndex, part1.length));
  const renderPart1Untyped = part1.slice(renderPart1Typed.length);

  const part2Start = part1.length;
  const renderPart2Typed = textIndex > part2Start
    ? fullText.slice(part2Start, Math.min(textIndex, part2Start + part2.length))
    : "";
  const renderPart2Untyped = part2.slice(renderPart2Typed.length);

  const part3Start = part2Start + part2.length;
  const renderPart3Typed = isGlitching
    ? glitchText
    : textIndex > part3Start
      ? fullText.slice(part3Start, Math.min(textIndex, part3Start + part3.length))
      : "";
  const renderPart3Untyped = part3.slice(renderPart3Typed.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-muted-foreground font-heading text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span>~/portafolio</span>
            <span className="text-primary animate-blink">▊</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight whitespace-pre-wrap relative inline-block">
            {/* Capa de texto invisible para mantener el tamaño del contenedor estático */}
            <span className="invisible inline-block pointer-events-none select-none" aria-hidden="true">
              <span className="text-muted-foreground">{part1}</span>
              {part2}
              <span className="text-gradient neon-text">{part3}</span>
              <span className="font-normal">|</span>
            </span>

            {/* Texto animado visible */}
            <div className="absolute top-0 left-0 w-full h-full">
              <span className="text-muted-foreground">{renderPart1Typed}</span>
              {renderPart2Typed}
              <span className={`text-gradient neon-text ${isGlitching ? 'animate-[pulse_0.1s_ease-in-out_infinite]' : ''}`}>{renderPart3Typed}</span>
              <span className="text-primary animate-blink font-normal">|</span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-body leading-relaxed">
            {t("hero.description")}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#proyectos"
              className="neon-border px-6 py-3 rounded-lg font-heading text-sm text-primary hover:bg-primary/10 transition-colors"
            >
              {t("hero.viewProjects")}
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 rounded-lg font-heading text-sm text-muted-foreground border border-border hover:border-muted-foreground/50 transition-colors"
            >
              {t("hero.contact")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
