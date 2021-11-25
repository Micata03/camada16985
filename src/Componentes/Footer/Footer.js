import React from 'react'
import {social} from '../../social'

function Footer() {
    return (
        <footer className=" bg-dark">
            <div className="footer">
            <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                
              </a>
            </li>
          );
        })}
      </ul>
      </div>
      <small className="signature ">
          <a href="https://www.linkedin.com/in/micaela-tavasci-911442119/" target='_blanck' >Micaela Tavasci</a></small>
            
        </footer>
        
    )
}

export default Footer
