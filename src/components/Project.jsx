import '../styles/Project.css';
import PropTypes from 'prop-types';

export default function Project(props) {
    return (
        <div className="card">
            <a href={props.url}>
              <img className="card-image" src={props.imgSrc} alt={props.screenshotDescription}></img>
            </a>
          <h2 className="card-title">{props.projectName}</h2>
          <a href={props.url}><button className="button">View Project</button></a>
          <a href={props.githubRepo}><button className="button">View Code</button></a>
        </div>
    );
  }
  
Project.propTypes = {
    url: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    screenshotDescription: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    githubRepo: PropTypes.string.isRequired,
  }