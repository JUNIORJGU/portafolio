import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Send, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _honeypot: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [flyPath, setFlyPath] = useState({ x: 0, y: 0, rotate: 0 });

  const calculateRandomPath = () => {
    // Vuelo amplio hacia arriba y a los lados
    const dx = (Math.random() - 0.5) * 1600; // -800 a 800px en X
    const dy = -600 - Math.random() * 800; // -600 a -1400px en Y

    // Calcula el ángulo de la trayectoria
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * (180 / Math.PI);

    // El icono Send apunta nativamente hacia arriba a la derecha (-45 grados)
    // Sumamos 45 para compensar y asegurar que la punta viaje hacia su dirección real
    const rotate = angleDeg + 45;

    return { x: dx, y: dy, rotate };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFlyPath(calculateRandomPath());
    setStatus("submitting");

    fetch("https://back-end-portafolio-zash.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Server error");
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData({ name: "", email: "", message: "", _honeypot: "" });
        }, 3000);
      })
      .catch(error => {
        console.error("Error sending message:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
  };

  return (
    <section id="contacto" className="py-24 px-6 relative z-10">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 max-w-4xl mx-auto text-left w-full pl-0 lg:pl-0">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-gradient">{t("contact.title") || "Contacto"}</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-4xl mx-auto text-left w-full pl-0 lg:pl-0">
            {t("contact.cta") || "¿Tienes un proyecto en mente? Hablemos."}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 mb-16 max-w-2xl mx-auto space-y-5 text-left glass-card p-6 md:p-8 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-md"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5 ml-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5 ml-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground"
                  placeholder="tu@correo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5 ml-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground min-h-[140px] resize-y"
                  placeholder="¿Qué información deseas enviar?"
                  required
                />
              </div>

              {/* Honeypot Field (Security) */}
              <input
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle" || !formData.name || !formData.email || !formData.message}
              className="w-full relative mt-6 py-3.5 px-6 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center h-[56px] group"
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2 text-green-400"
                  >
                    <Check className="w-5 h-5" />
                    <span>¡Enviado con Éxito!</span>
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2 text-red-400"
                  >
                    <span>Error al enviar</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 relative w-full justify-center"
                  >
                    <span className="relative z-10">Enviar Mensaje</span>

                    {/* Estela de Partículas */}
                    {status === "submitting" && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                          <motion.div
                            key={`trail-${i}`}
                            animate={{
                              x: [0, flyPath.x],
                              y: [0, flyPath.y],
                              opacity: [0, 0.4, 0],
                              scale: [0.5, 1.2, 0.1]
                            }}
                            transition={{
                              duration: 1.2,
                              ease: "easeIn",
                              delay: i * 0.025, // Sale con un leggero retraso detrás del avión
                            }}
                            className="absolute w-2 h-2 rounded-full bg-primary blur-[1px]"
                          />
                        ))}
                      </div>
                    )}

                    <motion.div
                      animate={status === "submitting" ? {
                        x: [0, flyPath.x * 0.15, flyPath.x],
                        y: [0, flyPath.y * 0.15, flyPath.y],
                        opacity: [1, 1, 0],
                        scale: [1, 1, 0.2],
                        rotate: [0, flyPath.rotate, flyPath.rotate]
                      } : {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeIn",
                        times: [0, 0.15, 1] // Esto fuerza a que la rotación se complete rápido (en un 15% del tiempo)
                      }}
                      className="origin-center z-20"
                    >
                      <Send className={`w-5 h-5 transition-transform ${status === 'idle' ? 'group-hover:-translate-y-1 group-hover:translate-x-1' : ''}`} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>

          <div className="flex justify-center gap-6 pt-4">
            {[
              { icon: Github, href: "https://github.com/JUNIORJGU", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/junior-gomez-3a88b4389/", label: "LinkedIn" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="glass-card p-4 rounded-xl hover:border-primary/40 transition-colors group"
                aria-label={item.label}
              >
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;


