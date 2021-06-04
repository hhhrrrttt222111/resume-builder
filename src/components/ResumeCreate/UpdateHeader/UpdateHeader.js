import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';

import './UpdateHeader.css'
import { DetailsContext } from '../../../contexts/DetailsContext'
import upload from '../../../assets/images/svg/upload.svg'


function UpdateHeader() {

    const [image, setImage] = useState(null)


    const { updateImage, updateHeader } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        updateHeader(data)  
    };



    const types = ['image/png', 'image/jpeg', 'image/jpg']

    
    const imageHandler = (e) => {
        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
                updateImage(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            setImage(null)
        }
    }


    return (
        <div className="updateHeader">
            <h1>About You</h1>
            <div className="headerFormContainer">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="headerForm">
                    <div className="headerFormOne">
                        <div className="headerFormOneLeft">
                            <div style={{background: image? `url("${image}") no-repeat center/cover`: `url(${upload}) no-repeat center/cover`}} className="image-upload">
                                <input 
                                    type="file"     
                                    onChange={imageHandler} 
                                    name="image"
                                    id="fileUpload"
                                />
                                <label htmlFor="fileUpload" className="customFileUpload"></label>
                            </div>
                        </div>
                        <div className="headerFormOneRight">
                            <label className="headerLabelName">Type Your Name</label>
                            <input 
                                type="text" 
                                placeholder="Eg. John Britto" 
                                {...register("name")} 
                                name="name"
                                onChange={handleSubmit(onSubmit)}
                                className="input_name"
                            />
                            <label className="headerLabelTitle">Type Your Title</label>
                            <input 
                                type="text" 
                                placeholder="Eg. Sales Executive" 
                                {...register("title")} 
                                name="title"
                                onChange={handleSubmit(onSubmit)}
                                className="input_title"
                            />
                        </div>
                    </div>
                    <div className="headerFormTwo">
                        <label className="headerLabelBio">Your Bio</label>
                        <textarea 
                            type="text" 
                            placeholder="I am currently working at...." 
                            {...register("bio")} 
                            name="bio"
                            onChange={handleSubmit(onSubmit)}
                            className="input_bio"
                        />
                    </div>

                    <Button type="submit">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateHeader
