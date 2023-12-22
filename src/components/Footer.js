import React from "react";
import Icons from "./icons";
import "./Footer.css";
import Footerlinks from "./Footerlinks";
import FooterInputForm from "./FooterInputForm";
import Triangle from "./triangle";

const Footer = () => {
  return (<>
    <div className="relative footer-container w-full h-fit  text-left text-77xl text-pitchdeck-slide-background font-goldman photo-frame"
    style={{
      width:'100%',
      position:'relative'
    }}><Triangle/>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1444 532" fill="none">
  <g filter="url(#filter0_b_534_94)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H1402V201.705L1442 251.875V530H48.5V221.675L2 166.635V2Z" fill="#D9D9D9" fill-opacity="0.05"/>
    <path d="M1412 214.247L1432 239.332L1432.78 238.709L1442.78 251.251L1443 251.525V251.875V269.257H1442V304.023H1443V338.789H1442V373.554H1443V408.32H1442V443.086H1443V477.851H1442V512.617H1443V530V531H1442H1424.58V530H1389.74V531H1354.91V530H1320.07V531H1285.23V530H1250.39V531H1215.56V530H1180.72V531H1145.88V530H1111.04V531H1076.21V530H1041.37V531H1006.53V530H971.694V531H936.857V530H902.019V531H867.181V530H832.344V531H797.506V530H762.669V531H727.831V530H692.994V531H658.156V530H623.319V531H588.481V530H553.644V531H518.806V530H483.969V531H449.131V530H414.294V531H379.456V530H344.619V531H309.781V530H274.944V531H240.106V530H205.269V531H170.431V530H135.594V531H100.756V530H65.9188V531H48.5H47.5V530V510.73H48.5V472.189H47.5V433.649H48.5V395.108H47.5V356.567H48.5V318.027H47.5V279.486H48.5V240.946H47.5V222.041L36.1111 208.56L36.875 207.915L13.625 180.395L12.8611 181.04L1.23612 167.28L1 167.001V166.635V146.055H2V104.897H1V63.738H2V22.5793H1V2V1H2H19.5V2H54.5V1H89.5V2H124.5V1H159.5V2H194.5V1H229.5V2H264.5V1H299.5V2H334.5V1H369.5V2H404.5V1H439.5V2H474.5V1H509.5V2H544.5V1H579.5V2H614.5V1H649.5V2H684.5V1H719.5V2H754.5V1H789.5V2H824.5V1H859.5V2H894.5V1H929.5V2H964.5V1H999.5V2H1034.5V1H1069.5V2H1104.5V1H1139.5V2H1174.5V1H1209.5V2H1244.5V1H1279.5V2H1314.5V1H1349.5V2H1384.5V1H1402H1403V2V18.6421H1402V51.9262H1403V85.2103H1402V118.494H1403V151.779H1402V185.063H1403V201.355L1412.78 213.624L1412 214.247Z" stroke="white" stroke-width="2" stroke-dasharray="35 35"/>
  </g>
  <defs>
    <filter id="filter0_b_534_94" x="-79.8" y="-79.8" width="1603.6" height="691.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="39.9"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_534_94"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_534_94" result="shape"/>
    </filter>
  </defs>
</svg> */}
      <div className="relative max-w-full max-h-fit  flex flex-col items-end justify-center text-mini font-bruno-ace-sc  ">
        <div
          className="relative  flex flex-col w-[95vw]  h-[33.25rem]   shrink-0 "
          style={{ padding: "1rem" }}
        >
          {/* get in touch heading */}
{/* 
          <div className=" footer-top-section flex items-center justify-center relative w-full h-fit">
        
            <div className="bg-transparent font-goldman text-[48px] outline-none m-[2rem] border-solid border-2 py-1 border-white tracking-[0.08em] text-pitchdeck-slide-background text-left flex items-center">
              GET IN TOUCH
            </div>
              <div className="footer-line w-[60%] h-[30%] "></div>
          </div> */}
          <svg  width="99%" height="90%" viewBox="0 0 1327 90" fill="none" xmlns="http://www.w3.org/2000/svg"style={{padding:'1.2rem'}}>
<rect x="1" y="1" width="470" height="87.9933" stroke="white" stroke-width="2"/>
<path d="M32.144 66C29.872 66 28.096 65.68 26.816 65.04C25.536 64.4 24.64 63.44 24.128 62.16C23.616 60.88 23.36 59.296 23.36 57.408V46.704C23.36 43.632 24.048 41.376 25.424 39.936C26.8 38.464 29.04 37.728 32.144 37.728H46.592C48.8 37.728 50.48 37.856 51.632 38.112C52.816 38.336 53.408 38.576 53.408 38.832L52.448 42.816C51.904 42.72 50.288 42.624 47.6 42.528C44.944 42.4 41.072 42.336 35.984 42.336H33.536C30.976 42.336 29.696 43.472 29.696 45.744V57.984C29.696 59.072 29.968 59.92 30.512 60.528C31.088 61.104 32.096 61.392 33.536 61.392H35.504C38.576 61.392 41.168 61.376 43.28 61.344C45.392 61.28 47.136 61.232 48.512 61.2V54.672L45.632 54.72L39.344 55.2V50.496H54.8V63.984L55.28 64.992C55.28 65.248 54.608 65.488 53.264 65.712C51.92 65.904 49.648 66 46.448 66H32.144ZM65.5962 66V37.776H95.4522V42.384H71.9322V49.008H89.8842V53.76H71.9322V61.392H95.6442L97.5643 65.472C97.5643 65.6 97.1323 65.728 96.2683 65.856C95.4043 65.952 93.9163 66 91.8043 66H65.5962ZM115.594 66L115.546 42.336H103.066V37.728H134.458V42.336H121.93V66H115.594ZM157.021 66V37.776H163.357V66H157.021ZM175.117 66V41.616L174.637 37.776H181.549L197.869 54.864L199.741 57.456H200.269V37.776H206.605V66H200.509L183.805 48.624L181.933 46.368H181.453V66H175.117ZM241.688 66L241.64 42.336H229.16V37.728H260.552V42.336H248.024V66H241.688ZM277.272 66C275.032 66 273.272 65.68 271.992 65.04C270.712 64.4 269.8 63.44 269.256 62.16C268.744 60.88 268.488 59.296 268.488 57.408V46.32C268.488 44.464 268.744 42.912 269.256 41.664C269.768 40.384 270.664 39.424 271.944 38.784C273.224 38.112 275 37.776 277.272 37.776H291.288C293.528 37.776 295.272 38.112 296.52 38.784C297.8 39.424 298.696 40.384 299.208 41.664C299.752 42.912 300.024 44.464 300.024 46.32V57.408C300.024 60.224 299.4 62.368 298.152 63.84C296.904 65.28 294.616 66 291.288 66H277.272ZM278.664 61.392H289.944C291.128 61.392 292.04 61.088 292.68 60.48C293.352 59.872 293.688 59.04 293.688 57.984V45.744C293.688 44.816 293.352 44.032 292.68 43.392C292.008 42.72 291.096 42.384 289.944 42.384H278.664C277.512 42.384 276.584 42.688 275.88 43.296C275.176 43.904 274.824 44.72 274.824 45.744V57.984C274.824 59.072 275.16 59.92 275.832 60.528C276.536 61.104 277.48 61.392 278.664 61.392ZM317.922 66.48C315.01 66.48 312.978 65.696 311.826 64.128C310.674 62.56 310.098 60.48 310.098 57.888V37.776H316.434V58.08C316.434 59.584 316.802 60.592 317.538 61.104C318.274 61.616 319.186 61.872 320.274 61.872H330.45C331.474 61.872 332.37 61.616 333.138 61.104C333.906 60.56 334.29 59.552 334.29 58.08V37.776H340.626V57.888C340.626 59.616 340.386 61.12 339.906 62.4C339.426 63.68 338.626 64.688 337.506 65.424C336.386 66.128 334.834 66.48 332.85 66.48H317.922ZM359.472 66C357.2 66 355.424 65.68 354.144 65.04C352.864 64.4 351.968 63.44 351.456 62.16C350.944 60.88 350.688 59.296 350.688 57.408V46.704C350.688 43.632 351.376 41.376 352.752 39.936C354.128 38.464 356.368 37.728 359.472 37.728H373.92C376.128 37.728 377.808 37.856 378.96 38.112C380.144 38.336 380.736 38.576 380.736 38.832L379.776 42.816C379.232 42.72 377.616 42.624 374.928 42.528C372.272 42.4 368.4 42.336 363.312 42.336H360.864C358.304 42.336 357.024 43.472 357.024 45.744V57.984C357.024 59.072 357.296 59.92 357.84 60.528C358.416 61.104 359.424 61.392 360.864 61.392H362.832C368.144 61.392 372.256 61.344 375.168 61.248C378.112 61.12 379.936 60.992 380.64 60.864L382.608 64.032C382.608 64.192 382.336 64.432 381.792 64.752C381.28 65.072 380.32 65.36 378.912 65.616C377.504 65.872 375.472 66 372.816 66H359.472ZM391.003 66V37.776H397.339V49.488H416.155V37.776H422.491V66H416.155V54.096H397.339V66H391.003Z" fill="white"/>
<path d="M1327 25H771.936L723.471 52H472" stroke="white"/>
</svg>

         

          <div className="footer-content-container  gap-2  flex relative w-full h-[75%]  justify-between">
            <div className=" h-full w-[15%] flex items-center">
              <Icons />
            </div>

            {/* icons and form separating line ka div */}
            <div className="h-full w-0.5 bg-pitchdeck-slide-background" style={{
              
            }}/>

            <div className="h-full w-[45%] overflow-hidden  object-contain  flex items-center">
              <FooterInputForm />
            </div>

            {/* icons and form separating line ka div */}
            <div className=" w-0.5 bg-pitchdeck-slide-background" style={{
              height:'110%',
              transform:'translateY(-40px)'
            }}/>

            <div className="h-full w-[35%] overflow-hidden flex items-center">
              <Footerlinks></Footerlinks>
            </div>
          </div>

        </div>
      </div>
      
    </div >
    
    <p style={{
      alignContent:'center',
      marginLeft:'48%',
    }}>@EES IIT(BHU)</p>
    </>
  );
};

export default Footer;