import { motion } from "framer-motion";
import { Code2, Coffee, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Code2, label: t("about.years"), desc: t("about.yearsDesc") },
    { icon: Rocket, label: t("about.projects"), desc: t("about.projectsDesc") },
    { icon: Coffee, label: t("about.coffee"), desc: t("about.coffeeDesc") },
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6 md:py-32 w-full">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 max-w-4xl mx-auto">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-gradient">{t("about.title")}</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mt-6 text-lg max-w-4xl mx-auto">
            {t("about.description")}
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto font-mono text-base">
            {highlights.map((item, i) => {
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="group about-card relative bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-[#161b22]/90 transition-all duration-300 shadow-md transform hover:-translate-y-1"
                >
                  {/* Header / Inline Preview */}
                  <div className="flex items-center text-slate-500 dark:text-muted-foreground whitespace-nowrap overflow-hidden mb-3 text-sm md:text-base">
                    <span className="inline-block mr-3 text-xs text-primary">▼</span>
                    <span className="text-pink-600 dark:text-pink-400 font-bold mr-2">const</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">stat_{i + 1}</span>
                    <span className="text-slate-800 dark:text-foreground font-bold mr-2">=</span>
                    <span className="text-amber-600 dark:text-yellow-200 font-bold">{"{"}</span>
                  </div>

                  {/* Expanded Body (Permanent) */}
                  <div className="grid grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="pl-6 pt-4 pb-2 border-l-2 border-slate-300 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 ml-2 transition-colors flex flex-col gap-4">

                        {/* Property: Icon */}
                        <div className="flex items-center gap-3">
                          <span className="text-blue-700 dark:text-blue-300 font-medium">icon:</span>
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 text-primary shadow-sm">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <span className="text-slate-800 dark:text-foreground font-bold">,</span>
                        </div>

                        {/* Property: Label */}
                        <div className="flex items-start flex-wrap gap-2 text-base">
                          <span className="text-blue-700 dark:text-blue-300 font-medium">label:</span>
                          <span className="text-emerald-700 dark:text-green-300 break-words font-medium">"{item.label}"</span>
                          <span className="text-slate-800 dark:text-foreground font-bold">,</span>
                        </div>

                        {/* Property: Description */}
                        <div className="flex flex-col gap-2">
                          <span className="text-blue-700 dark:text-blue-300 font-medium">description:</span>
                          <span className="text-emerald-800 dark:text-green-300/80 leading-relaxed block pl-4 border-l-2 border-emerald-500/30 dark:border-green-400/20 whitespace-normal text-sm md:text-base font-medium">
                            "{item.desc}"
                          </span>
                        </div>

                      </div>
                      {/* Closing Bracket */}
                      <div className="text-amber-600 dark:text-yellow-200 mt-3 font-bold text-base">{"}"}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
