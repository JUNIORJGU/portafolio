import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Terminal } from "lucide-react";

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-slate-200 dark:border-white/5 bg-slate-100/80 dark:bg-black/40 backdrop-blur-md py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-primary drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                >
                    <Terminal className="w-6 h-6" />
                    <span className="font-heading font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400 dark:from-primary dark:to-emerald-300">JUNIOR_GOMEZ</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center gap-2"
                >
                    <p className="text-slate-600 dark:text-muted-foreground/80 text-sm font-mono flex items-center gap-2 font-medium">
                        <span>&copy; {currentYear}</span>
                        <span className="hidden sm:inline text-primary/50">•</span>
                        <span>All rights reserved.</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
