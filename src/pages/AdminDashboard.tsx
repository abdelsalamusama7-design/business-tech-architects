import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { Users, Clock, Building2, RefreshCw } from 'lucide-react';

interface Consultation {
  id: string;
  name: string;
  phone: string;
  company: string;
  business_type: string;
  project_idea: string;
  created_at: string;
}

const AdminDashboard = () => {
  const { lang } = useLanguage();
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchConsultations = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setConsultations(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                {lang === 'ar' ? 'لوحة تحكم الاستشارات' : 'Consultations Dashboard'}
              </h1>
              <p className="text-muted-foreground mt-2">
                {lang === 'ar' ? `إجمالي الطلبات: ${consultations.length}` : `Total requests: ${consultations.length}`}
              </p>
            </div>
            <button
              onClick={fetchConsultations}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              {lang === 'ar' ? 'تحديث' : 'Refresh'}
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: Users,
              label: lang === 'ar' ? 'إجمالي الطلبات' : 'Total Requests',
              value: consultations.length,
            },
            {
              icon: Clock,
              label: lang === 'ar' ? 'اليوم' : 'Today',
              value: consultations.filter(c => new Date(c.created_at).toDateString() === new Date().toDateString()).length,
            },
            {
              icon: Building2,
              label: lang === 'ar' ? 'شركات فريدة' : 'Unique Companies',
              value: new Set(consultations.map(c => c.company)).size,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-gradient rounded-2xl border border-border p-6"
            >
              <stat.icon size={24} className="text-primary mb-3" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-muted-foreground">
            {lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}
          </div>
        ) : consultations.length === 0 ? (
          <div className="text-center py-20 card-gradient rounded-2xl border border-border">
            <Users size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              {lang === 'ar' ? 'لا توجد طلبات استشارة حتى الآن' : 'No consultation requests yet'}
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card-gradient rounded-2xl border border-border overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-start p-4 font-semibold text-foreground">{lang === 'ar' ? 'الاسم' : 'Name'}</th>
                    <th className="text-start p-4 font-semibold text-foreground">{lang === 'ar' ? 'الهاتف' : 'Phone'}</th>
                    <th className="text-start p-4 font-semibold text-foreground">{lang === 'ar' ? 'الشركة' : 'Company'}</th>
                    <th className="text-start p-4 font-semibold text-foreground">{lang === 'ar' ? 'نوع النشاط' : 'Business Type'}</th>
                    <th className="text-start p-4 font-semibold text-foreground">{lang === 'ar' ? 'فكرة المشروع' : 'Project Idea'}</th>
                    <th className="text-start p-4 font-semibold text-foreground">{lang === 'ar' ? 'التاريخ' : 'Date'}</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((c) => (
                    <tr key={c.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-4 text-foreground font-medium">{c.name}</td>
                      <td className="p-4 text-muted-foreground" dir="ltr">{c.phone}</td>
                      <td className="p-4 text-muted-foreground">{c.company}</td>
                      <td className="p-4">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {c.business_type}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground max-w-xs truncate">{c.project_idea}</td>
                      <td className="p-4 text-muted-foreground text-xs" dir="ltr">
                        {new Date(c.created_at).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                          year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
