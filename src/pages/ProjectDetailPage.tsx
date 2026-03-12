import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Code2, Globe, Monitor, Smartphone, Layout, Shield, Zap, Users, MessageCircle } from 'lucide-react';
import { getProjectById, categories, allProjects } from '@/data/portfolioData';
import { useState } from 'react';

import dashboardMockup from '@/assets/mockups/dashboard-mockup.jpg';
import responsiveMockup from '@/assets/mockups/responsive-mockup.jpg';
import landingMockup from '@/assets/mockups/landing-mockup.jpg';
import authMockup from '@/assets/mockups/auth-mockup.jpg';

const mockupScreens = [
  { image: dashboardMockup, labelAr: 'لوحة التحكم', labelEn: 'Dashboard' },
  { image: landingMockup, labelAr: 'الصفحة الرئيسية', labelEn: 'Landing Page' },
  { image: responsiveMockup, labelAr: 'تصميم متجاوب', labelEn: 'Responsive Design' },
  { image: authMockup, labelAr: 'تسجيل الدخول', labelEn: 'Authentication' },
];

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const project = getProjectById(id || '');
  const [activeScreen, setActiveScreen] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {lang === 'ar' ? 'المشروع غير موجود' : 'Project not found'}
          </h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            {lang === 'ar' ? 'العودة للأعمال' : 'Back to Portfolio'}
          </Link>
        </div>
      </div>
    );
  }

  const category = categories[project.catIndex];
  const demoUrl = `/demo/${project.id}`;
  const externalUrl = project.url;
  const hasExternalUrl = !!project.url;

  const highlights = [
    { icon: Monitor, labelAr: 'تصميم عصري', labelEn: 'Modern Design' },
    { icon: Smartphone, labelAr: 'متجاوب مع الموبايل', labelEn: 'Mobile Responsive' },
    { icon: Zap, labelAr: 'أداء سريع', labelEn: 'Fast Performance' },
    { icon: Shield, labelAr: 'آمن ومحمي', labelEn: 'Secure & Protected' },
    { icon: Layout, labelAr: 'واجهة سهلة', labelEn: 'Easy Interface' },
    { icon: Users, labelAr: 'تجربة مستخدم ممتازة', labelEn: 'Great UX' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            {lang === 'ar' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            {lang === 'ar' ? 'العودة للأعمال' : 'Back to Portfolio'}
          </Link>
        </motion.div>

        {/* Hero Section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-border mb-12"
        >
          <img
            src={project.image}
            alt={lang === 'ar' ? project.titleAr : project.title}
            className="w-full h-72 md:h-[420px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
            <span className="text-xs font-medium text-primary bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {lang === 'ar' ? category?.ar : category?.en}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-3">
              {lang === 'ar' ? project.titleAr : project.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-6">
              {lang === 'ar' ? project.descriptionAr : project.descriptionEn}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={demoUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-primary"
              >
                <Globe size={20} />
                {lang === 'ar' ? 'معاينة الموقع مباشرة' : 'Preview Live Demo'}
                <ExternalLink size={18} />
              </Link>
              <a
                href="https://wa.me/201227080430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                <MessageCircle size={18} />
                {lang === 'ar' ? 'اطلب مشروع مشابه' : 'Request Similar'}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mockup Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {lang === 'ar' ? 'عناصر ومكونات الموقع' : 'Website Components & Screens'}
          </h2>

          {/* Active Screen */}
          <div className="rounded-2xl overflow-hidden border border-border mb-4 relative group cursor-pointer" onClick={() => window.open(liveUrl, '_blank')}>
            <img
              src={mockupScreens[activeScreen].image}
              alt={lang === 'ar' ? mockupScreens[activeScreen].labelAr : mockupScreens[activeScreen].labelEn}
              className="w-full h-64 md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2 shadow-xl">
                <Globe size={18} /> {lang === 'ar' ? 'معاينة الموقع' : 'Preview Website'}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {mockupScreens.map((screen, i) => (
              <button
                key={i}
                onClick={() => setActiveScreen(i)}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeScreen === i ? 'border-primary glow-primary' : 'border-border hover:border-primary/50'
                }`}
              >
                <img src={screen.image} alt={lang === 'ar' ? screen.labelAr : screen.labelEn} className="w-full h-20 md:h-28 object-cover" />
                <p className="text-xs font-medium text-center py-2 text-muted-foreground">
                  {lang === 'ar' ? screen.labelAr : screen.labelEn}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {lang === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {(lang === 'ar' ? project.featuresAr : project.featuresEn).map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 card-gradient rounded-xl border border-border p-4 group hover:glow-primary transition-all"
                >
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {lang === 'ar' ? 'مميزات التصميم' : 'Design Highlights'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="card-gradient rounded-xl border border-border p-4 text-center group hover:glow-primary transition-all"
                >
                  <div className="w-10 h-10 mx-auto rounded-lg hero-gradient flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <h.icon size={18} className="text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{lang === 'ar' ? h.labelAr : h.labelEn}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Visit Website Card */}
            <div className="hero-gradient rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
              <div className="relative">
                <Globe size={32} className="text-primary-foreground mx-auto mb-3" />
                <h3 className="font-bold text-primary-foreground text-lg mb-2">
                  {lang === 'ar' ? 'شاهد الموقع مباشرة' : 'View Live Website'}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  {lang === 'ar' ? 'اضغط لمعاينة الموقع والتجربة بنفسك' : 'Click to preview and experience it yourself'}
                </p>
                <a
                  href={liveUrl}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="block w-full py-3 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  {lang === 'ar' ? 'افتح الموقع' : 'Open Website'}
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="card-gradient rounded-2xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Code2 size={18} className="text-primary" />
                {lang === 'ar' ? 'التقنيات المستخدمة' : 'Tech Stack'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="card-gradient rounded-2xl border border-border p-6 text-center">
              <h3 className="font-bold text-foreground mb-3">
                {lang === 'ar' ? 'هل تريد مشروع مشابه؟' : 'Want a similar project?'}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {lang === 'ar' ? 'تواصل معنا للحصول على استشارة مجانية' : 'Contact us for a free consultation'}
              </p>
              <Link
                to="/consultation"
                className="block w-full py-3 rounded-xl hero-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-center mb-3"
              >
                {lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
              </Link>
              <a
                href="https://wa.me/201227080430"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Similar Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {lang === 'ar' ? 'مشاريع مشابهة' : 'Similar Projects'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProjects
              .filter(p => p.catIndex === project.catIndex && p.id !== project.id)
              .slice(0, 4)
              .map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/portfolio/${p.id}`}
                    className="block card-gradient rounded-2xl border border-border overflow-hidden group hover:glow-primary transition-all duration-300"
                  >
                    <div className="h-36 overflow-hidden relative">
                      <img
                        src={p.image}
                        alt={lang === 'ar' ? p.titleAr : p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        {lang === 'ar' ? categories[p.catIndex]?.ar : categories[p.catIndex]?.en}
                      </p>
                      <h3 className="font-semibold text-foreground text-sm">
                        {lang === 'ar' ? p.titleAr : p.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
