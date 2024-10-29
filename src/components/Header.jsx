// Styles for Header
import Navigation from './Navigation';
import '../styles/Header.css';

// Renders Header Component
export default function Header() {
    return (
        <>
            <Navigation />
            <img className='cover-image' src='/assets/cover-image.png' alt='abstract pink and blue paint drip'></img>
        </>
    )
}  