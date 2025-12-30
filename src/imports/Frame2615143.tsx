import svgPaths from "./svg-xh92xs08ct";
import { useState, useEffect, useRef } from "react";

function Button({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[4px] shrink-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </button>
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

export default function Frame() {
  const [inputValue, setInputValue] = useState("");
  const [typingText, setTypingText] = useState("");
  const fullText = "Which products may be in short supply?";
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (inputValue === "") {
      let index = 0;
      
      const typeNextChar = () => {
        if (index <= fullText.length) {
          setTypingText(fullText.slice(0, index));
          index++;
          timerRef.current = setTimeout(typeNextChar, 100);
        } else {
          timerRef.current = setTimeout(() => {
            index = 0;
            setTypingText("");
            typeNextChar();
          }, 2000);
        }
      };
      
      typeNextChar();
      
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    } else {
      setTypingText("");
    }
  }, [inputValue]);

  const exampleQuestions = {
    db: "What are the top-selling products this quarter?",
    document: "Summarize the Q4 financial report",
    email: "Show me unread emails from last week",
    faq: "How do I reset my password?"
  };

  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <div className="relative rounded-[8px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full p-[24px] mt-[0px] mr-[0px] mb-[0px] ml-[0px] m-[0px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="텍스트필드로 처리">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={typingText || "Please enter a message."}
                  className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic w-full text-[#ffffff] text-[22px] bg-transparent border-none outline-none resize-none min-h-[54px] placeholder:text-[#a78bfa]"
                />
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="relative rounded-[4px] shrink-0" data-name="<IconButton>">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                        <Wrapper1>
                          <g id="TuneRounded">
                            <path d={svgPaths.pe90e900} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector" />
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
          <Button onClick={() => setInputValue(exampleQuestions.db)}>
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
              <div className="h-[24px] min-h-[24px] relative shrink-0 w-[18px]" data-name="Masked Icon">
                <Wrapper>
                  <g id="Icon Left">
                    <path d={svgPaths.p3293d100} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
                  </g>
                </Wrapper>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[0.46px] uppercase">DB question</p>
            </div>
          </Button>
          <Button onClick={() => setInputValue(exampleQuestions.document)}>
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
              <div className="h-[24px] min-h-[24px] relative shrink-0 w-[18px]" data-name="Masked Icon">
                <Wrapper>
                  <g id="LibraryBooksOutlined">
                    <path d={svgPaths.p6f19180} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
                  </g>
                </Wrapper>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[0.46px] uppercase">Document question</p>
            </div>
          </Button>
          <Button onClick={() => setInputValue(exampleQuestions.email)}>
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
              <div className="h-[24px] min-h-[24px] relative shrink-0 w-[18px]" data-name="Masked Icon">
                <Wrapper>
                  <g id="MailOutlineOutlined">
                    <path d={svgPaths.p1aad61c0} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
                  </g>
                </Wrapper>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[0.46px] uppercase">Email question</p>
            </div>
          </Button>
          <Button onClick={() => setInputValue(exampleQuestions.faq)}>
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
              <div className="h-[24px] min-h-[24px] relative shrink-0 w-[18px]" data-name="Masked Icon">
                <Wrapper>
                  <g id="HelpCenterOutlined">
                    <path d={svgPaths.p2c7d3310} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
                  </g>
                </Wrapper>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[0.46px] uppercase">FAQ question</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}