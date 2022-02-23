import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import { AiFillHeart } from 'react-icons/ai';

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={rigoImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.buttonURL} className="btn btn-primary">
            {props.buttonLabel}
          </a>
          <div className="d-grid gap-2 d-flex justify-content-md-end">
            <button
              className="btn btn-primary me-md-2"
              type=""
            ><AiFillHeart /></button>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
};

export default Card;
