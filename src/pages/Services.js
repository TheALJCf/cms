import React from "react";
import CustomContainer from "../components/CustomContainer";
import VideoBackground from "../components/content/VideoBackground";
import { ServicesTextContent } from "../resources/contents/ServicesTextContent";

function Services() {
  return (
    <div className="flex w-full flex-col items-center bg-black md:grow">
      <VideoBackground
        src={ServicesTextContent.videoBG}
        videoClassName="!top-1/4 !-translate-y-3/4"
      />
      <CustomContainer className={" p-6"}>
        <div className="z-[3] px-6 text-white md:pt-8">
          <h1>{ServicesTextContent.title}</h1>
        </div>
        <div className="z-[4] flex h-fit grow flex-col text-wrap bg-zinc-900 p-5 text-white md:p-10">
          <div>
            {ServicesTextContent.services.map(
              ({ title, groupItems }, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col py-5 ${index < ServicesTextContent?.services.length - 1 ? "border-b-2 border-white" : ""}`}
                  >
                    <h3 className="font-thin text-red-600">{title}</h3>
                    {groupItems?.map(
                      ({ description, services }, innerIndex) => {
                        return (
                          <div
                            key={innerIndex}
                            className="flex flex-col justify-center px-5 text-center md:px-12"
                          >
                            <h5 className="text-[19px] font-extralight text-gray-500">
                              {description}
                            </h5>
                            <div className="py-4 md:py-7">
                              {services?.map((serviceItem, serviceIndex) => {
                                return (
                                  <div
                                    key={serviceIndex}
                                    className="flex flex-col items-center py-2"
                                  >
                                    <div className="flex flex-col md:flex-row">
                                      <h5 className="text-[24px] font-thin">
                                        {serviceItem?.name}
                                      </h5>
                                      <h5 className="hidden text-[24px] font-thin md:flex">
                                        &nbsp;|&nbsp;
                                      </h5>
                                      <h5 className="text-[24px] font-thin">
                                        {serviceItem?.time
                                          ? serviceItem?.time
                                          : "No time posted"}
                                      </h5>
                                    </div>

                                    {serviceItem?.remarks && (
                                      <p className="text-[19px] font-thin">
                                        {serviceItem?.remarks}
                                      </p>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                );
              },
            )}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
}

export default Services;
