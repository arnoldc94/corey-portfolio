import github from  '../assets/img/github.svg'
import linkedin from  '../assets/img/linkedin.svg'
import { MdEmail } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';

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
        <a href="https://github.com/arnoldc94" ><img src={github} alt=""/></a>
        <a href="https://www.linkedin.com/in/corey-arnold-744391207/" ><img src={linkedin} alt=""/></a>
        <a href="https://github.com/arnoldc94/corey-portfolio" ><i><HiCode /></i></a>
      </div>
      <div className="copy">
        <p>&copy; Corey Arnold 2022</p>
      </div>
    </div>
  )
}