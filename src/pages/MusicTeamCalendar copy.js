import React, { useState } from "react";
import dayjs from "dayjs";
import VideoBackground from "../components/content/VideoBackground";
import { MusicTeamScheduleTextContent } from "../resources/contents/MusicTeamScheduleTextContent";
import CustomContainer from "../components/CustomContainer";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MusicTeamCalendar = () => {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today.startOf("month"));

  const startOfMonth = currentMonth.startOf("month");
  const startDay = startOfMonth.day();
  const daysInMonth = currentMonth.daysInMonth();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrev = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNext = () => setCurrentMonth(currentMonth.add(1, "month"));

  return (
    <div className="flex w-full flex-col items-center bg-black md:grow">
      <VideoBackground
        src={MusicTeamScheduleTextContent.videoBG}
        videoClassName="!top-1/4 !-translate-y-3/4"
      />
      <CustomContainer className={" p-6"}>
        <div className="z-[3] px-6 text-white md:pt-8">
          <h1>{MusicTeamScheduleTextContent.title}</h1>
        </div>
        <div className="z-[4] rounded-xl bg-gray-800 bg-opacity-80 p-4">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="rounded bg-gray-200 px-2 py-1"
            >
              ←
            </button>
            <h2 className="text-2xl font-bold text-white">
              {currentMonth.format("MMMM YYYY")}
            </h2>
            <button
              onClick={handleNext}
              className="rounded bg-gray-200 px-2 py-1"
            >
              →
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7 gap-2 text-white ">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center font-semibold">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map((day, idx) => {
              const date = day
                ? currentMonth.date(day).format("YYYY-MM-DD")
                : null;
              const events = day
                ? MusicTeamScheduleTextContent.schedule[date]
                : null;
              const isToday =
                day && today.isSame(currentMonth.date(day), "day");
              console.log("Test", day, currentMonth.date(day));
              return (
                <div
                  key={idx}
                  className={`min-h-[100px] rounded border p-2 text-sm shadow-sm ${
                    isToday
                      ? "border-green-400 bg-green-100"
                      : day
                        ? "bg-white"
                        : "border-0 bg-transparent"
                  }`}
                >
                  <div
                    className={`font-bold ${isToday ? "text-green-600" : "text-lime-700"}`}
                  >
                    {day}
                  </div>
                  {events && (
                    <div className="mt-1">
                      {events.morning && (
                        <div className="mb-1">
                          <strong>Morning:</strong> {events.morning.sl} <br />
                          <span className="text-xs text-gray-600">
                            {events.morning.bup.join(", ")}
                          </span>
                        </div>
                      )}
                      {events.vesper && (
                        <div className="mb-1">
                          <strong>Vesper:</strong> {events.vesper.sl} <br />
                          <span className="text-xs text-gray-600">
                            {events.vesper.bup.join(", ")}
                          </span>
                        </div>
                      )}
                      {events.vip && (
                        <div className="mb-1">
                          <strong>VIP:</strong> {events.vip.sl} <br />
                          <span className="text-xs text-gray-600">
                            {events.vip.bup.join(", ")}
                          </span>
                        </div>
                      )}
                      {events.special && (
                        <div className="mb-1">
                          <strong>SPECIAL:</strong> {events.special.sl} <br />
                          <span className="text-xs text-gray-600">
                            {events.special.bup.join(", ")}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default MusicTeamCalendar;
