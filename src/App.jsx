import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import background from "./assets/pexels-jibarofoto-2471235.jpg";
import NavbarSection from "./components/Navbar";
import Card from "./components/Card";
import FooterSection from "./components/Footer";
import Section from "./components/Section"
import './styles/Container.css'
import './styles/App.css'

function App() {

  return (
    <>
      <NavbarSection />
      <div style={{
        backgroundImage: `url(${background})`,
        height: "95vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderBottom: '4px #df016b solid',
      }}>
      </div>
      <Section className='container'></Section>
      <div className='container' id='FrontEnd'>
        <Row>
          <Col>
            <Card
              projectName="Website Refactor"
              url="https://mancillh.github.io/Website-Refactor/"
              screenshotDescription="screenshot of Horiseon Landing Page"
              imgSrc="../src/assets/websiterefactor.JPG"
              githubRepo="https://github.com/mancillh/Website-Refactor"
            />
          </Col>
          <Col>
            <Card
              projectName="Website Refactor"
              url="https://mancillh.github.io/Website-Refactor/"
              screenshotDescription="screenshot of Horiseon Landing Page"
              imgSrc="../src/assets/websiterefactor.JPG"
              githubRepo="https://github.com/mancillh/Website-Refactor"
            />
          </Col>
          <Col>
            <Card
              projectName="Employee Payroll Tracker"
              url="https://mancillh.github.io/EmployeePayrollTracker/"
              screenshotDescription="screenshot of Employee Payroll Tracker"
              imgSrc="../src/assets/Employee Payroll Tracker.JPG"
              githubRepo="https://mancillh.github.io/EmployeePayrollTracker/"
            />
          </Col>
        </Row>
      </div>
      <FooterSection />
    </>
  )
}

export default App
