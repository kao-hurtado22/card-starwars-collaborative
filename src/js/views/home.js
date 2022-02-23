import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.js";
import Carousel from "../component/carousel.js";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Carousel
              title="Card Title"
              description="Lofasfasfsdgdfbgdfgb  fgsdfbgsddfb"
              buttonLabel="Learn More"
              buttonURL=""
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-md-3">
            <Card
              title="Card Title"
              description="Lofasfasfsdgdfbgdfgb bsdfbdsfbsdfb"
              buttonLabel="Learn More"
              buttonURL=""
            />
          </div>
          <div className="col-md-3">
            <Card
              title="Card Title"
              description="Lofasfasfsdgdfbgdfgb bsdfbdsfbsdfb"
              buttonLabel="Learn More"
              buttonURL=""
            />
          </div>
          <div className="col-md-3">
            <Card
              title="Card Title"
              description="Lofasfasfsdgdfbgdfgb dfbdsfbsdfb"
              buttonLabel="Learn More"
              buttonURL=""
            />
          </div>
          <div className="col-md-3">
            <Card
              title="Card Title"
              description="Lofasfasfsdgdfbgdfgb bsdfbdsfbsdfb"
              buttonLabel="Learn More"
              buttonURL=""
            />
          </div>
          <div className="col-md-3">
            <Card
              title="Card Title"
              description="Lofasfasfsdgdfbgdfgb  fbdsfbsdfb"
              buttonLabel="Learn More"
              buttonURL=""
            />
          </div>
          <div className="col-md-3">
            <Card
              title="Card Title"
              description="Lofasfasfsdgdfbgdfgb bsdfbdsfbsdfb"
              buttonLabel="Learn More"
              buttonURL=""
            />
          </div>
          <div className="col-md-3">
            <Card
              title="Card Title"
              description="Lofasfasfsdgdfbgdfgbd bsdfbdsfbsdfb"
              buttonLabel="Learn More"
              buttonURL=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
