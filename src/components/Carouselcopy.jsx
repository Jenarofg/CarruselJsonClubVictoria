import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

const Carousel = ({ data2 }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data2.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data2.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data2.map((item, idx) => {
        return (
          <div className={slide === idx ? "slide" : "slide slide-hidden"} key={idx}>            
                      <h2>3ªCadete Grupo 2</h2>
                      <h3>J{item.Jornada}</h3>
                      <h3>{item.Dia} de {item.Mes}</h3>
                      <h2>{item.Local} vs {item.Visitante}</h2>
                      <h3>{item.Campo}</h3>
                      <h3>{item.Ciudad}</h3> 
                      <h3>{item.tipo_de_cesped}</h3>
            </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
    </div>
  );
};

export default Carousel;

{/* 
  <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />

  */}