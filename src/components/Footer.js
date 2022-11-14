import { MdEmail } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

  let icons = [
    {
      name: HiCode ,
      link: "https://github.com/arnoldc94/corey-portfolio"
    },
    {
      name: AiFillGithub ,
      link: "https://github.com/arnoldc94"
    },
    {
      name: AiFillLinkedin ,
      link: "https://www.linkedin.com/in/corey-arnold-744391207/"
    }
  ]

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export const Footer = () => {
  return(

    <div className = "footer">
      <div className="footer-links">
        <Mailto email="carnold9438@gmail.com" subject="Contacting from your portfolio " body="Hey Corey, "><i><MdEmail /></i></Mailto>
        {icons.map(icon =>{
          return (
            <a href={icon.link}><i><AiFillGithub />{icon.name}</i></a>
          )
        })}
      </div>
      <div className="copy">
        <p>&copy; Corey Arnold 2022</p>
      </div>
    </div>
  )
}