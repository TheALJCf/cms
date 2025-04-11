import React from "react";
import CustomContainer from "../components/CustomContainer";
import { HomeContent } from "../resources/contents/HomeTextContents";
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
    <div className="flex w-full flex-col items-center md:grow">
      <div className="absolute top-[-60px] h-[700px] w-full overflow-hidden opacity-45 md:top-0">
        <video
          className="absolute left-1/2 top-1/2 h-auto w-auto min-w-[1200px] -translate-x-1/2 -translate-y-1/2 transform"
          autoPlay
          loop
          muted
        >
          <source src={HomeContent.welcomeBG} type="video/mp4" />
        </video>
      </div>
      <CustomContainer className={"!h-auto p-6"}>
        <div className="z-[3] text-white">
          <div className="flex flex-col leading-tight md:items-end md:pr-[120px] md:pt-[94px]">
            <h1 className="text-wrap">{HomeContent.welcomeH1}</h1>
            <h2>{HomeContent.welcomeH2}</h2>
            <h3>{HomeContent.welcomeH3}</h3>
            <p className="md:text-[26px]">{HomeContent.welcomeDescription}</p>
            <button
              className="mt-4 h-[56px] w-[120px] self-end rounded-xl border-[3px] border-gray-400 bg-green-700 text-[24px] hover:border-gray-100 hover:bg-green-900"
              onClick={() => gotoPage("vision")}
            >
              {HomeContent.welcomeButtonCaption}
            </button>
          </div>
        </div>
      </CustomContainer>
      <div className="z-[4] mt-16 flex h-auto w-full justify-center bg-[#181313]">
        <CustomContainer>
          <div className="mb:p-16 p-8 text-white">
            <div className="mb-16 flex flex-col justify-between gap-11 text-wrap md:flex-row">
              <img
                className="align-middle md:w-[580px]"
                src={HomeContent.churchDescriotionImage1}
                alt="Description 1"
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
            <div className="mb-16 flex flex-col justify-between gap-11 text-wrap md:flex-row">
              <div className="order-2 md:order-1">
                <h3>{HomeContent.churchTitle2}</h3>
                <p className="text-justify text-[19px] font-normal">
                  {HomeContent.churchDescription2}
                </p>
              </div>
              <img
                className="order-1 align-middle md:order-2 md:w-[580px]"
                src={HomeContent.churchDescriotionImage2}
                alt="Description 2"
              />
            </div>
            <div className="mb-16 flex flex-col justify-between gap-11 text-wrap md:flex-row">
              <img
                className="align-middle md:w-[580px]"
                src={HomeContent.churchDescriotionImage3}
                alt="Description 3"
              />
              <div>
                <h3>{HomeContent.churchTitle3}</h3>
                <p className="text-justify text-[16px] font-normal md:text-[19px]">
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
          <h2 className="self-center">{HomeContent.contactUsTitle}</h2>
          <div className="flex h-auto w-full flex-col justify-between p-6 md:flex-row md:p-9">
            <div className="flex h-[500px] flex-col overflow-scroll bg-white bg-opacity-20 md:w-[590px]">
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
              <div className="flex h-[590px] flex-col items-center p-2 md:w-[590px] ">
                <h5 className="mb-4">YOU MAT VISIT US</h5>
                <h6 className="mb-2">Here's our church location</h6>
                <h6 className="mb-2 text-center">
                  135 Don Julio Gregorio, Novaliches Sauyo
                </h6>
                <iframe
                  className="h-[300px] w-full md:w-[430px]"
                  title="ALJCF Map"
                  src={HomeContent.contactUSMap}
                  allowfullscreen
                  loading="lazy"
                />
                <div className="mt-2 flex w-full justify-start md:pl-20">
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
