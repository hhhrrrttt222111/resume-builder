import React, { useState, useContext, useEffect } from 'react'
import { useForm } from "react-hook-form";

import { DetailsContext } from '../../../contexts/DetailsContext'

function UpdateHeader() {

    const { updateHeader, resume } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        updateHeader(data)
    };

    return (
        <div className="updateHeader">
            <h1>About You</h1>
            <div className="headerFormContainer">
                
            </div>
        </div>
    )
}

export default UpdateHeader
