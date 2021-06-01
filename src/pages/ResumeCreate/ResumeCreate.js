import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ChooseTemplate, UpdateHeader, UpdateEduExp } from '../../components'
import './ResumeCreate.css'
import { Button } from '@material-ui/core';

function ResumeCreate() {

    const sliderRef = useRef();

    const [slide, setSlide] = useState(1)

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        margin: 3,
        loop: true,
        autoplaySpeed: 8000,
        draggable: false,
    };

    

    const gotoNext = () => {
        sliderRef.current.slickNext();
        setSlide(slide + 1)
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
        setSlide(slide - 1)
    }

    return (
        <div className="resumeCreate">
            <div className="resumeCreate_Container">
                <div className="resumeCreate_header">
                    <h1>Create Your Awesome Resume</h1>
                </div>
                <div className="resumeCreate_Body">
                    <div className="resumeSlider">
                        <Slider {...settings} ref={sliderRef}>
                            <div>
                                <ChooseTemplate />
                            </div>
                            <div>
                                <UpdateHeader />
                            </div>
                            <div>
                                <UpdateEduExp />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="resumeSlider_Buttons">
                    <Button onClick={gotoPrev} style={{display: slide === 1 ? 'none' : 'inline-block'}}>
                        Prev
                    </Button>
                    <Button onClick={gotoNext}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ResumeCreate
