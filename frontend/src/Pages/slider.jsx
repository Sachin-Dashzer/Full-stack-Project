// SlickSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlickSlider = () => {
  const blogs = [
    {
      "title": "Understanding the web",
      "genre": "Technology",
      "author": "Jane Doe",
      "published_date": "2024-01-15",
      "image" : "assets/images/technology.jpg"
    },
    
    {
      "title": "Healthy Eating Tips",
      "genre": "Health",
      "author": "Emily Johnson",
      "published_date": "2024-03-05",
      "image" : "assets/images/healthcare.jpg"
    },
    {
      "title": "Exploring the Great Outdoors",
      "genre": "Travel",
      "author": "Michael Brown",
      "published_date": "2024-03-20",
      "image" : "assets/images/travelling.jpg"
    },

    {
      "title": "The Art of Minimalism",
      "genre": "Lifestyle",
      "author": "David Lee",
      "published_date": "2024-04-15",
      "image" : "assets/images/lifestyle.jpg"
    },
    {
      "title": "Photography Tips for Beginners",
      "genre": "Photography",
      "author": "Jessica Green",
      "published_date": "2024-05-01",
      "image" : "assets/images/photography.jpg"
    }
  ];
  


  const settings = {
    dots: false,             
    infinite: true,         
    speed: 500,             
    slidesToShow: 3,        
    slidesToScroll: 1,      
    autoplay: true,         
    autoplaySpeed: 1000,    
    arrows: false,           
    vertical: true,         
    // verticalSwiping: true,  
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>


      <Slider {...settings}>
        {blogs.map((blog, index) => (
            
            <>
            
                <div className="top-blogs w-full h-[300px]" style={{ backgroundImage: `url(${blog.image})` }}>
                  <div className="genreBox px-2 py-1 bg-primary text-white">
                    <p className="text-sm">{blog.genre}</p>
                  </div>
                  <h2>{blog.title}</h2>
                  <h5>By <span>{blog.author}</span></h5>
                  <h5>On <span>{blog.published_date}</span></h5>
                </div>
               
            
            </>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
