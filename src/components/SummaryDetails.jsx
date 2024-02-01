import checkSign from "../assets/Frame.svg";
import calender from "../assets/calender.svg";
import group from "../assets/Group.svg";
import gmail_icon from "../assets/Gmail_icon_(2020) 1.svg";
import deleteIcon from "../assets/deleteIcon.png";
import { gmailData, CalendarData } from "./constant/data";
import { useState } from "react";
function SummaryDetails() {
  const [day, setDay] = useState("Today");
  return (
    <div className="w-full bg-[#F6F6F6] flex gap-10 h-full px-40 py-8">
      <div className="w-full flex flex-col gap-14 py-8">
        <div className="text-[50px] text-left font-bold leading-5">
          Welcome, Jyot
        </div>
        <div className="w-full h-[357px] flex flex-col justify-center items-center gap-4 mt-24">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[25px] font-bold leading-[55px]">
                Your work summary
              </p>
              <p className="text-xs font-normal leading-[30px]">
                Connect your <span className="text-[#4285F4]">Google </span>
                accounts to see the summary of your work activities. Ready?
              </p>
            </div>
            <div className="flex gap-4">
              <div
                className={`flex gap-1 ${
                  day === "Yesterday" ? "bg-[#FFE071]" : ""
                } p-2 rounded-md cursor-pointer`}
              >
                {day === "Yesterday" && (
                  <img src={checkSign} alt="check sign" />
                )}

                <button
                  className="text-sm font-normal"
                  onClick={() => setDay("Yesterday")}
                >
                  Yesterday
                </button>
              </div>
              <div
                className={`flex gap-1 ${
                  day === "Today" ? "bg-[#FFE071]" : ""
                } p-2 rounded-md cursor-pointer`}
              >
                {day === "Today" && <img src={checkSign} alt="check sign" />}

                <button
                  className="text-sm font-normal"
                  onClick={() => setDay("Today")}
                >
                  Today
                </button>
              </div>
              <img
                src={calender}
                alt="calender"
                className="bg-[#EFEFEF] p-2 rounded-md cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full min-h-full flex justify-center items-center bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81]">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 justify-center items-center">
                <img src={group} alt="group icon" />
                <img src={gmail_icon} alt="gmail icon" />
              </div>
              <div className="text-lg font-bold leading-[30px]">
                Your <span className="text-[#4285F4]">work summary</span> will
                populate here!
              </div>
            </div>
          </div>
          <button className="text-lg font-normal text-white bg-[#4285F4] w-[120px] rounded-[5px] mt-5">
            Summarize
          </button>
        </div>
        <div className="w-full h-[300px] flex flex-col justify-center gap-2 mt-24">
          <p className="text-[25px] text-left font-bold leading-[55px]">
            Gmail(Sent Emails)
          </p>
          <div className="w-full min-h-full bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81] overflow-y-auto">
            <table className="w-full max-h-full">
              <thead className=" sticky top-0 z-10 bg-[#F6F6F6] rounded-t-lg">
                <tr>
                  <th className="text-[#4285F4] text-xs font-bold leading-[55px] text-left pl-4">
                    From
                  </th>
                  <th className="text-[#4285F4] text-xs font-bold leading-[55px] text-left">
                    Thread Name
                  </th>
                  <th className="text-[#4285F4] text-xs font-bold leading-[55px] text-left">
                    Message Content
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {gmailData &&
                  gmailData?.map((ele, idx) => (
                    <tr className="" key={idx + "gmail"}>
                      <td className="text-xs font-bold pl-4 border-b border-gray-300">
                        {ele.from}
                      </td>
                      <td className="text-xs font-bold border-b border-gray-300">
                        {ele.thread}
                      </td>
                      <td className="text-xs font-normal border-b border-gray-300">
                        {ele.msg}
                      </td>
                      <td className="pr-4 pl-10">
                        <img
                          src={deleteIcon}
                          alt="delete icon"
                          className="cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full h-[300px] flex flex-col justify-center gap-2 mt-24">
          <p className="text-[25px] text-left font-bold leading-[55px]">
            Calendar (Events, Reminders, Out of Office)
          </p>
          <div className="w-full min-h-full bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81] overflow-y-auto">
            <table className="w-full max-h-full">
              <thead className="sticky top-0 z-10 bg-[#F6F6F6] rounded-t-lg">
                <tr>
                  <th className="text-[#4285F4] text-xs font-bold leading-[55px] text-left pl-4">
                    Event Title
                  </th>
                  <th className="text-[#4285F4] text-xs font-bold leading-[55px] text-left">
                    Event Description
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {CalendarData &&
                  CalendarData?.map((ele, idx) => (
                    <tr className="" key={idx + "gmail"}>
                      <td className="text-xs font-bold pl-4 border-b border-gray-300">
                        {ele.title}
                      </td>
                      <td className="text-xs font-normal border-b border-gray-300">
                        {ele.description}
                      </td>

                      <td className="pr-4 pl-10">
                        <img
                          src={deleteIcon}
                          alt="delete icon"
                          className="cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryDetails;
