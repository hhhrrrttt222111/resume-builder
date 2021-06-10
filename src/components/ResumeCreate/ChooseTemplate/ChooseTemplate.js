import React, { useState, useContext, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { DetailsContext } from '../../../contexts/DetailsContext'
import './ChooseTemplate.css'

import template1 from '../../../assets/images/templates/template1.png'
import template2 from '../../../assets/images/templates/template2.png'


const templates = [
    {
        id: 1,
        img: template1,
        name: 'Dracarys'
    },
    {
        id: 2,
        img: template2,
        name: 'Lumos'
    },
]


function ChooseTemplate() {
    const { updateTemplate } = useContext(DetailsContext);

    const [tempId, setTempId] = useState(1)

    useEffect(() => {
        updateTemplate(tempId)
        // eslint-disable-next-line
    }, [tempId])

    return (
        <div className="chooseTemplate">
            <h1>Choose template</h1>
            <Grid container direction="row" alignItems="center" justify="center" className="templatesContainer">
                {templates.map((template) => (
                    <div className="template" key={template.id} onClick={() => setTempId(template.id)} style={{transform: template.id === tempId ? 'scale(1.0)' : 'scale(0.9)', boxShadow: template.id === tempId ? '5px 5px 10px #000000a0, -5px -5px 10px #ffffff40' : 'none'}}>
                        <img src={template.img} alt={template.name} />
                        <p>{template.name}</p>
                    </div>
                ))}
            </Grid>
        </div>
    )
}

export default ChooseTemplate
