import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider() {

  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false
  });

  const changeSlide = (item) => {
    setSlideAnim({
      index: item + 1,
      inProgress: false
    })
  }

  const nextSlide = () => {

    if (slideAnim.index < dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({
        index: slideAnim.index + 1,
        inProgress: true
      })

      setTimeout(() => {
        setSlideAnim({index: slideAnim.index + 1, inProgress: false})
      }, 400)
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({
        index: 1,
        inProgress: true
      })

      setTimeout(() => {
        setSlideAnim({index: 1, inProgress: false})
      }, 400)
    }
  }

  const prevSlide = () => {

    if(slideAnim.index > 1 && !slideAnim.inProgress){
      setSlideAnim({
        index: slideAnim.index - 1,
        inProgress: true
      })

      setTimeout(() => {
        setSlideAnim({index: slideAnim.index - 1, inProgress: false})
      }, 400)
    }
    else if(slideAnim.index === 1 && !slideAnim.inProgress){
      setSlideAnim({
        index: dataSlider.length,
        inProgress: true
      })

      setTimeout(() => {
        setSlideAnim({index: dataSlider.length, inProgress: false})
      }, 400)
    }


  }


  return (
    <div className="container-slider">
      {dataSlider.map((item, index) => {
        return (
          <div key={item.id} className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}>
            {/* process.env.PUBLIC_URL : définir l'url du site en production */}
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt={`img${index + 1}.jpg`}/>
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"}/>
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

      <div className="container-dots">
        {dataSlider.map((item, index) => {
          return (
            <div key={index} onClick={() => changeSlide(index)} className={slideAnim.index === index + 1 ? "dot active" : "dot"}></div>
          )
        })}
      </div>
    </div>
  )

}
