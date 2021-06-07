import React, { useContext, useState, useEffect } from 'react'
import { SketchPicker } from 'react-color';

import './ChooseTheme.css'
import { DetailsContext } from '../../../contexts/DetailsContext'

function ChooseTheme() {

    const primaryColors = ['#66ff99', '#66ffff', '#cc99ff', '#ff66cc', '#ff9966', '#77ff33', '#ff7733', '#00ffcc', '#ff1ab3', '#669999', '#ffff00', '#33ff33']
    const secondaryColors = ['#b3ffcc', '#ccffff', '#e6ccff', '#ffb3e6', '#ffccb3', '#aaff80', '#ffaa80', '#80ffe5', '#ff99dd', '#c2d6d6', '#ffff80', '#99ff99']
    const indexCol = Math.floor(Math.random() * primaryColors.length)


    const [primary, setPrimary] = useState(primaryColors[indexCol])
    const [secondary, setSecondary] = useState(secondaryColors[indexCol])
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
                        <h3>Choose Header Background</h3>
                        <SketchPicker 
                            color={primary}
                            onChangeComplete={targetColor => setPrimary(targetColor.hex)}
                        />
                    </div>
                    <div className="chooseSecondaryTheme" style={{background: secondary}}>
                        <h3>Choose Page Background</h3>
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
