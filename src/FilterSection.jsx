import React from 'react';
import "./FilterSection.css";

function FilterSection(){
    return <div className="filter_section">
       <div>
       <h1><i class="fas fa-filter"></i> Filter</h1>
        <ul>
            <li>
                <label>Category</label>
                <input type="text" placeholder="e.g. Marketing" />
            </li>
            <li>
                <label>Location</label>
                <input type="text" placeholder="e.g. Dehli" />
            </li>
            <li className="flex">
                <div><p>Work from home</p></div>
                <div><label class="switch">
                <input className="input" type="checkbox" />
                <span class="sliders round"></span>
                </label></div>
            </li>
            <li className="flex">
                <div><p>Part-time</p></div>
                <div><label class="switch">
                <input className="input" type="checkbox" />
                <span class="sliders round"></span>
                </label></div>
            </li>
            <li>
                <p>Desired minimum monthly stipend (₹)</p>
                <input type="range" min="1" max="100" value="100" class="slider range" id="myRange"></input>
                <div className="number">
                    <span>0</span>
                    <span>2K</span>
                    <span>4K</span>
                    <span>6K</span>
                    <span>8K</span>
                    <span>10K</span>
                </div>
            </li>
            <li>
                <label>Starting from (or after)</label>
                <input type="text" placeholder="Choose date" />
            </li>
            <li>
                <label>Max. duration (months)</label>
                <input type="text" placeholder="Choose duration" />
            </li>
            <li>
                <div><p>Internships for women</p>
                
                </div>
            </li>
            <li>
                <div><p>Internships with job offer</p></div>
            </li>
            <li>
                <a>Clear all</a>
            </li>
            <li>
                <div className="line">
                    <h2>OR</h2>
                </div>
            </li>
            <li>
                <h3>Search</h3>
                <div className="lastsection">
                <input type="text" placeholder="e.g. design, Mumbai, infosys" />
                <button><i class="fas fa-search"></i></button>
                </div>
            </li>
        </ul>
       </div>
    </div>
}

export default FilterSection;