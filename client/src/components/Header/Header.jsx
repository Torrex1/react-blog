import notificationsIcon from '../../assets/icons/notifications.svg'
import profileIcon from '../../assets/icons/profile.svg'
import './header.css'
import Search from '../Search.jsx';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header-container__logo">
                    <span>FLU<span className="flipped-text">vv</span>ER</span>
                </div>

                <div className="header-container__search">
                    <Search />
                </div>

                <div className="header-container__icons">
                    <img src={notificationsIcon} alt="notifications"/>
                    <img src={profileIcon} alt="user"/>
                </div>
            </div>
        </header>
    )
}