import { useSelector, useDispatch} from 'react-redux'

import './Header.styles.scss';
import sun from '../../../assets/icon-sun.svg';
import moon from '../../../assets/icon-moon.svg';

export default function Header(){
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const hadleThemeSwitch = (event) => {
        event.preventDefault()
        dispatch({
            type: "theme/swithTheme"
        })
    }

    return (
        <header className="header">
            <h1 className="header__title header__title--dark">ToDo</h1>
            <button className='header__theme-button' onClick={hadleThemeSwitch}>
                {theme === "dark" && <img src={sun} alt="dark-theme" className="header__icon" />}
                {theme === "light" && <img src={moon} alt="dark-theme" className="header__icon" />}
            </button>
        </header>
    )
}