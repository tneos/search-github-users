import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="w-full">
      <Skeleton className="h-[194px] mb-8 rounded" width={500} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
      </div>
    </div>
  );
};
export default Loading;
