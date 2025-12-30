import img1 from "@/assets/0062539fae7aa64d4f73f10d89cdf77f5ef696f8.png";

export default function Frame() {
  return (
    <div className="bg-gradient-to-b from-50% from-[#f8f8ff] relative size-full to-[#eeeeff]">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[523px] py-[100px] relative size-full">
          <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[393px]">
            <div className="h-[39px] relative shrink-0 w-[158px]" data-name="다비스로고 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
            </div>
            <p className="font-['Pretendard:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[36px] text-black text-center text-nowrap">
              당신의 데이터는 이미 충분합니다.
              <br aria-hidden="true" />
              이제는 제대로 활용할 차례입니다!
            </p>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[160px]">
                <p className="font-['Pretendard:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-nowrap">무료 시작</p>
              </div>
              <div className="bg-[#825dfc] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[160px]">
                <p className="font-['Pretendard:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-nowrap text-white">컨설팅 신청</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}