import React from 'react'
import folkarts from "./assets/folkarts/info.json";

const Home = () => {

  return (
    <div>
    {
      folkarts.folkarts.map(art => (
        <div>{art.name}</div>
      ))
    }
    </div>
  )
}

export default Home