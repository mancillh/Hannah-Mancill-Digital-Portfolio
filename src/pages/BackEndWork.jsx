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
                            projectName="Professional READ ME Generator"
                            vidSrc="../assets/videos/READ ME Generator Walkthrough.mp4"
                            githubRepo="https://github.com/mancillh/READ-ME-Generator"
                        />
                    </Col>
                </Row>
            </div >
        </>
    )
}