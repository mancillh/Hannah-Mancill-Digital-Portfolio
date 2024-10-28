import Project from "../components/Project";
import { Row, Col } from 'react-bootstrap';

export default function FrontEndWork() {
    return (
        <>
        <h2>Front End Projects</h2>
        <div className='container'>
            <Row>
                <Col>
                    <Project
                        projectName="Website Refactor"
                        url="https://mancillh.github.io/Website-Refactor/"
                        screenshotDescription="screenshot of Horiseon Landing Page"
                        imgSrc="../src/assets/websiterefactor.JPG"
                        githubRepo="https://github.com/mancillh/Website-Refactor"
                    />
                </Col>
                <Col>
                    <Project
                        projectName="Website Refactor"
                        url="https://mancillh.github.io/Website-Refactor/"
                        screenshotDescription="screenshot of Horiseon Landing Page"
                        imgSrc="../src/assets/websiterefactor.JPG"
                        githubRepo="https://github.com/mancillh/Website-Refactor"
                    />
                </Col>
                <Col>
                    <Project
                        projectName="Employee Payroll Tracker"
                        url="https://mancillh.github.io/EmployeePayrollTracker/"
                        screenshotDescription="screenshot of Employee Payroll Tracker"
                        imgSrc="../src/assets/Employee Payroll Tracker.JPG"
                        githubRepo="https://mancillh.github.io/EmployeePayrollTracker/"
                    />
                </Col>
            </Row>
        </div >
    </>
    )
}