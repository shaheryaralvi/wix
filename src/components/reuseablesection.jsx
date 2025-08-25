import React from 'react';
import FourSections from './foursection';

const ReusableSection = ({ data }) => {

  const {bgcolor, imageUrl1, altText1, imageUrl2, altText2, descriptionparagraph, buttonText, buttonLink } = data;
  const sectiondata = data ? data.sectionData : null;

  return (
    <div className={`bg-bgsection py-2 ${bgcolor ? bgcolor : 'bg-bgsection'}`}>
      {descriptionparagraph && (
        <div className="flex items-center justify-center h-auto w-full pt-6">
          <p className=' w-1/2  '>
            <span className=' font-sm text-sm font-normal '>The Building</span> <br />

            <span className=" text-4xl pt-4 block">
              {descriptionparagraph || " ok"}
             
            </span>
          </p>
        </div>
      )}

      {/* Image Section */}
      <div className="flex flex-col md:flex-row md:gap-20 gap-8 md:px-35 md:py-15">
        {/* Image 1 */}
        <div className="md:w-1/2">
          <img
            src={imageUrl1}
            alt={altText1}
            className="w-full h-160  rounded-md mb-4"
          />
        </div>

        {/* Image 2 */}
        <div className="md:w-1/2">
          <img
            src={imageUrl2}
            alt={altText2}
            className="w-full object-cover h-160 rounded-md mb-4"
          />
        </div>
      </div>

    
      <FourSections 
      button1style={sectiondata ? sectiondata.btn1style : 0}
      button2style={sectiondata ? sectiondata.btn2style : 1}
      textcolor={sectiondata ? sectiondata.textcolor : "text-white"}
      title={sectiondata ? sectiondata.title : "demo"}
      buttonText1={sectiondata ? sectiondata.buttonText1 : "no text"}
      buttonText2={sectiondata ? sectiondata.buttonText2 : "no text"}
      description={sectiondata ? sectiondata.description : "At 18 stories and with its unique design, La Perla is a modernist icon in the city’s skyline."}
      secondBtnborder={bgcolor === "bg-btnnav" ? "border-bgbtn" : "border-btnnav"}
      />

    </div>
  );
};

export default ReusableSection;