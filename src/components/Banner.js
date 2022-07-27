import { useState, useEffect} from "react"
import { Container, Row, Col, Nav } from "react-bootstrap";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front End Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100)
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
            setDelta(500);
        }
    }
    const [activeLink, setActiveLink] = useState('home');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Corey`}</h1>
                        <h3 className="wrap">{text}</h3>
                        <p>I am a Jr. Front End Developer, primarily focusing on React, JavaScript,CSS, and HTML. I am looking to bring my creativity to life and for new opportunities to learn, grow and contribute to a company long-term. I am currently pursuing a degree in Computer Science and looking for On-site or Remote work. I am open to relocating.

                        </p>
                         <Nav.Link href = "#contact" className="button" onClick={() => onUpdateActiveLink('contact')}><span>Let's Connect!</span></Nav.Link>
                    </Col> 
                    
                </Row>
            </Container>
        </section>
    )
}