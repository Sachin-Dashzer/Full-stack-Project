// SlickSlider.js
import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const [state, setstate] = useState(0)
  const blogs = [
    {
      title: "Understanding the web",
      genre: "Technology",
      author: "Jane Doe",
      published_date: "2024-01-15",
      image: "assets/images/technology.jpg",
    },

    {
      title: "Healthy Eating Tips",
      genre: "Health",
      author: "Emily Johnson",
      published_date: "2024-03-05",
      image: "assets/images/healthcare.jpg",
    },
    {
      title: "Exploring the Great Outdoors",
      genre: "Travel",
      author: "Michael Brown",
      published_date: "2024-03-20",
      image: "assets/images/travelling.jpg",
    },

    {
      title: "The Art of Minimalism",
      genre: "Lifestyle",
      author: "David Lee",
      published_date: "2024-04-15",
      image: "assets/images/lifestyle.jpg",
    },
    {
      title: "Photography Tips for Beginners",
      genre: "Photography",
      author: "Jessica Green",
      published_date: "2024-05-01",
      image: "assets/images/photography.jpg",
    },
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setstate(state + 1);
      console.log(state);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);




  
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    vertical: true,
    // verticalSwiping: true,
  };

  return (
    <div>
      {/* <div className="heroBanner h-[540px] w-full overflow-hidden">
        <div className="heroBannerGrid  w-full h-full grid grid-cols-[5fr_2fr] ">
          <div className="mainBanner h-full border-2 " style={{ backgroundImage: `url(${blogs[state].image})`}}>


            <h1>{blogs[state].title}</h1>






          </div>
          <div className="sideBanner h-full">
            <div className="sidebarFlex h-full">
              <Slider {...settings}>
                {blogs.map((blog, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="top-blogs h-[180px] w-full bg-cover"
                        style={{ backgroundImage: `url(${blog.image})` }}
                      >
                        <div className="genreBox px-2 py-1 bg-primary text-white">
                          <p className="text-sm">{blog.genre}</p>
                        </div>
                        <h2>{blog.title}</h2>
                        <h5>
                          By <span>{blog.author}</span>
                        </h5>
                        <h5>
                          On <span>{blog.published_date}</span>
                        </h5>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SlickSlider;
