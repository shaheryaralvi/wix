import React from 'react';
import bgImage from '../assets/backgroundimage.avif';
import { BsChatDots } from "react-icons/bs";
import ImageSections from './imagesections';
import ReusableSection from './reuseablesection';



const Homepage = () => {
  const [urls,setUrls] = React.useState("");
  const imgurls = [
    "https://static.wixstatic.com/media/c837a6_8466b841f89349109f8ed9e27d4999a2~mv2.jpg/v1/fill/w_601,h_576,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_8466b841f89349109f8ed9e27d4999a2~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_7c1f9ec45bb847d59f6805065ad64852~mv2.jpg/v1/fill/w_601,h_576,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7c1f9ec45bb847d59f6805065ad64852~mv2.jpg",
  ];
  React.useEffect(() => {
    setUrls(imgurls);
  }, [imgurls]);

  return (
    <div className="min-h-screen bg-center bg-cover bg-no-repeat bg-fixed relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Chat Icon - Fixed at bottom right */}
      <div className='fixed bottom-8 right-8 bg-white p-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow'>
        <BsChatDots className="text-2xl text-amber-700" />
      </div>


      {/* Hero Section */}
      <div className="  py-16 text-amber-950 ">
        <div className="container mx-auto px-4 h-130  ">
          <p className="text-xl  mb-8 ">
            Meet me at
          </p>
          <h1 className="text-7xl font-bold  mb-4">
            LA PERLA
          </h1>
          <p className="text-xl mb-8">
            Discover amazing features and services that will help you grow.
          </p>

          <p className="text-xl mb-8 mt-20 w-100">
            Discover amazing features and services that will help you grow.
          </p>
          <button className="bg-btnnav  text-bgbtn hover:text-btnnav  px-6 py-2  hover:bg-bgbtn transition-colors">
            See video
          </button>
        </div>
      </div>
      {/* <ImageSections /> */}
      {/* <div className='w-full flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-8 lg:px-16'>
        <div className='w-2/3 mx-auto mt-10 border-2 h-100'>

        </div>
        <div className='w-2/3 mx-auto mt-10 border-2 h-100'>

        </div>
        <div className='w-2/3 mx-auto mt-10 border-2 h-100'>

        </div>
      </div> */}
      {/*  Two Image Section */}
      <div className="w-full bg-bgdiv p-4 flex flex-col items-center justify-center pt-20">
        <p className='w-1/2 items-center justify-center'>


          <span className='text-sm '>A Different State of Mind</span>  <br /> 
          <span className='text-4xl pt-4 block'>
            Established in the historic quarter, where cultural legacy meets the sought-after culinary scene, Brook St. is the best kept secret of town, just across the sea front. Its urban renaissance is infusing new vibes and brings back creatives, trend setters and smart investors.
          </span>
        </p>
        <div className="flex flex-col md:flex-row w-full pt-10 mb-25">
          {/* Image 1 */}
          <div className="md:w-1/2 h-1/2 md:h-auto flex items-center justify-center">
            <img
              src="https://static.wixstatic.com/media/c837a6_11f57e157cfb460bbfed9679d6dac3dd~mv2.jpg/v1/fill/w_290,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/yuvalna_photograph_of_a_Boardwalk_that_is_close_to_the_building_3273c742-f097-4ed5-a17e-82.jpg"
              alt="Image 1"
              className="w-auto h-auto"
            />
          </div>

          {/* Image 2 */}
          <div className="md:w-1/2 h-1/2 md:h-full flex items-center mt-15 justify-center">
            <img
              src="https://static.wixstatic.com/media/c837a6_d0d9e0691673495698dd11d9b3aff280~mv2.jpg/v1/fill/w_209,h_251,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pexels-fernando-reyes-6600902%20copy.jpg"
              alt="Image 2"
              className=" h-auto  w-auto"
            />
          </div>
        </div>

      </div>
      {/* Reusable Section */}
      <div id='#aboutus'>

      </div>
      <ReusableSection  data={{
        imageUrl1: imgurls[1],
        altText1: "Image 1",  
        imageUrl2: imgurls[0],
        altText2: "Image 2",
       
        buttonText: "Learn More",
        buttonLink: "/learn-more",
        // bgcolor: "bg-bgsection",
        sectionData: {
          btn1style: 0,
          btn2style: 1,
          textcolor: "text-btnnav",
          title: "Gardenia Apt",
          buttonText1: "Book a tour",
          buttonText2: "View floor plan",
          description: "At 18 stories and with its unique design, La Perla is a modernist icon in the city’s skyline."
        }
     
     
     }} />

      <ReusableSection data={{
        imageUrl1: imgurls[1],
        altText1: "Image 1",  
        imageUrl2: imgurls[0],
        altText2: "Image 2",
       
        buttonText: "Learn More",
        buttonLink: "/learn-more",
        bgcolor: "bg-btnnav",
        sectionData: {
          btn1style: 1,
          btn2style: 0,
          textcolor: "text-bgbtn",
          buttonText1: "Book a tour",
          buttonText2: "View floor plan",
          title: "Sky Apt",
          btnLink:"",
          description: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
        }
        
      }} />

      
    </div>
  );
};

export default Homepage;