import React, { createContext, useState } from "react";

export const DetailsContext = createContext()

function DetailsContextProvider(props) {

    const [resume, setResume] = useState({
        templateId: '1', 
        image: '',
        header: {},
        education: {},
        skills: [],
        interests: [],
        contact: {},
        theme: {}
    })

    function updateTemplate(data) {
        setResume({ ...resume,  templateId: data})
    }

    function updateImage(data) {
        setResume({ ...resume,  image: data})
    }

    function updateHeader(data) {
        setResume({ ...resume,  header: data})
    }

    function updateEducation(data) {
        setResume({ ...resume,  education: data})
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

    function updateTheme(data) {
        setResume({ ...resume,  theme: data})
    }

    const value = { resume, updateHeader, updateEducation, updateSkills, updateInterests, updateContact, updateTemplate, updateImage, updateTheme }

    return (
        <DetailsContext.Provider value={value}>
            {props.children}
        </DetailsContext.Provider>
    )
}


export default DetailsContextProvider;