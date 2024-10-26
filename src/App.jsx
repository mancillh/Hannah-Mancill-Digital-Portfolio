import { Outlet } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import background from "./assets/pexels-jibarofoto-2471235.jpg";
import NavbarSection from "./components/Navigation";
import Card from "./components/Project";
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
      <div id='About'>
        <Section className='container'
          name='About'
          para1='Hi! Welcome to a website I proudly designed.'
          para2="I'm working toward a certificate in web development through Rice University which I will earn Monday, October 28, 2024! 
         I hope to become a full stack developer and have worked with Node, Express, React, MongoDB, SQL, jQuery, JavaScript, HTML and 
          CSS. In addition, I have worked with JEST, Handlebars, Semantic UI and the Bootstrap and Bulma CSS frameworks."
          para3='I work part time as IT for a small church and moderate high school Quiz Bowl tournaments. In my free 
          time I enjoy baking, reading, trivia, breaking out of escape rooms, creating puzzles, and spending time 
          with my family.'/>
      </div>
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
