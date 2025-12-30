import svgPaths from "./svg-xh92xs08ct";

function Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[4px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-[calc(50%-3px)] size-[24px] top-[calc(50%-1px)] translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type HistoryTextProps = {
  text: string;
};

function HistoryText({ text }: HistoryTextProps) {
  return (
    <div className="h-[40px] relative shrink-0 w-[212px]">
      <div className="absolute inset-0 rounded-[100px]" />
      <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[27.5%_6.6%_27.5%_7.08%] leading-[normal] not-italic text-[15px] text-black">{text}</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="대화 페이지">
      <div className="absolute bg-white h-[138px] left-0 top-[calc(100%+449px)] w-[1920px]" />
      <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-[calc(16.67%+268px)] top-1/2 translate-y-[-50%] w-[1000px]">
        <div className="h-[40px] relative shrink-0 w-[230px]" data-name="_레이어_1">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 40">
            <g clipPath="url(#clip0_1_3691)" id="_ë ì´ì´_1">
              <path d={svgPaths.p23778180} fill="var(--fill-0, black)" id="Vector" />
              <path d={svgPaths.p30523a00} fill="var(--fill-0, black)" id="Vector_2" />
              <path d={svgPaths.paa71b80} fill="var(--fill-0, black)" id="Vector_3" />
              <path d={svgPaths.p27bef000} fill="var(--fill-0, black)" id="Vector_4" />
              <path d={svgPaths.p1ea40260} fill="var(--fill-0, black)" id="Vector_5" />
              <path d={svgPaths.p21e12400} fill="var(--fill-0, black)" id="Vector_6" />
            </g>
            <defs>
              <clipPath id="clip0_1_3691">
                <rect fill="white" height="40" width="230" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="텍스트필드로 처리">
                  <div className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bdbdbd] text-[18px] text-nowrap">
                    <p className="mb-0">메시지를 입력해 주세요.</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="relative rounded-[4px] shrink-0" data-name="<IconButton>">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                        <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                          <Wrapper1>
                            <g id="TuneRounded">
                              <path d={svgPaths.pe90e900} fill="var(--fill-0, black)" fillOpacity="0.32" id="Vector" />
                            </g>
                          </Wrapper1>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                    <div className="bg-[rgba(130,93,252,0.04)] relative rounded-[4px] shrink-0" data-name="<IconButton>">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                        <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                          <Wrapper1>
                            <g id="TipsAndUpdatesOutlined">
                              <path d={svgPaths.pa22b700} fill="var(--fill-0, #825DFC)" id="Vector" />
                            </g>
                          </Wrapper1>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#825dfc] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                  <div className="bg-[#9e9e9e] content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
                    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                      <Wrapper1>
                        <g id="ArrowUpwardFilled_none">
                          <path d={svgPaths.p1b29ea00} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                      </Wrapper1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <Button>
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                <div className="h-[24px] min-h-[24px] relative shrink-0 w-[18px]" data-name="Masked Icon">
                  <Wrapper>
                    <g id="Icon Left">
                      <path d={svgPaths.p3293d100} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                    </g>
                  </Wrapper>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.38)] text-nowrap tracking-[0.46px] uppercase">DB 질문</p>
              </div>
            </Button>
            <Button>
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                <div className="h-[24px] min-h-[24px] relative shrink-0 w-[18px]" data-name="Masked Icon">
                  <Wrapper>
                    <g id="LibraryBooksOutlined">
                      <path d={svgPaths.p6f19180} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                    </g>
                  </Wrapper>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.38)] text-nowrap tracking-[0.46px] uppercase">문서 질문</p>
              </div>
            </Button>
            <Button>
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                <div className="h-[24px] min-h-[24px] relative shrink-0 w-[18px]" data-name="Masked Icon">
                  <Wrapper>
                    <g id="MailOutlineOutlined">
                      <path d={svgPaths.p1aad61c0} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                    </g>
                  </Wrapper>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.38)] text-nowrap tracking-[0.46px] uppercase">이메일 질문</p>
              </div>
            </Button>
            <Button>
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                <div className="h-[24px] min-h-[24px] relative shrink-0 w-[18px]" data-name="Masked Icon">
                  <Wrapper>
                    <g id="HelpCenterOutlined">
                      <path d={svgPaths.p2c7d3310} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                    </g>
                  </Wrapper>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.38)] text-nowrap tracking-[0.46px] uppercase">faq 질문</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[1082px] items-start justify-between left-0 p-[24px] top-0">
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
                    <p className="[grid-area:1_/_1] font-['Pretendard:Medium',sans-serif] leading-[normal] ml-[16.4px] mt-0 not-italic relative text-[14px] text-black text-nowrap">새 대화</p>
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
                <HistoryText text="2022년 6월 퇴사한 생산직.." />
                <HistoryText text="신입사원 리스트 전화번호 포.." />
                <HistoryText text="자동차 헤드 품질 규정 알려줘" />
                <HistoryText text="6월달 생산실적을 알려주세요" />
              </div>
              <p className="[grid-area:1_/_1] font-['Pretendard:Medium',sans-serif] leading-none ml-[15px] mt-0 not-italic relative text-[#73757c] text-[12px] text-nowrap">오늘</p>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[26px] relative">
                <HistoryText text="안녕" />
                <HistoryText text="오늘 급식 메뉴 알려줘" />
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
                  <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[27.5%_6.6%_27.5%_7.08%] leading-[normal] not-italic text-[15px] text-black">오늘 잔업하는 사람 리스트...</p>
                </div>
                <HistoryText text="승진 리스트 알려줘" />
              </div>
              <p className="[grid-area:1_/_1] font-['Pretendard:Medium',sans-serif] leading-none ml-[15px] mt-0 not-italic relative text-[#73757c] text-[12px] text-nowrap">오늘</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap">박혜선님</p>
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
    </div>
  );
}