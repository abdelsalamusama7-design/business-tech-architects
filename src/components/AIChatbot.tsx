import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'bot' | 'user';
  content: string;
}

const AI_RESPONSES_AR: Record<string, string> = {
  'default': 'شكراً لتواصلك! يمكنني مساعدتك في اختيار الحل المناسب لأعمالك. ما نوع النشاط التجاري الخاص بك؟',
  'موقع': 'رائع! نقدم تطوير مواقع إلكترونية احترافية تبدأ من 5,000 جنيه. تشمل تصميم متجاوب، SEO، ولوحة تحكم. هل تريد حجز استشارة مجانية؟',
  'تطبيق': 'نطور تطبيقات موبايل لنظامي iOS و Android. المشاريع تبدأ من 15,000 جنيه حسب المتطلبات. ما نوع التطبيق الذي تحتاجه؟',
  'عيادة': 'لدينا نظام إدارة عيادات متكامل يشمل: حجز المواعيد، السجلات الطبية، الفواتير، والتقارير. هل تريد مشاهدة عرض توضيحي؟',
  'صيدلية': 'نوفر منصة صيدلة متكاملة لإدارة المخزون، الطلبات، والفواتير. يمكنك تجربة النظام مجاناً!',
  'مطعم': 'لدينا نظام POS متكامل للمطاعم يشمل: القوائم الرقمية، إدارة الطلبات، والتوصيل. تواصل معنا للتفاصيل!',
  'سعر': 'أسعارنا تبدأ من:\n• مواقع إلكترونية: 5,000 جنيه\n• تطبيقات موبايل: 15,000 جنيه\n• أنظمة مخصصة: 20,000 جنيه\nتواصل معنا للحصول على عرض سعر مخصص!',
  'وقت': 'المدة تعتمد على حجم المشروع:\n• مواقع بسيطة: 1-2 أسبوع\n• تطبيقات: 4-8 أسابيع\n• أنظمة متكاملة: 8-16 أسبوع\nنحرص على التسليم في الوقت المحدد.',
};

const AI_RESPONSES_EN: Record<string, string> = {
  'default': 'Thanks for reaching out! I can help you find the right solution for your business. What type of business do you run?',
  'website': 'Great! We offer professional website development starting from $500. Includes responsive design, SEO, and admin panel. Want to book a free consultation?',
  'app': 'We develop mobile apps for iOS and Android. Projects start from $1,500 depending on requirements. What type of app do you need?',
  'clinic': 'We have a comprehensive clinic management system including: appointment booking, medical records, billing, and reports. Want to see a demo?',
  'pharmacy': 'We provide an integrated pharmacy platform for inventory management, orders, and invoicing. You can try the system for free!',
  'restaurant': 'We have a complete POS system for restaurants including: digital menus, order management, and delivery. Contact us for details!',
  'cost': 'Our prices start from:\n• Websites: $500\n• Mobile Apps: $1,500\n• Custom Systems: $2,000\nContact us for a custom quote!',
  'time': 'Timeline depends on project scope:\n• Simple websites: 1-2 weeks\n• Apps: 4-8 weeks\n• Integrated systems: 8-16 weeks\nWe ensure on-time delivery.',
};

const AIChatbot = () => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: '' }
  ]);
  const [input, setInput] = useState('');

  const getResponse = (msg: string): string => {
    const lower = msg.toLowerCase();
    const responses = lang === 'ar' ? AI_RESPONSES_AR : AI_RESPONSES_EN;

    for (const [key, value] of Object.entries(responses)) {
      if (key !== 'default' && lower.includes(key)) return value;
    }
    return responses['default'];
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    const botMsg: Message = { role: 'bot', content: getResponse(input) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 end-6 z-50 w-14 h-14 rounded-full hero-gradient flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow-primary"
        aria-label="AI Assistant"
      >
        <Bot size={28} className="text-primary-foreground" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 end-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl glass-strong shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="hero-gradient p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-primary-foreground" />
                <span className="font-bold text-primary-foreground text-sm">{t('ai.title')}</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'hero-gradient text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}>
                    {msg.content || t('ai.welcome')}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder={t('ai.placeholder')}
                className="flex-1 bg-muted rounded-xl px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
