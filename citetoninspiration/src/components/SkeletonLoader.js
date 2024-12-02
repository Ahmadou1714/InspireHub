import { Skeleton } from "./ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="section-class">
      {[1, 2, 3, 4].map((index) => (
        <div key={index}>
          <section>
            <div className="skeleton-image">
              <Skeleton className="w-[150px] h-[150px] rounded-full absolute -top-[20%] left-1/2 transform -translate-x-1/2" />
            </div>
            <div className="mt-[100px] space-y-4">
              <Skeleton className="h-4 w-full bg-gray-300" />
              <Skeleton className="h-4 w-[90%] mx-auto bg-gray-300" />
              <Skeleton className="h-4 w-[80%] mx-auto bg-gray-300" />
              <div className="pt-4 mt-4 border-t">
                <Skeleton className="h-6 w-[60%] mx-auto bg-gray-300" />
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
