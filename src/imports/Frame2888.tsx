export default function Frame() {
  return (
    <div className="bg-gradient-to-b from-[#f6f6ff] relative size-full to-[#e2e2ff]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[260px] py-[80px] relative size-full">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] h-[529.38px] ml-0 mt-[278px] relative rounded-[15px] shadow-[0px_0px_9.658px_0px_#bbc4d9] w-[920px]" data-name="다비스 데모 1">
              <div className="absolute inset-0 overflow-hidden rounded-[15px]">
                <video autoPlay className="absolute h-[108.74%] left-[-0.01%] max-w-none top-[-8.74%] w-[100.03%]" controlsList="nodownload" loop playsInline>
                  <source src="/_videos/v1/56790f4fc802367ace79f3bf987e724853f5cac3" />
                </video>
              </div>
            </div>
            <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-center ml-[156.55px] mt-0 relative w-[600px]">
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#a9a9ae] text-[19.674px] text-center w-[min-content]">업무에 필요한 정보를 찾느라 시간을 낭비하고 계신가요?</p>
              <div className="font-['Pretendard:Bold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black text-center w-[min-content]">
                <p className="leading-[1.4] mb-0 text-[40px]">{`3초 만에 원하는 기업 정보를 제공하는 `}</p>
                <p className="leading-[1.4] text-[40px]">
                  <span>{`사내용 AI 비서, `}</span>
                  <span className="font-['Pretendard:Bold',sans-serif] not-italic text-[#825dfc]">DARVIS</span>
                </p>
              </div>
              <div className="bg-[#825dfc] content-stretch flex items-center justify-center px-[28.689px] py-[14.345px] relative rounded-[7.172px] shrink-0">
                <p className="font-['Pretendard:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">무료 컨설팅 신청하기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}