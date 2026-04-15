import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow blur-[120px] opacity-40" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Analista de TI
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground leading-tight">
            Arthur{" "}
            <span className="text-primary glow-text">Tavares</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Transformando infraestrutura e automação em eficiência operacional e resultados reais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Entre em contato
          </button>
          <button
            onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border border-border text-foreground font-display font-semibold text-sm rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Saiba mais
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-muted-foreground animate-bounce" size={28} />
        </motion.div>
      </div>
    </section>
  );
}
