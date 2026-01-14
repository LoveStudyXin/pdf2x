import { useState } from 'react';
import { Smartphone } from 'lucide-react';

interface PhoneShellProps {
  children: React.ReactNode;
}

export function PhoneShell({ children }: PhoneShellProps) {
  const [phoneModelIdx, setPhoneModelIdx] = useState(0);

  const phoneModels = [
    { name: 'iPhone 14', width: 430, height: 932, borderRadius: 40 },
    { name: 'iPhone SE', width: 375, height: 667, borderRadius: 32 },
    { name: 'Android', width: 412, height: 915, borderRadius: 36 },
  ];

  const phone = phoneModels[phoneModelIdx];

  const phoneStyle: React.CSSProperties = {
    width: phone.width,
    height: phone.height,
    borderRadius: phone.borderRadius,
    boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 1.5px 0 #fff inset',
    border: '8px solid #222',
    background: '#222',
    position: 'relative',
    overflow: 'hidden',
    margin: '32px auto',
    display: 'flex',
    flexDirection: 'column',
  };

  const PhoneTopBar = (
    <div
      style={{
        position: 'absolute',
        top: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 60,
        height: 8,
        borderRadius: 4,
        background: '#333',
        opacity: 0.5,
        zIndex: 10,
      }}
    />
  );

  const PhoneBottomBar = (
    <div
      style={{
        position: 'absolute',
        bottom: 14,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 36,
        height: 4,
        borderRadius: 2,
        background: '#333',
        opacity: 0.3,
        zIndex: 10,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-start py-8">
      {/* 手机型号选择器 */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <Smartphone className="w-5 h-5 text-slate-500" />
        <select
          value={phoneModelIdx}
          onChange={(e) => setPhoneModelIdx(Number(e.target.value))}
          className="px-2 py-1 rounded-lg border bg-white text-sm"
          style={{ minWidth: 140 }}
        >
          {phoneModels.map((m, idx) => (
            <option key={m.name} value={idx}>{m.name}</option>
          ))}
        </select>
      </div>

      {/* 手机外框 */}
      <div style={phoneStyle}>
        {PhoneTopBar}
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#f8fafc',
            borderRadius: phone.borderRadius - 8,
            overflow: 'auto',
            position: 'relative',
            zIndex: 1,
            boxSizing: 'border-box',
          }}
        >
          {children}
        </div>
        {PhoneBottomBar}
      </div>
    </div>
  );
}
