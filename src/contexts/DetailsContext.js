import React, { createContext, useState } from "react";

export const DetailsContext = createContext()

function DetailsContextProvider(props) {

    const [resume, setResume] = useState({
        templateId: '1', 
        header: {},
        education: [],
        experience: [],
        skills: [],
        interests: [],
        contact: {}
    })

    function updateTemplate(data) {
        setResume({ ...resume,  templateId: data})
    }

    function updateHeader(data) {
        setResume({ ...resume,  header: data})
    }

    function updateEducation(data) {
        setResume({ ...resume,  education: data})
    }

    function updateExperience(data) {
        setResume({ ...resume,  experience: data})
    }

    function updateSkills(data) {
        setResume({ ...resume,  skills: data})
    }

    function updateInterests(data) {
        setResume({ ...resume,  interests: data})
    }

    function updateContact(data) {
        setResume({ ...resume,  contact: data})
    }

    const value = { resume, updateHeader, updateEducation, updateExperience, updateSkills, updateInterests, updateContact, updateTemplate }

    return (
        <DetailsContext.Provider value={value}>
            {props.children}
        </DetailsContext.Provider>
    )
}


export default DetailsContextProvider;