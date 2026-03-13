import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, MessageCircle, Code, Smartphone, Brain, ShoppingCart, Building2, Stethoscope, UtensilsCrossed, Pill, CheckCircle2, ExternalLink, Quote, Star, Zap, Shield, Clock, Cpu, Layers, Terminal, Sparkles } from 'lucide-react';
import { allProjects, categories } from '@/data/portfolioData';
import instaTechLogo from '@/assets/instatech-logo.jpg';
import { useEffect, useRef, useState } from 'react';

const services = [
  { icon: Code, key: 'services.custom_software', descAr: 'بناء أنظمة برمجية مصممة خصيصاً لمتطلبات عملك', descEn: 'Build software systems tailored to your business needs' },
  { icon: Terminal, key: 'services.website', descAr: 'مواقع إلكترونية سريعة ومتجاوبة بأحدث التقنيات', descEn: 'Fast, responsive websites with cutting-edge tech' },
  { icon: Smartphone, key: 'services.mobile', descAr: 'تطبيقات iOS و Android بتجربة مستخدم استثنائية', descEn: 'iOS & Android apps with exceptional UX' },
  { icon: Stethoscope, key: 'services.healthcare', descAr: 'أنظمة طبية متكاملة لإدارة العيادات والمستشفيات', descEn: 'Integrated medical systems for clinics & hospitals' },
  { icon: UtensilsCrossed, key: 'services.pos', descAr: 'أنظمة نقاط بيع متطورة لإدارة المطاعم', descEn: 'Advanced POS systems for restaurant management' },
  { icon: Pill, key: 'services.pharmacy', descAr: 'منصات إدارة صيدليات بتتبع المخزون والفواتير', descEn: 'Pharmacy platforms with inventory & billing tracking' },
  { icon: Brain, key: 'services.ai', descAr: 'حلول ذكاء اصطناعي لأتمتة العمليات', descEn: 'AI solutions to automate operations' },
  { icon: ShoppingCart, key: 'services.ecommerce', descAr: 'متاجر إلكترونية متكاملة جاهزة للنمو', descEn: 'Full-featured e-commerce stores ready to scale' },
  { icon: Building2, key: 'services.business', descAr: 'أنظمة ERP و CRM لإدارة المؤسسات', descEn: 'ERP & CRM systems for enterprise management' },
];

const stats = [
  { value: 100, suffix: '+', labelAr: 'مشروع مكتمل', labelEn: 'Completed Projects', icon: Layers },
  { value: 50, suffix: '+', labelAr: 'عميل سعيد', labelEn: 'Happy Clients', icon: Star },
  { value: 9, suffix: '+', labelAr: 'قطاعات نخدمها', labelEn: 'Industries Served', icon: Cpu },
  { value: 24, suffix: '/7', labelAr: 'دعم فني', labelEn: 'Technical Support', icon: Zap },
];

