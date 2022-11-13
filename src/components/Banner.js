import { useState, useEffect} from "react"
import { Nav } from "react-bootstrap";
import corey from  '../assets/img/corey.jpeg'


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full-Stack Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return () => {clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(300);
        }
    }
    const [activeLink, setActiveLink] = useState('home');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <section data-aos="fade-up" className="banner" id="home">
            <div className="banner-inner-container">
                <div className="banner-header">
                    <h1 className="tagline">Welcome to my Portfolio</h1>
                </div>
                <div className="banner-body">
                    <div className="header-body" data-aos="fade-right">
                        <div className="banner-text-container" xs={12} md={6} xl={7}>
                            <h2>{'{ Hi I am Corey, }'}</h2>
                            <div className="banner-deleting-words">
                                <h1 className="wrap">{text}</h1>
                            </div>
                            <p>I am a Full-Stack Web Developer with a passion for creating clean responsive code. I enjoy collaborating with other eager developers, and I love learning new concepts. I am looking for a company to grow long term with, and show what I can bring to the table.

                            </p>
                            <Nav.Link href = "#contact" className="button" onClick={() => onUpdateActiveLink('contact')}><span>Let's Connect!</span></Nav.Link>
                        </div>
                    </div>
                    <div className="header-body-img">
                        <img src={corey} alt="logo"/>
                    </div>
                </div>

            </div>
        </section>
    )
}