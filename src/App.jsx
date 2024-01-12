import { useCountdown } from "./hooks/useCountDown";

const fourteenDays = 14 * 24 * 60 * 60 * 1000;
const now = new Date().getTime();
const targetDate = now + fourteenDays;

function App() {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <main className="flex items-center justify-center h-screen overflow-hidden bg-[#111111] bg-stars">
      <div className="flex flex-col items-center justify-center gap-14 sm:gap-20">
        <p className="text-base sm:text-lg tracking-[0.3rem] text-white uppercase">
          We&apos;re launching soon
        </p>
        <div className="flex gap-3 sm:gap-5 mb-44">
          <div className="w-28 sm:w-[130px] h-36 rounded-lg   tracking-widest text-grey-57% flex flex-col justify-center text-center text-[0.7rem] ">
            <div className="bg-blue-12% h-[46%] rounded-t-[6px] border-b border-transparent before:content-[''] before:absolute before:h-[9px] before:w-2.5 before:rounded-[50%] before:z-20 before:bg-grey-8% before:translate-y-[61px] before:-translate-x-[4.4rem] after:content-[''] after:absolute after:h-[9px] after:w-2.5 after:rounded-[50%] after:z-20 after:bg-grey-8% after:translate-y-[61px] after:-translate-x-[-4.4rem] flex justify-center text-soft-red  items-end overflow-hidden opacity-0 leading-none fade font-bold text-[3rem] sm:text-[4rem] relative shadow-sm shadow-grey-4%">
              <p className="block start">{days}</p>
            </div>
            <div className="bg-blue-16% h-[46%]  rounded-b-[6px] flex justify-center text-soft-red mb-5 text-[3rem] sm:text-[4rem] overflow-hidden opacity-0 relative transform fade leading-none trans shadow-lg shadow-grey-4%">
              <p className="block start">{days}</p>
            </div>
            DAYS
          </div>
          <div className="w-28 sm:w-[130px] h-36 rounded-lg   tracking-widest text-grey-57% flex flex-col justify-center text-center text-[0.7rem] ">
            <div className="bg-blue-12% h-[46%] rounded-t-[6px] border-b border-transparent before:content-[''] before:absolute before:h-[9px] before:w-2.5 before:rounded-[50%] before:z-20 before:bg-grey-8% before:translate-y-[61px] before:-translate-x-[4.4rem] after:content-[''] after:absolute after:h-[9px] after:w-2.5 after:rounded-[50%] after:z-20 after:bg-grey-8% after:translate-y-[61px] after:-translate-x-[-4.4rem] flex justify-center text-soft-red  items-end overflow-hidden opacity-0 leading-none fade font-bold text-[3rem] sm:text-[4rem] relative shadow-sm shadow-grey-4%">
              <p className="block start">{hours}</p>
            </div>
            <div className="bg-blue-16% h-[46%]  rounded-b-[6px] flex justify-center text-soft-red mb-5 text-[3rem] sm:text-[4rem] overflow-hidden opacity-0 relative transform fade leading-none trans shadow-lg shadow-grey-4%">
              <p className="block start">{hours}</p>
            </div>
            HOURS
          </div>
          <div className="w-28 sm:w-[130px] h-36 rounded-lg   tracking-widest text-grey-57% flex flex-col justify-center text-center text-[0.7rem] ">
            <div className="bg-blue-12% h-[46%] rounded-t-[6px] border-b border-transparent before:content-[''] before:absolute before:h-[9px] before:w-2.5 before:rounded-[50%] before:z-20 before:bg-grey-8% before:translate-y-[61px] before:-translate-x-[4.4rem] after:content-[''] after:absolute after:h-[9px] after:w-2.5 after:rounded-[50%] after:z-20 after:bg-grey-8% after:translate-y-[61px] after:-translate-x-[-4.4rem] flex justify-center text-soft-red  items-end overflow-hidden opacity-0 leading-none fade font-bold text-[3rem] sm:text-[4rem] relative shadow-sm shadow-grey-4%">
              <p className="block start">{minutes}</p>
            </div>
            <div className="bg-blue-16% h-[46%]  rounded-b-[6px] flex justify-center text-soft-red mb-5 text-[3rem] sm:text-[4rem] overflow-hidden opacity-0 relative transform fade leading-none trans shadow-lg shadow-grey-4%">
              <p className="block start">{minutes}</p>
            </div>
            MINUTES
          </div>
          <div className="w-28 sm:w-[130px] h-36 rounded-lg   tracking-widest text-grey-57% flex flex-col justify-center text-center text-[0.7rem] ">
            <div className="bg-blue-12% h-[46%] rounded-t-[6px] border-b border-transparent before:content-[''] before:absolute before:h-[9px] before:w-2.5 before:rounded-[50%] before:z-20 before:bg-grey-8% before:translate-y-[61px] before:-translate-x-[4.4rem] after:content-[''] after:absolute after:h-[9px] after:w-2.5 after:rounded-[50%] after:z-20 after:bg-grey-8% after:translate-y-[61px] after:-translate-x-[-4.4rem] flex justify-center text-soft-red  items-end overflow-hidden opacity-0 leading-none fade font-bold text-[3rem] sm:text-[4rem] relative shadow-sm shadow-grey-4%">
              <p className="block start">{seconds}</p>
            </div>
            <div className="bg-blue-16% h-[46%]  rounded-b-[6px] flex justify-center text-soft-red mb-5 text-[3rem] sm:text-[4rem] overflow-hidden opacity-0 relative transform fade leading-none trans shadow-lg shadow-grey-4%">
              <p className="block start">{seconds}</p>
            </div>
            SECONDS
          </div>
        </div>
      </div>

      <img
        className="absolute inset-x-0 bottom-0 block h-44 sm:h-48"
        src="public/pattern-hills.svg"
        alt="pattern-hills"
      />
      <div className="absolute inset-x-0 flex items-center justify-center bottom-16 gap-7">
        <a href="">
          <img
            className="sm:w-5"
            src="public/icon-facebook.svg"
            alt="icon-facebook"
          />
        </a>
        <a href="">
          <img
            className="sm:w-5"
            src="public/icon-pinterest.svg"
            alt="icon-pinterest"
          />
        </a>
        <a className="sm:w-5" href="https://www.instagram.com/this.mide/">
          <img src="public/icon-instagram.svg" alt="icon-instagram" />
        </a>
      </div>
    </main>
  );
}

export default App;
