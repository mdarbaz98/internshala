import React from 'react';
import "./Container.css";
import FilterSection from "./FilterSection";
import JobSection from './JobSection';

function Container(props){
    return <div className="container">
        <div>
            <div className="desc">
                <h1>13212 total internships
                </h1>
                <label className="visibility" for="drp"><i class="fas fa-chevron-down"></i></label>
                <input type="checkbox" className="hide" id="drp" />
                <div className="up_down">
                <p>Are you looking for internships?<br />
                   An internship is the best way to put classroom knowledge to practice. By doing an internship, you will<br /> gain experience, learn new skills, and add value to your resume while being paid for your work.
                   Start today. Search for internships in India across various streams matching your preferences and apply for free.
                </p>
                </div>
            </div>
            <div className="middle_section">
            <FilterSection />
            <JobSection />
            </div>
        </div>
    </div>
}

export default Container;