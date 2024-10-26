import '../styles/Section.css';
import PropTypes from 'prop-types';

function Section(props) {
    return (
        <>
            <section>
                <h2>{props.name}</h2>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
                <hr />
            </section>
        </>
    );
}

Section.propTypes = {
    name: PropTypes.string.isRequired,
    para1: PropTypes.string.isRequired,
    para2: PropTypes.string.isRequired,
    para3: PropTypes.string.isRequired,
}

export default Section;