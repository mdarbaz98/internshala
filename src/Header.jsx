import React from 'react';
import "./Header.css";

function Header(){
    return <div>
        <header>
            <div>
            <a><img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="logo" /></a>
            </div>
            <nav>
                <ul>
                    <li><a>Internships<i class="fas fa-caret-down"></i></a></li>
                    <li><a>Online Trainings <span>Offer</span><i class="fas fa-caret-down"></i></a></li>
                    <li><a>Fresher Jobs</a></li>
                    <li><a><i class="far fa-bookmark"></i></a></li>
                    <li><a><i class="far fa-comment-alt"></i></a></li>
                    <li><div className="a">A</div><i class="fas fa-caret-down"></i></li>
                </ul>
            </nav>
        </header>
    </div>
}

export default Header;