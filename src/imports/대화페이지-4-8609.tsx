import svgPaths from "./svg-gz7cksimut";
import clsx from "clsx";

function Typography({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <div className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] w-full">{children}</div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[40px] relative shrink-0 w-[212px]">
      <div className="absolute inset-0 rounded-[100px]" />
      <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[27.5%_6.6%_27.5%_7.08%] leading-[normal] not-italic text-[15px] text-black">{children}</p>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[20px] py-0 relative size-full">{children}</div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow h-[48px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#dddee2] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow h-[48px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#dddee2] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">{children}</div>
    </div>
  );
}

function AccordionDetails({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] pt-[8px] px-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <div className="content-stretch flex items-center justify-end px-[20px] py-0 relative size-full">{children}</div>
    </Wrapper2>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <div className="content-stretch flex items-center px-[20px] py-0 relative size-full">{children}</div>
    </Wrapper3>
  );
}
type ChartProps = {
  additionalClassNames?: string;
};

function Chart({ children, additionalClassNames = "" }: React.PropsWithChildren<ChartProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="chart">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function ExpandLessFilledNone() {
  return (
    <Wrapper4>
      <g id="ExpandLessFilled_none">
        <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, black)" fillOpacity="0.32" id="Vector" />
      </g>
    </Wrapper4>
  );
}
type TypographyTextProps = {
  text: string;
};

function TypographyText({ text }: TypographyTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[24px] items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#825dfc] text-[14px] text-nowrap tracking-[0.15px]">{text}</p>
    </div>
  );
}
type Text5Props = {
  text: string;
  additionalClassNames?: string;
};

