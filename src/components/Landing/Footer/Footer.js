import React from 'react';
import {Link} from "react-router-dom";

import { GrGithub } from "react-icons/gr";
import GroupIcon from '@material-ui/icons/Group';

import './Footer.css'


function Footer() {

    var year=new Date().getFullYear();
    return (
        <div className="footer">
            <div className="group">
                <Link to="/contributors">
                    <GroupIcon className="contributors_icon"/>
                </Link>
            </div>
            <p>Copyright © {year} | Rzume</p>
            <a href="https://github.com/hhhrrrttt222111/resume-builder" target="_blank" rel="noreferrer">
                <GrGithub className="github"/>
            </a>

        </div>
    )
}

export default Footer
