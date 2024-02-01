import checkSign from "../assets/Frame.svg";
import calender from "../assets/calender.svg";
import group from "../assets/Group.svg";
import gmail_icon from "../assets/Gmail_icon_(2020) 1.svg";
import drive from "../assets/drive.svg";
import linkIcon from "../assets/linkIcon.png";
function Summary() {
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
              <button className="text-sm font-normal bg-[#EFEFEF] bg-opacity-80 p-2 rounded-md">
                Yesterday
              </button>
              <div className="flex gap-1 bg-[#FFE071] p-2 rounded-md cursor-pointer">
                <img src={checkSign} alt="check sign" />
                <button className="text-sm font-normal">Yesterday</button>
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
          <button className="text-lg font-normal text-white bg-[#939393] w-[120px] rounded-[5px] mt-5">
            Summarize
          </button>
        </div>
        <div className="w-full h-[300px] flex flex-col justify-center gap-2 mt-24">
          <p className="text-[25px] text-left font-bold leading-[55px]">
            Gmail(Sent Emails)
          </p>
          <div className="w-full min-h-full flex justify-center items-center bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81]">
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="flex gap-2 justify-center items-center">
                <img src={gmail_icon} alt="gmail icon" className="w-[53px] h-[36px]" />
              </div>
              <div className="text-lg font-bold leading-[30px]">
                Connect your <span className="text-[#4285F4]">Gmail</span>{" "}
                account to easily see all your emails.
              </div>
              <button className="w-[100px] flex items-center justify-center rounded-md bg-[#00F8D6] bg-opacity-50">
                <img src={linkIcon} alt="link_icon"/>
                <p>Gmail</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] flex flex-col justify-center gap-2 mt-24">
          <p className="text-[25px] text-left font-bold leading-[55px]">
            Calendar(Events)
          </p>
          <div className="w-full min-h-full flex justify-center items-center bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81]">
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="flex gap-2 justify-center items-center">
                <img src={group} alt="gmail icon" className="w-[53px] h-[36px]" />
              </div>
              <div className="text-lg font-bold leading-[30px] self-stretch">
                Connect your{" "}
                <span className="text-[#4285F4]">Google Calendar</span> account
                to easily see all your events.
              </div>
              <button className="w-[100px] flex items-center justify-center rounded-md bg-[#00F8D6] bg-opacity-50">
                <img src={linkIcon} alt="link icon" />
                <p>Calendar</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] flex flex-col justify-center gap-2 mt-24">
          <p className="text-[25px] text-left font-bold leading-[55px]">
          Google Drive (Files & Activities)
          </p>
          <div className="w-full min-h-full flex justify-center items-center bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81]">
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="flex gap-2 justify-center items-center">
                <img src={drive} alt="gmail icon" />
              </div>
              <div className="text-lg font-bold leading-[30px] self-stretch">
                Connect your{" "}
                <span className="text-[#4285F4]">Google Drive</span> account
                account to easily see all your Drive Activity.
              </div>
              <button className="w-[100px] flex items-center justify-center rounded-md bg-[#00F8D6] bg-opacity-50">
                <img src={linkIcon} alt="link icon"/>
                <p>Drive</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
