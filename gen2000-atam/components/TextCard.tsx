import React from 'react'

const TextCard = (props) => {
  return (
    <div className={props.className}>
        <img className={'absolute ' + props.titleclass} src='../../public/label.png'/>
        <h1 className="relative font-grimp z-50">{props.title}</h1>
    </div>
  )
}

export default TextCard