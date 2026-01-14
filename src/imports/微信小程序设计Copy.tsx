import svgPaths from "./svg-72wwfiqmdc";
import imgImage1 from "figma:asset/ee91803b74ae71bafc3e4e24ba1a924b26b692d8.png";
import imgImage2 from "figma:asset/cd691079311fe26c13f0e95f2fb7cfad22dd4faf.png";
import imgImage3 from "figma:asset/53bdfb63d66cefb9614f83bfa0e9f716a2339466.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[11.999px] h-[590.053px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[174px] relative shrink-0 w-[308px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="h-[173px] relative shrink-0 w-[308px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="h-[173px] relative shrink-0 w-[309px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="h-[173px] relative shrink-0 w-[309px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[654.034px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-0 pt-[15.995px] px-[15.995px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[128.7px] size-[19.991px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9915 19.9915">
        <g id="Icon">
          <path d={svgPaths.p1e861300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66596" />
          <path d={svgPaths.pf2b4480} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66596" />
          <path d="M9.99573 12.4947V2.49893" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66596" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2b7fff] h-[43.99px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <Icon />
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[20px] left-[184.68px] not-italic text-[14px] text-center text-white top-[12.37px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">下载文件</p>
    </div>
  );
}

function FilesPage() {
  return (
    <div className="bg-[#f8fafc] h-[763px] relative shrink-0 w-full" data-name="FilesPage">
      <div className="content-stretch flex flex-col gap-[15.995px] items-start pb-0 pt-[15.995px] px-[15.995px] relative size-full">
        <Container1 />
        <Button />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col h-[832px] items-start left-0 pb-0 pt-[68.651px] px-0 top-0 w-[373px]" data-name="App">
      <FilesPage />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[19.991px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4968 13.3276">
            <path d={svgPaths.pefb2240} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66596" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3276 1.66596">
            <path d="M12.4947 0.832978H0.832978" id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66596" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[35.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[7.992px] px-[7.992px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28.005px] relative shrink-0 w-[71.995px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[28px] left-0 not-italic text-[#1d293d] text-[18px] top-[-0.26px] tracking-[-0.4395px] whitespace-pre">文件预览</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[11.999px] h-[35.976px] items-center pl-[-7.992px] pr-0 py-0 relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Heading />
    </div>
  );
}

function FilesPage1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[68.651px] items-start left-0 pb-[0.684px] pt-[15.995px] px-[15.995px] top-0 w-[373.373px]" data-name="FilesPage">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_0.684px] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

export default function Copy() {
  return (
    <div className="bg-white relative size-full" data-name="微信小程序设计 (Copy)">
      <App />
      <FilesPage1 />
    </div>
  );
}