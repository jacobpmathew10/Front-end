import React from 'react'
import './predic.css'
const Prediction = ({handleSignout}) => {
  return (
    <section className='hero'>
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleSignout}>Logout</button>
      </nav>
      <a  class="button" href='https://14751.gradio.app/' alt='predict'>predict</a>
      </section>
  )
}

export default Prediction

