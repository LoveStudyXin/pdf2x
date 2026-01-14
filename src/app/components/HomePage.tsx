import { FileText, Sparkles, ArrowRight, FileSpreadsheet, Clock, Network } from 'lucide-react';
import { Button } from './ui/button';

interface HomePageProps {
  onStartConversion: () => void;
}

export function HomePage({ onStartConversion }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-8 flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm mb-4">
          <Sparkles className="w-4 h-4" />
          <span>PDF2x 系列工具</span>
        </div>
        <h1 className="text-2xl sm:text-3xl mb-2 text-slate-800">我们能帮你解决什么？</h1>
        <p className="text-slate-500 text-sm">让文档转换变得简单高效</p>
      </div>

      {/* Main Feature Card */}
      <div className="flex-1 flex items-start justify-center px-2 max-w-md mx-auto w-full">
        <div className="w-full">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-10 -translate-x-10"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                <div className="inline-block bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                  限时免费
                </div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <FileText className="w-7 h-7" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl mb-4">PDF 转 PPT</h2>
              
              <p className="text-blue-50 mb-8 leading-relaxed">
                支持保留原有排版与所有图像
              </p>
              
              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  高质量转换
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  快速处理
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  安全可靠
                </span>
              </div>
              
              <Button 
                onClick={onStartConversion}
                className="bg-white text-blue-600 hover:bg-blue-50 rounded-2xl px-8 py-5 h-auto shadow-none w-full font-medium"
              >
                立即使用
              </Button>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-slate-400" />
              <h3 className="text-slate-600 text-sm">即将推出</h3>
            </div>
            
            <div>
              {/* PDF to Tree */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors w-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Network className="w-7 h-7 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-800 font-medium text-base mb-1">PDF 转 Tree</h4>
                    <p className="text-sm text-slate-600 mb-3">把PDF变成「可理解的知识结构」</p>
                    
                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg text-xs">
                        层级目录树
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg text-xs">
                        MD/JSON/HTML多格式输出
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}