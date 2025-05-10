import './sidebar.css'
import UserCard from '../UserCard.jsx'
export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar-container__friendlist friendlist">
                <div className="friendlist__title">
                    <h4>YOUR FRIENDS</h4>
                </div>

                <UserCard />
                <UserCard />
            </div>
        </div>
    )
}