import { useState } from 'react';
import { Upload, FileText, Loader2, CheckCircle, Download, ArrowLeft, MessageCircle, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface ConversionPageProps {
  onBack: () => void;
  onConversionComplete: (file: any) => void;
}

type ConversionStep = 'upload' | 'analyzing' | 'converting' | 'complete';

export function ConversionPage({ onBack, onConversionComplete }: ConversionPageProps) {
  const [step, setStep] = useState<ConversionStep>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [showUploadOptions, setShowUploadOptions] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setShowUploadOptions(false);
    startConversion(file);
  };

  const handleLocalUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      handleFileSelect(file);
    }
  };

  const startConversion = (file: File) => {
    // Analyzing phase
    setStep('analyzing');
    setProgress(0);
    
    setTimeout(() => {
      setProgress(30);
      // Converting phase
      setStep('converting');
      
      let currentProgress = 30;
      const interval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setStep('complete');
          
          // Save to file list
          const convertedFile = {
            id: Date.now().toString(),
            name: file.name.replace('.pdf', '.pptx'),
            originalName: file.name,
            size: file.size,
            date: new Date().toISOString(),
            type: 'ppt',
            pages: Math.floor(Math.random() * 20) + 5,
          };
          onConversionComplete(convertedFile);
        }
      }, 500);
    }, 1500);
  };

  const simulateWeChatImport = () => {
    // Simulate WeChat file selection
    const mockFile = new File(['mock pdf content'], '示例文档.pdf', { type: 'application/pdf' });
    handleFileSelect(mockFile);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <h1 className="text-base text-slate-800">PDF to PPT</h1>
            <p className="text-xs text-slate-500">转换您的 PDF 文档</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {step === 'upload' && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-lg text-slate-800 mb-2">导入 PDF 文件</h2>
              <p className="text-sm text-slate-500">请选择您要转换的 PDF 文档</p>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              <Button
                onClick={() => simulateWeChatImport()}
                variant="outline"
                className="w-full h-14 rounded-xl border-2 border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                <span>从微信聊天记录导入</span>
              </Button>

              <div className="relative">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleLocalUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="file-upload"
                />
                <Button
                  variant="outline"
                  className="w-full h-14 rounded-xl border-2 border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50 transition-all"
                  asChild
                >
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <FolderOpen className="w-5 h-5 mr-2 text-blue-600" />
                    <span>从本地文件上传</span>
                  </label>
                </Button>
              </div>
            </div>

            <div className="max-w-md mx-auto mt-8 p-4 bg-blue-50 rounded-xl">
              <p className="text-xs text-blue-800">
                <strong>提示：</strong>支持最大 20MB 的 PDF 文件，转换过程约需 10-30 秒
              </p>
            </div>
          </div>
        )}

        {(step === 'analyzing' || step === 'converting') && (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                </div>
                <h2 className="text-lg text-slate-800 mb-2">
                  {step === 'analyzing' ? '正在分析文件...' : '正在转换中...'}
                </h2>
                <p className="text-sm text-slate-500">
                  {selectedFile?.name}
                </p>
              </div>

              <div className="space-y-4">
                <Progress value={progress} className="h-2" />
                <div className="text-center text-sm text-slate-600">
                  {progress}%
                </div>

                <div className="space-y-2 text-xs text-slate-500">
                  <div className={`flex items-center gap-2 ${step === 'analyzing' ? 'text-blue-600' : 'text-green-600'}`}>
                    <CheckCircle className="w-4 h-4" />
                    <span>文件已加载</span>
                  </div>
                  <div className={`flex items-center gap-2 ${step === 'converting' ? 'text-blue-600' : 'text-slate-400'}`}>
                    {step === 'converting' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                    )}
                    <span>正在转换格式</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                    <span>优化输出</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'complete' && (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-lg text-slate-800 mb-2">转换完成！</h2>
                <p className="text-sm text-slate-500">
                  您的文件已成功转换为 PPT 格式
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-800">{selectedFile?.name.replace('.pdf', '.pptx')}</p>
                    <p className="text-xs text-slate-500">
                      {((selectedFile?.size || 0) / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-6">
                  <Download className="w-5 h-5 mr-2" />
                  下载文件
                </Button>
                <Button 
                  onClick={onBack}
                  variant="outline" 
                  className="w-full rounded-xl py-6"
                >
                  返回首页
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
