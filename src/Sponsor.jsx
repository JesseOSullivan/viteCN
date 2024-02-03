import { useState } from 'react'
import { Link } from "react-router-dom";
import './sponsor.css';

function Sponsor()
{
    return (
        <div id="global-padding">
          <h1>Our Sponsors:</h1>
          <h2>Platinum Sponsors</h2>
            <div className='sponsor-grid'>
              <a href="https://technologyonecorp.com/" id="techOne">
                  <img src="/sponsors/technologyone.png"  aria-label="Technology One" alt="Sign up" className="button-image" />
              </a>
            </div>
          <h2>Gold Sponsors</h2>
            <div className='sponsor-grid'>
              <a href="https://www.atlassian.com/" id="atlassian">
                  <img src="/sponsors/atlassian.png" aria-label="Atlassian" alt="Sign up" className="button-image" />
              </a>
              <a href="https://www.macquarie.com.au/" id="macquarie">
                  <img src="/sponsors/macquarie.png" alt="Sign up" aria-label="Macquarie" className="button-image" />
              </a>
              <a href="https://www.riotinto.com/" id="riotinto">
                  <img src="/sponsors/riotinto.png" alt="Sign up" aria-label="Rio Tinto" className="button-image" />
              </a>
          </div>
        </div>
      );
      
}

export default Sponsor
