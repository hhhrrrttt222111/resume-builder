import React, { useContext, useState, useEffect } from 'react'
import { SketchPicker } from 'react-color';

import './ChooseTheme.css'
import { DetailsContext } from '../../../contexts/DetailsContext'

function ChooseTheme() {

    const [primary, setPrimary] = useState('#ccffff')
    const [secondary, setSecondary] = useState('#1090D9')
    const { updateTheme } = useContext(DetailsContext);


    useEffect(() => {
        const onSubmit = () => {
            const data = {
                primary: primary,
                secondary: secondary
            }
            updateTheme(data)
        };

        onSubmit()
    // eslint-disable-next-line
    }, [primary, secondary])

    return (
        <div className="chooseTheme">
            <h1>Choose Theme</h1>
            <div className="themeFormContainer">
                <div className="themeForm">
                    <div className="choosePrimaryTheme" style={{background: primary}}>
                        <h3>Choose Header Color</h3>
                        <SketchPicker 
                            color={primary}
                            onChangeComplete={targetColor => setPrimary(targetColor.hex)}
                        />
                    </div>
                    <div className="chooseSecondaryTheme" style={{background: secondary}}>
                        <h3>Choose Page Color</h3>
                        <SketchPicker 
                            color={secondary}
                            onChangeComplete={targetColor => setSecondary(targetColor.hex)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseTheme
