import React from "react";
import CustomContainer from "../components/CustomContainer";
import VideoBackground from "../components/content/VideoBackground";
import { ChurchActivitiesTextContent } from "../resources/contents/ChurchActivitiesTextContent";

const ChurchActivities = () => {
  return (
    <div className="flex w-full flex-col items-center bg-black md:grow">
      <VideoBackground
        src={ChurchActivitiesTextContent.videoBG}
        videoClassName="!top-1/4 !-translate-y-3/4"
      />
      <CustomContainer className={" p-6"}>
        <div className="z-[3] px-6 text-white md:pt-8">
          <h1>{ChurchActivitiesTextContent.title}</h1>
        </div>
        <div className="z-[4] flex h-fit grow flex-col text-wrap bg-zinc-900 p-5 text-white md:p-10">
          {ChurchActivitiesTextContent?.services?.map(
            ({ title, activities }, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col py-5 ${index < ChurchActivitiesTextContent?.services.length - 1 ? "border-b-2 border-white" : ""}`}
                >
                  <h3 className=" text-red-600">{title}</h3>
                  {activities?.map(({ name, subActivities }, innerIndex) => {
                    return (
                      <div
                        className="pl-5 text-white md:pl-10"
                        key={innerIndex}
                      >
                        <h4 className="py-2 font-thin ">{name}</h4>
                        {subActivities?.map(
                          (subActivitiesItem, SubInnerIndex) => {
                            return (
                              <div
                                key={SubInnerIndex}
                                className="grid grid-cols-2 py-2 pl-7 md:grid-cols-3 md:px-16 md:pl-16"
                              >
                                <h5 className="order-1 col-span-2 text-[22px] font-extralight md:col-span-1">
                                  {subActivitiesItem?.title}
                                </h5>
                                <h5 className="order-2 col-span-2 text-[22px] font-extralight md:col-span-1">
                                  {subActivitiesItem?.time}
                                </h5>
                                <h5
                                  className={`order-3 text-[22px] font-extralight ${
                                    (subActivitiesItem?.link === "") |
                                    (subActivitiesItem?.link === undefined)
                                      ? "col-span-2 md:col-span-1"
                                      : ""
                                  }`}
                                >
                                  Via {subActivitiesItem?.type}
                                </h5>
                                <h5 className="order-5 text-[22px] font-extralight text-gray-600 md:order-4">
                                  Cellhost:
                                </h5>
                                <h5 className="order-6 text-[22px] font-extralight text-gray-600 md:order-5 ">
                                  {subActivitiesItem?.host}
                                </h5>
                                {subActivitiesItem?.link !== "" &&
                                subActivitiesItem?.link !== undefined ? (
                                  <a
                                    href={subActivitiesItem?.link}
                                    className="order-4 text-[22px] font-extralight text-blue-700 underline md:order-6"
                                  >
                                    Click to Join
                                  </a>
                                ) : (
                                  <></>
                                )}
                              </div>
                            );
                          },
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            },
          )}
        </div>
      </CustomContainer>
    </div>
  );
};

export default ChurchActivities;
