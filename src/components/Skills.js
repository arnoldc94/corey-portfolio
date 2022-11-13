import { FaReact, FaJsSquare, FaSketch, FaDocker, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si'

export const Skills = () => {

    return(
        

        <div data-aos="fade-up" className="about" id="about">
            <div className="inner-about-container">
                <div className="about-header">
                    <h1>About Me</h1>
                </div>
                <div className="about-body">
                    <div className="about-section">
                        <p>Hi my name is Corey Arnold,<br></br>I spent my time as an army paratrooper, firefighter, salesman over the years. I then found a way to fulfill my creativity and joy for problem solving. I became a javascript enthusiest, and I quickly starting using codewars and building small projects. After learning on my own I joined Learn Academy. This is where I experienced collaborating with other amazing developers and continued wanting to learn more and more. I learned through my time at learn how much I can learn in a quick period of time, the joy of mentoring others, and the amount of experience from my life that I can bring to a development team. As I said above I am excited to share my own skills and ideas with a team that I can grow with and contribute to.</p>
                    </div>
                    <div className="skills">
                        <i style={{color:'#61DBFB'}}><FaReact /></i>
                        <i style={{color:'#F0DB4F'}}><FaJsSquare /></i>
                        <i style={{color:'#820C02'}}><FaSketch /></i>
                        <i style={{color:'#cc0000 '}}><SiRubyonrails /></i>
                        <i style={{color:'#0db7ed'}}><FaDocker /></i>
                        <i style={{color:'#e34c26'}}><FaHtml5 /></i>
                        <i style={{color:'#264de4'}}><FaCss3Alt /></i>
                    </div>
                </div>
            </div>
        </div>
        
    )
}