import { twMerge } from "tailwind-merge";

const VideoBackground = ({ src, className, videoClassName }) => {
  return (
    <div
      className={twMerge(
        "absolute top-[-60px] h-[700px] w-full overflow-hidden opacity-45 md:top-0",
        className,
      )}
    >
      <video
        className={twMerge(
          "absolute left-1/2 top-1/2 h-auto w-auto min-w-[1200px] -translate-x-1/2 -translate-y-1/2 transform",
          videoClassName,
        )}
        autoPlay
        loop
        muted
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default VideoBackground;
