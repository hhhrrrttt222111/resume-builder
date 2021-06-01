import React, { useState, useContext, useEffect } from 'react'

import { DetailsContext } from '../../../contexts/DetailsContext'
import './ChooseTemplate.css'

import template1 from '../../../assets/images/templates/template1.png'
import { Grid } from '@material-ui/core'


const templates = [
    {
        id: 1,
        img: template1,
        name: 'Dracarys'
    },
    {
        id: 2,
        img: template1,
        name: 'Dracarys'
    },
]


function ChooseTemplate() {
    const { updateTemplate } = useContext(DetailsContext);

    const [tempId, setTempId] = useState(1)

    // console.log(resume.templateId)

    useEffect(() => {
        updateTemplate(tempId)
    }, [tempId])

    return (
        <div className="chooseTemplate">
            <h1>Choose template</h1>
            <Grid container direction="row" alignItems="center" justify="center" className="templatesContainer">
                {templates.map((template) => (
                    <div className="template" key={template.id} onClick={() => setTempId(template.id)} style={{border: template.id === tempId ? '4px solid red' : 'none', opacity: template.id === tempId ? '1' : '0.9'}}>
                        <img src={template.img} alt={template.name} />
                        <p>{template.name}</p>
                    </div>
                ))}
            </Grid>
        </div>
    )
}

export default ChooseTemplate
