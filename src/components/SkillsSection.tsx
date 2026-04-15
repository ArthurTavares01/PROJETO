import { motion } from "framer-motion";
import { Monitor, Server, Shield, Network, Database, Settings, Code, BarChart3, Bot, Zap } from "lucide-react";

const skills = [
  { icon: Server, name: "Infraestrutura", description: "Servidores Linux e Windows Server, virtualização e cloud" },
  { icon: Network, name: "Redes & Firewall", description: "Infraestrutura de redes LAN/WAN e segurança com firewall" },
  { icon: BarChart3, name: "Monitoramento", description: "Zabbix e Grafana para monitoramento de ambientes" },
  { icon: Bot, name: "RPA & Automação", description: "Automações (N8N, Power Automate, UiPath, Python)" },
  { icon: Database, name: "Banco de Dados", description: "Microsoft SQL Server e MySQL" },
  { icon: Code, name: "Desenvolvimento Web", description: "HTML, CSS, JavaScript e integração de APIs" },
  //{ icon: Monitor, name: "Suporte Técnico", description: "Manutenção de estações, suporte a usuários e TOTVS RM" },
  //{ icon: Settings, name: "Gestão de Processos", description: "Análise, otimização e reengenharia de fluxos operacionais" },
 // { icon: Zap, name: "Power Apps", description: "Criação de aplicativos Low Code para produtividade" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function SkillsSection() {
  return (
    <section id="competencias" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-2">Competências</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Habilidades técnicas
          </h2>
          <div className="gradient-line w-20 mt-4 mb-12" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_var(--glow)]"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg">{skill.name}</h3>
              <p className="text-muted-foreground text-sm mt-2 font-body">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
