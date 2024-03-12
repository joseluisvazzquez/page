import React from "react";
import c1 from "./img_page/c1.jpg"
import c2 from "./img_page/c2.png"
import c3 from "./img_page/c3.png"
import { Carousel } from "react-bootstrap";
function Home(){
    return(
        <>
        <div className="container-sm">
            <h1 className="display-3 text-center my-4">Welcome to our guide tour a cross    <span className="badge text-bg-danger mx-4 my-3 rounded-pill">Tokyo, Japan!</span></h1>
        </div>
        <div className="container-sm">
            <p className="display-6">
                Explore the bustling districts of Shibuya and Shinjuku, where neon lights 
                illuminate the night, and witness a vibrant metropolis where towering 
                skyscrapers coexist with peaceful Shinto shrines and lush gardens.
            </p>
    

    
            <Carousel className=" my-4" fade>
                <Carousel.Item interval={1500}>
                    <img src={c1} className="d-block w-100 rounded" />
                    
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                <img src={c2} className="d-block w-100 rounded"/>
                
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                <img src={c3} className="d-block w-100 rounded"/>
                
                </Carousel.Item>
            </Carousel>
        
        </div>
        </>

    );
}; export default Home;