// Animated counter hook
const useCounter = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
};

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HomePage = () => {
  const { t, lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden tech-grid scan-line">
        {/* Ambient orbs */}
        <div className="absolute top-10 end-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-primary/8 blur-[80px] md:blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 start-[5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-accent/8 blur-[100px] md:blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-[hsl(250,70%,55%)]/5 blur-[60px] md:blur-[80px]" />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="10%" y="20%" size={6} />
        <FloatingParticle delay={0.5} x="85%" y="30%" size={4} />
        <FloatingParticle delay={1} x="70%" y="70%" size={8} />
        <FloatingParticle delay={1.5} x="20%" y="80%" size={5} />
        <FloatingParticle delay={2} x="50%" y="15%" size={3} />
        <FloatingParticle delay={0.8} x="30%" y="60%" size={7} />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Logo with tech glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-full hero-gradient opacity-30 blur-3xl scale-[2] group-hover:opacity-50 transition-opacity duration-700" />
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-[1.3] animate-pulse-glow" />
                <img
                  src={instaTechLogo}
                  alt="Insta-Tech Labs"
                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-primary/40 shadow-2xl"
                />
                {/* Orbiting dot */}
                <motion.div
                  className="absolute w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]"
                  style={{ top: '50%', left: '50%' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute -top-[60px] -left-[1.5px]">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border neon-border bg-primary/5 text-primary">
                <Sparkles size={14} className="animate-pulse" />
                {lang === 'ar' ? 'نبني المستقبل الرقمي' : 'Building The Digital Future'}
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight pb-2">
              <span className="gradient-text inline-block pb-1">{t('hero.headline')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
              {t('hero.subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link
                to="/consultation"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-base sm:text-lg hover:opacity-90 transition-all glow-primary inline-flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <span className="relative">{t('hero.cta1')}</span> <Arrow size={20} className="relative" />
              </Link>
              <a
                href="https://wa.me/201227080430"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-primary/30 text-primary font-semibold text-base sm:text-lg hover:bg-primary/5 hover:border-primary/60 transition-all inline-flex items-center justify-center gap-2 neon-border"
              >
                <MessageCircle size={20} /> {t('hero.cta2')}
              </a>
            </div>

            {/* Tech decoration line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 mx-auto max-w-md h-px hero-gradient opacity-30"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-16 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 holo-shimmer" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => {
              const { count, ref } = useCounter(stat.value);
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 rounded-xl neon-border bg-primary/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">{count}{stat.suffix}</div>
                  <div className="text-sm text-muted-foreground">{lang === 'ar' ? stat.labelAr : stat.labelEn}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              {lang === 'ar' ? 'أحدث المشاريع' : 'Latest Projects'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t('portfolio.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t('portfolio.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProjects.slice(0, 8).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="block rounded-2xl overflow-hidden group relative neon-border bg-card hover:border-primary/40 transition-all duration-500"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={lang === 'ar' ? project.titleAr : project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="px-4 py-1.5 rounded-full hero-gradient text-primary-foreground text-xs font-semibold inline-flex items-center gap-1.5 shadow-lg">
                        {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                        <Arrow size={12} />
                      </span>
                    </div>
                    {project.url && (
                      <div className="absolute top-2 end-2 w-7 h-7 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                        <ExternalLink size={13} className="text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary/70 font-medium mb-1">
                      {lang === 'ar' ? categories[project.catIndex]?.ar : categories[project.catIndex]?.en}
                    </p>
                    <h3 className="font-semibold text-foreground text-sm">{lang === 'ar' ? project.titleAr : project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border neon-border text-primary font-semibold hover:bg-primary/5 transition-all">
              {t('common.viewAll')} <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-4">
              {lang === 'ar' ? 'حلول متكاملة' : 'Full Solutions'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t('services.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t('services.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl p-6 neon-border bg-card corner-accents group cursor-pointer hover:bg-primary/[0.02] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    <Icon size={26} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{t(service.key)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lang === 'ar' ? service.descAr : service.descEn}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border neon-border text-primary font-semibold hover:bg-primary/5 transition-all">
              {t('common.viewAll')} <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 holo-shimmer" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              {lang === 'ar' ? 'آراء العملاء' : 'Client Reviews'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {lang === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {lang === 'ar' ? 'آراء حقيقية من عملاء حققنا لهم نتائج استثنائية' : 'Real feedback from clients we delivered exceptional results for'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                nameAr: 'د. أحمد حسن', nameEn: 'Dr. Ahmed Hassan',
                roleAr: 'مدير عيادة طبية - القاهرة', roleEn: 'Medical Clinic Director - Cairo',
                textAr: 'نظام إدارة العيادة اللي عملوه لنا غيّر شغلنا بالكامل. المواعيد بقت منظمة وملفات المرضى كلها إلكترونية. فريق محترف جداً وسريع في التنفيذ.',
                textEn: 'The clinic management system they built completely transformed our workflow. Appointments are organized and all patient records are digital. Very professional and fast team.',
              },
              {
                nameAr: 'م. سارة الفيصل', nameEn: 'Eng. Sara Al-Faisal',
                roleAr: 'مؤسسة متجر إلكتروني - الرياض', roleEn: 'E-commerce Founder - Riyadh',
                textAr: 'المتجر الإلكتروني اللي صمموه فاق توقعاتي. التصميم أنيق والأداء سريع جداً. المبيعات زادت 3 أضعاف بعد الإطلاق. أنصح بيهم بشدة!',
                textEn: 'The e-commerce store they designed exceeded my expectations. Elegant design and blazing fast performance. Sales tripled after launch. Highly recommended!',
              },
              {
                nameAr: 'أ. محمد عبدالله', nameEn: 'Mr. Mohammed Abdullah',
                roleAr: 'صاحب سلسلة مطاعم - جدة', roleEn: 'Restaurant Chain Owner - Jeddah',
                textAr: 'نظام POS المطاعم ممتاز! سهّل علينا إدارة الفروع والطلبات. القائمة الرقمية وفّرت علينا تكاليف الطباعة والتحديث أصبح لحظي.',
                textEn: 'The Restaurant POS system is excellent! It simplified branch and order management. The digital menu saved us printing costs and updates are instant.',
              },
              {
                nameAr: 'د. نورا المنصوري', nameEn: 'Dr. Noura Al-Mansouri',
                roleAr: 'مديرة مدرسة خاصة - دبي', roleEn: 'Private School Principal - Dubai',
                textAr: 'نظام إدارة المدرسة شامل ومتكامل. الحضور والغياب والدرجات وتواصل أولياء الأمور كله في مكان واحد. وفّر علينا وقت وجهد كبير.',
                textEn: 'The school management system is comprehensive. Attendance, grades, and parent communication all in one place. Saved us tremendous time and effort.',
              },
              {
                nameAr: 'أ. خالد الشمري', nameEn: 'Mr. Khalid Al-Shamri',
                roleAr: 'مدير شركة لوجستية - الدمام', roleEn: 'Logistics Company Manager - Dammam',
                textAr: 'منصة إدارة الأسطول اللي طوروها لنا رائعة. تتبع الشحنات والسائقين في الوقت الحقيقي. الكفاءة التشغيلية تحسنت بنسبة 40%.',
                textEn: 'The fleet management platform they developed is amazing. Real-time shipment and driver tracking. Operational efficiency improved by 40%.',
              },
              {
                nameAr: 'صيدلي. ياسمين حسين', nameEn: 'Pharm. Yasmin Hussein',
                roleAr: 'صاحبة صيدلية - الإسكندرية', roleEn: 'Pharmacy Owner - Alexandria',
                textAr: 'نظام الصيدلية وفّر علينا كتير. تنبيهات انتهاء الصلاحية والمخزون التلقائي ممتازة. الدعم الفني سريع ومتعاون دايماً.',
                textEn: 'The pharmacy system saved us a lot. Expiry alerts and automated inventory are excellent. Technical support is always fast and helpful.',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl neon-border bg-card p-6 relative group hover:border-primary/40 transition-all duration-500"
              >
                <Quote size={32} className="text-primary/10 absolute top-4 end-4 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  "{lang === 'ar' ? testimonial.textAr : testimonial.textEn}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
                    {(lang === 'ar' ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{lang === 'ar' ? testimonial.nameAr : testimonial.nameEn}</p>
                    <p className="text-xs text-muted-foreground">{lang === 'ar' ? testimonial.roleAr : testimonial.roleEn}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 tech-grid opacity-20" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="relative p-10 md:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles size={32} className="text-primary-foreground/60 mx-auto mb-4" />
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t('consultation.title')}</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">{t('consultation.subtitle')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/consultation"
                    className="group relative px-8 py-4 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-all inline-flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    <span className="relative">{t('hero.cta1')}</span> <Arrow size={20} className="relative" />
                  </Link>
                  <a
                    href="https://wa.me/201227080430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} /> {t('hero.cta2')}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 border-t border-border relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {lang === 'ar' ? 'لماذا Insta-Tech Labs؟' : 'Why Insta-Tech Labs?'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, ar: 'فريق متخصص', en: 'Expert Team' },
              { icon: Clock, ar: 'تسليم في الوقت المحدد', en: 'On-Time Delivery' },
              { icon: Shield, ar: 'دعم فني مستمر', en: 'Continuous Support' },
              { icon: Zap, ar: 'أسعار تنافسية', en: 'Competitive Pricing' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl neon-border bg-card group hover:bg-primary/[0.02] transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-shadow">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-foreground">{lang === 'ar' ? item.ar : item.en}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
