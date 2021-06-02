import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import { SketchPicker } from 'react-color';

import './ChooseTheme.css'
import { DetailsContext } from '../../../contexts/DetailsContext'

function ChooseTheme() {

    const [primary, setPrimary] = useState('#66ffff')
    const [secondary, setSecondary] = useState('#ccffff')
    const { resume, updateTheme } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        updateTheme(data)
        console.log(resume.theme)
    };

    return (
        <div className="chooseTheme">
            <h1>Choose Theme</h1>
            <div className="themeFormContainer">
                <div className="themeForm">
                    <div className="choosePrimaryTheme" style={{background: primary}}>
                        <h3>Choose Header Color</h3>
                        <SketchPicker 
                            color={primary}
                            {...register("primary")} 
                            onChangeComplete={targetColor => setPrimary(targetColor.hex)}
                            onChange={handleSubmit(onSubmit)}
                        />
                    </div>
                    <div className="chooseSecondaryTheme" style={{background: secondary}}>
                        <h3>Choose Page Color</h3>
                        <SketchPicker 
                            color={secondary}
                            {...register("secondary")} 
                            onChangeComplete={targetColor => setSecondary(targetColor.hex)}
                            onChange={handleSubmit(onSubmit)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseTheme
