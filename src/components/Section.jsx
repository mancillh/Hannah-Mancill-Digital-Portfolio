import '../styles/Container.css';
import PropTypes from 'prop-types';

function Section(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.content}</p>
        </>
    );
}

Section.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Section;