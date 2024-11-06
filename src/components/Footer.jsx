// Styles for Footer
import '../styles/Footer.css';

// Renders Footer Component
export default function Footer() {
    return (
        <>
        <footer>
            <h6>&copy; 2024 Hannah Mancill</h6>
            <div className="footer-links">
                <a href='https://github.com/mancillh'><img src='/assets/github-mark-white.png' alt='GitHub logo'></img></a>
                <a href='https://www.linkedin.com/in/hannah-mancill-aa37583b/'><img src='/assets/LinkedIn_logo_initials.png' alt='LinkedIn logo'></img></a>
            </div>
        </footer>
        </>
    );
}