import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  const { lang } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl relative">
          
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display" style={{ color: 'white' }}>
              {lang === "en" ? "Privacy Policy" : "Política de Privacidad"}
            </h1>
            <p className="text-sm font-medium tracking-wide uppercase" style={{ color: "rgba(0, 217, 255, 0.8)" }}>
              {lang === "en"
                ? "Last updated: February 2026"
                : "Última actualización: Febrero 2026"}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="rounded-[32px] p-8 md:p-14 lg:p-16 border relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(12, 12, 14, 0.9) 0%, rgba(5, 5, 8, 0.95) 100%)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="space-y-12">
              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "white" }}>
                  {lang === "en"
                    ? "1. Information We Collect"
                    : "1. Información que Recopilamos"}
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {lang === "en"
                    ? "We collect information you provide directly to us, such as when you contact us through our website, fill out forms, or request our services. This may include your name, email address, phone number, and any other information you choose to provide."
                    : "Recopilamos información que nos proporciona directamente, como cuando se comunica con nosotros a través de nuestro sitio web, completa formularios o solicita nuestros servicios. Esto puede incluir su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que elija proporcionar."}
                </p>
              </motion.section>

              <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "white" }}>
                  {lang === "en"
                    ? "2. How We Use Your Information"
                    : "2. Cómo Utilizamos su Información"}
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {lang === "en"
                    ? "We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, send promotional communications (with your consent), and comply with legal obligations."
                    : "Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, responder a sus consultas, enviar comunicaciones promocionales (con su consentimiento) y cumplir con las obligaciones legales."}
                </p>
              </motion.section>
              
              <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "white" }}>
                  {lang === "en"
                    ? "3. Data Security"
                    : "3. Seguridad de los Datos"}
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {lang === "en"
                    ? "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure."
                    : "Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro."}
                </p>
              </motion.section>
              
              <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "white" }}>
                  {lang === "en"
                    ? "4. Cookies and Tracking"
                    : "4. Cookies y Seguimiento"}
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {lang === "en"
                    ? "We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences."
                    : "Podemos utilizar cookies y tecnologías de seguimiento similares para mejorar su experiencia en nuestro sitio web. Puede controlar la configuración de cookies a través de las preferencias de su navegador."}
                </p>
              </motion.section>
              
              <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "white" }}>
                  {lang === "en"
                    ? "5. Third-Party Sharing"
                    : "5. Intercambio con Terceros"}
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {lang === "en"
                    ? "We do not sell or share your personal data with third parties without your explicit consent, except as required by law or to service providers who assist us in operating our website and business."
                    : "No vendemos ni compartimos sus datos personales con terceros sin su consentimiento explícito, excepto cuando lo requiera la ley o a proveedores de servicios que nos ayuden a operar nuestro sitio web y negocio."}
                </p>
              </motion.section>
              
              <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "white" }}>
                  {lang === "en"
                    ? "6. Your Rights"
                    : "6. Sus Derechos"}
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {lang === "en"
                    ? "You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us using the information provided in the Contact section."
                    : "Tiene derecho a acceder, corregir o eliminar sus datos personales. Para ejercer estos derechos, comuníquese con nosotros utilizando la información proporcionada en la sección de Contacto."}
                </p>
              </motion.section>
              
              <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "white" }}>
                  {lang === "en"
                    ? "7. Contact Us"
                    : "7. Contáctenos"}
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {lang === "en"
                    ? "If you have any questions or concerns about our Privacy Policy, please contact us through our Contact page or email us directly."
                    : "Si tiene preguntas o inquietudes sobre nuestra Política de Privacidad, comuníquese con nosotros a través de nuestra página de Contacto o envíenos un correo electrónico directamente."}
                </p>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
