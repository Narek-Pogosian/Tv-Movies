import { TimeWindow } from "@/lib/types";

type Props = {
  timeWindow: TimeWindow;
  setTimeWindow: (timeWindow: TimeWindow) => void;
};

const TrendingToggle = ({ timeWindow, setTimeWindow }: Props) => {
  return (
    <div className="relative inline-block py-[2px] mb-2 rounded-full bg-transparent">
      <div
        className={
          "absolute top-0 h-full rounded-full bg-indigo-600 transition-transform left-0 duration-300 " +
          `${
            timeWindow === "week"
              ? "translate-x-[81.5px] w-[101.5px]"
              : "w-[81.5px]"
          }`
        }
      ></div>
      <button
        onClick={() => setTimeWindow("day")}
        className={
          "px-5 relative z-99 transition-colors text-sm font-semibold duration-300 dark:text-white " +
          `${timeWindow === "day" ? "text-white" : ""}`
        }
      >
        Today
      </button>
      <button
        onClick={() => setTimeWindow("week")}
        className={
          "px-5 relative z-99 transition-colors text-sm font-semibold duration-300 dark:text-white " +
          `${timeWindow === "week" ? "text-white" : ""}`
        }
      >
        This Week
      </button>
    </div>
  );
};

export default TrendingToggle;
