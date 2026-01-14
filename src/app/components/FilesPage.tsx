import { useState } from 'react';
import { Search, Download, Trash2, MoreVertical, ArrowLeft, FileText } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

// 确保图片链接有效 
import imgImage1 from '../../assets/images/preview1.png';
import imgImage2 from '../../assets/images/preview2.png';
import imgImage3 from '../../assets/images/preview3.png';
const src1 = typeof imgImage1 === 'string' ? imgImage1 : imgImage1.src;
const src2 = typeof imgImage2 === 'string' ? imgImage2 : imgImage2.src;
const src3 = typeof imgImage3 === 'string' ? imgImage3 : imgImage3.src;

export interface ConvertedFile {
  id: string;
  name: string;
  originalName: string;
  size: number;
  date: string;
  type: string;
  pages: number;
}

interface FilesPageProps {
  files: ConvertedFile[];
  onDeleteFile: (id: string) => void;
}

export function FilesPage({ files, onDeleteFile }: FilesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [previewFile, setPreviewFile] = useState<ConvertedFile | null>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const fileDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    const diffTime = today.getTime() - fileDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      // 今天 - 显示相对时间
      const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
      if (diffHours < 1) {
        const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
        return `${diffMinutes}分钟前`;
      }
      return `${diffHours}小时前`;
    } else {
      // 昨天及更早 - 显示日期
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  };

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 如果在预览模式，显示预览页面
  if (previewFile) {
    return (
      <div className="fixed inset-0 bg-slate-50 z-50 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-4 py-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setPreviewFile(null)}
              className="p-2 -ml-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <h1 className="text-lg text-slate-800">文件预览</h1>
          </div>
        </div>

        {/* Preview Content - Phone Mockup */}
        <div className="flex-1 px-4 py-4 pb-24 flex items-center justify-center">
          <div className="relative w-[380px] h-[780px] bg-black rounded-[44px] shadow-2xl p-3">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-3xl" />
            {/* Screen */}
            <div className="relative w-full h-full bg-white rounded-[36px] overflow-hidden">
              <div className="absolute inset-0 pt-6 overflow-y-auto">
                <div className="space-y-3 p-3">
                  <img src={src1} alt="第 1 页" className="w-full rounded-lg border border-slate-200" />
                  <img src={src2} alt="第 2 页" className="w-full rounded-lg border border-slate-200" />
                  <img src={src3} alt="第 3 页" className="w-full rounded-lg border border-slate-200" />
                  <img src={src3} alt="第 4 页" className="w-full rounded-lg border border-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 bg-slate-50">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            下载文件
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-4 sticky top-0 z-10">
        <h1 className="text-lg text-slate-800 mb-3">我的文件</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="搜索文件..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-lg text-sm border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="px-4 py-4">
        {filteredFiles.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-10 h-10 text-slate-300" />
            </div>
            <p className="text-slate-400 text-sm">
              {searchQuery ? '未找到相关文件' : '还没有转换过的文件'}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {filteredFiles.map((file) => (
              <div
                key={file.id}
                className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-all cursor-pointer"
                onClick={() => setPreviewFile(file)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm text-slate-800 truncate mb-1">{file.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{formatFileSize(file.size)}</span>
                      <span>•</span>
                      <span>{file.pages} 页</span>
                      <span>•</span>
                      <span>{formatDate(file.date)}</span>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="w-4 h-4 text-slate-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        <Download className="w-4 h-4 mr-2" />
                        下载
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteFile(file.id);
                        }}
                        className="text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        删除
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}