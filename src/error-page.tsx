import { useRouteError } from "react-router-dom";
import errorNumber from "./assets/404.png";
import teamRocket from "./assets/teamRocket.png";
// import { HistoryRouterProps as hrp } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=" flex flex-col justify-around items-center w-screen h-screen bg-[#D93E30]">
      <div className="flex justify-center items-center relative">
        <img src={errorNumber} alt="Error" className="relative" />
        <img src={teamRocket} alt="Error" className="absolute" />
      </div>
      <p className="text-[48px] font-[700] text-[#F2F2F2]">
        The rocket team <span className="text-[#000]">has won this time.</span>
      </p>
      <button
        type="button"
        onClick={() => history.back()}
        className="text-[#212121] bg-[#F2CB07] font-[700] rounded-[11px] text-[23px] px-5 py-2.5 me-2 mb-2 w-[231px] h-[66px] [box-shadow:0px_-9px_0px_0px_rgba(0,_0,_0,_0.18)_inset] border-[0] focus:border-[0] focus:outline-none"
      >
        Return
      </button>
    </div>
  );
}
