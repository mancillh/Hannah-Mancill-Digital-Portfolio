import Navigation from './Navigation';
import '../styles/Header.css';
export default function Header() {
    return (
        <>
            <Navigation />
            <img className='cover-image' src='src/assets/cover-image.png'></img>
        </>
    )
}  