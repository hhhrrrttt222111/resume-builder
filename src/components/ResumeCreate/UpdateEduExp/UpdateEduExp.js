import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './UpdateEduExp.css'
import { DetailsContext } from '../../../contexts/DetailsContext'


function UpdateEduExp() {

    const { updateEducation } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        updateEducation(data)
    };


    console.log()

    return (
        <div className="updateEduExp">
            <h1>Education and Experience</h1>
            <div className="eduExpFormContainer">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="educationForm">
                    <h3>Educational Details</h3>
                    <div className="educationFormContent">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Education #1</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="School" 
                                    {...register("school1")} 
                                    name="school1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Degree" 
                                    {...register("degree1")} 
                                    name="degree1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Year"
                                    {...register("edyear1")} 
                                    name="edyear1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Education #2</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="School" 
                                    {...register("school2")} 
                                    name="school2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Degree" 
                                    {...register("degree2")} 
                                    name="degree2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Year"
                                    {...register("edyear2")} 
                                    name="edyear2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Education #3</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="School" 
                                    {...register("school3")} 
                                    name="school3"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Degree" 
                                    {...register("degree3")} 
                                    name="degree3"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Year"
                                    {...register("edyear3")} 
                                    name="edyear3"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Button type="submit">Save</Button>
                </form>

                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="experienceForm">
                    <h3>Experience</h3>
                    <div className="experienceFormContent">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Experience #1</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Company" 
                                    {...register("company1")} 
                                    name="company1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Title" 
                                    {...register("job1")} 
                                    name="job1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Year"
                                    {...register("exyear1")} 
                                    name="exyear1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Experience #2</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Company" 
                                    {...register("company2")} 
                                    name="company2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Title" 
                                    {...register("job2")} 
                                    name="job2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Year"
                                    {...register("exyear2")} 
                                    name="exyear2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
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

export default UpdateEduExp
