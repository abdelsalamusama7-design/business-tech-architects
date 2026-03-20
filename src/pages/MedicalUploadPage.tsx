import { useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Upload, X, FileImage, ZoomIn, ZoomOut, RotateCw, Trash2, CheckCircle2, AlertCircle, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  type: 'xray' | 'lab';
  name: string;
}

const MedicalUploadPage = () => {
  const { lang } = useLanguage();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const t = (en: string, ar: string) => (lang === 'ar' ? ar : en);

  const handleFiles = useCallback((fileList: FileList | null, type: 'xray' | 'lab' = 'xray') => {
    if (!fileList) return;
    const newFiles: UploadedFile[] = Array.from(fileList).map(file => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
      type,
      name: file.name,
    }));
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const removeFile = (id: string) => {
    setFiles(prev => {
      const file = prev.find(f => f.id === id);
      if (file) URL.revokeObjectURL(file.preview);
      return prev.filter(f => f.id !== id);
    });
    if (selectedFile?.id === id) {
      setSelectedFile(null);
      setZoom(1);
      setRotation(0);
    }
  };

  const openPreview = (file: UploadedFile) => {
    setSelectedFile(file);
    setZoom(1);
    setRotation(0);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <FileImage size={16} />
            {t('Medical Imaging', 'التصوير الطبي')}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t('Upload X-Rays & Lab Results', 'رفع الأشعة والتحاليل')}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            {t(
              'Capture from your camera or upload files from your device. Supports images and PDF files.',
              'صوّر من كاميرا الموبايل أو ارفع ملفات من جهازك. يدعم الصور وملفات PDF.'
            )}
          </p>
        </motion.div>

        {/* Upload Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Camera Capture */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => cameraInputRef.current?.click()}
            className="flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Camera size={32} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-lg">{t('Camera', 'الكاميرا')}</p>
              <p className="text-muted-foreground text-sm mt-1">
                {t('Take a photo of your X-ray or lab result', 'صوّر الأشعة أو التحاليل')}
              </p>
            </div>
          </motion.button>

          {/* File Upload */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Upload size={32} className="text-accent-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-lg">{t('Upload Files', 'رفع ملفات')}</p>
              <p className="text-muted-foreground text-sm mt-1">
                {t('Select images or PDFs from your device', 'اختر صور أو ملفات PDF من جهازك')}
              </p>
            </div>
          </motion.button>

          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={e => handleFiles(e.target.files)}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.pdf"
            multiple
            className="hidden"
            onChange={e => handleFiles(e.target.files)}
          />
        </div>

        {/* Drag & Drop Zone */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`rounded-2xl border-2 border-dashed p-8 text-center transition-all mb-8 ${
            dragOver
              ? 'border-primary bg-primary/10 scale-[1.02]'
              : 'border-muted-foreground/20 bg-muted/30'
          }`}
        >
          <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
          <p className="text-muted-foreground text-sm">
            {t('Or drag and drop files here', 'أو اسحب الملفات وأفلتها هنا')}
          </p>
          <p className="text-muted-foreground/60 text-xs mt-1">
            {t('JPG, PNG, PDF — Max 20MB', 'JPG, PNG, PDF — حد أقصى 20 ميجا')}
          </p>
        </motion.div>

        {/* Uploaded Files Grid */}
        {files.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                {t('Uploaded Files', 'الملفات المرفوعة')} ({files.length})
              </h2>
              {files.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    files.forEach(f => URL.revokeObjectURL(f.preview));
                    setFiles([]);
                    setSelectedFile(null);
                  }}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 size={14} className="me-1" />
                  {t('Clear All', 'مسح الكل')}
                </Button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <AnimatePresence>
                {files.map((file, i) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative group rounded-xl overflow-hidden border border-border bg-card aspect-square cursor-pointer"
                    onClick={() => openPreview(file)}
                  >
                    {file.file.type === 'application/pdf' ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-muted/50 p-3">
                        <FileImage size={32} className="text-primary mb-2" />
                        <p className="text-xs text-foreground text-center truncate w-full">{file.name}</p>
                        <p className="text-[10px] text-muted-foreground mt-1">PDF</p>
                      </div>
                    ) : (
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ZoomIn size={24} className="text-white" />
                    </div>
                    {/* Delete button */}
                    <button
                      onClick={e => { e.stopPropagation(); removeFile(file.id); }}
                      className="absolute top-1.5 end-1.5 w-7 h-7 rounded-full bg-destructive/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive"
                    >
                      <X size={14} />
                    </button>
                    {/* Success badge */}
                    <div className="absolute bottom-1.5 start-1.5">
                      <CheckCircle2 size={16} className="text-emerald-400 drop-shadow-md" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Info Note */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
              <AlertCircle size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(
                  'Your files are stored locally on your device and are not uploaded to any server. For a complete medical consultation, please contact us directly.',
                  'ملفاتك محفوظة على جهازك فقط ولم يتم رفعها على أي سيرفر. للحصول على استشارة طبية كاملة، تواصل معنا مباشرة.'
                )}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Full-screen Image Preview Modal */}
      <AnimatePresence>
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col"
            onClick={() => { setSelectedFile(null); setZoom(1); setRotation(0); }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-black/50" onClick={e => e.stopPropagation()}>
              <p className="text-white text-sm truncate max-w-[50%]">{selectedFile.name}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom(z => Math.max(0.5, z - 0.25))}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ZoomOut size={18} />
                </button>
                <span className="text-white text-xs min-w-[40px] text-center">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={() => setZoom(z => Math.min(3, z + 0.25))}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={() => setRotation(r => r + 90)}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <RotateCw size={18} />
                </button>
                <button
                  onClick={() => { setSelectedFile(null); setZoom(1); setRotation(0); }}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Image View */}
            <div className="flex-1 flex items-center justify-center overflow-auto p-4" onClick={e => e.stopPropagation()}>
              {selectedFile.file.type === 'application/pdf' ? (
                <div className="text-center text-white">
                  <FileImage size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">{selectedFile.name}</p>
                  <p className="text-sm text-white/60 mt-2">
                    {t('PDF preview is not available', 'معاينة PDF غير متاحة')}
                  </p>
                </div>
              ) : (
                <img
                  src={selectedFile.preview}
                  alt={selectedFile.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-200"
                  style={{
                    transform: `scale(${zoom}) rotate(${rotation}deg)`,
                  }}
                  draggable={false}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MedicalUploadPage;
