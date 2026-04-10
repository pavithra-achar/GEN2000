import React from 'react'
import arrow from '../public/right-nav-arrow.svg'
import { useNavigate } from 'react-router-dom';

const Arrow = (props) => {
  const navigate = useNavigate();

  return (
    <img onClick={() => {
        navigate(props.link);
    }} className={props.className} src={'/'+ props.src +'-nav-arrow.svg'} alt="Arrow" />
  )
}

export default Arrow