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
    };


    return (
        <div className="updateContact">
            <h1>Contact Details</h1>

            <div className="contactFormContainer">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="contactForm">
                    <div className="contactFormOne">
                        <label className="contactLabelPhone">Phone</label>
                        <input 
                            type="text" 
                            placeholder="Eg. +91 9845361309" 
                            {...register("phone")} 
                            name="phone"
                            onChange={handleSubmit(onSubmit)}
                            className="input_c"
                            defaultValue={resume.contact.phone}
                        />
                    </div>
                    <div className="contactFormOne">
                        <label className="contactLabelEmail">Email</label>
                        <input 
                            type="text" 
                            placeholder="Eg. abcxyz@gmail.com" 
                            {...register("email")} 
                            name="email"
                            onChange={handleSubmit(onSubmit)}
                            className="input_c"
                            defaultValue={resume.contact.email}
                        />
                    </div>
                    <div className="contactFormThree">
                        <label className="contactLabelWebsite">Website</label>
                        <input 
                            type="text" 
                            placeholder="Eg. www.myofficialsite.com" 
                            {...register("website")} 
                            name="website"
                            onChange={handleSubmit(onSubmit)}
                            className="input_c"
                            defaultValue={resume.contact.website}
                        />
                    </div>
                    <div className="contactFormFour">
                        <label className="contactLabelAddress">Address</label>
                        <textarea 
                            type="text" 
                            placeholder="Eg. 123 Main Street, New York, NY 10030" 
                            {...register("address")} 
                            name="address"
                            onChange={handleSubmit(onSubmit)}
                            className="input_add"
                            defaultValue={resume.contact.address}
                        />
                    </div>

                    <Button type="submit" onClick={handleSubmit(onSubmit)}>Save</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateContact
