import React from 'react';

function Card(props){
    return  <div className="card">
    <ul>
        <li className="list">
                <div className="card_header">
                <div>
                    <p className="job_title">
                        {props.jobTitle}
                    </p>
                    <p className="company_name">
                        {props.companyName}
                    </p>
                </div>
                <div className="company_logo">
                    <img src={props.companyImg} alt="company_logo" />
                </div>
                </div>
        </li>
        <li  className="list">
            <p className="location">
                {props.location}
            </p>
        </li>
        <li className="list">
            <div className="job_details">
            <ul className="inner_list first">
                <li><i class="far icn fa-play-circle"></i>START DATE</li>
                <li><i class="fas icn fa-calendar-week"></i>DURATION</li>
                <li><i class="far icn fa-money-bill-alt"></i>STIPEND</li>
                <li><i class="fas icn fa-hourglass-end"></i>APPLY BY</li>
            </ul>
            <ul className="inner_list second">
                <li>{props.startDate}</li>
                <li>{props.duration}</li>
                <li>{props.stipend}</li>
                <li>{props.applyDate}</li>
            </ul>
            </div>
        </li>
        <li className="list guideline">
        {props.icon}{props.guideline}
        </li>
        <li className="list">
            <div className="internship_details">
            <div>
            <p className="tags">{props.internship}</p>
            <p className="tags">{props.partTime}</p>
            </div>
            <p className="details_button">View Details</p>
            </div>
        </li>
    </ul>
</div>
}

export default Card;