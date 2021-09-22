import React from 'react';
import "./JobSection.css";
import data from './data';
import Card from './Card';

const date = new Date();
var year = date.getTime();


function CreateCard(cardprops){
    return <Card
    key={cardprops.id}
    jobTitle={cardprops.jobTitle}
    companyName={cardprops.companyName}
    companyImg={cardprops.companyImg}
    location={cardprops.location}
    startDate={cardprops.startDate}
    duration={cardprops.duration}
    stipend={cardprops.stipend}
    applyDate={cardprops.applyDate}
    icon={cardprops.icon}
    guideline={cardprops.guideline}
    internship={cardprops.internship}
    partTime={cardprops.partTime}
    />
}

function JobSection(){

    return <div className="JobSection">
                <div className="card">
    <ul>
        <li className="list">
                <div className="card_header">
                <div>
                    <p className="job_title">Special offer for B.sc students</p>
                </div>
                <div className="company_logo offer_tag">
                    <a className="bottom_offer">Offer</a>
                </div>
                </div>
                <p className="item">Get 55%+10% off on online trainings</p>
                <p className="item">Use coupon: <span className="bold">BSC5510</span> | offer ends in <span className="bold">EXPIRED</span></p>
                <p className="item">Choose from Web Dev, Python, Data Science, Marketing, & more</p>
        </li>
        <li className="list">
            <div className="internship_details">
            <div>
            <p className="tags light_bold">Internshala Certified Trainings</p>
            </div>
            <p className="details_button">View Details</p>
            </div>
        </li>
    </ul>
</div>
                {data.map(CreateCard)}
            </div>
}

export default JobSection;