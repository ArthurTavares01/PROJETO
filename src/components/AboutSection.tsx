import { motion } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-2">Sobre mim</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Quem sou eu
          </h2>
          <div className="gradient-line w-20 mt-4 mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-muted-foreground leading-relaxed font-body">
              Sou profissional de Tecnologia da Informação desde 2022, atuando como analista com foco em infraestrutura, automação e melhoria contínua de processos. Possuo experiência na administração de servidores Linux e Windows Server, além de atuação em redes, segurança da informação com firewall e monitoramento de ambientes por meio de ferramentas como Zabbix e Grafana.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body mt-4">
              Tenho direcionado minha atuação para o desenvolvimento de soluções que aumentem a eficiência operacional, incluindo criação de aplicações com Power Apps, integração de APIs e automação de fluxos utilizando n8n.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body mt-4">
              Também atuo na análise de cenários e identificação de oportunidades de otimização, contribuindo para decisões mais estratégicas e sustentáveis no ambiente de TI. Possuo conhecimentos em desenvolvimento web (HTML, CSS e JavaScript) e bancos de dados como Microsoft SQL Server e MySQL.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body mt-4">
              Estou constantemente em busca de evolução profissional, com foco na implementação de soluções tecnológicas que gerem valor ao negócio e apoiem o crescimento organizacional.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: User, label: "Nome", value: "Arthur Tavares" },
              { icon: MapPin, label: "Localização", value: "Eusébio, CE — Brasil" },
              { icon: Briefcase, label: "Cargo", value: "Analista de TI — Longevidade Saudável" },
              { icon: GraduationCap, label: "Formação", value: "Análise e Desenv. de Sistemas — Estácio (Concluído)" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="p-2 rounded-md bg-primary/10">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="text-foreground font-display font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
