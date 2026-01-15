import { useState, useEffect, useLayoutEffect } from 'react';
import { ConversionPage } from './components/ConversionPage';
import { PhoneShell } from './components/PhoneShell';
import { TabNavigator } from './components/TabNavigator';

type View = 'main' | 'conversion';

interface ConvertedFile {
  id: string;
  name: string;
  originalName: string;
  size: number;
  date: string;
  type: string;
  pages: number;
}

function AppContent() {
  const [currentView, setCurrentView] = useState<View>('main');
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([
    {
      id: '1',
      name: '2024年度工作总结.pptx',
      originalName: '2024年度工作总结.pdf',
      size: 2456789,
      date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      type: 'ppt',
      pages: 24,
    },
    {
      id: '2',
      name: '产品设计方案v2.pptx',
      originalName: '产品设计方案v2.pdf',
      size: 5234567,
      date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      type: 'ppt',
      pages: 18,
    },
    {
      id: '3',
      name: '市场分析报告.pptx',
      originalName: '市场分析报告.pdf',
      size: 3678901,
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'ppt',
      pages: 32,
    },
    {
      id: '4',
      name: '用户研究文档.pptx',
      originalName: '用户研究文档.pdf',
      size: 1890234,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'ppt',
      pages: 15,
    },
    {
      id: '5',
      name: '项目进度汇报.pptx',
      originalName: '项目进度汇报.pdf',
      size: 4123456,
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'ppt',
      pages: 28,
    },
  ]);

  // Global attachment preview loading bar state
  const [previewLoading, setPreviewLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [barVisible, setBarVisible] = useState(false);

  // Boot-time loader to cover first paint white strip
  const [bootLoading, setBootLoading] = useState(true);
  useLayoutEffect(() => {
    // show a minimal bar immediately on first mount
    setBarVisible(true);
    setProgress(0.1);
    const t = window.setTimeout(() => {
      setBootLoading(false); // stop boot loader after a short time
    }, 800);
    return () => window.clearTimeout(t);
  }, []);

  // Register listeners before paint to avoid missing first preview event
  useLayoutEffect(() => {
    const onStart = () => {
      setBarVisible(true);
      setPreviewLoading(true);
    };
    const onEnd = () => {
      setPreviewLoading(false);
    };
    const onToggle = (e: Event) => {
      const detail = (e as CustomEvent<boolean>).detail;
      if (detail) onStart();
      else onEnd();
    };
    window.addEventListener('attachment-preview-start', onStart);
    window.addEventListener('attachment-preview-end', onEnd);
    window.addEventListener('attachment-preview-loading', onToggle as EventListener);

    return () => {
      window.removeEventListener('attachment-preview-start', onStart);
      window.removeEventListener('attachment-preview-end', onEnd);
      window.removeEventListener('attachment-preview-loading', onToggle as EventListener);
    };
  }, []);

  useEffect(() => {
    let timer: number | undefined;
    if (previewLoading) {
      // active preview: indeterminate progress up to 90%
      setBarVisible(true);
      setProgress(prev => (prev === 0 ? 0.1 : prev));
      timer = window.setInterval(() => {
        setProgress(prev => Math.min(prev + Math.max(0.03, (1 - prev) * 0.2), 0.9));
      }, 300);
    } else if (!previewLoading && !bootLoading && barVisible) {
      // finish and fade out
      setProgress(1);
      const doneTimer = window.setTimeout(() => {
        setBarVisible(false);
        setProgress(0);
      }, 300);
      return () => window.clearTimeout(doneTimer);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [previewLoading, bootLoading, barVisible]);

  const handleStartConversion = () => {
    setCurrentView('conversion');
  };

  const handleBackToHome = () => {
    setCurrentView('main');
  };

  const handleConversionComplete = (file: ConvertedFile) => {
    setConvertedFiles(prev => [file, ...prev]);
  };

  const handleDeleteFile = (id: string) => {
    setConvertedFiles(prev => prev.filter(file => file.id !== id));
  };

  return (
    <>
      {/* Global top loading bar for attachment preview and first paint */}
      {(barVisible || bootLoading) && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: 3,
            background: 'rgba(0,0,0,0.06)',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              height: '100%',
              background: '#3b82f6',
              boxShadow: '0 0 2px #3b82f6',
              transition: 'width 200ms ease',
            }}
          />
        </div>
      )}

      {currentView === 'conversion' ? (
        <ConversionPage 
          onBack={handleBackToHome}
          onConversionComplete={handleConversionComplete}
        />
      ) : (
        <TabNavigator
          convertedFiles={convertedFiles}
          onDeleteFile={handleDeleteFile}
          onStartConversion={handleStartConversion}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <PhoneShell>
      <AppContent />
    </PhoneShell>
  );
}
