import React from "react";
import CustomContainer from "../components/CustomContainer";
import VideoBackground from "../components/content/VideoBackground";
import { MusicTeamScheduleTextContent } from "../resources/contents/MusicTeamScheduleTextContent";
import { DateContent } from "../resources/contents/DateContents";

const MusicTeamSchedules = () => {
  const { videoBG, title, schedules } = MusicTeamScheduleTextContent;
  const date = new Date();

  const getDayDescription = (date) => {
    const weekdayName = DateContent.days[date.getDay()];
    const occurrence = Math.floor((date.getDate() - 1) / 7) + 1;
    const ordinal = ["1st", "2nd", "3rd"][occurrence - 1] || `${occurrence}th`;
    return `${ordinal} ${weekdayName}`;
  };

  return (
    <div className="flex w-full flex-col items-center bg-black md:grow">
      <VideoBackground
        src={videoBG}
        videoClassName="!top-1/4 !-translate-y-3/4"
      />
      <CustomContainer className={" p-6"}>
        <div className="z-[3] px-6 text-white md:py-8">
          <h1 className="text-[65px]">{title}</h1>
        </div>
        <div className="z-[4] flex h-fit grow flex-col text-wrap bg-zinc-900 p-5 text-white md:p-10">
          <h4 className="pb-4">
            <span>{"Hey, today is "}</span>
            <span className=" text-green-500">{getDayDescription(date)}</span>
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {schedules?.map((scheduleItem, index) => {
              return (
                <div key={index}>
                  <h5>{scheduleItem?.name}</h5>
                  {scheduleItem?.schedules?.map((subScheduleItem, subIndex) => {
                    return (
                      <div key={subIndex} className="p-2">
                        <div className="h-auto w-full rounded-md bg-white p-2 text-black shadow-md">
                          <h6>{subScheduleItem?.name}</h6>
                          {subScheduleItem?.schedules?.map(
                            (subSubScheduleItem, subSubIndex) => {
                              return (
                                <div key={subSubIndex} className="pb-1">
                                  <p className="font-black">
                                    {subSubScheduleItem?.name}
                                  </p>
                                  <div className="flex">
                                    <p className="text-gray-600">
                                      Song Lead:&nbsp;
                                    </p>
                                    <p className="font-semibold">
                                      {subSubScheduleItem?.sl}
                                    </p>
                                  </div>
                                  <div className="flex">
                                    <p className="text-gray-600">
                                      Backup:&nbsp;
                                    </p>
                                    <p className="font-semibold">
                                      {subSubScheduleItem?.bup?.join(", ")}
                                    </p>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default MusicTeamSchedules;
