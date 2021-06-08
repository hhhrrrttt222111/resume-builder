import React from 'react'

import { GrGithub } from "react-icons/gr";

import './Footer.css'

function Footer() {

    var year=new Date().getFullYear();
    return (
        <div className="footer">
            <p>Copyright © {year} | Rzume</p>
            <a href="https://github.com/hhhrrrttt222111/resume-builder" target="_blank" rel="noreferrer">
                <GrGithub className="github"/>
            </a>

        </div>
    )
}

export default Footer
