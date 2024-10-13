import '../styles/Card.css';

const projectName = "Website Refactor";
const url = "https://mancillh.github.io/Website-Refactor/";
const screenshotDescription = "screenshot of Horiseon Landing Page";
const imgSrc = "../src/assets/websiterefactor.JPG";
const githubRepo = "https://github.com/mancillh/Website-Refactor";

function Card() {
    return (
        <div className="card">
            <a href={url}>
              <img className="card-image" src={imgSrc} alt={screenshotDescription}></img>
            </a>
          <h2 className="card-title">{projectName}</h2>
          <p className="card-text">{githubRepo}</p>
          <a href={url}><button className="button">View Project</button></a>
        </div>
    );
  }
  
  export default Card;