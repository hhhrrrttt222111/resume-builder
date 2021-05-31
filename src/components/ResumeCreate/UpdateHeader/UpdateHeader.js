import React, { useState, useContext, useEffect } from 'react'
import { useForm } from "react-hook-form";
import {useDropzone} from 'react-dropzone';

import './UpdateHeader.css'
import { DetailsContext } from '../../../contexts/DetailsContext'
import { Button } from '@material-ui/core';

function UpdateHeader() {

    const { updateHeader, resume } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        updateHeader(data)
        console.log(resume.header)
    };


    return (
        <div className="updateHeader">
            <h1>About You</h1>
            <div className="headerFormContainer">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="headerFormOne">
                        <img src="" alt="" />
                        <div className="headerFormOneRight">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                {...register("name")} 
                                name="name"
                                onChange={handleSubmit(onSubmit)}
                            />
                            <input 
                                type="text" 
                                placeholder="Title" 
                                {...register("title")} 
                                name="title"
                                onChange={handleSubmit(onSubmit)}
                            />
                        </div>
                    </div>
                    <div className="headerFormTwo">
                        <textarea 
                            type="text" 
                            placeholder="Bio" 
                            {...register("bio")} 
                            name="bio"
                            style={{maxHeight: '5rem'}}
                            onChange={handleSubmit(onSubmit)}
                        />
                    </div>

                    <Button type="submit">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateHeader
