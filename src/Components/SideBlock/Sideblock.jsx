import React from 'react'
import "./Sideblock.css"
import {TestCard} from "../TestCard/TestCard"
import logo from '../../assets/Vector.png'
import cohort from '../../assets/Cohorts 1.png'
import bell from '../../assets/Bell.png'
import mask from '../../assets/Mask group.png'
import eye from '../../assets/Eye.png'

export const Sideblock = () => {
  
  const testimonials = [{
    name:"Jack F",
    role:"Ex Blackrock PM",
    desc:'“Love how Loch integrates portfolio analytics and whale watching into one unified app.”',
  },
  {
    name:"Yash P",
    role:"Research, 3poch Crypto Hedge Fund",
    desc:`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`,
  },
  {
    name:"Shiv S",
    role:"Co-Founder Magik Labs",
    desc:`“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`,
  }]
  return (
    <div className='container'>
        <section className='div-5'>
                  <div className="div-6">
                    <div className="column-2">
                      <div className="div-7">
                        <img
                          src={bell}
                          className="img"
                          alt="Bell Icon"
                        />
                        <h4 className='h4-1' >
                          Get notified when a highly correlated whale makes a
                          move
                        </h4>
                        <p className="p-1">
                          Find out when a certain whale moves more than any
                          preset amount on-chain or when a dormant whale you
                          care about becomes active.
                        </p>
                      </div>
                    </div>
                    <div className="column-3">
                      <img
                        src={mask}
                        className="img-2"
                        alt=""
                      />
                    </div>
                  </div>
        </section>
        <section className='contentContainer'>
         
            <img src={cohort} alt="" />
          <div className='text-1'>
            <img className='img-3' src={eye} alt='Eye Icon'/>
            <h4 className='h4-2'>Watch what the whales are doing</h4>
            <p className='p-2'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
          </div>
        </section>
        <section className='testContainer'>
          <div className='test'>
              <h5 >Testimonials</h5>  
              <div className='line'></div>
          </div>
        <div className='testWrap'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='testimonials'>
              {testimonials.map(({name,role,desc},index)=><TestCard
              key = {index}
              name={name}
              role={role}
              desc={desc}
              />)}
          </div>
        </div>
        </section>
       
    </div>
  )
}

 