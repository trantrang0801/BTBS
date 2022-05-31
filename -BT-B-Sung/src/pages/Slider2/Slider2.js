import React, {useState} from 'react'
import './Slider2.css'
import BtnSlider from './BtnSlider2'
import dataSlider from './dataSlider2'

export default function Slider2() {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={obj.img} className='w32qw'
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
