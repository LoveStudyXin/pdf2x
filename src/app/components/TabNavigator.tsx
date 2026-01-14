import { useState } from 'react';
import { Home, FileText, User } from 'lucide-react';
import { HomePage } from './HomePage';
import { FilesPage } from './FilesPage';
import { ProfilePage } from './ProfilePage';

interface ConvertedFile {
  id: string;
  name: string;
  originalName: string;
  size: number;
  date: string;
  type: string;
  pages: number;
}

interface TabNavigatorProps {
  convertedFiles: ConvertedFile[];
  onDeleteFile: (id: string) => void;
  onStartConversion: () => void;
}

export function TabNavigator({ convertedFiles, onDeleteFile, onStartConversion }: TabNavigatorProps) {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onStartConversion={onStartConversion} />;
      case 'files':
        return <FilesPage files={convertedFiles} onDeleteFile={onDeleteFile} />;
      case 'profile':
        return <ProfilePage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto bg-slate-50">{renderContent()}</div>
      <div className="bg-white border-t border-slate-200 px-4 py-3">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
              activeTab === 'home'
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">首页</span>
          </button>

          <button
            onClick={() => setActiveTab('files')}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all relative ${
              activeTab === 'files'
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-xs">文件</span>
            {convertedFiles.length > 0 && (
              <span className="absolute top-1 right-3 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {convertedFiles.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
              activeTab === 'profile'
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">我的</span>
          </button>
        </div>
      </div>
    </div>
  );
}
