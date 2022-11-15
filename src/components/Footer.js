import { MdEmail } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import React, { Component } from 'react'

export class Footer extends Component {
  constructor(){
    super()
      this.state = {
      icons: [
        {
          id: 1,
          name: <HiCode/> ,
          link: "https://github.com/arnoldc94/corey-portfolio"
        },
        {
          id: 2,
          name: <AiFillGithub/> ,
          link: "https://github.com/arnoldc94"
        },
        {
          id: 3,
          name: <AiFillLinkedin/> ,
          link: "https://www.linkedin.com/in/corey-arnold-744391207/"
        }
      ]
    }
  }
  render() {
    let Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a href={`mailto:${email}${params}`}>{children}</a>;
      };
    return (
      <div className = "footer">
        <div className="footer-links">
          <Mailto email="carnold9438@gmail.com" subject="Contacting from your portfolio " body="Hey Corey, "><i><MdEmail /></i></Mailto>
          <>
            {this.state.icons.map(icon => {
              return(
                  <a key={icon.id}href={icon.link}><i>{icon.name}</i></a>
                  )
                })} 
          </>
        </div>
        <div className="copy">
          <p>&copy; Corey Arnold 2022</p>
        </div>
      </div> 
    )
  }
}