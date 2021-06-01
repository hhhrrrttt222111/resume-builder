import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';

import './UpdateContact.css'
import { DetailsContext } from '../../../contexts/DetailsContext'

function UpdateContact() {

    const { resume, updateContact } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();

    return (
        <div className="updateContact">
            <h1>Contact Details</h1>
        </div>
    )
}

export default UpdateContact
