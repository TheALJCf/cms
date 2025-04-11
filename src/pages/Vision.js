import React from "react";
import VideoBackground from "../components/content/VideoBackground";
import { VisionTextContent } from "../resources/contents/VisionTextContents";
import CustomContainer from "../components/CustomContainer";

const Vision = () => {
  return (
    <div className="flex w-full flex-col items-center bg-black md:grow">
      <VideoBackground
        src={VisionTextContent.visionBG}
        videoClassName="!top-1/4 !-translate-y-3/4"
      />
      <CustomContainer className={" p-6"}>
        <div className="z-[3] px-6 pt-8 text-white">
          <h1>{VisionTextContent.visionTitle}</h1>
        </div>
        <div className="z-[4] flex h-fit grow flex-col text-wrap bg-zinc-900 p-10 text-white">
          {VisionTextContent.descriptionGroup?.map(({ description }) => {
            return (
              <h6 className="pb-6 text-justify text-[19px] font-normal">
                {description}
              </h6>
            );
          })}
        </div>
      </CustomContainer>
    </div>
  );
};

export default Vision;
