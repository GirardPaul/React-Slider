import React from 'react';
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

//direction, moveSlide => destructuring : appeler directement direction au lieu de props.direction
export default function BtnSlider({direction, moveSlide}){
  return (
    <div>
      <button
        className='btn-slide'
        onClick={moveSlide}
        className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} alt="icon" />
      </button>
    </div>
  )
}
