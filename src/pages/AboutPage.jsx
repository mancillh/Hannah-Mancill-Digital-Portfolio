import '../styles/PageStyling.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutPage() {
    return (
        <>
            <h2>About Me</h2>
            <Container>
                <Row>
                    <Col lg={2}>
                    <img className="aboutPhoto" src="src\assets\picture of H Mancill.png" alt="picture of Hannah Mancill"></img>
                    </Col>
                    <Col lg={10}>
                    <p className="about">Hi! Welcome to a website I proudly designed.</p>

                        <p className="about">I&#39;m working toward a certificate in web development through Rice University which I will earn Monday, October 28, 2024!
                            I hope to become a full stack developer and have worked with Node, Express, MongoDB, SQL, jQuery, JavaScript, HTML and
                            CSS. In addition, I have worked with JEST for testing and Handlebars, React, Semantic UI and the Bootstrap and Bulma CSS frameworks.</p>

                        <p className="about">I work part time as IT for a small church and moderate high school Quiz Bowl tournaments. In my free
                            time I enjoy baking, reading, trivia, breaking out of escape rooms, creating puzzles, and spending time
                            with my family.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
