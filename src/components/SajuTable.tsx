import React from "react";

// 사주팔자 표 컴포넌트
export default function SajuTable() {
  return (
    <div className="bg-[#F4F2F0]w-full p-1 2xs:p-1.5 3xs:p-2 xs:p-2 sm:p-3">
      <div className="bg-sub border-2 border-gray-700 p-1 2xs:p-1.5 3xs:p-2 xs:p-2 sm:p-3 rounded-sm">
        <div className="text-center text-gray-700 mb-6">
          <p className="font-medium text-xs 2xs:text-xs 3xs:text-sm xs:text-sm sm:text-xl mb-2">
            김로켓님의 사주
          </p>
          <p className="font-bold text-xs 2xs:text-sm 3xs:text-xl xs:text-2xl sm:text-2xl">
            1980년 8월27일 08:10
          </p>
        </div>

        <table className="w-full border-collapse table-fixed text-black">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="border-r border-black p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 w-1/5"></th>
              <th className="border-r border-gray-400 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5 text-2xl">
                時
              </th>
              <th className="border-r border-gray-400 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5 text-2xl">
                日
              </th>
              <th className="border-r border-gray-400 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5 text-2xl">
                月
              </th>
              <th className="border-r border-black p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5 text-2xl">
                年
              </th>
            </tr>
          </thead>
          <tbody className="text-[10px] 2xs:text-[10px] 3xs:text-xs xs:text-xs sm:text-sm">
            <tr className="border-b border-black">
              <td className="p-1.5 text-center border-r border-black w-1/5">
                <div className=" text-black">
                  <span className="block text-sm font-bold">十星</span>
                  <span className="block text-[10px] leading-none">(십성)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black">
                  <span className="block text-base font-bold">傷官</span>
                  <span className="block text-xs leading-none ">(상관)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black">
                  <span className="block text-base font-bold">比肩</span>
                  <span className="block text-xs leading-none ">(비견)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black ">
                  <span className="block text-base font-bold">傷官</span>
                  <span className="block text-xs leading-none ">(상관)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-black w-1/5">
                <div className=" text-black ">
                  <span className="block text-base font-bold">傷官</span>
                  <span className="block text-xs leading-none ">(상관)</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border-r border-black p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="text-black ">
                  <span className="block text-sm font-bold">壬寅</span>
                  <span className="block text-[10px] leading-none">(천간)</span>
                </div>
              </td>
              <td className="border-r border-gray-300 bg-sub2 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="bg-icon1 text-white rounded-xl p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 mb-0.5 2xs:mb-0.5 3xs:mb-1 xs:mb-1">
                  <span className="block text-[10px] leading-none">임</span>
                  <span className="block text-2xl font-bold">壬</span>
                  <span className="block text-[10px] leading-none">陽水</span>
                </div>
              </td>
              <td className="border-r border-gray-300 bg-sub2 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="bg-icon2 text-white rounded-xl p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 mb-0.5 2xs:mb-0.5 3xs:mb-1 xs:mb-1">
                  <span className="block text-[10px] leading-none">정</span>
                  <span className="block text-2xl font-bold">丁</span>
                  <span className="block text-[10px] leading-none">陰火</span>
                </div>
              </td>
              <td className="border-r border-gray-300 bg-sub2p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="bg-icon1 text-white rounded-xl p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 mb-0.5 2xs:mb-0.5 3xs:mb-1 xs:mb-1">
                  <span className="block text-[10px] leading-none">계</span>
                  <span className="block text-2xl font-bold">癸</span>
                  <span className="block text-[10px] leading-none">臨水</span>
                </div>
              </td>
              <td className="border-r border-black bg-sub2 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="bg-icon1 text-white rounded-xl p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 mb-0.5 2xs:mb-0.5 3xs:mb-1 xs:mb-1">
                  <span className="block text-[10px] leading-none">계</span>
                  <span className="block text-2xl font-bold">癸</span>
                  <span className="block text-[10px] leading-none">臨水</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="border-r border-black p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="text-black">
                  <span className="block text-sm font-bold">地支</span>
                  <span className="block text-[10px] leading-none">(지지)</span>
                </div>
              </td>
              <td className="border-r border-gray-300 bg-sub2 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="bg-icon3 text-white rounded-xl p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 mb-0.5 2xs:mb-0.5 3xs:mb-1 xs:mb-1">
                  <span className="block text-[10px] leading-none">인</span>
                  <span className="block text-2xl font-bold">寅</span>
                  <span className="block text-[10px] leading-none">架木</span>
                </div>
              </td>
              <td className="border-r border-gray-300 bg-sub2 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="bg-icon2 text-white rounded-xl p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 mb-0.5 2xs:mb-0.5 3xs:mb-1 xs:mb-1">
                  <span className="block text-[10px] leading-none">사</span>
                  <span className="block text-2xl font-bold">巳</span>
                  <span className="block text-[10px] leading-none">陰火</span>
                </div>
              </td>
              <td className="border-r border-gray-300 bg-sub2 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="bg-icon1 text-white rounded-xl p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 mb-0.5 2xs:mb-0.5 3xs:mb-1 xs:mb-1">
                  <span className="block text-[10px] leading-none">해</span>
                  <span className="block text-2xl font-bold">亥</span>
                  <span className="block text-[10px] leading-none">陰水</span>
                </div>
              </td>
              <td className="border-r border-black bg-sub2 p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 text-center w-1/5">
                <div className="bg-white text-black border border-black rounded-xl p-0.5 2xs:p-0.5 3xs:p-1 xs:p-1 sm:p-2 mb-0.5 2xs:mb-0.5 3xs:mb-1 xs:mb-1">
                  <span className="block text-[10px] leading-none">유</span>
                  <span className="block text-2xl font-bold">西</span>
                  <span className="block text-[10px] leading-none">陰金</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="p-1.5 text-center border-r border-black w-1/5">
                <div className=" text-black">
                  <span className="block text-sm font-bold">十星</span>
                  <span className="block text-[10px] leading-none">(십성)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black">
                  <span className="block text-base font-bold">比肩</span>
                  <span className="block text-xs leading-none ">(비견)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black">
                  <span className="block text-base font-bold">劫財</span>
                  <span className="block text-xs leading-none ">(겁재)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black ">
                  <span className="block text-base font-bold">食神</span>
                  <span className="block text-xs leading-none ">(식신)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-black w-1/5">
                <div className=" text-black ">
                  <span className="block text-base font-bold">偏財</span>
                  <span className="block text-xs leading-none ">(편재)</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="p-1.5 text-center border-r border-black w-1/5">
                <div className=" text-black">
                  <span className="block text-sm font-bold">貴人</span>
                  <span className="block text-[10px] leading-none">(귀인)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black">
                  <span className="block text-xs leading-none ">(없음)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black">
                  <span className="block text-xs leading-none ">(없음)</span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-gray-300 w-1/5">
                <div className=" text-black ">
                  <span className="block text-base font-bold">天乙</span>
                  <span className="block text-xs leading-none ">
                    (천을귀인)
                  </span>
                </div>
              </td>
              <td className="p-1.5 text-center bg-sub2 border-r border-black w-1/5">
                <div className=" text-black mb-2">
                  <span className="block text-base font-bold">天乙</span>
                  <span className="block text-xs leading-none ">
                    (천을귀인)
                  </span>
                </div>
                <div className=" text-black mb-2">
                  <span className="block text-base font-bold">太極</span>
                  <span className="block text-xs leading-none ">
                    (태극귀인)
                  </span>
                </div>
                <div className=" text-black mb-2">
                  <span className="block text-base font-bold">文昌</span>
                  <span className="block text-xs leading-none ">
                    (문창귀인)
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