function Text5({ text, additionalClassNames = "" }: Text5Props) {
  return (
    <div className={clsx("content-stretch flex items-center px-[20px] py-0 relative size-full", additionalClassNames)}>
      <p className="basis-0 font-['Pretendard:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-black text-right">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <Wrapper>
      <p className="basis-0 font-['Pretendard:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black text-right">{text}</p>
    </Wrapper>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <Wrapper>
      <p className="basis-0 font-['Pretendard:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-black text-right">{text}</p>
    </Wrapper>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <Wrapper5>
      <p className="basis-0 font-['Pretendard:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">{text}</p>
    </Wrapper5>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="basis-0 bg-white grow h-[48px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#dddee2] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none" />
      <Text2 text={text} />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("basis-0 bg-[#825dfc] grow h-[48px] min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <Wrapper5>
        <p className="basis-0 font-['Pretendard:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-white">{text}</p>
      </Wrapper5>
    </div>
  );
}
type HistoryTextProps = {
  text: string;
};

function HistoryText({ text }: HistoryTextProps) {
  return <Wrapper6>{text}</Wrapper6>;
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="대화 페이지">
      <div className="absolute bg-white h-[138px] left-0 top-[calc(100%+449px)] w-[1920px]" />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-none left-0 not-italic text-[12px] text-nowrap text-white top-[154px]">Today</p>
      <div className="absolute content-stretch flex items-center left-0 top-0 w-[1920px]">
        <div className="content-stretch flex flex-col h-[1080px] items-start justify-between p-[24px] relative shrink-0">
          <div aria-hidden="true" className="absolute border-[#cfced4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0">
            <div className="h-[22px] relative shrink-0 w-[158px]">
              <div className="absolute inset-[0_0_0_-0.63%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 22">
                  <g id="Frame 2615085">
                    <path d={svgPaths.p12fc3f80} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
                    <g clipPath="url(#clip0_1_3672)" id="_ë ì´ì´_1">
                      <path d={svgPaths.pd119500} fill="var(--fill-0, black)" id="Vector" />
                      <path d={svgPaths.p2caa4500} fill="var(--fill-0, black)" id="Vector_2" />
                      <path d={svgPaths.peea0200} fill="var(--fill-0, black)" id="Vector_3" />
                      <path d={svgPaths.pc65d880} fill="var(--fill-0, black)" id="Vector_4" />
                      <path d={svgPaths.p33bac00} fill="var(--fill-0, black)" id="Vector_5" />
                      <path d={svgPaths.p1759e600} fill="var(--fill-0, black)" id="Vector_6" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3672">
                      <rect fill="white" height="22" transform="translate(35)" width="124" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
              <div className="h-[37px] relative rounded-[100px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[#d9d7e3] border-solid inset-0 pointer-events-none rounded-[100px]" />
                <div className="size-full">
                  <div className="content-stretch flex flex-col items-start px-[77px] py-[10px] relative size-full">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <p className="[grid-area:1_/_1] font-['Pretendard:Medium',sans-serif] leading-[normal] ml-[16.4px] mt-0 not-italic relative text-[14px] text-black text-nowrap">{`New `}</p>
                      <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-[10.8px]" data-name="Icon">
                        <div className="absolute inset-[-4.63%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8 11.8">
                            <path d={svgPaths.p534a800} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[26px] relative">
                  <HistoryText text="Production staff who left .." />
                  <HistoryText text="New employee list phone..." />
                  <HistoryText text="Please tell me the quality..." />
                  <HistoryText text="Please let me know the..." />
                </div>
                <p className="[grid-area:1_/_1] font-['Pretendard:Medium',sans-serif] leading-none ml-[15px] mt-0 not-italic relative text-[#73757c] text-[12px] text-nowrap">Today</p>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[26px] relative">
                  <HistoryText text="Hello" />
                  <Wrapper6>{`Please tell me today's me...`}</Wrapper6>
                  <div className="h-[40px] relative shrink-0 w-[212px]" data-name="history">
                    <div className="absolute bg-[#f6f6ff] inset-0 rounded-[100px]" />
                    <div className="absolute inset-[35%_7.78%_33.75%_91.04%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 12.5">
                        <g id="Group 2005">
                          <circle cx="1.25" cy="1.25" fill="var(--fill-0, #A9A9AE)" id="Ellipse 6" r="1.25" />
                          <circle cx="1.25" cy="6.25" fill="var(--fill-0, #A9A9AE)" id="Ellipse 7" r="1.25" />
                          <circle cx="1.25" cy="11.25" fill="var(--fill-0, #A9A9AE)" id="Ellipse 8" r="1.25" />
                        </g>
                      </svg>
                    </div>
                    <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[27.5%_6.6%_27.5%_7.08%] leading-[normal] not-italic text-[15px] text-black">List of people working ...</p>
                  </div>
                  <HistoryText text="Please let me know the..." />
                </div>
                <p className="[grid-area:1_/_1] font-['Pretendard:Medium',sans-serif] leading-none ml-[15px] mt-0 not-italic relative text-[#73757c] text-[12px] text-nowrap">Today</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap">Park Hye-sun</p>
            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-[90deg]">
                <div className="h-[5px] relative w-[10px]" data-name="Icon">
                  <div className="absolute inset-[-15%_-7.5%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                      <path d={svgPaths.p259324a0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col grow h-[1080px] items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="h-[912px] relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[60px] py-0 relative size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="h-[40px] relative shrink-0 w-[252px]">
                    <p className="absolute bottom-1/4 font-['Pretendard:Medium',sans-serif] leading-[normal] left-[15.87%] not-italic right-[-213.89%] text-[18px] text-black text-nowrap top-[22.5%]">Please let me know the products expected to be in short supply and the response measures</p>
                    <div className="absolute inset-[15%_88.89%_15%_0]" data-name="bot">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                        <g id="bot">
                          <g id="Group 9">
                            <circle cx="14" cy="14" id="Ellipse 2" r="13.5" stroke="var(--stroke-0, #825DFC)" />
                          </g>
                          <path d={svgPaths.p2be00} id="Icon" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-[#f6f6ff] relative rounded-[30px] shrink-0 w-full">
                    <div className="size-full">
                      <div className="content-stretch flex flex-col items-start px-[40px] py-[24px] relative w-full">
                        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                          <div className="bg-[rgba(130,93,252,0.04)] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="<Paper>">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
                                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="<Typography>">
                                  <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#825dfc] text-[14px] text-nowrap">Answer based on the data from the [Aggregation and Radiation Team_Inventory] area</p>
                                </div>
                                <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
                                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Base">
                                    <p className="font-['Pretendard:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#a79cff] text-[13px] text-nowrap tracking-[0.46px] uppercase">View Details</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[rgba(130,93,252,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                          </div>
                          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                            <div className="basis-0 grow h-[19px] min-h-px min-w-px shrink-0" />
                            <div className="h-[25px] relative shrink-0 w-[75px]" data-name="toggle">
                              <div className="absolute border border-[#dddee2] border-solid inset-[0_49.6%_0_0] rounded-bl-[5px] rounded-tl-[5px]" />
                              <Chart additionalClassNames="inset-[24%_68%_28%_16%]">
                                <path d={svgPaths.p38bbf8c0} id="Icon" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" />
                              </Chart>
                              <div className="absolute flex inset-[0_1.33%_0_48.27%] items-center justify-center">
                                <div className="flex-none h-[25px] rotate-[180deg] w-[37.8px]">
                                  <div className="bg-[#eef] border border-[#825dfc] border-solid rounded-bl-[5px] rounded-tl-[5px] size-full" />
                                </div>
                              </div>
                              <Chart additionalClassNames="inset-[24%_18.67%_28%_65.33%]">
                                <path d={svgPaths.p28001af0} fill="var(--stroke-0, #825DFC)" id="Icon" />
                              </Chart>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-0 px-0 relative shrink-0 w-full" data-name="표">
                            <div className="content-stretch flex h-[51px] items-center mb-[-1.5px] relative shrink-0 w-full">
                              <Text text="Product Code" additionalClassNames="rounded-tl-[10px]" />
                              <Text text="Product Name" />
                              <Text text="Safety Stock" />
                              <Text text="Utilization Rate" />
                              <Text text="Demand Growth Rate" />
                              <Text text="Raw Material Arrival" />
                              <Text text="Integrated Analysis" additionalClassNames="rounded-tr-[10px]" />
                            </div>
                            <div className="content-stretch flex h-[51px] items-center mb-[-1.5px] relative shrink-0 w-full">
                              <Text1 text="PRD-A101" />
                              <Text3 text="Part A" />
                              <Text4 text="1,500" />
                              <Text4 text="78%" />
                              <Text4 text="+23%" />
                              <Text4 text="In 3 days" />
                              <Wrapper3>
                                <Text5 text="Production possible" />
                              </Wrapper3>
                            </div>
                            <div className="content-stretch flex h-[51px] items-center mb-[-1.5px] relative shrink-0 w-full">
                              <Text1 text="PRD-B205" />
                              <Wrapper1>
                                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black text-right w-[127px]">Part B</p>
                              </Wrapper1>
                              <Text4 text="1,200" />
                              <Text4 text="92%" />
                              <Text4 text="+31%" />
                              <Text4 text="In 7 days" />
                              <Wrapper1>
                                <div className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff742e] text-[10px] text-nowrap text-right">
                                  <p className="mb-0">{`Expected `}</p>
                                  <p>inventory shortage</p>
                                </div>
                              </Wrapper1>
                            </div>
                            <div className="content-stretch flex h-[51px] items-center mb-[-1.5px] relative shrink-0 w-full">
                              <Text1 text="PRD-D428" />
                              <Text3 text="Part C" />
                              <Text4 text="1,000" />
                              <Text4 text="88%" />
                              <Text4 text="+12%" />
                              <Text4 text="In 2 days" />
                              <Wrapper2>
                                <Text5 text="Stable" additionalClassNames="justify-end" />
                              </Wrapper2>
                            </div>
                            <div className="content-stretch flex h-[51px] items-center mb-[-1.5px] relative shrink-0 w-full">
                              <div className="basis-0 bg-white grow h-[48px] min-h-px min-w-px relative rounded-bl-[10px] shrink-0">
                                <div aria-hidden="true" className="absolute border-[#dddee2] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none rounded-bl-[11.5px]" />
                                <Text2 text="PRD-E519" />
                              </div>
                              <Text3 text="Part D" />
                              <Text4 text="800" />
                              <Text4 text="95%" />
                              <Text4 text="+45%" />
                              <Text4 text="In 10 days" />
                              <div className="basis-0 bg-white grow h-[48px] min-h-px min-w-px relative rounded-br-[10px] shrink-0">
                                <div aria-hidden="true" className="absolute border-[#dddee2] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none rounded-br-[11.5px]" />
                                <div className="flex flex-row items-center justify-end size-full">
                                  <div className="content-stretch flex items-center justify-end px-[20px] py-0 relative size-full">
                                    <div className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ed1c24] text-[10px] text-nowrap text-right">
                                      <p className="mb-0">{`Urgent `}</p>
                                      <p>response needed</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-[780px]">In the inventory table, products below safety stock have been found, and the result of joining with the product table shows that B205 and E519 are in short supply.</p>
                          <div className="content-stretch flex gap-[16px] h-[17px] items-center justify-end relative shrink-0 w-full" data-name="Component 1">
                            <div className="flex items-center justify-center relative shrink-0">
                              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                <div className="h-[14.5px] relative w-[15.5px]" data-name="Icon (Stroke)">
                                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(207, 206, 212, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 14.5">
                                      <path clipRule="evenodd" d={svgPaths.p695d400} fill="var(--fill-0, #CFCED4)" fillRule="evenodd" id="Icon (Stroke)" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[14.364px] relative shrink-0 w-[14.303px]">
                              <div className="absolute inset-[-5.22%_-5.24%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8034 15.8638">
                                  <g id="Group 55">
                                    <path d={svgPaths.p13e0af40} id="Vector" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path d={svgPaths.p2972b800} id="Vector_2" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path d="M3.90723 6.47656V14.3643" id="Vector_3" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="h-[14.364px] relative shrink-0 w-[14.304px]">
                              <div className="absolute inset-[-5.22%_-5.24%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8035 15.8638">
                                  <g id="Group 54">
                                    <path d={svgPaths.p2c2a9980} id="Vector" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path d={svgPaths.p31a44700} id="Vector_2" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[1080px] items-start relative shrink-0 w-[680px]">
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d9d7e3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start px-[40px] py-[20px] relative w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="<Typography>">
                    <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.15px]">Please let me know the products expected to be in short supply ...</p>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                      <Wrapper4>
                        <g id="CloseRounded">
                          <path d={svgPaths.p2a791e80} fill="var(--fill-0, black)" fillOpacity="0.32" id="Vector" />
                        </g>
                      </Wrapper4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 bg-[#fafafa] grow min-h-px min-w-px relative shrink-0 w-full">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-center p-[40px] relative size-full">
                <div className="content-stretch flex flex-col h-[360px] items-start max-h-[400px] relative shrink-0 w-full" data-name="<Accordion>">
                  <div className="basis-0 bg-[#f5f5f5] content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="AccordionSummary">
                    <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <Container>
                      <TypographyText text="Incident Process" />
                      <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accordion Expand Icon">
                        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                          <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                            <ExpandLessFilledNone />
                          </div>
                        </div>
                      </div>
                    </Container>
                    <AccordionDetails>
                      <Typography>
                        <p className="mb-0">Alright, I will try to resolve this query. The user is asking about products expected to be in short supply and the corresponding response measures.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">First, we need to identify which tables hold inventory information. The inventory table contains fields such as current_stock, reserved_stock, available_stock, safety_stock, and other related fields. The key point here is to identify products where available stock is lower than safety stock, indicating a potential shortage.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">Therefore, we should start by joining the inventory table with the product table to obtain product details. Then, we filter cases where available stock is less than safety stock. This will give us the products at risk.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">{`Next, regarding response measures, the user may want suggestions such as increasing inventory, checking turnover rates, or reviewing average monthly sales. The inventory table contains fields like avg_monthly_sales and stock_days. Calculate how long the current stock will last based on average sales. If it's too low, recommend urgent stock replenishment.`}</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">Additionally, to make the response informative, include product details such as product_name, brand, and category. Including current stock levels, safety stock, and calculated stock days will help understand the urgency.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">{`Let's structure the SQL query. Join demo_sales.inventory and demo_sales.products on product_id. Select the necessary fields. Calculate stock days by dividing available stock by average monthly sales. Then filter cases where available stock is less than safety stock. Finally, sort to prioritize based on stock days.`}</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">{`Also, add a CASE statement to suggest actions based on stock days. For example, if it's less than 5 days, suggest immediate action, and if it's between 5-10 days, suggest monitoring. This way, the response measures are tailored to the urgency.`}</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">Make sure all necessary fields are included. The inventory table has available stock, safety stock, and average monthly sales. The product table has product name, brand, and category ID. If necessary, join with product_categories to get category names, but for now, category ID may suffice.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p>Limit the results to 50 as per the rules. Ensure the correct schema names are used and that the SQL is efficient and uses the correct joins. Avoid using the ROUND function and stick to PostgreSQL syntax.</p>
                      </Typography>
                    </AccordionDetails>
                  </div>
                </div>
                <div className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.87)] w-full">
                  <p className="mb-0">Out of a total of 5 products, 2 (A101, C312) can be immediately increased in production, but B205 is expected to be in short supply, and E519 requires urgent response due to delays in raw material supply.</p>
                  <p className="mb-0">Recommended Actions:</p>
                  <p className="mb-0">• PRD-B205: Need to increase production by 20% next week (to compensate for workforce shortages in week 2),</p>
                  <p>• PRD-E519: Urgently secure alternative suppliers or review the use of safety stock.</p>
                </div>
                <div className="content-stretch flex flex-col h-[360px] items-start max-h-[400px] relative shrink-0 w-full" data-name="<Accordion>">
                  <div className="basis-0 bg-[#f5f5f5] content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="AccordionSummary">
                    <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <Container>
                      <TypographyText text="SQL Code" />
                      <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accordion Expand Icon">
                        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                          <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                            <ExpandLessFilledNone />
                          </div>
                        </div>
                      </div>
                    </Container>
                    <AccordionDetails>
                      <Typography>
                        <p className="mb-0">-- Products expected to be in short supply and response measures</p>
                        <p className="mb-0">{`SELECT `}</p>
                        <p className="mb-0">{`    p.product_id AS ProductID,`}</p>
                        <p className="mb-0">{`    p.product_name AS ProductName,`}</p>
                        <p className="mb-0">{`    p.brand AS Brand,`}</p>
                        <p className="mb-0">{`    pc.category_name AS Category,`}</p>
                        <p className="mb-0">{`    i.current_stock AS CurrentStock,`}</p>
                        <p className="mb-0">{`    i.safety_stock AS SafetyStock,`}</p>
                        <p className="mb-0">{`    i.avg_monthly_sales AS AvgMonthlySales,`}</p>
                        <p className="mb-0">{`    ROUND(i.available_stock / NULLIF(i.avg_monthly_sales, 0)) AS StockDays,`}</p>
                        <p className="mb-0">{`    CASE `}</p>
                        <p className="mb-0">{`        WHEN i.available_stock < i.safety_stock * 0.5 THEN 'Immediate reorder needed'`}</p>
                        <p className="mb-0">{`        WHEN i.available_stock < i.safety_stock THEN 'Consider additional orders'`}</p>
                        <p className="mb-0">{`        ELSE 'Normal level'`}</p>
                        <p className="mb-0">{`    END AS ResponseMeasure`}</p>
                        <p className="mb-0">FROM demo_sales.inventory i</p>
                        <p className="mb-0">JOIN demo_sales.products p ON i.product_id = p.product_id</p>
                        <p className="mb-0">JOIN demo_sales.product_categories pc ON p.category_id = pc.category_id</p>
                        <p className="mb-0">{`WHERE i.available_stock < i.safety_stock`}</p>
                        <p className="mb-0">ORDER BY StockDays ASC</p>
                        <p className="mb-0">LIMIT 50;</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">&nbsp;</p>
                        <p>&nbsp;</p>
                      </Typography>
                    </AccordionDetails>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}