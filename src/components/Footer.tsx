import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/consultation', label: t('nav.consultation') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IL</span>
              </div>
              <span className="font-bold text-lg text-foreground">Instatech Labs</span>
            </div>
            <p className="text-muted-foreground text-sm">{t('footer.description')}</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">{t('footer.quickLinks')}</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map(link => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">{t('footer.contactInfo')}</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:01227080430" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} /> 01227080430
              </a>
              <a href="tel:01554400044" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} /> 01554400044
              </a>
              <a href="https://wa.me/201227080430" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle size={16} /> {t('contact.whatsapp')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center space-y-2">
          <p className="text-sm font-semibold text-foreground">
            {lang === 'ar' ? 'تنفيذ وتصميم' : 'Designed & Developed by'} Instatech Labs
          </p>
          <p className="text-sm text-muted-foreground" dir="ltr">
            للتواصل: 01227080430 / 01554400044
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Instatech Labs. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
