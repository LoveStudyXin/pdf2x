import { User, Mail, Shield, FileText, ChevronRight, Info, MessageSquare, Settings, History, HelpCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { useState } from 'react';

export function ProfilePage() {
  const [showAbout, setShowAbout] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* User Profile Header */}
      <div className="bg-white px-4 pt-6 pb-4">
        <button className="w-full flex items-center justify-between py-2 hover:bg-slate-50 rounded-lg transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
              U
            </div>
            <div className="text-left">
              <p className="text-base text-slate-800">用户名</p>
              <p className="text-xs text-slate-500">ID: 12345678</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      {/* Statistics */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-2xl text-slate-800 mb-1">12</p>
            <p className="text-xs text-slate-500">转换次数</p>
          </div>
          <div className="text-center border-l border-slate-100">
            <p className="text-2xl text-slate-800 mb-1">86</p>
            <p className="text-xs text-slate-500">转换页数</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 space-y-4">
        {/* Contact Section */}
        <div>
          <p className="text-xs text-slate-400 px-2 mb-3">联系我们</p>
          <div className="bg-white rounded-2xl overflow-hidden">
            <button 
              onClick={() => setShowAbout(true)}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-sm text-slate-800">关于我们</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>

            <button 
              onClick={() => setShowFeedback(true)}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-sm text-slate-800">意见反馈</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>

            <button 
              onClick={() => setShowPrivacy(true)}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-purple-500" />
                </div>
                <span className="text-sm text-slate-800">帮助中心</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* About Dialog */}
      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">关于我们</DialogTitle>
            <DialogDescription className="sr-only">了解 PDF2x 应用的相关信息</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-slate-800 mb-2">PDF2x</h3>
              <p className="text-sm text-slate-500">专业的文档转换工具</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600 space-y-2">
              <p>
                PDF2x 致力于为用户提供高效、便捷的文档转换服务。我们的使命是让每个人都能轻松处理各种文档格式。
              </p>
              <p>
                目前我们提供 PDF to PPT 转换服务，更多功能正在开发中。
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4" />
                <span>联系邮箱：support@pdf2x.com</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Feedback Dialog */}
      <Dialog open={showFeedback} onOpenChange={setShowFeedback}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">意见反馈</DialogTitle>
            <DialogDescription className="sr-only">提交您的意见和建议</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-600 mb-2 block">您的建议</label>
              <textarea 
                className="w-full h-32 px-4 py-3 bg-slate-50 rounded-xl text-sm border-none focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="请告诉我们您的想法..."
                aria-label="反馈建议"
              />
            </div>

            <div>
              <label className="text-sm text-slate-600 mb-2 block">联系方式（选填）</label>
              <input 
                type="text"
                className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="微信号或邮箱"
                aria-label="联系方式"
              />
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-sm transition-colors">
              提交反馈
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Dialog */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">隐私政策</DialogTitle>
            <DialogDescription className="sr-only">查看隐私政策详细内容</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            <div className="space-y-3 text-sm text-slate-600">
              <div>
                <h4 className="text-slate-800 mb-2">信息收集</h4>
                <p>我们仅在必要时收集您的文件信息，用于提供文档转换服务。所有文件在转换完成后会自动删除。</p>
              </div>

              <div>
                <h4 className="text-slate-800 mb-2">数据安全</h4>
                <p>我们采用行业标准的加密技术保护您的数据安全。您的文件在传输和处理过程中都经过加密处理。</p>
              </div>

              <div>
                <h4 className="text-slate-800 mb-2">信息使用</h4>
                <p>我们不会将您的个人信息或文件内容分享给任何第三方。所有数据仅用于提供服务。</p>
              </div>

              <div>
                <h4 className="text-slate-800 mb-2">Cookie 使用</h4>
                <p>我们使用必要的 Cookie 来改善用户体验和服务质量。您可以在浏览器设置中管理 Cookie。</p>
              </div>

              <div>
                <h4 className="text-slate-800 mb-2">联系我们</h4>
                <p>如果您对隐私政策有任何疑问，请通过 support@pdf2x.com 联系我们。</p>
              </div>
            </div>

            <div className="text-xs text-slate-400 pt-2">
              最后更新：2026年1月8日
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}