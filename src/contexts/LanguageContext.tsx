import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.services': { ar: 'الخدمات', en: 'Services' },
  'nav.industries': { ar: 'القطاعات', en: 'Industries' },
  'nav.solutions': { ar: 'الحلول', en: 'Solutions' },
  'nav.portfolio': { ar: 'أعمالنا', en: 'Portfolio' },
  'nav.blog': { ar: 'المدونة', en: 'Blog' },
  'nav.pricing': { ar: 'الأسعار', en: 'Pricing' },
  'nav.consultation': { ar: 'استشارة مجانية', en: 'Free Consultation' },
  'nav.about': { ar: 'من نحن', en: 'About' },
  'nav.contact': { ar: 'تواصل معنا', en: 'Contact' },

  // Hero
  'hero.headline': { ar: 'ابنِ أنظمة رقمية ذكية لأعمالك', en: 'Build Smart Digital Systems For Your Business' },
  'hero.subheadline': { ar: 'Instatech Labs تطور مواقع إلكترونية قوية وتطبيقات موبايل وأنظمة برمجية مخصصة تساعد الشركات على أتمتة العمليات والنمو بشكل أسرع.', en: 'Instatech Labs develops powerful websites, mobile apps, and custom software systems that help companies automate operations and grow faster.' },
  'hero.cta1': { ar: 'ابدأ مشروعك', en: 'Start Your Project' },
  'hero.cta2': { ar: 'تواصل عبر واتساب', en: 'Contact on WhatsApp' },

  // Services
  'services.title': { ar: 'خدماتنا', en: 'Our Services' },
  'services.subtitle': { ar: 'حلول تقنية شاملة لتحويل أعمالك رقمياً', en: 'Comprehensive tech solutions to digitally transform your business' },
  'services.custom_software': { ar: 'تطوير برمجيات مخصصة', en: 'Custom Software Development' },
  'services.website': { ar: 'تطوير المواقع الإلكترونية', en: 'Website Development' },
  'services.mobile': { ar: 'تطوير تطبيقات الموبايل', en: 'Mobile App Development' },
  'services.healthcare': { ar: 'أنظمة الرعاية الصحية', en: 'Healthcare Systems' },
  'services.pos': { ar: 'أنظمة نقاط البيع للمطاعم', en: 'Restaurant POS Systems' },
  'services.pharmacy': { ar: 'منصات الصيدلة', en: 'Pharmacy Platforms' },
  'services.ai': { ar: 'أنظمة الأتمتة بالذكاء الاصطناعي', en: 'AI Automation Systems' },
  'services.ecommerce': { ar: 'منصات التجارة الإلكترونية', en: 'E-commerce Platforms' },
  'services.business': { ar: 'أنظمة إدارة الأعمال', en: 'Business Management Systems' },

  // Industries
  'industries.title': { ar: 'القطاعات التي نخدمها', en: 'Industries We Serve' },
  'industries.subtitle': { ar: 'حلول مخصصة لكل قطاع', en: 'Tailored solutions for every industry' },

  // Solutions
  'solutions.title': { ar: 'حلولنا المتكاملة', en: 'Our Integrated Solutions' },
  'solutions.subtitle': { ar: 'حلول شاملة مصممة خصيصاً لاحتياجات عملك', en: 'Comprehensive solutions designed for your business needs' },

  // Portfolio
  'portfolio.title': { ar: 'أعمالنا', en: 'Our Portfolio' },
  'portfolio.subtitle': { ar: 'أكثر من 100 مشروع ناجح في مختلف القطاعات', en: 'Over 100 successful projects across various industries' },
  'portfolio.view': { ar: 'عرض المشروع', en: 'View Project' },
  'portfolio.all': { ar: 'الكل', en: 'All' },

  // Blog
  'blog.title': { ar: 'المدونة', en: 'Blog' },
  'blog.subtitle': { ar: 'مقالات ونصائح في عالم التقنية والأعمال', en: 'Articles and tips in tech and business' },
  'blog.readMore': { ar: 'اقرأ المزيد', en: 'Read More' },

  // Pricing
  'pricing.title': { ar: 'خطط الأسعار', en: 'Pricing Plans' },
  'pricing.subtitle': { ar: 'أسعار مرنة تناسب جميع الأعمال', en: 'Flexible pricing for all businesses' },
  'pricing.starter': { ar: 'البداية', en: 'Starter' },
  'pricing.professional': { ar: 'الاحترافية', en: 'Professional' },
  'pricing.enterprise': { ar: 'المؤسسات', en: 'Enterprise' },
  'pricing.getStarted': { ar: 'ابدأ الآن', en: 'Get Started' },
  'pricing.contactUs': { ar: 'تواصل معنا', en: 'Contact Us' },

  // Consultation
  'consultation.title': { ar: 'احصل على استشارة مجانية لأعمالك', en: 'Get a Free Consultation for Your Business' },
  'consultation.subtitle': { ar: 'دعنا نساعدك في تحويل فكرتك إلى واقع رقمي', en: 'Let us help you turn your idea into digital reality' },
  'consultation.name': { ar: 'الاسم', en: 'Name' },
  'consultation.phone': { ar: 'رقم الهاتف', en: 'Phone' },
  'consultation.company': { ar: 'اسم الشركة', en: 'Company Name' },
  'consultation.businessType': { ar: 'نوع النشاط', en: 'Business Type' },
  'consultation.projectIdea': { ar: 'فكرة المشروع', en: 'Project Idea' },
  'consultation.submit': { ar: 'إرسال', en: 'Submit' },
  'consultation.success': { ar: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.', en: 'Your request has been sent successfully! We will contact you soon.' },
  'consultation.whatsapp': { ar: 'أو تواصل معنا مباشرة عبر واتساب', en: 'Or contact us directly on WhatsApp' },

  // About
  'about.title': { ar: 'من نحن', en: 'About Us' },
  'about.subtitle': { ar: 'شريكك التقني لبناء المستقبل الرقمي', en: 'Your tech partner for building the digital future' },
  'about.mission': { ar: 'مهمتنا', en: 'Our Mission' },
  'about.missionText': { ar: 'نسعى لتمكين الشركات من خلال حلول تقنية مبتكرة تساعدها على النمو والتطور في العصر الرقمي.', en: 'We empower businesses through innovative tech solutions that help them grow and evolve in the digital age.' },
  'about.vision': { ar: 'رؤيتنا', en: 'Our Vision' },
  'about.visionText': { ar: 'أن نكون الشريك التقني الأول للشركات في المنطقة العربية.', en: 'To be the leading tech partner for businesses in the Arab region.' },

  // Contact
  'contact.title': { ar: 'تواصل معنا', en: 'Contact Us' },
  'contact.subtitle': { ar: 'نحن هنا لمساعدتك. تواصل معنا بأي وسيلة تناسبك.', en: 'We are here to help. Reach out to us through any convenient method.' },
  'contact.message': { ar: 'رسالتك', en: 'Your Message' },
  'contact.send': { ar: 'إرسال الرسالة', en: 'Send Message' },
  'contact.call': { ar: 'اتصل بنا', en: 'Call Us' },
  'contact.whatsapp': { ar: 'واتساب', en: 'WhatsApp' },

  // Footer
  'footer.description': { ar: 'Instatech Labs - شريكك التقني لبناء أنظمة رقمية ذكية.', en: 'Instatech Labs - Your tech partner for building smart digital systems.' },
  'footer.rights': { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
  'footer.quickLinks': { ar: 'روابط سريعة', en: 'Quick Links' },
  'footer.contactInfo': { ar: 'معلومات التواصل', en: 'Contact Info' },

  // AI Chatbot
  'ai.title': { ar: 'مساعد المبيعات الذكي', en: 'Smart Sales Assistant' },
  'ai.welcome': { ar: 'مرحباً! أنا مساعد انستاتك لابز الذكي. كيف يمكنني مساعدتك؟', en: 'Hello! I am Instatech Labs smart assistant. How can I help you?' },
  'ai.placeholder': { ar: 'اكتب رسالتك...', en: 'Type your message...' },
  'ai.send': { ar: 'إرسال', en: 'Send' },

  // Common
  'common.learnMore': { ar: 'اعرف المزيد', en: 'Learn More' },
  'common.getStarted': { ar: 'ابدأ الآن', en: 'Get Started' },
  'common.viewAll': { ar: 'عرض الكل', en: 'View All' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'ar';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
