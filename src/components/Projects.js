
import vidone from '../assets/video/vidone.gif'
import vidtwo from '../assets/video/vidtwo.gif'
import vidthree from '../assets/video/vidthree.gif'
import vidfive from '../assets/video/vidfive.gif'
import vidsix from '../assets/video/vidsix.gif'
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    
    view: {
      breakpoint: { max: 4000, min: 0 },
      items: 3
    }
  };

  
  
  export const Projects = () => {
  
    return (
  
        <section  className="projects" id="projects">
            <div className="header-container" data-aos="fade-down">
                <h1>Check out some of my projects!</h1>
            </div>
            <div className="grid-container">
            <div className="grid-item2" data-aos="fade-up">
                    <div className="img2">
                        <img src={vidsix} alt="Image" data-aos="fade-left"/>
                    </div>
                    <div className="img-desc2">
                        <p>A pet friendly spot finder for the Sandiego Area. It was created using React and Ruby on Rails.</p>
                        <a href={'https://github.com/arnoldc94/paw-spot'}>Source Code</a>
                    </div>
                </div>
                <div className="grid-item1" data-aos="fade-up">
                    <div className="img1">
                        <img src={vidone} alt="Image" data-aos="fade-right"/>
                    </div>
                    <div className="img-desc1">
                        <p>A task manager site bult using javascript, CSS and HTML.</p>
                        <a href={'https://github.com/arnoldc94/TaskManager-106'}>Source Code</a>
                    </div>
                </div>
                <div className="grid-item2" data-aos="fade-up">
                    <div className="img2">
                        <img src={vidtwo} alt="Image" data-aos="fade-left"/>
                    </div>
                    <div className="img-desc2">
                        <p>A user registration system build using javascript, CSS and HTML.</p>
                        <a href={'https://github.com/arnoldc94/competencyReport-105/blob/main/sessionFour-105/index.html'}>Source Code</a>
                    </div>
                </div>
                <div className="grid-item1" data-aos="fade-up">
                    <div className="img1">
                        <img src={vidthree} alt="Image" data-aos="fade-right"/>
                    </div>
                    <div className="img-desc1">
                        <p>A full pet salon app that was built using javascript, CSS and HTML.</p>
                        <a href={'https://github.com/arnoldc94/CompetencyReport-104/tree/main/CompetencyReport-104'}>Source Code</a>
                    </div>
                </div>
                <div className="grid-item2" data-aos="fade-up">
                    <div className="img2">
                        <img src={vidfive} alt="Image" data-aos="fade-left"/>
                    </div>
                    <div className="img-desc2">
                        <p>A fun pig latin site that was built using react.</p>
                        <a href={'https://github.com/arnoldc94/pig-latin-pig-latin-corey-ricky'}>Source Code</a>
                    </div>
                </div>
            </div> 
        </section>
    )
}

