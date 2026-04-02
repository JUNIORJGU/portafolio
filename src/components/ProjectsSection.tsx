import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  link?: string;
  isComingSoon?: boolean;
}

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: t("projects.scheduler.title"),
      desc: t("projects.scheduler.desc"),
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      link: "https://team-pilot.servergorazer.uk/",
    },
    {
      title: t("projects.gorazer.title"),
      desc: t("projects.gorazer.desc"),
      tech: ["Next.js", "Spring Boot", "Java", "Tailwind"],
      link: "https://gorazer.vercel.app/",
    },
    {
      title: t("projects.finance.title"),
      desc: t("projects.finance.desc"),
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      link: "https://credendb.vercel.app/",
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
                className={`glass-card p-6 group transition-all ${
                  project.link ? "hover:border-primary/40 cursor-pointer" : ""
                }`}
                onClick={() => {
                  if (project.link) window.open(project.link, "_blank");
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.isComingSoon && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider font-bold bg-primary/10 text-primary border border-primary/20">
                          {t("projects.status.comingSoon")}
                        </span>
                      )}
                    </div>
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
                    <ExternalLink
                      className={`w-5 h-5 transition-colors ${
                        project.link
                          ? "hover:text-primary cursor-pointer"
                          : "opacity-30 cursor-not-allowed"
                      }`}
                    />
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
