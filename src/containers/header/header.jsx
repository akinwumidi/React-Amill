import React from 'react'
import './header.css'
import HeaderImage from './../../assets/undraw_dream_world_re_x2yl.svg'

const header = () => {
  return (
    <div className="amill_header-container container">
      <div className="amill__headerWriteup-container">
        <h1 className="styled_H1 gradient__text">
          Share your
          <br /> Amazing Experience <br />
          with Nature & Hear Our Share
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
          ratione, aperiam placeat dolores quaerat deserunt magni quisquam
          dolorum quam eos molestias nobis maiores fugiat laborum, harum
          corporis aliquid consectetur ad! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
        <div className="amill__headerInput-container">
          <input type="email" placeholder="Tell me more about nature" />
          <button>Connect</button>
        </div>
      </div>
      <div className="amill__headerImage-container">
        <img src={HeaderImage} alt="Header" />
      </div>
    </div>
  )
}

export default header
