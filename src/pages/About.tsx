import { useLanguage } from "@/contexts/LanguageContext";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/Layout";
import { Target, Eye, Zap, GitBranch, Lightbulb, Award } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import BlurReveal from "@/components/BlurReveal";
import AnimatedGradientText from "@/components/AnimatedGradientText";
import Beam from "@/components/Beam";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const About = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: GitBranch, title: "Evolución Constante", desc: "Aprendizaje continuo y disciplina como pilares fundamentales" },
    { icon: Zap, title: "Impacto Medible", desc: "Tecnología que genera resultados reales y cuantificables" },
    { icon: Target, title: "Eficiencia Operativa", desc: "Diseño de ecosistemas digitales sin fricción" },
    { icon: Lightbulb, title: "Soluciones Reales", desc: "Arquitecturas escalables antes que complejidad técnica" },
  ];

  const storyPoints = [
    {
      title: "Cómo Comenzó Logix.ar",
      content: "Logix.ar nació a partir de una inquietud clara: entender cómo la inteligencia artificial y la automatización podían aplicarse de forma real y estratégica en los negocios. Al observar que muchas empresas operaban con procesos manuales, repetitivos y poco eficientes, surgió una pregunta clave: ¿Y si estos sistemas pudieran trabajar de forma autónoma, integrada y optimizada?"
    },
    {
      title: "Construcción de la Visión",
      content: "Lo que comenzó como una etapa de investigación profunda y desarrollo técnico se transformó en un proyecto con visión empresarial. Horas de estudio, pruebas, implementación de prototipos y análisis de herramientas dieron forma a una base sólida en automatización y agentes de IA. Con el tiempo, esa exploración técnica evolucionó hacia algo más estructurado: una iniciativa enfocada en construir soluciones reales para empresas reales."
    },
    {
      title: "Nuestra Evolución",
      content: "Desde el inicio, el enfoque fue claro: no desarrollar tecnología por tendencia, sino por utilidad. Cada etapa del crecimiento implicó investigación constante en sistemas de automatización, implementación práctica de agentes inteligentes, desarrollo de arquitecturas escalables y análisis estratégico orientado a eficiencia operativa. El aprendizaje continuo y la disciplina fueron pilares fundamentales."
    },
  ];

  const differences = [
    "Comprender el negocio antes que la tecnología",
    "Diseñar la arquitectura adecuada antes de implementar",
    "Priorizar eficiencia operativa antes que complejidad técnica",
    "Sistemas bien diseñados que sostengan el crecimiento a largo plazo",
  ];

  return (
    <Layout>
      <div className="relative w-full min-h-full" style={{
        backgroundColor: '#000000',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(0, 112, 240, 0.05) 0%, transparent 60%)
        `,
      }}>
        {/* Hero Section */}
        <section className="relative overflow-visible min-h-[85vh] sm:min-h-screen flex items-center py-16 sm:py-0">
          <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-block mb-6 px-4 py-2 rounded-full"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#ffffff' }}>
                {t("about.title")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-aspekta font-semibold mb-8"
              style={{
                color: 'white',
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                lineHeight: 1.1,
              }}
            >
              {t("about.hero.title").split(" ").slice(0, 3).join(" ")} <br />
              <AnimatedGradientText className="block mt-2">
                {t("about.hero.title").split(" ").slice(3).join(" ")}
              </AnimatedGradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{
                color: '#a1a5a0',
                fontSize: '1.125rem',
                fontWeight: 400,
                lineHeight: '150%',
              }}
            >
              {t("about.hero.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Story Points Section */}
        <section className="py-12 sm:py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8"
            >
              {storyPoints.map((point, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <SpotlightCard
                    className="group relative overflow-hidden rounded-[32px] p-10 sm:p-12 transition-all duration-300 h-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(94, 94, 94, 0.23) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(26, 26, 26, 0.1) 0%, rgba(45, 47, 48, 0.15) 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)';
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-5 font-display" style={{ color: '#ffffff' }}>
                      {point.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'rgba(223, 223, 223, 0.7)' }}>
                      {point.content}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-12 sm:py-23 relative">
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="text-center mb-10 sm:mb-20">
              <BlurReveal delay={0}>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: '#ffffff', textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
                >
                  {t("about.pillars")}
                </p>
              </BlurReveal>
              <BlurReveal delay={0.1}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 font-semibold"
                  style={{ color: 'white' }}
                >
                  {t("about.definition.title").split(" ").slice(0, 3).join(" ")} <br />
                  <AnimatedGradientText className="block mt-2">
                    {t("about.definition.title").split(" ").slice(3).join(" ")}
                  </AnimatedGradientText>
                </h2>
              </BlurReveal>
              <BlurReveal delay={0.2}>
                <p
                  className="max-w-2xl mx-auto text-lg"
                  style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.125rem', lineHeight: '150%' }}
                >
                  {t("about.definition.subtitle")}
                </p>
              </BlurReveal>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {pillars.map((pillar, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <SpotlightCard
                    className="group relative overflow-hidden rounded-[32px] p-8 sm:p-10 transition-all duration-300 h-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(39, 39, 39, 0.1) 0%, rgba(46, 55, 58, 0.15) 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)';
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(124, 153, 163, 0.15) 100%)',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <pillar.icon className="w-6 h-6 transition-all" style={{ color: '#ffffff' }} />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 font-display" style={{ color: 'white' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {pillar.desc}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* Differences Section */}
        <section className="py-12 sm:py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 relative max-w-3xl">
            <div className="text-center mb-8 sm:mb-16">
              <BlurReveal delay={0}>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: '#ffffff', textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
                >
                  {t("about.differentiation.title")}
                </p>
              </BlurReveal>
              <BlurReveal delay={0.1}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 font-semibold"
                  style={{ color: 'white' }}
                >
                  {t("about.structure.title").split(" ").slice(0, 2).join(" ")} <br />
                  <AnimatedGradientText className="block mt-2">
                    {t("about.structure.title").split(" ").slice(2).join(" ")}
                  </AnimatedGradientText>
                </h2>
              </BlurReveal>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-5"
            >
              {differences.map((diff, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <SpotlightCard
                    className="flex items-center gap-4 p-6 sm:p-8 rounded-[32px] transition-all"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(8, 8, 8, 0.1) 0%, rgba(38, 44, 46, 0.15) 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)';
                    }}
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #d8d8d8 100%)',
                    }}>
                      <span style={{ color: '#000' }} className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {diff}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-12 sm:py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-3xl">
            <BlurReveal>
              <SpotlightCard
                className="p-12 sm:p-16 rounded-[40px] transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.65)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(37, 42, 44, 0.15) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)';
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(29, 33, 34, 0.15) 100%)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Award className="w-8 h-8" style={{ color: '#ffffff' }} />
                </motion.div>
                <motion.span className="block mb-1 text-xs font-semibold inline-flex tracking-wider gap-2" style={{ color: '#ffffff' }}>
                  <h2 className="text-3xl md:text-4xl font-semibold font-display" style={{ color: 'white' }}>
                    {t("about.compromise.title").split(" ").slice(0, 1).join(" ")}
                  </h2>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-display">
                    <AnimatedGradientText>
                      {t("about.compromise.title").split(" ").slice(1).join(" ")}
                    </AnimatedGradientText>
                  </h2>
                </motion.span>
                <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '150%' }}>
                  {t("about.compromise.subtitle")}
                </p>
                <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '150%' }}>
                  {t("about.compromise.future")}
                </p>
              </SpotlightCard>
            </BlurReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
