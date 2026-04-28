import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight, Check, Zap, Crown, Building2,
  Quote, MessageCircle, Sparkles, Shield, Clock,
  ChevronDown
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import BlurReveal from "@/components/shared/BlurReveal";
import { useState } from "react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Planes = () => {
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      icon: Zap,
      name: t("plans.start.name"),
      tagline: t("plans.start.tagline"),
      ideal: t("plans.start.ideal"),
      priceSetup: t("plans.start.price.setup"),
      priceMonthly: t("plans.start.price.monthly"),
      features: [
        t("plans.start.f1"), t("plans.start.f2"), t("plans.start.f3"),
        t("plans.start.f4"), t("plans.start.f5"), t("plans.start.f6"),
      ],
      highlighted: false,
      accent: "rgba(59, 130, 246, 0.12)",
      accentSolid: "#3B82F6",
    },
    {
      icon: Crown,
      name: t("plans.pro.name"),
      tagline: t("plans.pro.tagline"),
      ideal: t("plans.pro.ideal"),
      priceSetup: t("plans.pro.price.setup"),
      priceMonthly: t("plans.pro.price.monthly"),
      features: [
        t("plans.pro.f1"), t("plans.pro.f2"), t("plans.pro.f3"),
        t("plans.pro.f4"), t("plans.pro.f5"), t("plans.pro.f6"), t("plans.pro.f7"),
      ],
      highlighted: true,
      accent: "rgba(168, 85, 247, 0.15)",
      accentSolid: "#A855F7",
    },
    {
      icon: Building2,
      name: t("plans.enterprise.name"),
      tagline: t("plans.enterprise.tagline"),
      ideal: t("plans.enterprise.ideal"),
      priceSetup: t("plans.enterprise.price.setup"),
      priceMonthly: t("plans.enterprise.price.monthly"),
      features: [
        t("plans.enterprise.f1"), t("plans.enterprise.f2"), t("plans.enterprise.f3"),
        t("plans.enterprise.f4"), t("plans.enterprise.f5"), t("plans.enterprise.f6"),
        t("plans.enterprise.f7"),
      ],
      highlighted: false,
      accent: "rgba(234, 179, 8, 0.12)",
      accentSolid: "#EAB308",
    },
  ];

  const testimonials = [
    { textKey: "plans.testimonials.1.text", nameKey: "plans.testimonials.1.name", roleKey: "plans.testimonials.1.role" },
    { textKey: "plans.testimonials.2.text", nameKey: "plans.testimonials.2.name", roleKey: "plans.testimonials.2.role" },
    { textKey: "plans.testimonials.3.text", nameKey: "plans.testimonials.3.name", roleKey: "plans.testimonials.3.role" },
  ];

  const faqs = [
    {
      q: lang === 'es' ? '¿Cuánto tarda la implementación?' : 'How long does implementation take?',
      a: lang === 'es'
        ? 'El plan Start se implementa en 1-2 semanas. El Pro en 2-4 semanas. Enterprise puede variar según la complejidad, pero nunca más de 6 semanas.'
        : 'Start plan is implemented in 1-2 weeks. Pro in 2-4 weeks. Enterprise varies by complexity but never more than 6 weeks.',
    },
    {
      q: lang === 'es' ? '¿Qué pasa si no me gusta el resultado?' : 'What if I don\'t like the result?',
      a: lang === 'es'
        ? 'Trabajamos con revisiones incluidas en cada plan. Si no estás conforme, lo ajustamos hasta que funcione para tu negocio.'
        : 'We work with revisions included in each plan. If you\'re not satisfied, we adjust until it works for your business.',
    },
    {
      q: lang === 'es' ? '¿Necesito conocimientos técnicos?' : 'Do I need technical knowledge?',
      a: lang === 'es'
        ? 'Cero. Nosotros hacemos todo. Vos te enfocás en tu negocio, nosotros en el sistema.'
        : 'Zero. We handle everything. You focus on your business, we handle the system.',
    },
    {
      q: lang === 'es' ? '¿Puedo cambiar de plan después?' : 'Can I change plans later?',
      a: lang === 'es'
        ? 'Sí, podés escalar de plan en cualquier momento. Solo pagás la diferencia.'
        : 'Yes, you can scale up at any time. You just pay the difference.',
    },
  ];

  const guarantees = [
    { icon: Shield, text: lang === 'es' ? 'Sin costos ocultos' : 'No hidden costs' },
    { icon: Clock, text: lang === 'es' ? 'Entrega en tiempo' : 'On-time delivery' },
    { icon: Sparkles, text: lang === 'es' ? 'Soporte incluido' : 'Support included' },
  ];

  return (
    <Layout>
      <div className="relative w-full min-h-full" style={{ backgroundColor: 'var(--surface)' }}>

        {/* ========== COMPACT HEADER — not a full hero ========== */}
        <section className="pt-32 sm:pt-40 pb-6 sm:pb-10">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{ backgroundColor: 'var(--icon-bg)', border: '1px solid var(--border-color)' }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                {t("plans.hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-aspekta font-bold mb-5"
              style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.8rem, 5vw, 3rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              {t("plans.hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto mb-8"
              style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '165%' }}
            >
              {t("plans.hero.subtitle")}
            </motion.p>

            {/* Guarantees strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {guarantees.map((g, i) => (
                <div key={i} className="flex items-center gap-2">
                  <g.icon className="w-4 h-4" style={{ color: 'var(--text-muted)' }} strokeWidth={1.5} />
                  <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{g.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== PLANS GRID — the main event ========== */}
        <section className="py-10 sm:py-16" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start"
            >
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`relative rounded-[24px] p-7 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlighted ? 'card-contrast lg:scale-[1.04]' : 'card-surface'
                  }`}
                  style={plan.highlighted ? { boxShadow: '0 12px 48px rgba(0,0,0,0.15)' } : {}}
                >
                  {/* Popular badge */}
                  {plan.highlighted && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED)', color: '#FFFFFF' }}
                    >
                      {lang === 'es' ? '⭐ Más popular' : '⭐ Most popular'}
                    </div>
                  )}

                  {/* Plan icon + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.12)' : plan.accent }}
                    >
                      <plan.icon
                        className="w-5 h-5"
                        style={{ color: plan.highlighted ? 'var(--card-text)' : plan.accentSolid }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold leading-tight"
                        style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className="text-xs font-medium"
                        style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-muted)' }}
                      >
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Price block */}
                  <div
                    className="rounded-2xl p-5 mb-5"
                    style={{ backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.06)' : 'var(--icon-bg)' }}
                  >
                    <p
                      className="text-2xl font-bold mb-0.5"
                      style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}
                    >
                      {plan.priceSetup}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-secondary)' }}
                    >
                      {plan.priceMonthly}
                    </p>
                  </div>

                  {/* Ideal for */}
                  <p
                    className="text-xs mb-5 leading-relaxed"
                    style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-muted)' }}
                  >
                    {plan.ideal}
                  </p>

                  {/* Features */}
                  <div className="flex-1 space-y-2.5 mb-7">
                    {plan.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            backgroundColor: plan.highlighted ? 'var(--card-text)' : plan.accentSolid,
                            color: plan.highlighted ? 'var(--card-bg)' : '#FFFFFF',
                          }}
                        >
                          <Check className="w-3 h-3" strokeWidth={2.5} />
                        </div>
                        <span
                          className="text-sm leading-snug"
                          style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.highlighted ? '' : 'btn-secondary'
                    }`}
                    style={plan.highlighted ? {
                      background: 'linear-gradient(135deg, #A855F7, #7C3AED)',
                      color: '#FFFFFF',
                    } : {}}
                  >
                    {lang === 'es' ? 'Empezar ahora' : 'Get started'}
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== TESTIMONIALS — horizontal compact ========== */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: 'var(--text-muted)' }}>
                {t("plans.testimonials.label")}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
                {t("plans.testimonials.title")}
              </h2>
            </BlurReveal>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="rounded-[20px] p-7 card-surface flex flex-col transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Quote className="w-6 h-6 mb-4 opacity-20" style={{ color: 'var(--text-primary)' }} strokeWidth={1} />
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
                    "{t(testimonial.textKey)}"
                  </p>
                  <div className="pt-4 flex items-center gap-3" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: 'var(--icon-bg)', color: 'var(--text-primary)' }}
                    >
                      {t(testimonial.nameKey).charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t(testimonial.nameKey)}</p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t(testimonial.roleKey)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== FAQ — accordion style ========== */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: 'var(--text-muted)' }}>
                {lang === 'es' ? 'PREGUNTAS FRECUENTES' : 'FAQ'}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
                {lang === 'es' ? '¿Tenés dudas?' : 'Got questions?'}
              </h2>
            </BlurReveal>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <BlurReveal key={i} delay={0.05 * i}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-300 card-surface"
                    style={{ borderColor: openFaq === i ? 'var(--text-muted)' : undefined }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="text-sm font-semibold pr-4" style={{ color: 'var(--text-primary)' }}>
                        {faq.q}
                      </span>
                      <ChevronDown
                        className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                        style={{
                          color: 'var(--text-muted)',
                          transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                        strokeWidth={2}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  </div>
                </BlurReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section className="py-16 sm:py-24 card-contrast">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <BlurReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: 'var(--card-text)' }}>
                {t("plans.cta.title")}
              </h2>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: 'var(--card-text-muted)' }}>
                {t("plans.cta.subtitle")}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--card-text)', color: 'var(--card-bg)' }}
                >
                  {t("plans.cta.button")}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <a
                  href="https://wa.me/5492995741741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ border: '1px solid rgba(128,128,128,0.3)', color: 'var(--card-text)' }}
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  {t("plans.cta.secondary")}
                </a>
              </div>
            </BlurReveal>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Planes;
