import React from "react";
import CustomContainer from "../components/CustomContainer";
import { HomeContent } from "../resources/contents/TextContents";
import CustomTextArea from "../components/forms/TextArea";
import TextEdit from "../components/forms/TextEdit";
import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const gotoPage = (page) => {
    navigate("/" + page);
  };

  return (
    <div className="flex w-full grow flex-col items-center">
      <div className="absolute top-0 h-[700px] w-full overflow-hidden opacity-45">
        <video
          className="absolute left-1/2 top-1/2 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 transform"
          autoPlay
          loop
          muted
        >
          <source src={HomeContent.welcomeBG} type="video/mp4" />
        </video>
      </div>
      <CustomContainer className={"!h-auto"}>
        <div className="z-[3] text-white">
          <div className="flex flex-col flex-wrap items-end pr-[120px] pt-[94px] leading-tight">
            <h1>{HomeContent.welcomeH1}</h1>
            <h2>{HomeContent.welcomeH2}</h2>
            <h3>{HomeContent.welcomeH3}</h3>
            <p className="text-[26px] ">{HomeContent.welcomeDescription}</p>
            <button
              className="mt-4 h-[56px] w-[120px] rounded-xl border-[3px] border-gray-400 bg-green-700 text-[24px] hover:border-gray-100 hover:bg-green-900"
              onClick={() => gotoPage("vision")}
            >
              {HomeContent.welcomeButtonCaption}
            </button>
          </div>
        </div>
      </CustomContainer>
      <div className="z-[4] mt-16 flex h-auto w-full justify-center bg-[#181313]">
        <CustomContainer>
          <div className="p-16 text-white">
            <div className="mb-16 flex justify-between gap-11 text-wrap">
              <img
                className="align-middle"
                src={HomeContent.churchDescriotionImage1}
                alt="Description 1"
                width={580}
              />
              <div>
                <p className="text-justify text-[19px] font-normal">
                  {HomeContent.churchDescription1}
                </p>
                <button
                  className=" mt-4 h-[56px] w-[120px] text-[24px] text-green-700 hover:text-green-500"
                  onClick={() => gotoPage("events")}
                >
                  {HomeContent.churchDescription1ButtonCaption}
                </button>
              </div>
            </div>
            <div className="mb-16 flex justify-between gap-11 text-wrap">
              <div>
                <h3>{HomeContent.churchTitle2}</h3>
                <p className="text-justify text-[19px] font-normal">
                  {HomeContent.churchDescription2}
                </p>
              </div>
              <img
                className="align-middle"
                src={HomeContent.churchDescriotionImage2}
                alt="Description 2"
                width={580}
              />
            </div>
            <div className="flex justify-between gap-11 text-wrap">
              <img
                className="align-middle"
                src={HomeContent.churchDescriotionImage3}
                alt="Description 3"
                width={580}
              />
              <div>
                <h3>{HomeContent.churchTitle3}</h3>
                <p className="text-justify text-[19px] font-normal">
                  {HomeContent.churchDescription3}
                </p>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>
      <div className="z-[4] flex h-auto w-full justify-center bg-[#114d09]">
        <CustomContainer
          className={"mt-4 flex flex-col items-center text-white"}
        >
          <h2>{HomeContent.contactUsTitle}</h2>
          <div className="flex h-auto w-full flex-row justify-between p-9">
            <div className="flex h-[500px] w-[590px] flex-col overflow-scroll bg-white bg-opacity-20">
              <div className="p-10">
                <TextEdit
                  customClassName="mb-8"
                  title={HomeContent.contactUsInputTitle1}
                  name="test1"
                  placeholder={HomeContent.contactUsInputPlaceholder1}
                />
                <CustomTextArea
                  customClassName="mb-8 !h-[100px]"
                  title={HomeContent.contactUsInputTitle2}
                  name="test2"
                  placeholder={HomeContent.contactUsInputPlaceholder2}
                />
                <TextEdit
                  customClassName="mb-6"
                  title={HomeContent.contactUsInputTitle3}
                  name="test3"
                  placeholder={HomeContent.contactUsInputPlaceholder3}
                />
                <button className="mt-4 h-[56px] w-[120px] rounded-xl border-[3px] border-gray-400 bg-green-700 text-[24px] hover:border-gray-100 hover:bg-green-900">
                  Submit
                </button>
              </div>
            </div>
            <div>
              <div className="flex h-[590px] w-[590px] flex-col items-center p-2 ">
                <h5 className="mb-4">YOU MAT VISIT US</h5>
                <h6 className="mb-2">Here's our church location</h6>
                <h6 className="mb-2">
                  135 Don Julio Gregorio, Novaliches Sauyo
                </h6>
                <iframe
                  title="ALJCF Map"
                  src={HomeContent.contactUSMap}
                  width="430"
                  height="300"
                  allowfullscreen
                  loading="lazy"
                />
                <div className="mt-2 flex w-full justify-start pl-20">
                  <h5>Follow us on:</h5>
                  <div className="flex h-24 w-24 flex-row gap-2 px-7">
                    <a
                      href="https://www.facebook.com/TheALJCF"
                      target="_blank"
                      title="Go to Facebook page"
                      rel="noreferrer"
                    >
                      <FaFacebookSquare className="h-12 w-12" />
                    </a>
                    <a
                      href="https://www.youtube.com/@thealjcf135"
                      target="_blank"
                      title="Go to Youtube page"
                      rel="noreferrer"
                    >
                      <FaYoutubeSquare className="h-12 w-12" />
                    </a>
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

export default Home;
