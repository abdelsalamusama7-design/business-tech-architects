import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Facebook } from 'lucide-react';

const ContactPage = () => {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('contact.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: Phone, label: '01227080430', href: 'tel:01227080430', title: t('contact.call') },
              { icon: Phone, label: '01554400044', href: 'tel:01554400044', title: t('contact.call') },
              { icon: MessageCircle, label: t('contact.whatsapp'), href: 'https://wa.me/201227080430', title: 'WhatsApp' },
              { icon: Facebook, label: 'Instatech Labs', href: 'https://www.facebook.com/share/1CUnRRiTGN/', title: 'Facebook' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-gradient rounded-2xl border border-border p-6 flex items-center gap-4 hover:glow-primary transition-all duration-300 block"
                >
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                    <div className="font-semibold text-foreground">{item.label}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-gradient rounded-2xl border border-border p-10 text-center flex flex-col items-center justify-center">
              <CheckCircle2 size={64} className="text-primary mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-2">{t('consultation.success')}</h2>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
              className="card-gradient rounded-2xl border border-border p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('consultation.name')}</label>
                <input required type="text" className="w-full bg-muted rounded-xl px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('consultation.phone')}</label>
                <input required type="tel" className="w-full bg-muted rounded-xl px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contact.message')}</label>
                <textarea required rows={4} className="w-full bg-muted rounded-xl px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border resize-none" />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                <Send size={20} /> {t('contact.send')}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
