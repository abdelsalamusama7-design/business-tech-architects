import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Printer, Plus, Trash2, Stethoscope, Pill, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  notes: string;
}

const PrescriptionPage = () => {
  const { lang } = useLanguage();
  const printRef = useRef<HTMLDivElement>(null);

  const t = (en: string, ar: string) => (lang === 'ar' ? ar : en);

  // Doctor/Clinic info
  const [doctorInfo, setDoctorInfo] = useState({
    clinicName: '',
    doctorName: '',
    specialty: '',
    phone: '',
    address: '',
    license: '',
  });

  // Patient info
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    age: '',
    gender: '',
    date: new Date().toISOString().split('T')[0],
    diagnosis: '',
  });

  // Medicines
  const [medicines, setMedicines] = useState<Medicine[]>([
    { id: crypto.randomUUID(), name: '', dosage: '', frequency: '', duration: '', notes: '' },
  ]);

  const [generalNotes, setGeneralNotes] = useState('');

  const addMedicine = () => {
    setMedicines(prev => [
      ...prev,
      { id: crypto.randomUUID(), name: '', dosage: '', frequency: '', duration: '', notes: '' },
    ]);
  };

  const removeMedicine = (id: string) => {
    if (medicines.length <= 1) return;
    setMedicines(prev => prev.filter(m => m.id !== id));
  };

  const updateMedicine = (id: string, field: keyof Medicine, value: string) => {
    setMedicines(prev => prev.map(m => (m.id === id ? { ...m, [field]: value } : m)));
  };

  const handlePrint = () => {
    const content = printRef.current;
    if (!content) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="UTF-8">
        <title>${t('Prescription', 'روشتة طبية')}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; padding: 24px; color: #1a1a1a; direction: ${lang === 'ar' ? 'rtl' : 'ltr'}; }
          .header { text-align: center; border-bottom: 3px double #2563eb; padding-bottom: 16px; margin-bottom: 20px; }
          .clinic-name { font-size: 22px; font-weight: bold; color: #1e40af; margin-bottom: 4px; }
          .doctor-name { font-size: 16px; font-weight: 600; color: #374151; }
          .specialty { font-size: 13px; color: #6b7280; margin-top: 2px; }
          .contact-row { display: flex; justify-content: center; gap: 20px; font-size: 11px; color: #6b7280; margin-top: 8px; }
          .patient-section { background: #f0f7ff; border-radius: 8px; padding: 12px 16px; margin-bottom: 16px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
          .patient-field { font-size: 13px; }
          .patient-field span { font-weight: 600; color: #1e40af; }
          .diagnosis { grid-column: 1 / -1; border-top: 1px solid #dbeafe; padding-top: 8px; margin-top: 4px; }
          .rx-symbol { font-size: 28px; font-weight: bold; color: #2563eb; margin-bottom: 12px; }
          .medicine-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
          .medicine-table th { background: #1e40af; color: white; padding: 8px 10px; font-size: 12px; text-align: ${lang === 'ar' ? 'right' : 'left'}; }
          .medicine-table td { border-bottom: 1px solid #e5e7eb; padding: 8px 10px; font-size: 13px; }
          .medicine-table tr:nth-child(even) { background: #f9fafb; }
          .med-name { font-weight: 600; color: #1e3a5f; }
          .notes-section { border-top: 2px solid #e5e7eb; padding-top: 12px; margin-top: 12px; }
          .notes-title { font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 6px; }
          .notes-text { font-size: 12px; color: #4b5563; line-height: 1.6; }
          .footer { margin-top: 40px; display: flex; justify-content: space-between; align-items: flex-end; }
          .signature { text-align: center; }
          .signature-line { width: 180px; border-top: 1px solid #9ca3af; margin-bottom: 4px; }
          .signature-label { font-size: 11px; color: #6b7280; }
          .license { font-size: 10px; color: #9ca3af; text-align: center; margin-top: 20px; }
          @media print { body { padding: 16px; } }
        </style>
      </head>
      <body>${content.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 300);
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Stethoscope size={16} />
            {t('Medical Prescription', 'الروشتة الطبية')}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t('Write & Print Prescription', 'كتابة وطباعة الروشتة')}
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            {t('Fill in doctor and patient details, add medicines, then print.', 'أدخل بيانات الدكتور والمريض، أضف الأدوية، ثم اطبع.')}
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Doctor / Clinic Info */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="bg-card border border-border rounded-2xl p-5">
            <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Stethoscope size={18} className="text-primary" />
              {t('Doctor / Clinic Info', 'بيانات الدكتور / العيادة')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input placeholder={t('Clinic Name', 'اسم العيادة')} value={doctorInfo.clinicName}
                onChange={e => setDoctorInfo(p => ({ ...p, clinicName: e.target.value }))} />
              <Input placeholder={t('Doctor Name', 'اسم الدكتور')} value={doctorInfo.doctorName}
                onChange={e => setDoctorInfo(p => ({ ...p, doctorName: e.target.value }))} />
              <Input placeholder={t('Specialty', 'التخصص')} value={doctorInfo.specialty}
                onChange={e => setDoctorInfo(p => ({ ...p, specialty: e.target.value }))} />
              <Input placeholder={t('Phone Number', 'رقم التليفون')} value={doctorInfo.phone}
                onChange={e => setDoctorInfo(p => ({ ...p, phone: e.target.value }))} />
              <Input placeholder={t('Address', 'العنوان')} value={doctorInfo.address} className="sm:col-span-2"
                onChange={e => setDoctorInfo(p => ({ ...p, address: e.target.value }))} />
              <Input placeholder={t('License Number', 'رقم الترخيص')} value={doctorInfo.license}
                onChange={e => setDoctorInfo(p => ({ ...p, license: e.target.value }))} />
            </div>
          </motion.div>

          {/* Patient Info */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-5">
            <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <ClipboardList size={18} className="text-primary" />
              {t('Patient Info', 'بيانات المريض')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input placeholder={t('Patient Name', 'اسم المريض')} value={patientInfo.name}
                onChange={e => setPatientInfo(p => ({ ...p, name: e.target.value }))} />
              <Input placeholder={t('Age', 'السن')} value={patientInfo.age} type="number"
                onChange={e => setPatientInfo(p => ({ ...p, age: e.target.value }))} />
              <select value={patientInfo.gender} onChange={e => setPatientInfo(p => ({ ...p, gender: e.target.value }))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground">
                <option value="">{t('Gender', 'النوع')}</option>
                <option value="male">{t('Male', 'ذكر')}</option>
                <option value="female">{t('Female', 'أنثى')}</option>
              </select>
              <Input type="date" value={patientInfo.date}
                onChange={e => setPatientInfo(p => ({ ...p, date: e.target.value }))} />
              <Input placeholder={t('Diagnosis', 'التشخيص')} value={patientInfo.diagnosis} className="sm:col-span-2"
                onChange={e => setPatientInfo(p => ({ ...p, diagnosis: e.target.value }))} />
            </div>
          </motion.div>

          {/* Medicines */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
                <Pill size={18} className="text-primary" />
                {t('Medicines', 'الأدوية')}
              </h2>
              <Button size="sm" variant="outline" onClick={addMedicine}>
                <Plus size={14} className="me-1" /> {t('Add', 'إضافة')}
              </Button>
            </div>
            <div className="space-y-4">
              {medicines.map((med, i) => (
                <div key={med.id} className="bg-muted/30 border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary">{t('Medicine', 'دواء')} #{i + 1}</span>
                    {medicines.length > 1 && (
                      <button onClick={() => removeMedicine(med.id)} className="text-destructive hover:text-destructive/80">
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input placeholder={t('Medicine Name', 'اسم الدواء')} value={med.name}
                      onChange={e => updateMedicine(med.id, 'name', e.target.value)} />
                    <Input placeholder={t('Dosage (e.g. 500mg)', 'الجرعة (مثال: 500 مجم)')} value={med.dosage}
                      onChange={e => updateMedicine(med.id, 'dosage', e.target.value)} />
                    <Input placeholder={t('Frequency (e.g. 3x daily)', 'عدد المرات (مثال: 3 مرات يومياً)')} value={med.frequency}
                      onChange={e => updateMedicine(med.id, 'frequency', e.target.value)} />
                    <Input placeholder={t('Duration (e.g. 7 days)', 'المدة (مثال: 7 أيام)')} value={med.duration}
                      onChange={e => updateMedicine(med.id, 'duration', e.target.value)} />
                    <Input placeholder={t('Notes', 'ملاحظات')} value={med.notes} className="sm:col-span-2"
                      onChange={e => updateMedicine(med.id, 'notes', e.target.value)} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* General Notes */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-5">
            <h2 className="text-base font-semibold text-foreground mb-3">{t('General Notes', 'ملاحظات عامة')}</h2>
            <Textarea placeholder={t('Additional instructions...', 'تعليمات إضافية...')} value={generalNotes}
              onChange={e => setGeneralNotes(e.target.value)} rows={3} />
          </motion.div>

          {/* Print Button */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="flex justify-center">
            <Button size="lg" onClick={handlePrint} className="gap-2 px-8 text-base">
              <Printer size={20} />
              {t('Print Prescription', 'طباعة الروشتة')}
            </Button>
          </motion.div>
        </div>

        {/* Hidden Print Template */}
        <div className="hidden">
          <div ref={printRef}>
            {/* Clinic Header */}
            <div className="header">
              {doctorInfo.clinicName && <div className="clinic-name">{doctorInfo.clinicName}</div>}
              {doctorInfo.doctorName && <div className="doctor-name">{lang === 'ar' ? 'د. ' : 'Dr. '}{doctorInfo.doctorName}</div>}
              {doctorInfo.specialty && <div className="specialty">{doctorInfo.specialty}</div>}
              <div className="contact-row">
                {doctorInfo.phone && <span>📞 {doctorInfo.phone}</span>}
                {doctorInfo.address && <span>📍 {doctorInfo.address}</span>}
              </div>
            </div>

            {/* Patient Info */}
            <div className="patient-section">
              <div className="patient-field"><span>{t('Name: ', 'الاسم: ')}</span>{patientInfo.name || '—'}</div>
              <div className="patient-field"><span>{t('Age: ', 'السن: ')}</span>{patientInfo.age || '—'}</div>
              <div className="patient-field"><span>{t('Date: ', 'التاريخ: ')}</span>{patientInfo.date}</div>
              <div className="patient-field"><span>{t('Gender: ', 'النوع: ')}</span>
                {patientInfo.gender === 'male' ? t('Male', 'ذكر') : patientInfo.gender === 'female' ? t('Female', 'أنثى') : '—'}
              </div>
              {patientInfo.diagnosis && (
                <div className="patient-field diagnosis"><span>{t('Diagnosis: ', 'التشخيص: ')}</span>{patientInfo.diagnosis}</div>
              )}
            </div>

            {/* Rx */}
            <div className="rx-symbol">℞</div>

            {/* Medicines Table */}
            <table className="medicine-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t('Medicine', 'الدواء')}</th>
                  <th>{t('Dosage', 'الجرعة')}</th>
                  <th>{t('Frequency', 'عدد المرات')}</th>
                  <th>{t('Duration', 'المدة')}</th>
                  <th>{t('Notes', 'ملاحظات')}</th>
                </tr>
              </thead>
              <tbody>
                {medicines.filter(m => m.name).map((med, i) => (
                  <tr key={med.id}>
                    <td>{i + 1}</td>
                    <td className="med-name">{med.name}</td>
                    <td>{med.dosage || '—'}</td>
                    <td>{med.frequency || '—'}</td>
                    <td>{med.duration || '—'}</td>
                    <td>{med.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* General Notes */}
            {generalNotes && (
              <div className="notes-section">
                <div className="notes-title">{t('Notes:', 'ملاحظات:')}</div>
                <div className="notes-text">{generalNotes}</div>
              </div>
            )}

            {/* Footer */}
            <div className="footer">
              <div style={{ fontSize: '11px', color: '#9ca3af' }}>{patientInfo.date}</div>
              <div className="signature">
                <div className="signature-line" />
                <div className="signature-label">{t('Doctor Signature', 'توقيع الطبيب')}</div>
              </div>
            </div>

            {doctorInfo.license && (
              <div className="license">{t('License No: ', 'رقم الترخيص: ')}{doctorInfo.license}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionPage;
