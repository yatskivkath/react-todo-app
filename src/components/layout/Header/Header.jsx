import './Header.styles.scss';
import sun from '../../../assets/icon-sun.svg';

export default function Header(){
    return (
        <header className="header">
            <h1 className="header__title header__title--dark">ToDo</h1>
            <button className='header__theme-button'>
                <img src={sun} alt="dark-theme" className="header__icon" />
            </button>
        </header>
    )
}