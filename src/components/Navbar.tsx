import { useState, useEffect } from 'react';
import instaTechLogo from '@/assets/instatech-logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/industries', label: t('nav.industries') },
    { path: '/solutions', label: t('nav.solutions') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg' : 'glass-strong'}`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={instaTechLogo} alt="Insta-Tech Labs" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-cover" />
            <span className="font-bold text-sm sm:text-lg text-foreground hidden xs:inline">Insta-Tech Labs</span>
          </Link>

          {/* Desktop Nav - hidden below lg */}
          <div className="hidden lg:flex items-center gap-0.5">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/consultation"
              className="hidden lg:inline-flex px-3 py-1.5 rounded-lg hero-gradient text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {t('nav.consultation')}
            </Link>

            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-xs font-medium">{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            {/* Mobile menu button - visible below lg */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Sheet Menu */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side={lang === 'ar' ? 'right' : 'left'} className="w-[280px] sm:w-[320px] p-0 glass-strong">
          <SheetHeader className="p-4 pb-2 border-b border-border">
            <SheetTitle className="flex items-center gap-2">
              <img src={instaTechLogo} alt="Insta-Tech Labs" className="w-8 h-8 rounded-lg object-cover" />
              <span className="font-bold text-sm text-foreground">Insta-Tech Labs</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col py-2 overflow-y-auto max-h-[calc(100vh-120px)]">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-5 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10 border-s-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3 mt-2 border-t border-border">
              <Link
                to="/consultation"
                onClick={() => setMobileOpen(false)}
                className="block w-full px-4 py-3 rounded-xl hero-gradient text-primary-foreground text-sm font-medium text-center"
              >
                {t('nav.consultation')}
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
