import { motion } from "framer-motion";
import { Award, GraduationCap, Globe } from "lucide-react";

const certificatesAlura = [
  "Microsoft SQL Server 2022 — Conhecendo SQL",
  "Microsoft SQL Server 2022 — Consultas Avançadas",
  "Power Apps — Descobrindo o poder da automação Low Code",
  "RPA — Automatize processos com ferramentas No/Low Code",
  "Análise da gestão de processos — Implantando melhorias",
  "Gestão de negócios — Visão geral de processos de negócios",
  "Reengenharia e qualidade — Mudando e aperfeiçoando processos",
];

const certificatesOneBitCode = [
  "Gestor de Automações com NoCode e IA — N8N do Zero ao PRO",
];

const education = [
  { title: "Análise e Desenvolvimento de Sistemas", institution: "Universidade Estácio de Sá", status: "Concluído" },
  { title: "Ensino Médio Completo + Tecnólogo em Logística", institution: "EEEP Eusébio de Queiroz", status: "Concluído" },
];

const languages = [
  { lang: "Português", level: "Nativo" },
  { lang: "Inglês", level: "Intermediário" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function CertificatesSection() {
  return (
    <section id="certificados" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-2">Formação</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Educação & Certificações
          </h2>
          <div className="gradient-line w-20 mt-4 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="font-display font-semibold text-foreground text-lg flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" size={20} /> Formação Acadêmica
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-card border border-border"
                >
                  <p className="font-display font-medium text-foreground">{edu.title}</p>
                  <p className="text-primary text-sm">{edu.institution}</p>
                  <p className="text-muted-foreground text-xs mt-1">{edu.status}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="font-display font-semibold text-foreground text-lg flex items-center gap-2 mb-4 mt-8">
              <Globe className="text-primary" size={20} /> Idiomas
            </h3>
            <div className="flex gap-3">
              {languages.map((l) => (
                <div key={l.lang} className="px-4 py-2 rounded-lg bg-card border border-border text-sm">
                  <span className="text-foreground font-display font-medium">{l.lang}</span>
                  <span className="text-muted-foreground ml-2">— {l.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="font-display font-semibold text-foreground text-lg flex items-center gap-2 mb-6">
              <Award className="text-primary" size={20} /> Certificados — Alura
            </h3>
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              {certificatesAlura.map((cert: string) => (
                <motion.div
                  key={cert}
                  variants={item}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-foreground font-body">{cert}</p>
                </motion.div>
              ))}
            </motion.div>

            <h3 className="font-display font-semibold text-foreground text-lg flex items-center gap-2 mb-6 mt-8">
              <Award className="text-primary" size={20} /> Certificados — OneBitCode
            </h3>
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              {certificatesOneBitCode.map((cert: string) => (
                <motion.div
                  key={cert}
                  variants={item}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-foreground font-body">{cert}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
