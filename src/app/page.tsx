import React from "react";
import SajuTable from "@/components/SajuTable";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-4">
      <div className="w-full max-w-md relative mx-auto">
        {/* 배경 이미지와 말풍선 */}
        <div className="relative">
          <Image
            src="/images/background.png"
            alt="배경 이미지"
            className="w-full"
            width={500}
            height={500}
          />

          {/* 말풍선 오버레이 */}
          <div className="absolute inset-0 w-full h-full">
            {/* 첫 번째 말풍선 */}
            <div className="absolute left-[18%] 4xs:left-[16%] 3xs:left-[18%] 2xs:left-[19%] xs:left-[20%] top-[31.7%] 4xs:top-[31.7%] 3xs:top-[31.7%] 2xs:top-[31.8%] xs:top-[32%] w-[100px] 4xs:w-[125px] 3xs:w-[134px] 2xs:w-[134px] xs:w-[134px]">
              <p className="text-center break-keep text-black font-normal text-[12px] 4xs:text-[14px] 3xs:text-[16px]">
                이제 본격적으로 OO님의 사주팔자를 분석해볼 차례요.
              </p>
            </div>

            {/* 두 번째 말풍선 */}
            <div className="absolute left-[10%] 4xs:left-[12%] 3xs:left-[16%] 2xs:left-[18%] xs:left-[19%] top-[49.8%] 4xs:top-[49.6%] 3xs:top-[49.6%] 2xs:top-[49.7%] xs:top-[49.7%] w-[171px]">
              <p className="text-center break-keep text-black font-normal text-[12px] 4xs:text-[14px] 3xs:text-[16px]">
                제가 OO님의 사주를 보기 쉽게 정리했어요.
              </p>
            </div>
          </div>
        </div>

        {/* 사주팔자 표 컴포넌트 */}
        <div className="mt-2">
          <SajuTable />
        </div>
      </div>
    </div>
  );
}
