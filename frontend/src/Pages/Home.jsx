import React from "react";
import Slider from './slider.jsx'

import Layout from "../Components/Layout.jsx";

const Home = () => {
  return (
    <>
      <Layout>

        <main>

            <div className="heroBanner h-[500px] w-full overflow-hidden">

              <div className="heroBannerGrid  w-full h-full grid grid-cols-[5fr_2fr] ">
                <div className="mainBanner h-full border-2 ">

                </div>
                <div className="sideBanner">

                  <div className="sidebarFlex h-full">
                    <div className="sideBanner h-1/3 border-2">ds</div>
                    <div className="sideBanner h-1/3 border-2">ds</div>
                    <div className="sideBanner h-1/3 border-2">ds</div>
                  </div>

                </div>
              </div>




            </div>
              <Slider />


        </main>
      

       


      </Layout>
    </>
  );
};

export default Home;
