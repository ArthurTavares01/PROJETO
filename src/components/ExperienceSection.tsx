import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    role: "Analista de TI",
    company: "Longevidade Saudável",
    location: "Eusébio, CE",
    period: "Jan/2026 — Atual",
    description: "Atuação no suporte e sustentação da infraestrutura de TI, incluindo manutenção de estações de trabalho, administração de servidores Linux e ambientes virtualizados. Monitoramento de ambientes com Grafana e Zabbix, suporte ao TOTVS RM e gestão de plataformas educacionais (Moodle e Canvas). Desenvolvimento de automações e soluções RPA, além de apoio na otimização de processos internos e colaboração com a equipe técnica em melhorias contínuas.",
  },
  {
    role: "Assistente de TI",
    company: "Longevidade Saudável",
    location: "Eusébio, CE",
    period: "Ago/2023 — Dez/2025",
    description: "Suporte técnico, manutenção de estações de trabalho, servidores Linux, virtualização, gerenciamento de Moodle e Canvas, monitoramento com Grafana e Zabbix, suporte ao TOTVS RM e fluxos de processos, desenvolvimento de automações e RPA, e colaboração em equipe técnica focada em soluções e melhorias contínuas.",
  },
  {
    role: "Estagiário de TI",
    company: "Longevidade Saudável",
    location: "Eusébio, CE",
    period: "Out/2022 — Ago/2023",
    description: "Suporte técnico a usuários, com atuação na administração e manutenção da infraestrutura e na configuração de sistemas.",
  },
  {
    role: "Estagiário de Logística",
    company: "Mobit",
    location: "Fortaleza, CE",
    period: "2021",
    description: "Organização e controle de estoque, lançamento de movimentações no sistema, apoio à logística e reposição de materiais, recebimento e conferência de mercadorias, armazenagem, atendimento a solicitações internas e inventário de produtos.",
  },
];
export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-2">Trajetória</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Experiência profissional
          </h2>
          <div className="gradient-line w-20 mt-4 mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--glow)]" />

                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                    <Calendar size={14} />
                    <span>{exp.period} • {exp.location}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg">{exp.role}</h3>
                  <p className="text-primary text-sm font-display">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-3 font-body leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
