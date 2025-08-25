import React from 'react';

const FourSections = (props) => {


    const destesting = "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.";

    const { title, description, buttonText1, buttonLink1, buttonText2, buttonLink2, button1style, button2style,secondBtnborder } = props;

    const firstbuttonStyle = () => {
        if (button1style === 0) {
            return btnStyles1
        } else if (props.button1style === 1) {
            return btnStyles2
        } else if (props.button1style === 2) {
            return btnStyles3
        } else {
            return btnStyles1
        }
    };
    const secondbuttonStyle = () => {
        if (button2style === 0) {
            return btnStyles1;
        } else if (props.button2style === 1) {
            return btnStyles2;
        } else if (props.button2style === 2) {
            return btnStyles3;
        } else {
            return btnStyles1;
        }
    };
    // Define base button styles
    const baseButtonStyles = `
    p-2
    
    md:w-1/2
    sm:w-1/4
  
    btn
    text-center
    text-1xl
    transition-colors
    duration-200
    ease-in-out
     border-2
    
  `;
    // Define specific styles for button 1
    const btnStyles1 = `
    ${baseButtonStyles}
    
    ${secondBtnborder ? secondBtnborder : "border-btnnav"}
    bg-btnnav
    
     text-bgbtn 
     hover:bg-bgbtn
      hover:text-btnnav  
  
  `;
    const btnStyles2 = `
    ${baseButtonStyles}
    
    
    bg-bgbtn
     border-btnnav 
     text-btnnav 
     hover:bg-btnnav
      hover:text-bgbtn  
  
  `;
    const btnStyles3 = `
    ${baseButtonStyles}
    
    
    bg-bgbtn
     border-btnnav 
     text-btnnav 
     hover:bg-btnnav
      hover:text-bgbtn  
  
  `;
    return (
        <div className={"flex flex-col md:flex-row md:px-30 " + (props.textcolor ? props.textcolor : "text-bgbtn")}>
            {/* Section 1 */}
            <div className="md:w-1/4 p-4">
                <div className=" p-4">
                    <h3 className="text-xl font-semibold mb-2">{title || '.......'}</h3>

                </div>
            </div>

            {/* Section 2 */}

            <div className="md:w-1/4 p-4">
                <div className=" p-4">

                    <p className="">{description || destesting}</p>
                </div>
            </div>

            {/* Section 3 */}
            <div className="md:w-1/4 p-4">
                <div className=" p-4">
                    <h3 className="text-xl font-semibold mb-2">Section 3</h3>
                    <p className="">Description for Section 3</p>
                </div>
            </div>

            {/* Section 4 */}
            <div className="md:w-1/4 md:p-4 p-1 sm:w-full ">
                <div className="  flex flex-col gap-3 items-start pl-4  md:items-end ">
                    <button className={firstbuttonStyle() + ''}>
                        {buttonText1 || "demo"}
                    </button>
                    <button  className={secondbuttonStyle()}>
                        {buttonText2 || "demo"}
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FourSections;