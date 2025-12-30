import svgPaths from "./svg-vgxkzjm7q5";
import clsx from "clsx";
import img1Xu9G1 from "@/assets/94099ef8abb40c2b7288854f16e94c85b0b11a29.png";
import img1XYhJ11 from "@/assets/5fe1d50c5acdb67db438c2076364b786c68d4342.png";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.096px] items-center relative">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[13.125px] shadow-[0px_23.437px_46.874px_-11.25px_rgba(0,0,0,0.25)] shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[10.48px] relative">{children}</div>
    </div>
  );
}

function IconBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[12.66px] top-[0.9px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.66 12.66">
        {children}
      </svg>
    </div>
  );
}

function ContainerBackgroundImage4({ children, text, additionalClassNames = "" }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#1e2939] relative rounded-[1.35186e+07px] shrink-0 size-[45.123px]">
      <div aria-hidden="true" className="absolute border-[#364153] border-[1.612px] border-solid inset-0 pointer-events-none rounded-[1.35186e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[1.612px] pr-[1.618px] py-[1.612px] relative size-full">
        <BackgroundImage1 additionalClassNames={additionalClassNames}>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[12.892px] left-0 not-italic text-[#99a1af] text-[9.669px] text-nowrap top-[0.81px]">{text}</p>
        </BackgroundImage1>
      </div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "", children }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full", additionalClassNames)}>
      <BackgroundImage1>{children}</BackgroundImage1>
    </div>
  );
}
type ContainerBackgroundImage3Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, text, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div className="bg-[#1e2939] relative rounded-[1.35186e+07px] shrink-0 size-[45.123px]">
      <div aria-hidden="true" className="absolute border-[#364153] border-[1.612px] border-solid inset-0 pointer-events-none rounded-[1.35186e+07px]" />
      <BackgroundImage2 additionalClassNames={clsx("p-[1.612px]", additionalClassNames)}>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[12.892px] left-0 not-italic text-[#99a1af] text-[9.669px] text-nowrap top-[0.81px]">{text}</p>
      </BackgroundImage2>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("bg-[rgba(30,41,57,0.5)] relative rounded-[11.281px] shrink-0 w-[411px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.806px] border-[rgba(54,65,83,0.5)] border-solid inset-0 pointer-events-none rounded-[11.281px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.612px] items-start pb-[0.806px] pt-[10.475px] px-[10.475px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, text, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(0, 184, 219) 100%)" }} className="relative rounded-[1.35186e+07px] shadow-[0px_0px_12.087px_-2.417px_rgba(173,70,255,0.5),0px_0px_4.835px_-3.223px_rgba(173,70,255,0.5)] shrink-0 size-[45.123px]">
      <BackgroundImage2 additionalClassNames={additionalClassNames}>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[12.892px] left-0 not-italic text-[9.669px] text-nowrap text-white top-[0.81px]">{text}</p>
      </BackgroundImage2>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[12.892px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14.672px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6722 14.6722">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(30,41,57,0.5)] h-[66.013px] relative rounded-[12.66px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.904px] border-[rgba(54,65,83,0.5)] border-solid inset-0 pointer-events-none rounded-[12.66px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[5.426px] items-start pb-[0.904px] pt-[11.756px] px-[11.756px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 93.7488 93.7488" className="block size-full">
      <path d="M0 0H93.7488V93.7488H0V0Z" fill="var(--fill-0, white)" id="Vector" />
    </svg>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="h-[12.892px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12.892px] left-0 not-italic text-[#6a7282] text-[9.669px] text-nowrap top-[0.81px]">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="h-[16.115px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.115px] left-0 not-italic text-[11.281px] text-nowrap text-white top-[0.4px] tracking-[-0.1212px]">{text}</p>
    </div>
  );
}

