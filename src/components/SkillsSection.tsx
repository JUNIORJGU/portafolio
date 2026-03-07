import { motion } from "framer-motion";
import {
  Code2, Database, Globe, Server, Smartphone, GitBranch,
  Container, Palette, Cpu, Cloud, Terminal, Layers, Folder
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: t("skills.languages"),
      items: [
        { name: "TypeScript", icon: Code2 },
        { name: "JavaScript", icon: Terminal },
        { name: "Python", icon: Cpu },
        { name: "HTML/CSS", icon: Globe },
      ],
    },
    {
      title: t("skills.backend"),
      items: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Server },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
      ],
    },
    {
      title: t("skills.tools"),
      items: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Container },
        { name: "AWS", icon: Cloud },
        { name: "Linux", icon: Terminal },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:py-32 w-full">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 max-w-4xl mx-auto">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-gradient">{t("skills.title")}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-6 md:pt-10">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className="relative group mt-6"
              >
                {/* Folder Tab (Pestaña) */}
                <div className="absolute -top-8 left-0 h-9 w-2/3 max-w-[160px] bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md border-t border-l border-r border-border rounded-t-xl transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-slate-50 dark:group-hover:bg-[#161b22]/90 flex items-center px-4 z-0 shadow-sm">
                  <Folder className="w-4 h-4 text-amber-500 mr-2" />
                  <span className="text-xs font-heading font-semibold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider truncate">
                    {cat.title}
                  </span>
                </div>

                {/* Folder Body (Cuerpo) */}
                <div className="glass-card relative z-10 p-6 rounded-tl-none border-border group-hover:border-primary/50 transition-all duration-300 bg-white/80 dark:bg-[#0d1117]/80 h-full flex flex-col shadow-lg group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] backdrop-blur-md">
                  <div className="grid grid-cols-1 gap-3 flex-1 mt-1">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1 + i * 0.05, duration: 0.3 }}
                        className="flex items-center gap-4 p-3 rounded-lg bg-secondary/40 dark:bg-white/5 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/30 border border-transparent transition-all cursor-default"
                      >
                        <item.icon className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                        <span className="text-sm text-foreground font-medium truncate">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
