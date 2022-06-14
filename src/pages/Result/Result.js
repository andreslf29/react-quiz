import React from 'react';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Result.scss";
import { Icon } from '@iconify/react';

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/result");
    }
  }, [name, navigate]);

  return (
    <div className="content result">

    <img src="/img/imagen-1.png" alt="imagen quiz"/>
      <h2 className="title">
       <span className='name__result'>{name} </span>
      your Score:
      <span className='score__result'>{score} points </span></h2>

      <p>Can you score 10 points?</p>

      <Link to="/" className='boton'>Play again <Icon icon="icon-park-outline:reload" /></Link>

    </div>
  );
};


export default Result