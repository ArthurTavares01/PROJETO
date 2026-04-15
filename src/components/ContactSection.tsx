import { motion } from "framer-motion";
import { Mail, ExternalLink, Phone, MapPin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "a.19tavares@gmail.com", href: "mailto:a.19tavares@gmail.com" },
  { icon: Phone, label: "Telefone", value: "(85) 98837-7392", href: "tel:+5585988377392" },
  { icon: MapPin, label: "Localização", value: "Eusébio, CE", href: "#" },
  { icon: ExternalLink, label: "LinkedIn", value: "Conecte-se comigo", href: "https://www.linkedin.com/in/arthur-tavares01/" },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-2">Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Vamos conversar
          </h2>
          <div className="gradient-line w-20 mt-4 mb-4 mx-auto" />
          <p className="text-muted-foreground font-body max-w-md mx-auto mb-12">
            Estou disponível para novas oportunidades e projetos. Entre em contato!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_var(--glow)] group"
            >
              <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <c.icon className="text-primary" size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                <p className="text-foreground text-sm font-display font-medium">{c.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
