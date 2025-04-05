import React, { useState } from 'react';
import { addUser } from '../services/api';
import CustomContainer from '../components/CustomContainer';
import { HomeContent } from '../resources/contents/TextContents';

function Home() {
  const [name, setName] = useState('');

  return (
    <div className=" items-center flex flex-col grow w-full">
      <div className='absolute w-full h-[600px] overflow-hidden top-0 opacity-45'>
        <video className='absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2' autoPlay loop muted>
          <source src={"https://videos.pexels.com/video-files/1893623/1893623-uhd_3840_2160_25fps.mp4"} type='video/mp4' />
        </video>
      </div>
      <CustomContainer className={'!h-auto'}>
        <div className='z-[3] text-white'>
          <div className='flex flex-col items-end flex-wrap leading-tight pr-[120px] pt-[23px]'>
            <h1>{HomeContent.welcomeH1}</h1>
            <h2>{HomeContent.welcomeH2}</h2>
            <h3>{HomeContent.welcomeH3}</h3>
            <p className="text-[26px] ">{HomeContent.welcomeDescription}</p>
            <button className='border-gray-400 border-[3px] rounded-xl bg-green-700 h-[56px] w-[120px] text-[24px] mt-4 hover:bg-green-900 hover:border-gray-100'>{HomeContent.welcomeButtonCaption}</button>
          </div>
        </div>
      </CustomContainer>
      <div className='bg-[#181313] w-full h-auto z-[4] flex justify-center mt-16'>
        <CustomContainer>
          <div className='p-16 text-white'>
            <p>
              {HomeContent.churchDescription1}
            </p> 
            <h3>{HomeContent.churchTitle2}</h3>
            <p>
              {HomeContent.churchDescription2}
            </p> 
            <h3>{HomeContent.churchTitle3}</h3>
            <p>
              {HomeContent.churchDescription3}
            </p> 
          </div>
        </CustomContainer>
      </div>
      <div className='bg-[#212020] w-full h-[520px] z-[5] flex justify-center'>
        <CustomContainer>
          <div >
            <p>
              Welcome to The Almighty Lord Jesus Christian Fellowship, where faith is the foundation, and Christ is our cornerstone. Here, we believe in the power of His love to heal, uplift, and transform. As a community of believers, we strive to walk in His light and share His message with the world. Whether you're seeking spiritual growth, fellowship, or a deeper relationship with Christ, you're invited to join us in worship, prayer, and service. Together, we grow stronger in His love, faith, and truth.
            </p> \\
          </div>
        </CustomContainer>
      </div>
    </div>
  );
}

export default Home;
