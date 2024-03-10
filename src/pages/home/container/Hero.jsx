import React from 'react'
import { images } from '../../../constants'


const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
        <div>
            <h1>Read the most interseting articles</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div>
              <div>
                <input type='text' />
              </div>
              <button>Search</button>
            </div>
            <div>
              <span>Popular Tags:</span>
              <ul>
                <li>Design</li>
                <li>User Experience</li>
                <li>User Interface</li>
              </ul>
            </div>
        </div>
        <div className='hidden'>
          <img src={images.HeroImage} alt="users are reading articles" />
        </div>
    </section>
  )
}

export default Hero