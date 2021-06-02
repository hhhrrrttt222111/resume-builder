import React, { useRef, useState, useContext } from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoDocumentOutline } from "react-icons/io5";

import { DetailsContext } from '../../contexts/DetailsContext'
import { ChooseTemplate, UpdateHeader, UpdateEduExp, SkillInterest, UpdateContact, ChooseTheme } from '../../components'
import './ResumeCreate.css'


function ResumeCreate() {

    const { resume } = useContext(DetailsContext);
    const template = resume.templateId
    const sliderRef = useRef();
    const history = useHistory();


    const [slide, setSlide] = useState(1)

    const settings = {
        dots: false,
        infinite: false,
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


    const generatePDF = () => {
        history.push(`/template/${template}`)
    }

    console.log(resume)

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
                            <div>
                                <SkillInterest />
                            </div>
                            <div>
                                <UpdateContact />
                            </div>
                            <div>
                                <ChooseTheme />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="resumeSlider_Buttons">
                    <Button onClick={gotoPrev} style={{display: slide === 1 ? 'none' : 'inline-block'}}>
                        Prev
                    </Button>
                    <Button onClick={gotoNext} style={{display: slide === 6 ? 'none' : 'inline-block'}}>
                        Next
                    </Button>


                    <Button onClick={generatePDF} style={{display: slide === 6 ? 'inline-block' : 'none'}}>
                        Genarate
                        <IoDocumentOutline className="generate_pdf"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ResumeCreate
