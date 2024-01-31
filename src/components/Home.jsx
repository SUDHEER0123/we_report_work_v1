import { Link } from "react-router-dom";
import googleLogo from "../assets/google.svg";
function Home() {
  return (
    <div className="w-full bg-[#F6F6F6] flex justify-around items-center h-screen">
      <div className="flex flex-col gap-4 justify-center">
        <p className="text-[50px] font-bold leading-[20px] my-4">
          We Report Work
        </p>

        <p className="text-[25px] font-medium text-black leading-[20px] my-4 ml-10">
          Daily Summary Automated
        </p>

        <p className="text-[25px] font-medium text-black leading-[20px] my-4 ml-10">
          No Mannual Work
        </p>

        <p className="text-[25px] font-medium text-black leading-[20px] my-4 ml-10">
          Never miss reporting deadlines
        </p>
      </div>

      <div className="w-[362px] h-[483px] bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81]">
        <div className="px-8 pt-8 pb-2 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <p class="text-[25px] font-bold leading-[55px]">Get Started</p>
              <p class="text-sm font-normal mb-5">
                Connect your <span class="text-blue-500">Google</span> account
                and begin to access your info in a{" "}
                <span class="text-blue-500">quick</span> and{" "}
                <span class="text-blue-500">easy</span> manner.
              </p>
            </div>

            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="w-full flex gap-2 items-center justify-center shadow-md rounded-md p-2 cursor-pointer hover:shadow-lg">
                <img src={googleLogo} alt="google logo"/>
                <p className="text-sm font-normal">Use Google Account</p>
              </div>

              <div className="flex justify-center items-center gap-2">
                <span className="text-xs text-black leading-[20px]">
                  Already have an account?
                </span>
                <Link
                  to="/login"
                  className="text-xs leading-[20px] text-[#4285F4]"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-2">
            <span className="text-xs font-normal">Privacy Policy</span>
            <span className="text-xs font-normal text-[#1A73E8]">|</span>
            <span className="text-xs font-normal">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
