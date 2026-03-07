import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.scheduler.title"),
      desc: t("projects.scheduler.desc"),
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    },
    {
      title: t("projects.gorazer.title"),
      desc: t("projects.gorazer.desc"),
      tech: ["Next.js", "Spring Boot", "Java", "Tailwind"],
    },
    {
      title: t("projects.finance.title"),
      desc: t("projects.finance.desc"),
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    },
  ];

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-10">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-gradient">{t("projects.title")}</span>
          </h2>

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card p-6 group hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-heading bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 text-muted-foreground ml-4 shrink-0">
                    <Github className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                    <ExternalLink className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
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

export default ProjectsSection;
