import ProjectWithVideo from "../components/ProjectWithVideo";
import { Row, Col } from 'react-bootstrap';

// Renders Back End Portfolio
export default function BackEndWork() {
    return (
        <>
            <h2>Back End Projects</h2>
            <div className='container'>
                <Row>
                    <Col>
                        <ProjectWithVideo
                            projectName="Social Network API"
                            vidSrc="../assets/videos/Social Network API Walkthrough.mp4"
                            githubRepo="https://github.com/mancillh/Social-Network-API"
                        />
                    </Col>
                    <Col>
                        <ProjectWithVideo
                            projectName="E-Commerce Site"
                            vidSrc="../assets/videos/E-commerce Back End Walkthrough.mp4"
                            githubRepo="https://github.com/mancillh/E-Commerce-Site"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProjectWithVideo
                            projectName="Employee Tracker"
                            vidSrc="../assets/videos/Employee Tracker CMS Walkthrough Video.mp4"
                            githubRepo="https://github.com/mancillh/SQL-Employee-Tracker"
                        />
                    </Col>
                    <Col>
                        <ProjectWithVideo
                            projectName="SVG Logo Maker"
                            vidSrc="../assets/videos/SVG Logo Maker Walkthrough.mp4"
                            githubRepo="https://github.com/mancillh/SVG-Logo-Maker"
                        />
                    </Col>
                </Row>
                <Row className='bottom-row'>
                    <Col>
                        <ProjectWithVideo
                            projectName="Professional READ ME Generator"
                            vidSrc="../assets/videos/READ ME Generator Walkthrough.mp4"
                            githubRepo="https://github.com/mancillh/READ-ME-Generator"
                        />
                    </Col>
                    <Col />
                </Row>
            </div >
        </>
    )
}