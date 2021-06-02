import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';

import './UpdateContact.css'
import { DetailsContext } from '../../../contexts/DetailsContext'

function UpdateContact() {

    const { resume, updateContact } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        updateContact(data) 
        console.log(resume.contact) 
    };


    return (
        <div className="updateContact">
            <h1>Contact Details</h1>

            <div className="contactFormContainer">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="contactForm">
                    <div className="contactFormOne">
                        <input 
                            type="text" 
                            placeholder="Phone" 
                            {...register("phone")} 
                            name="phone"
                            // onChange={handleSubmit(onSubmit)}
                            className="input_c"
                        />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            {...register("email")} 
                            name="email"
                            // onChange={handleSubmit(onSubmit)}
                            className="input_c"
                        />
                    </div>
                    <div className="contactFormTwo">
                        <input 
                            type="text" 
                            placeholder="Website" 
                            {...register("website")} 
                            name="website"
                            // onChange={handleSubmit(onSubmit)}
                            className="input_c"
                        />
                    </div>
                    <div className="contactFormThree">
                        <textarea 
                            type="text" 
                            placeholder="Address" 
                            {...register("address")} 
                            name="address"
                            // onChange={handleSubmit(onSubmit)}
                            className="input_add"
                        />
                    </div>

                    <Button type="submit" onclick={handleSubmit(onSubmit)}>Save</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateContact
