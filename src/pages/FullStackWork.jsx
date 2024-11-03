// Importing Project Card Component
import Project from "../components/Project";
// Importing Bootstrap Components
import { Row, Col } from 'react-bootstrap';

// Render Front End Section of Portfolio
export default function FrontEndWork() {
    return (
        <>
            <h2>Front End Projects</h2>
            <div className='container'>
                <Row>
                    <Col>
                        <Project
                            projectName="Mood Setter - Group Project"
                            url="https://mancillh.github.io/Mood-Setter/"
                            screenshotDescription="screenshot of Mood Setter Project Page"
                            imgSrc="/assets/mood setter screenshot.png"
                            githubRepo="https://github.com/mancillh/Mood-Setter"
                        />
                    </Col>
                    <Col>
                        <Project
                            projectName="Weather Dashboard"
                            url="https://mancillh.github.io/Weather-Dashboard/"
                            screenshotDescription="screenshot of Weather Dashboard"
                            imgSrc="/assets/Weather Dashboard screenshot.png"
                            githubRepo="https://github.com/mancillh/Weather-Dashboard"
                        />
                    </Col>
                    <Col>
                        <Project
                            projectName="Kanban Task Board"
                            url="https://mancillh.github.io/Task-Board/"
                            screenshotDescription="screenshot of Kanban Task Board"
                            imgSrc="/assets/Task-Board.png"
                            githubRepo='https://github.com/mancillh/Task-Board/'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Project
                            projectName="Personal Blog"
                            url="https://mancillh.github.io/Personal-Blog/"
                            screenshotDescription="screenshot of Personal Blog Landing Page"
                            imgSrc="/assets/blog form landing page.png"
                            githubRepo="https://github.com/mancillh/Personal-Blog"
                        />
                    </Col>
                    <Col>
                        <Project
                            projectName="Employee Payroll Tracker"
                            url="https://mancillh.github.io/EmployeePayrollTracker/"
                            screenshotDescription="screenshot of Employee Payroll Tracker"
                            imgSrc="/assets/Employee Payroll Tracker.JPG"
                            githubRepo="https://mancillh.github.io/EmployeePayrollTracker/"
                        />
                    </Col>
                    <Col>
                        <Project
                            projectName="Website Refactor"
                            url="https://mancillh.github.io/Website-Refactor/"
                            screenshotDescription="screenshot of Horiseon Landing Page"
                            imgSrc="/assets/websiterefactor.JPG"
                            githubRepo="https://github.com/mancillh/Website-Refactor"
                        />
                    </Col>
                </Row>
            </div >
        </>
    )
}