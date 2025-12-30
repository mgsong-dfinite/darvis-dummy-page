import svgPaths from "./svg-e54ow1uiue";
import img202507071043082 from "@/assets/5a636bd11746aa3961321c01169864fa5cce9a6b.png";

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
    <div className="h-[40px] relative shrink-0 w-[212px]">
      <div className="absolute inset-0 rounded-[100px]" />
      <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[27.5%_6.6%_27.5%_7.08%] leading-[normal] not-italic text-[15px] text-black">{children}</p>
    </div>
  );
}
type HistoryTextProps = {
  text: string;
};

function HistoryText({ text }: HistoryTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="문서 질문">
      <div className="absolute bg-white h-[138.556px] left-0 top-[calc(100%+451.16px)] w-[1927.74px]" />
      <div className="absolute h-[40.161px] left-[calc(16.67%+261.34px)] top-[-136.55px] w-[253.016px]">
        <p className="absolute font-['Pretendard:Medium',sans-serif] inset-[22.5%_-59.74%_22.72%_15.87%] leading-[normal] not-italic text-[18.073px] text-black text-nowrap">신입사원 교육 일정과 필수 이수 과정은 무엇인가요?</p>
        <div className="absolute inset-[15%_88.89%_15%_0]" data-name="bot">
          <div className="absolute contents inset-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1129 28.1129">
              <g id="Group 9">
                <circle cx="14.0564" cy="14.0564" id="Ellipse 2" r="13.3034" stroke="var(--stroke-0, #825DFC)" strokeWidth="1.50605" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[32.5%_30%_30%_35%]" data-name="Icon">
            <div className="absolute inset-[-7.14%_-7.65%]" style={{ "--stroke-0": "rgba(130, 93, 252, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3456 12.0484">
                <path d={svgPaths.p2d5d3d80} id="Icon" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f6f6ff] content-stretch flex flex-col gap-[24.097px] items-start leading-[0] left-[calc(16.67%+271.38px)] px-[40.161px] py-[24.097px] rounded-[30.121px] top-[-404.63px] w-[1004.032px]">
        <div className="font-['Pretendard:Regular',sans-serif] not-italic relative shrink-0 text-[16.065px] text-black w-[894.592px]">
          <p className="leading-[1.6] mb-0">신입사원 교육 일정:</p>
          <ul className="list-disc mb-0">
            <li className="mb-0 ms-[24.097500000000004px]">
              <span className="leading-[1.6]">오리엔테이션: 10월 1일 (9:00 AM - 12:00 PM)</span>
            </li>
            <li className="mb-0 ms-[24.097500000000004px]">
              <span className="leading-[1.6]">회사 규정 및 정책 교육: 10월 2일 (9:00 AM - 12:00 PM)</span>
            </li>
            <li className="mb-0 ms-[24.097500000000004px]">
              <span className="leading-[1.6]">기본 직무 교육: 10월 3일 ~ 10월 5일 (9:00 AM - 5:00 PM)</span>
            </li>
            <li className="ms-[24.097500000000004px]">
              <span className="leading-[1.6]">부서별 심화 교육: 10월 6일 ~ 10월 10일 (각 부서별로 진행)</span>
            </li>
          </ul>
          <p className="leading-[1.6] mb-0">필수 이수 과정:</p>
          <ol className="list-decimal" start="1">
            <li className="mb-0 ms-[24.097500000000004px]">
              <span className="leading-[1.6]">회사 규정 및 보안 교육: 회사의 규정과 보안 정책을 이해하는 필수 과정</span>
            </li>
            <li className="mb-0 ms-[24.097500000000004px]">
              <span className="leading-[1.6]">직무 기본 교육: 각 신입사원이 맡게 될 직무의 기본적인 업무 절차를 배우는 과정</span>
            </li>
            <li className="mb-0 ms-[24.097500000000004px]">
              <span className="leading-[1.6]">윤리 및 행동 강령 교육: 회사 내에서 지켜야 할 윤리 및 행동 강령에 대한 교육</span>
            </li>
            <li className="mb-0 ms-[24.097500000000004px]">
              <span className="leading-[1.6]">소프트웨어 사용 교육: 회사에서 사용하는 기본 소프트웨어에 대한 사용법 교육</span>
            </li>
            <li className="ms-[24.097500000000004px]">
              <span className="leading-[1.6]">팀 협업 교육: 팀 간 협력 방법과 효과적인 의사소통 스킬을 배우는 과정</span>
            </li>
          </ol>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
            <div className="[grid-area:1_/_1] bg-[#eef] content-stretch flex items-center justify-center ml-0 mt-0 px-[16.065px] py-[10.04px] relative rounded-[100.403px]">
              <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5d41b6] text-[14.056px] text-nowrap">{`출처   |   사내 인트라넷 > 교육 관리 시스템 > 신입사원 교육 계획 문서`}</p>
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-[17.069px] ml-[848.41px] mt-[10.04px] relative w-[76.306px]" data-name="Component 1">
            <div className="absolute inset-[0_-1.13%_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.1668 17.0685">
                <g id="Component 1">
                  <path clipRule="evenodd" d={svgPaths.p1fdcd300} fill="var(--fill-0, #CFCED4)" fillRule="evenodd" id="Icon (Stroke)" />
                  <g id="Group 55">
                    <path d={svgPaths.p3dc5dbf2} id="Vector" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                    <path d={svgPaths.p1045440} id="Vector_2" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                    <path d="M34.7969 7.07307V14.9926" id="Vector_3" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                  </g>
                  <g id="Group 54">
                    <path d={svgPaths.p4ab0e80} id="Vector_4" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                    <path d={svgPaths.pd911f00} id="Vector_2_2" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-center left-[300px] top-[calc(85.71%+33.29px)] w-[900px]" data-name="chatInput">
        <div className="relative shrink-0 size-[63.254px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.254 63.254">
            <g id="Frame 2615050">
              <ellipse cx="31.627" cy="31.627" fill="var(--fill-0, #F6F6FF)" id="Ellipse 2" rx="31.627" ry="31.627" />
              <g id="botIcon">
                <path d={svgPaths.p117ffa80} id="document" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </g>
          </svg>
        </div>
        <Wrapper1>
          <g id="chevron-down">
            <path d="M7 10L12.0008 14.58L17 10" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </Wrapper1>
        <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px relative rounded-[100.403px] shrink-0">
          <div aria-hidden="true" className="absolute border-[1.506px] border-black border-solid inset-0 pointer-events-none rounded-[100.403px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[36px] pr-[14px] py-[12px] relative size-full">
              <div className="h-[18.073px] relative shrink-0 w-[161.649px]" data-name="text/무엇이든 질문해주세요">
                <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[0_0.4%_0.4%_0] leading-none not-italic text-[#a9a9ae] text-[18.073px] text-nowrap">Please ask anything</p>
              </div>
              <div className="h-[40.161px] relative shrink-0 w-[41.074px]" data-name="upload">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.074 40.1613">
                  <g id="upload">
                    <ellipse cx="20.537" cy="20.0806" fill="var(--fill-0, #CFCED4)" id="Ellipse 5" rx="20.537" ry="20.0806" />
                    <path d={svgPaths.p2fc80b80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.00806" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Pretendard:Medium',sans-serif] inset-[14.26%_98.91%_84.63%_0] leading-none not-italic text-[12px] text-nowrap text-white">오늘</p>
      <div className="absolute content-stretch flex flex-col h-[1080px] items-start justify-between left-0 p-[24px] top-0">
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
                <Wrapper>{`Please tell me today's me...`}</Wrapper>
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
      <div className="absolute content-stretch flex flex-col h-[1080px] items-start right-0 top-0">
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#d9d7e3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start px-[40px] py-[20px] relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="<Typography>">
                  <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.15px]">Management of Public Property and Goods Act(No. 19990).pdf</p>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                    <Wrapper1>
                      <g id="CloseRounded">
                        <path d={svgPaths.p2a791e80} fill="var(--fill-0, black)" fillOpacity="0.32" id="Vector" />
                      </g>
                    </Wrapper1>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
                <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Base">
                  <div className="h-[24px] min-h-[24px] relative shrink-0 w-[16px]" data-name="Masked Icon">
                    <div className="absolute left-[-2px] size-[18px] top-[3px]" data-name="FileDownloadFilled">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g clipPath="url(#clip0_4_9031)" id="FileDownloadFilled">
                          <path d={svgPaths.p324e18f0} fill="var(--fill-0, #9E9E9E)" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_4_9031">
                            <rect fill="white" height="18" width="18" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9e9e9e] text-[13px] text-nowrap tracking-[0.46px] uppercase">Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f8f8] h-[980px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#d9d7e3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center pb-0 pt-[40px] px-[40px] relative size-full">
              <div className="content-stretch flex flex-col gap-[18.75px] h-[911.25px] items-start relative shrink-0 w-[600px]">
                <div className="bg-white h-[850.313px] overflow-clip relative shrink-0 w-full" data-name="문서 질문">
                  <div className="absolute font-['SeoulNamsan_CBL:Regular',sans-serif] leading-[1.6] left-[33.75px] not-italic text-[13.125px] text-black top-[51.56px] w-[533.438px]">
                    <p className="mb-0">
                      {`Article 4 (Scope of Public Property) `}
                      <br aria-hidden="true" />
                      {`① The scope of public property is as follows: <Amended on February 4, 2010, January 20, 2015, April 20, 2021> `}
                      <br aria-hidden="true" />
                      {`1. Real estate and its appurtenances `}
                      <br aria-hidden="true" />
                      {`2. Vessels, floating bridges, floating docks, and aircraft and their appurtenances `}
                      <br aria-hidden="true" />
                      {`3. Important machinery and equipment used for public enterprises or public facilities `}
                      <br aria-hidden="true" />
                      {`4. Rights such as surface rights, easements, leasehold rights, mining rights, and other similar rights `}
                      <br aria-hidden="true" />
                      {`5. Rights that fall under any of the following categories (hereinafter referred to as "intellectual property"): a. Patents, utility model rights, design rights, and trademark rights registered under the "Patent Act," "Utility Model Act," "Design Protection Act," and "Trademark Act" b. Copyrights, neighboring rights, and rights of database producers under the "Copyright Act," and other rights protected under the same law that are registered with the Korea Copyright Commission according to Articles 53 and 112(1) of the same law (hereinafter referred to as "copyrights, etc.") c. Variety protection rights under Article 2(4) of the "Plant Variety Protection Act" d. Intellectual property rights other than those specified in items a to c, as defined in Article 3(3) of the "Basic Act on Intellectual Property." However, rights not registered under the "Copyright Act" are excluded. `}
                      <br aria-hidden="true" />
                      {`6. Stocks, rights arising from investments, bonds, local government bonds, national bonds, and other similar securities `}
                      <br aria-hidden="true" />
                      {`7. Beneficial rights of real estate trusts `}
                      <br aria-hidden="true" />
                      {`8. Properties under construction that belong to items 1 and 2 `}
                      <br aria-hidden="true" />
                      {`9. Emission rights as defined in Article 2(3) of the "Act on the Allocation and Trading of Greenhouse Gas Emission Rights" `}
                      <br aria-hidden="true" />
                      {`② The scope of machinery and equipment in item 3 of paragraph 1 shall be determined by Presidential Decree. [Completely amended on December 26, 2008.] `}
                    </p>
                    <p className="mb-0">
                      <br aria-hidden="true" />
                      {`Article 5 (Classification and Types of Public Property) `}
                      <br aria-hidden="true" />
                      {`① Public property is classified into administrative property and general property according to its use. `}
                      <br aria-hidden="true" />
                      {`② "Administrative property" refers to the following types of property. <Amended on April 20, 2021> `}
                      <br aria-hidden="true" />
                      {`1. Public property refers to property that the relevant local government has decided to use or is using for office, business, and residence of public officials, as well as property under construction for such purposes `}
                      <br aria-hidden="true" />
                      {`2. Public-use property refers to property that the relevant local government has decided to use or is using for public purposes, as well as property under construction for such purposes `}
                      <br aria-hidden="true" />
                      {`3. Business-use property refers to property that the relevant local government has decided to use or is using for business purposes or for the residence of employees working in that business, as well as property under construction for such purposes `}
                      <br aria-hidden="true" />
                      {`4. Preservation property refers to property that the local government has preserved or decided to preserve according to laws, ordinances, rules, or other necessary measures `}
                      <br aria-hidden="true" />
                      {`③ "General property" refers to all public property other than administrative property. [Completely amended on December 26, 2008.] `}
                    </p>
                    <p className="mb-0">
                      <br aria-hidden="true" />
                      {`Article 6 (Protection of Public Property) `}
                      <br aria-hidden="true" />
                      {`① No one may use or benefit from public property without following the procedures and methods prescribed by this law or other laws. ② Administrative property shall not be subject to acquisition by prescription, notwithstanding Article 245 of the "Civil Act." [Completely amended on February 4, 2010.] `}
                      <br aria-hidden="true" />
                      {`Article 6-2 (Request for Public Property Data, etc.) `}
                      <br aria-hidden="true" />
                      {`① The Minister of the Interior and Safety may require the heads of local governments to submit data on the management status of public property, etc., to promote the efficient use of public property. <Amended on July 26, 2017.> `}
                      <br aria-hidden="true" />
                      {`② The Minister of the Interior and Safety may provide guidance and supervision regarding the management of public property or request other necessary measures from the heads of local governments. <Amended on July 26, 2017.> [Newly established on January 20, 2015.] `}
                    </p>
                    <p>
                      <br aria-hidden="true" />
                      {`Article 7 (Donation and Contribution) `}
                      <br aria-hidden="true" />
                      {`① If there is a person wishing to donate property listed in each item of paragraph 1 of Article 4 to a local government, the head of the local government may accept it according to the provisions set by Presidential Decree. `}
                      <br aria-hidden="true" />
                      {`② If the property intended for donation under paragraph 1 is difficult for the local government to manage or is unnecessary, or if there are conditions attached to the donation, it shall not be accepted according to the provisions set by Presidential Decree. However, if it falls under any of the following categories, it shall not be considered as having conditions attached to the donation. <Amended on April 20, 2021> `}
                      <br aria-hidden="true" />
                      1. Donated as administrative property.
                    </p>
                  </div>
                </div>
                <div className="aspect-[600/73.1926] relative shrink-0 w-full" data-name="스크린샷 2025-07-07 오전 10.43.08 2">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[1183.82%] left-[-1.27%] max-w-none top-[-12.7%] w-[102.39%]" src={img202507071043082} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[300px] top-[85px]">
        <div className="absolute contents left-[300px] top-[85px]">
          <div className="absolute h-[40.161px] left-[300px] top-[85px] w-[226.8px]">
            <p className="absolute font-['Pretendard:Medium',sans-serif] inset-[22.5%_-213.05%_22.72%_15.87%] leading-[normal] not-italic text-[18.073px] text-black text-nowrap">Please let me know the travel expenses I can receive for a business trip to the city.</p>
            <div className="absolute inset-[15%_88.89%_15%_0]" data-name="bot">
              <div className="absolute contents inset-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.2 28.1129">
                  <g id="Group 9">
                    <path d={svgPaths.p1e624810} id="Ellipse 2" stroke="var(--stroke-0, #825DFC)" strokeWidth="1.50605" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[32.5%_30%_30%_35%]" data-name="Icon">
                <div className="absolute inset-[-7.14%_-8.54%]" style={{ "--stroke-0": "rgba(130, 93, 252, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3261 12.0484">
                    <path d={svgPaths.p355a7580} id="Icon" stroke="var(--stroke-0, #825DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#f6f6ff] content-stretch flex flex-col gap-[24.097px] items-start left-[300px] px-[40.161px] py-[24.097px] rounded-[30.121px] top-[141.16px] w-[900px]">
          <div className="font-['Pretendard:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[16.065px] text-black w-[min-content]">
            <p className="mb-0">{`Details regarding the travel expenses that can be received during a business trip to the city are well explained in the 'Seoul Metropolitan City Women's Family Foundation Regulations Handbook.' When employees go on business trips to the city, travel expenses are paid within the budget limits. Specifically, the regulations are as follows:`}</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">City Transportation Expense Payment Criteria:</p>
            <p className="mb-0">- City transportation expenses are paid to employees who travel to the city for work-related reasons and can be paid within the budget limits.</p>
            <p className="mb-0">- These city transportation expenses can be paid to departments on a monthly basis, and the payment limits are set separately. Each department using travel expenses must record and maintain the usage details.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Same-Day Business Trip Expenses:</p>
            <p className="mb-0">- If the business trip duration is less than 6 hours, only city transportation expenses will be paid.</p>
            <p className="mb-0">&nbsp;</p>
            <p>Based on this information, during a business trip to the city, city transportation expenses are supported within the given budget, and in cases of short trip durations, only city transportation expenses are paid without additional costs. These regulations are designed to help employees use transportation expenses efficiently within the budget during business trips.</p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-[#eef] content-stretch flex gap-[10.04px] items-center justify-center ml-0 mt-0 px-[16.065px] py-[10.04px] relative rounded-[100.403px]">
              <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5d41b6] text-[14.056px] text-nowrap">{`Source 1   |   1. Foundation Internal Regulations Handbook`}</p>
              <div className="bg-white content-stretch flex h-[25.101px] items-center justify-center px-[12.048px] py-[4.016px] relative rounded-[50.202px] shrink-0">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a9a9ae] text-[14.056px] text-center w-[75.302px]">score : 0.50</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16.065px] h-[17.069px] items-center justify-end relative shrink-0 w-full" data-name="Component 1">
            <div className="h-[14.422px] relative shrink-0 w-[14.361px]">
              <div className="absolute inset-[-5.22%_-5.24%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8671 15.9277">
                  <g id="Group 55">
                    <path d={svgPaths.p27e19000} id="Vector" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                    <path d={svgPaths.p871d700} id="Vector_2" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                    <path d="M3.92298 6.50267V14.4222" id="Vector_3" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="h-[14.422px] relative shrink-0 w-[14.361px]">
              <div className="absolute inset-[-5.22%_-5.24%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8672 15.9277">
                  <g id="Group 54">
                    <path d={svgPaths.p1e049900} id="Vector" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                    <path d={svgPaths.pd9ba300} id="Vector_2" stroke="var(--stroke-0, #CFCED4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50605" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}