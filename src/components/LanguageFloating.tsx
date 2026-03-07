import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage, langLabels, langFlags, type Lang } from "@/contexts/LanguageContext";

const LanguageFloating = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const langs: Lang[] = ["es", "en", "pt", "ru"];

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen((s) => !s)}
          className="flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-background/90 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform"
          aria-label="Change language"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm">{langFlags[lang]}</span>
        </button>

        {/* Desktop anchored menu: opens upwards */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 700, damping: 40 }}
              className="hidden md:block mb-2 w-48 rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg overflow-hidden absolute right-0 bottom-full"
            >
              <div className="relative">
                <div className="absolute -bottom-2 right-4 w-3 h-3 rotate-45 bg-background border-l border-t border-border" />
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setOpen(false); }}
                    className={`w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      lang === l ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    <span>{langFlags[l]}</span>
                    <span>{langLabels[l]}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile: full-screen centered panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="md:hidden fixed inset-0 z-50 flex items-center justify-center"
            >
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setOpen(false)}
              />
              <motion.div
                initial={{ y: 20, scale: 0.98, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 20, scale: 0.98, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className="relative w-[90%] max-w-sm rounded-lg border border-border bg-background p-2 shadow-lg"
              >
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setOpen(false); }}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 text-base transition-colors ${
                      lang === l ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    <span>{langFlags[l]}</span>
                    <span className="font-medium">{langLabels[l]}</span>
                  </button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LanguageFloating;
