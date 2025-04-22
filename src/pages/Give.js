import React from "react";
import VideoBackground from "../components/content/VideoBackground";
import { GivingTextContents } from "../resources/contents/GivingTextContents";
import CustomContainer from "../components/CustomContainer";
import TextEdit from "../components/forms/TextEdit";
import CustomTextArea from "../components/forms/TextArea";

function Give() {
  return (
    <div className="flex w-full flex-col items-center bg-black md:grow">
      <VideoBackground
        src={GivingTextContents.videoBG}
        videoClassName="!top-1/4 !-translate-y-3/4"
      />
      <CustomContainer className={"!h-auto md:p-6"}>
        <div className="z-[3] px-6 text-white md:pb-[100px] md:pt-8">
          <h1
            dangerouslySetInnerHTML={{
              __html: GivingTextContents.title,
            }}
          ></h1>
        </div>
      </CustomContainer>
      <div className="z-[4] flex h-auto w-full grow justify-center text-wrap bg-zinc-900 md:p-10 md:pb-14">
        <CustomContainer>
          <div className="flex h-full w-full justify-center">
            <div className="flex flex-col px-10 md:px-28 ">
              <div className="flex flex-col text-center">
                <h2
                  className="text-white"
                  dangerouslySetInnerHTML={{
                    __html: GivingTextContents.description1,
                  }}
                ></h2>
                <h4 className="text-gray-500">
                  {GivingTextContents.description2}
                </h4>
                <h5 className="pt-8 font-thin text-gray-500">
                  {GivingTextContents.verseDescription}
                </h5>
                <h5 className=" text-white">{GivingTextContents.verse}</h5>
                <h3 className="pt-8 text-white">
                  {GivingTextContents.description3}
                </h3>
                <h4 className="pt-8 font-extralight text-white">
                  {GivingTextContents.description4}
                </h4>
              </div>
              <div className="flex h-auto flex-col justify-between gap-10 md:flex-row md:px-28">
                <div className="flex h-auto w-full flex-col justify-center pt-6 text-center text-white">
                  <h5>{GivingTextContents.gcash.title}</h5>
                  <h5>{GivingTextContents.gcash.name}</h5>
                  <h5>{GivingTextContents.gcash.number}</h5>
                  <div className="pt-6">
                    <img
                      className="rounded-3xl"
                      src={GivingTextContents.gcash.image}
                      alt="Gcash QR"
                    ></img>
                  </div>
                  <p
                    className="pt-6 md:px-5"
                    dangerouslySetInnerHTML={{
                      __html: GivingTextContents.gcash.remarks,
                    }}
                  ></p>
                </div>
                <div className="flex h-auto w-full flex-col justify-start text-white">
                  <p className="flex pb-6 text-center">
                    {GivingTextContents.request.remarks}
                  </p>
                  <div className="flex w-full grow flex-col">
                    {GivingTextContents.request?.components?.map((item) => {
                      if (item.type === "textEdit") {
                        return (
                          <TextEdit
                            className="mb-2"
                            title={item?.title}
                            placeHolder={item?.placeHolder}
                          />
                        );
                      } else if (item.type === "textArea") {
                        return (
                          <CustomTextArea
                            className="mb-2 !h-[100px]"
                            title={item?.title}
                            placeHolder={item?.placeHolder}
                          />
                        );
                      }
                      return <></>;
                    })}
                    <button className="mb-8 mt-4 h-[56px] w-[120px] self-center rounded-xl border-[3px] border-gray-400 bg-green-700 text-[24px] hover:border-gray-100 hover:bg-green-900 md:mb-0">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
}

export default Give;
