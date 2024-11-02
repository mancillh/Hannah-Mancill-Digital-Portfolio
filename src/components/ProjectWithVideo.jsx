// Styles for Project cards
import '../styles/Project.css';
// Necessary to avoid eslint error, allows prop validation
import PropTypes from 'prop-types';

// Renders Project Card Component
export default function ProjectWithVideo(props) {
    return (
        <div className="card">
            
              <video className="card-video card-img-top" src={props.vidSrc} loop controls></video>
           
          <h2 className="card-title">{props.projectName}</h2>
          <a href={props.githubRepo}><button className="button">View Code</button></a>
        </div>
    );
  }

// Data validation - explains what type is needed for each prop
ProjectWithVideo.propTypes = {
    vidSrc: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    githubRepo: PropTypes.string.isRequired,
  }