import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './SkillInterest.css'
import { DetailsContext } from '../../../contexts/DetailsContext'


function SkillInterest() {

    const { updateInterests, updateSkills } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();


    const onSkillSubmit = (data) => {
        updateSkills(data)
    };

    const onInterestSubmit = (data) => {
        updateInterests(data)
    };

    return (
        <div className="skillInterest">
            <h1>Skills and Interests</h1>
            <div className="skillInterestContainer">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onInterestSubmit)} className="interestForm">
                    <div className="interestFormContent">
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Add Interests</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <input 
                                        type="text" 
                                        {...register("interest1")} 
                                        name="interest1"
                                        onChange={handleSubmit(onInterestSubmit)}
                                        className="input__se"
                                        placeholder="e.g. Reading" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("interest2")} 
                                        name="interest2"
                                        onChange={handleSubmit(onInterestSubmit)}
                                        className="input__se"
                                        placeholder="e.g. Singing" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("interest3")} 
                                        name="interest3"
                                        onChange={handleSubmit(onInterestSubmit)}
                                        className="input__se"
                                        placeholder="e.g. Movies" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("interest4")} 
                                        name="interest4"
                                        onChange={handleSubmit(onInterestSubmit)}
                                        className="input__se"
                                        placeholder="e.g. Photoshop" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("interest5")} 
                                        name="interest5"
                                        onChange={handleSubmit(onInterestSubmit)}
                                        className="input__se"
                                        placeholder="e.g. Java" 
                                    />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Button type="submit">Save</Button>
                </form>

                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSkillSubmit)} className="skillForm">
                    <div className="skillFormContent">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Add Skills</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <input 
                                        type="text" 
                                        {...register("skill1")} 
                                        name="skill1"
                                        onChange={handleSubmit(onSkillSubmit)}
                                        className="input__se"
                                        placeholder="e.g. HTML" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("skill2")} 
                                        name="skill2"
                                        onChange={handleSubmit(onSkillSubmit)}
                                        className="input__se"
                                        placeholder="e.g. Wordpress" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("skill3")} 
                                        name="skill3"
                                        onChange={handleSubmit(onSkillSubmit)}
                                        className="input__se"
                                        placeholder="e.g. React JS" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("skill4")} 
                                        name="skill4"
                                        onChange={handleSubmit(onSkillSubmit)}
                                        className="input__se"
                                        placeholder="e.g. Photoshop" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("skill5")} 
                                        name="skill5"
                                        onChange={handleSubmit(onSkillSubmit)}
                                        className="input__se"
                                        placeholder="e.g. Java" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("skill6")} 
                                        name="skill6"
                                        onChange={handleSubmit(onSkillSubmit)}
                                        className="input__se"
                                        placeholder="e.g. UI/UX" 
                                    />
                                    <input 
                                        type="text" 
                                        {...register("skill7")} 
                                        name="skill7"
                                        onChange={handleSubmit(onSkillSubmit)}
                                        className="input__se"
                                        placeholder="e.g. JavaScript" 
                                    />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Button type="submit">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default SkillInterest
