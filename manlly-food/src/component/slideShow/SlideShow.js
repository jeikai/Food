import React, { useRef, useState } from 'react'
import {slides} from './../../assets/index'
import './slideshow.css'

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const handlePrev = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const isFirstImage = currentIndex === slides.length - 1
    const newIndex = isFirstImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='slideshow'>
      <div className='slideshow_list'>
        <div className='slideshow_item'>
              <img src={slides[currentIndex]} alt='' />
            </div>
      </div>
      <div className='sildeshow_button'>
        <button className='prev' onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
        <button className='next' onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default SlideShow