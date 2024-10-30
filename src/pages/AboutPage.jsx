// Styling for Page
import '../styles/PageStyling.css';
// importing components from Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Renders About Me Page
export default function AboutPage() {
    return (
        <>
            <h2>About Me</h2>
            <Container>
                <Row>
                    <Col lg={3}>
                    <img className="aboutPhoto img-fluid" src="/assets/picture of H Mancill.png" alt="picture of Hannah Mancill"></img>
                    </Col>
                    <Col lg={9}>
                    <p className="about">Hi! Welcome to a website I proudly designed.</p>

                        <p className="about">I earned a certificate in full-stack web development through Rice University in October 2024!
                            I have experience with Node, Express, MongoDB, SQL, jQuery, JavaScript, HTML, Jest, Handlebars, React, 
                            CSS and the Semantic UI, Bootstrap and Bulma CSS frameworks.</p>

                        <p className="about">I work part time as IT for a small church and moderate high school Quiz Bowl tournaments. In my free
                            time I enjoy baking, reading, trivia, breaking out of escape rooms, creating puzzles, and spending time
                            with my family.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
