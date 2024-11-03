// Importing Project Card Component
import Project from "../components/Project";
// Importing Bootstrap Components
import { Row, Col } from 'react-bootstrap';

// Render Front End Section of Portfolio
export default function FrontEndWork() {
    return (
        <>
            <h2>Full Stack Projects</h2>
            <div className='container'>
                <Row>
                    <Col>
                        <Project
                            projectName="Neighborhood Jobs - Group Project"
                            url="https://neighborhood-jobs.onrender.com"
                            screenshotDescription="screenshot of Neighborhood Jobs"
                            imgSrc="/assets/Neighborhood Jobs homepage.png"
                            githubRepo="https://github.com/mancillh/Job-Board"
                        />
                    </Col>
                    <Col>
                        <Project
                            projectName="Reel-Bites - Group Project"
                            url="https://reel-bites.onrender.com"
                            screenshotDescription="screenshot of Reel Bites"
                            imgSrc="/assets/Reel Bites Homepage.png"
                            githubRepo="https://github.com/davidVillarreal03/super-team-project-2"
                        />
                    </Col>
                </Row>
                <Row className='bottom-row'>
                <Col>
                        <Project
                            projectName="Tech Blog"
                            url="https://mancill-tech-blog.onrender.com"
                            screenshotDescription="screenshot of Tech Blog"
                            imgSrc="/assets/Tech Blog Screenshot.png"
                            githubRepo='https://github.com/mancillh/Tech-Blog'
                        />
                    </Col>
                    <Col>
                        <Project
                            projectName="Note Taker"
                            url="https://note-taker-0laq.onrender.com"
                            screenshotDescription="screenshot of Note Taker"
                            imgSrc="/assets/note-taker landing page.png"
                            githubRepo="https://github.com/mancillh/Note-Taker"
                        />
                    </Col>
                </Row>
            </div >
        </>
    )
}