export default function A() {
  return (
    <div className="bg-black relative size-full" data-name="A4 - 2">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[36px] left-[312.12px] not-italic text-[#825dfc] text-[28px] text-center text-nowrap top-[56px] tracking-[0.3955px] translate-x-[-50%]">DARVIS Adoption Made Simple</p>
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[calc(20%+179.46px)] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[96px] tracking-[-0.1504px] translate-x-[-50%]">{`Simple & Efficient Process`}</p>
      <div className="absolute h-[419px] left-[64px] top-[calc(14.29%+45.71px)] w-[471px]" data-name="Container">
        <div className="absolute bg-gradient-to-b from-[rgba(173,70,255,0.5)] h-[367.431px] left-[22.56px] to-[rgba(173,70,255,0.5)] top-[25.78px] via-50% via-[rgba(0,184,219,0.5)] w-[1.612px]" data-name="Container" />
        <div className="absolute content-stretch flex flex-col gap-[9.669px] h-[419px] items-start left-0 top-0 w-[427.863px]" data-name="Container">
          <div className="content-stretch flex gap-[12.892px] h-[51.569px] items-center relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage1 text="01" additionalClassNames="w-[11.57px]" />
            <ContainerBackgroundImage2 additionalClassNames="h-[52px]">
              <ContainerBackgroundImageAndText text="QR Scan" />
              <ContainerBackgroundImageAndText1 text="Scan QR Code" />
            </ContainerBackgroundImage2>
          </div>
          <div className="content-stretch flex gap-[12.892px] h-[51.569px] items-center relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage3 text="02" additionalClassNames="w-[12.842px]" />
            <ContainerBackgroundImage2 additionalClassNames="h-[52px]">
              <ContainerBackgroundImageAndText text="Web Form" />
              <ContainerBackgroundImageAndText1 text="Submit Your Info" />
            </ContainerBackgroundImage2>
          </div>
          <div className="content-stretch flex gap-[12.892px] h-[51.569px] items-center relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage3 text="03" additionalClassNames="w-[13.018px]" />
            <ContainerBackgroundImage2 additionalClassNames="h-[52px]">
              <ContainerBackgroundImageAndText text="Contact" />
              <ContainerBackgroundImageAndText1 text="Within 48 Hours" />
            </ContainerBackgroundImage2>
          </div>
          <div className="content-stretch flex gap-[12.892px] h-[51.569px] items-center relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage4 text="04" additionalClassNames="w-[13.264px]" />
            <ContainerBackgroundImage2 additionalClassNames="h-[51px]">
              <ContainerBackgroundImageAndText text="Video Meeting" />
              <ContainerBackgroundImageAndText1 text="Zoom Discussion" />
            </ContainerBackgroundImage2>
          </div>
          <div className="content-stretch flex gap-[12.892px] h-[51.569px] items-center relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage4 text="05" additionalClassNames="w-[13.037px]" />
            <ContainerBackgroundImage2 additionalClassNames="h-[52px]">
              <ContainerBackgroundImageAndText text="Light POC" />
              <ContainerBackgroundImageAndText1 text="Proof of Concept" />
            </ContainerBackgroundImage2>
          </div>
          <div className="content-stretch flex gap-[12.892px] h-[51.569px] items-center relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage3 text="06" additionalClassNames="w-[13.232px]" />
            <ContainerBackgroundImage2 additionalClassNames="h-[52px]">
              <ContainerBackgroundImageAndText text="POC Process" />
              <ContainerBackgroundImageAndText1 text="Implementation" />
            </ContainerBackgroundImage2>
          </div>
          <div className="content-stretch flex gap-[12.892px] h-[51.569px] items-center relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage1 text="07" additionalClassNames="w-[12.275px]" />
            <ContainerBackgroundImage2 additionalClassNames="h-[52px]">
              <ContainerBackgroundImageAndText text="Contract" />
              <ContainerBackgroundImageAndText1 text="Partnership" />
            </ContainerBackgroundImage2>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[16px] items-start left-[60px] top-[calc(71.43%+21.57px)] w-[475px]">
        <div className="basis-0 content-stretch flex flex-col gap-[10.851px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
          <ContainerBackgroundImage>
            <div className="h-[14.469px] relative shrink-0 w-full" data-name="Heading 3">
              <IconBackgroundImage1>
                <g clipPath="url(#clip0_4_9360)" id="Icon">
                  <path d={svgPaths.p3aed2400} id="Vector" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.055" />
                  <path d={svgPaths.p21374f40} id="Vector_2" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.055" />
                </g>
                <defs>
                  <clipPath id="clip0_4_9360">
                    <rect fill="white" height="12.66" width="12.66" />
                  </clipPath>
                </defs>
              </IconBackgroundImage1>
              <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.469px] left-[18.08px] not-italic text-[#825dfc] text-[10.851px] text-nowrap top-[0.9px]">Schedule a Free Consultation</p>
            </div>
            <div className="h-[22.607px] relative shrink-0 w-full" data-name="Paragraph">
              <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11.304px] left-0 not-italic text-[#d1d5dc] text-[9.043px] top-[0.45px] tracking-[0.106px] w-[198.038px]">
                <p className="mb-0">Check if DARVIS fits your company</p>
                <p>Remote Zoom meeting available</p>
              </div>
            </div>
          </ContainerBackgroundImage>
          <ContainerBackgroundImage>
            <div className="h-[14.469px] relative shrink-0 w-full" data-name="Heading 3">
              <IconBackgroundImage1>
                <g clipPath="url(#clip0_4_9364)" id="Icon">
                  <path d={svgPaths.p3f3bc880} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.055" />
                  <path d={svgPaths.p4948c40} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.055" />
                </g>
                <defs>
                  <clipPath id="clip0_4_9364">
                    <rect fill="white" height="12.66" width="12.66" />
                  </clipPath>
                </defs>
              </IconBackgroundImage1>
              <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.469px] left-[18.08px] not-italic text-[#00d3f2] text-[10.851px] text-nowrap top-[0.9px]">Explore DARVIS</p>
            </div>
            <div className="h-[22.607px] relative shrink-0 w-full" data-name="Paragraph">
              <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11.304px] left-0 not-italic text-[#d1d5dc] text-[9.043px] top-[0.45px] tracking-[0.106px] w-[183.569px]">
                <p className="mb-0">See product features, use cases,</p>
                <p>and real customer stories.</p>
              </div>
            </div>
          </ContainerBackgroundImage>
        </div>
        <div className="content-stretch flex flex-col gap-[11.25px] items-center relative shrink-0" data-name="Container">
          <ContainerBackgroundImage5>
            <div className="overflow-clip relative shrink-0 size-[93.749px]" data-name="QRCodeSVG">
              <BackgroundImage />
              <div className="absolute inset-[7.33%]" data-name="1XU9G 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1Xu9G1} />
              </div>
            </div>
          </ContainerBackgroundImage5>
          <BackgroundImage3>
            <div className="h-[15px] relative shrink-0 w-[100.062px]" data-name="Paragraph">
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[49.94px] not-italic text-[#825dfc] text-[11.25px] text-center text-nowrap top-[0.94px] translate-x-[-50%]">Submit Web Form</p>
            </div>
            <IconBackgroundImage>
              <path d="M3.05132 7.3359H11.6101" id="Vector" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.57202" />
              <path d={svgPaths.p35cb7a00} id="Vector_2" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.57202" />
            </IconBackgroundImage>
          </BackgroundImage3>
        </div>
        <div className="content-stretch flex flex-col gap-[11.25px] items-center relative shrink-0 w-[115.281px]" data-name="Container">
          <ContainerBackgroundImage5>
            <div className="overflow-clip relative shrink-0 size-[93.749px]" data-name="QRCodeSVG">
              <BackgroundImage />
              <div className="absolute inset-[8.95%_7.33%_5.72%_7.33%]" data-name="1XYhJ (1) 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1XYhJ11} />
              </div>
            </div>
          </ContainerBackgroundImage5>
          <BackgroundImage3>
            <div className="h-[15px] relative shrink-0 w-[100.062px]" data-name="Paragraph">
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[49.44px] not-italic text-[#00d3f2] text-[11.25px] text-center text-nowrap top-[0.94px] translate-x-[-50%]">Visit Our Website</p>
            </div>
            <IconBackgroundImage>
              <path d="M3.05239 7.3359H11.6112" id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.57202" />
              <path d={svgPaths.pea48e00} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.57202" />
            </IconBackgroundImage>
          </BackgroundImage3>
        </div>
      </div>
    </div>
  );
}