import { useLanguage } from "@/contexts/LanguageContext";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Bot, MessageSquare, ShoppingCart, BarChart3, Mail, Shield, ArrowRight, Lightbulb, X } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import BlurReveal from "@/components/BlurReveal";
import AnimatedGradientText from "@/components/AnimatedGradientText";
import Beam from "@/components/Beam";
import MagneticButton from "@/components/MagneticButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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

const projectsData = {
  en: [
    { icon: Bot, title: "AI Customer Support Agent", desc: "Intelligent assistant that handles customer inquiries across WhatsApp, Instagram, and websites in real time, resolving common questions, qualifying leads, and escalating conversations when needed." },
    { icon: MessageSquare, title: "WhatsApp Automation for Businesses", desc: "Automated system that manages messages, sends smart replies, reminders, and customer follow-ups to improve communication and increase conversions." },
    { icon: ShoppingCart, title: "Lead Capture & Management System", desc: "Capture leads from websites, ads, and social media, and automatically organize them into your CRM or database to streamline your sales pipeline." },
    { icon: BarChart3, title: "Business Process Automation", desc: "Connect your tools and automate repetitive tasks such as data management, email workflows, reporting, and synchronization between platforms." },
    { icon: Mail, title: "API & Platform Integration", desc: "Integration of applications, services, and APIs to create automated workflows that connect systems like CRM, e-commerce, databases, and internal tools." },
    { icon: Shield, title: "AI Data Processing Intelligence", desc: "AI-powered solutions for analyzing information, transcribing audio, classifying messages, and generating intelligent responses to optimize processes." },
  ],
  es: [
    { icon: Bot, title: "Agente IA para Atención al Cliente", desc: "Asistente inteligente que responde consultas de clientes en WhatsApp, Instagram y web en tiempo real, resolviendo preguntas frecuentes, calificando leads y escalando conversaciones cuando es necesario." },
    { icon: MessageSquare, title: "Automatización de WhatsApp para Negocios", desc: "Sistema automatizado que gestiona mensajes, envía respuestas inteligentes, recordatorios y seguimiento de clientes para mejorar la comunicación y aumentar conversiones." },
    { icon: ShoppingCart, title: "Sistema de Captura y Gestión de Leads", desc: "Capturamos leads desde formularios web, anuncios o redes sociales y los organizamos automáticamente en tu CRM o base de datos para optimizar el proceso de ventas." },
    { icon: BarChart3, title: "Automatización de Procesos Empresariales", desc: "Conectamos tus herramientas y automatizamos tareas repetitivas como gestión de datos, envíos de email, reportes y sincronización entre plataformas." },
    { icon: Mail, title: "Integración de APIs y Plataformas", desc: "Integramos aplicaciones, servicios y APIs para crear flujos de trabajo automatizados que conectan sistemas como CRM, e-commerce, bases de datos y herramientas internas." },
    { icon: Shield, title: "Inteligencia Artificial para Procesamiento de Datos", desc: "Implementamos soluciones de IA capaces de analizar información, transcribir audios, clasificar mensajes y generar respuestas inteligentes para optimizar procesos." },
  ],
};

const Projects = () => {
  const { t, lang } = useLanguage();
  const projects = projectsData[lang];
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
                {t("projects.hero.title")}
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
              {t("projects.title").split(" ").slice(0, 2).join(" ")}
              <AnimatedGradientText className="block mt-2">
                {t("projects.title").split(" ").slice(2).join(" ")}
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
              {t("projects.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-12 sm:py-23 relative">
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="text-center mb-10 sm:mb-20">
              <BlurReveal delay={0}>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: '#ffffff' }}
                >
                  {t("projects.info1")}
                </p>
              </BlurReveal>
              <BlurReveal delay={0.1}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 font-semibold"
                  style={{ color: 'white' }}
                >
                  {t("projects.info.title")}
                </h2>
              </BlurReveal>
              <BlurReveal delay={0.2}>
                <p
                  className="max-w-2xl mx-auto text-lg"
                  style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.125rem', lineHeight: '150%' }}
                >
                  {t("projects.info2")}
                </p>
              </BlurReveal>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {projects.map((project, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <SpotlightCard
                    className="group relative overflow-hidden rounded-[32px] p-8 sm:p-10 transition-all duration-300 h-full flex flex-col"
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
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <project.icon className="w-6 h-6 transition-all" style={{ color: '#ffffff' }} />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 font-display" style={{ color: 'white' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {project.desc}
                    </p>
                    <motion.div
                      className="mt-6 flex items-center font-medium transition-transform cursor-pointer"
                      style={{ color: '#00d9ff' }}
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedProject(project)}
                    >
                      {lang === 'en' ? 'Learn more' : 'Aprender más'} <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-3xl">
            <BlurReveal>
              <SpotlightCard
                className="p-12 sm:p-16 rounded-[40px] transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(12px)',
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
                <motion.div
                  className="w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(124, 153, 163, 0.15) 100%)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Lightbulb className="w-8 h-8" style={{ color: '#ffffff' }} />
                </motion.div>
                <h2
                  className="text-3xl md:text-4xl font-semibold mb-4 font-display"
                  style={{ color: 'white' }}
                >
                  {lang === 'en' ? '¿Have a project in mind?' : '¿Tienes un proyecto en mente?'}
                </h2>
                <p className="mb-8" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {lang === 'en'
                    ? 'Contact us today and discover how we can transform your business with custom automation and AI solutions.'
                    : 'Contáctanos hoy y descubre cómo podemos transformar tu negocio con soluciones de automatización e IA personalizadas.'}
                </p>
                <MagneticButton strength={0.2} className="inline-flex">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-black font-medium transition-all duration-300 group text-lg"
                    style={{
                      backgroundColor: '#e9ecef',
                      border: '1px solid #e9ecef',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d3d6d8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#e9ecef';
                    }}
                  >
                    {lang === 'en' ? 'Start Now' : 'Comienza Ahora'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
              </SpotlightCard>
            </BlurReveal>
          </div>
        </section>
      </div>

      {/* Project Details Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg md:max-w-2xl overflow-hidden rounded-[32px] flex flex-col border border-white/10 max-h-[90vh]"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 15, 20, 0.95) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
                onClick={(e) => e.stopPropagation()} // Prevent close on inner click
              >
                {/* Header Image Area */}
                <div className="w-full h-40 md:h-52 relative flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(to right, #00122e, #002d4d)' }}>
                  {/* Abstract tech background image */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1217] to-transparent"></div>

                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                    }}
                  >
                    <selectedProject.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white transition-colors backdrop-blur-md z-20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-6 md:p-8 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-base md:text-lg mb-8">
                    {selectedProject.desc}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-black font-medium transition-all duration-300 group w-full sm:w-auto mt-2"
                    style={{
                      backgroundColor: '#e9ecef',
                      border: '1px solid #e9ecef',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d3d6d8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#e9ecef';
                    }}
                    onClick={() => setSelectedProject(null)}
                  >
                    {lang === 'en' ? 'Discuss implementation' : 'Cotizar implementación'}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Layout>
  );
};

export default Projects;
