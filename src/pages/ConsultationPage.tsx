import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ConsultationPage = () => {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', company: '', businessType: '', projectIdea: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('consultations').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        business_type: form.businessType,
        project_idea: form.projectIdea.trim(),
      });
      if (error) throw error;
      setSubmitted(true);
      toast.success(lang === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Request submitted successfully!');
    } catch (err) {
      console.error('Consultation submit error:', err);
      toast.error(lang === 'ar' ? 'حدث خطأ، حاول مرة أخرى' : 'Something went wrong, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('consultation.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('consultation.subtitle')}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-gradient rounded-2xl border border-border p-10 text-center">
              <CheckCircle2 size={64} className="text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('consultation.success')}</h2>
              <p className="text-muted-foreground mb-6">{t('consultation.whatsapp')}</p>
              <a
                href="https://wa.me/201227080430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={20} /> {t('contact.whatsapp')}
              </a>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="card-gradient rounded-2xl border border-border p-8 space-y-6"
            >
              {[
                { key: 'name', label: t('consultation.name'), type: 'text' },
                { key: 'phone', label: t('consultation.phone'), type: 'tel' },
                { key: 'company', label: t('consultation.company'), type: 'text' },
              ].map(field => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-muted rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('consultation.businessType')}</label>
                <select
                  required
                  value={form.businessType}
                  onChange={e => setForm({ ...form, businessType: e.target.value })}
                  className="w-full bg-muted rounded-xl px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border"
                >
                  <option value="">{lang === 'ar' ? 'اختر نوع النشاط' : 'Select business type'}</option>
                  {[
                    { ar: 'عيادة / مستشفى', en: 'Clinic / Hospital' },
                    { ar: 'مطعم', en: 'Restaurant' },
                    { ar: 'صيدلية', en: 'Pharmacy' },
                    { ar: 'متجر تجزئة', en: 'Retail Store' },
                    { ar: 'شركة', en: 'Company' },
                    { ar: 'تعليم', en: 'Education' },
                    { ar: 'أخرى', en: 'Other' },
                  ].map((opt, i) => (
                    <option key={i} value={lang === 'ar' ? opt.ar : opt.en}>
                      {lang === 'ar' ? opt.ar : opt.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('consultation.projectIdea')}</label>
                <textarea
                  required
                  rows={4}
                  value={form.projectIdea}
                  onChange={e => setForm({ ...form, projectIdea: e.target.value })}
                  className="w-full bg-muted rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <Send size={20} /> {t('consultation.submit')}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
