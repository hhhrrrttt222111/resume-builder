import React, { useRef, useState, useContext, useEffect } from 'react'
import { Button, Tooltip, Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helmet from 'react-helmet'

import { IoDocumentOutline } from "react-icons/io5";
import {  FcPrevious, FcNext } from "react-icons/fc";

import { DetailsContext } from '../../contexts/DetailsContext'
import { ChooseTemplate, UpdateHeader, UpdateEduExp, SkillInterest, UpdateContact, ChooseTheme } from '../../components'


import './ResumeCreate.css'



function ResumeCreate() {

    const { resume } = useContext(DetailsContext);
    const template = resume.templateId
    const sliderRef = useRef();
    const history = useHistory();


    const [slide, setSlide] = useState(1)
    const [open, setOpen] = useState(false);
    const [counter, setCounter] = useState(7);
    const [timer, setTimer] = useState(false);


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const settings = {
        dots: false,
        adaptiveHeight: true,
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
        swipeToSlide: false,
        swipe: false,
    };



    const gotoNext = () => {
        sliderRef.current.slickNext();
        setSlide(slide + 1);
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
        setSlide(slide - 1);
    }

    // to clear localStorage
    const clearStoredData = () => {
        localStorage.clear();
    }



    const generatePDF = () => {
        handleClickOpen()

        setTimer(true)
        setTimeout(() => {
			history.push(`/template/${template}`)
        }, 8000);

    }

    useEffect(() => {
        if (timer) {
            if (counter > 0) {
                setTimeout(() => setCounter(counter - 1), 1000);
            } else {
                setCounter('0');
            }
        }
    }, [counter, timer])


    const goToSlide = (sld) => {
        sliderRef.current.slickGoTo(sld);
        setSlide(sld + 1)
    }


    const shadow =  '5px 5px 10px #000000ae, -5px -5px 10px #ddf0ed99';

    return (
        <div className="resumeCreate">
            <Helmet>
                <title>Rzume - Build Your Resume</title>
            </Helmet>
            <div className="resumeCreate_Container">
                <div className="resumeCreate_header">
                    <h1>Create Your Awesome Resume</h1>
                </div>
                {/* stepper */}
                <div className="HrtStepper">
                    <Tooltip TransitionComponent={Zoom} title="Choose Templates">
                        <div onClick={() => goToSlide(0)} className="HrtStepperItem" style={{background: slide >=1 ? '#1090D9' : '#ECECEC',boxShadow: slide >=1 ? `${shadow}` : 'none'}}>
                            <i className="fas fa-paper-plane"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="About You">
                        <div onClick={() => goToSlide(1)} className="HrtStepperItem" style={{background: slide >=2 ? '#1090D9' : '#ECECEC',boxShadow: slide >=2 ? `${shadow}` : 'none'}}>
                            <i className="fas fa-user-tie"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Education and Experience">
                        <div onClick={() => goToSlide(2)} className="HrtStepperItem" style={{background: slide >=3 ? '#1090D9' : '#ECECEC',boxShadow: slide >=3 ? `${shadow}` : 'none'}}>
                            <i className="fas fa-briefcase"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Skills and Interests">
                        <div onClick={() => goToSlide(3)} className="HrtStepperItem" style={{background: slide >=4 ? '#1090D9' : '#ECECEC',boxShadow: slide >=4 ? `${shadow}` : 'none'}}>
                            <i className="fas fa-tools"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Contact Details">
                        <div onClick={() => goToSlide(4)} className="HrtStepperItem" style={{background: slide >=5 ? '#1090D9' : '#ECECEC',boxShadow: slide >=5 ? `${shadow}` : 'none'}}>
                            <i className="fas fa-phone-volume"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Choose Theme">
                        <div onClick={() => goToSlide(5)} className="HrtStepperItem" style={{background: slide >=6 ? '#1090D9' : '#ECECEC',boxShadow: slide >=6 ? `${shadow}` : 'none'}}>
                            <i className="fas fa-paint-roller"></i>
                        </div> 
                    </Tooltip>

                    <div className="HrtStepperBar">
                        <div className="HrtStepperBarProgress" style={{width: `${(slide-1)*20}%`}}>

                        </div>
                    </div>
                </div>
                {/* stepper */}
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
                <div className="resumeSlider_Buttons" style={{justifyContent: slide === 1 ? 'flex-end' : 'space-between'}} >
                    <Button onClick={gotoPrev} style={{display: slide === 1 ? 'none' : 'inline-block'}}>
                        <FcPrevious className="prevButton"/>
                    </Button>
                    <Button onClick={gotoNext} style={{display: slide === 6 ? 'none' : 'inline-block'}}>
                        <FcNext className="nextButton" />
                    </Button>


                    <Button onClick={generatePDF} className="generate_btn" style={{display: slide === 6 ? 'inline-block' : 'none'}}>
                        <span className="generateText">Generate</span>
                        <IoDocumentOutline className="generate_pdf"/>
                    </Button>


                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent className="generate_popup">
                            <DialogContentText id="alert-dialog-description">
                                <div className="popupDiv">
                                    <h3>Generating PDF in {counter}...</h3>

                                    <img src="" alt="" />

                                    <p>
                                        Mobile Users should press on the Open button and select the Download link option to download the PDF
                                    </p>

                                    <Button onClick={clearStoredData}>Do not save my data</Button>
                                </div>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default ResumeCreate
