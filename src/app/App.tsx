import { useState } from 'react';
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
