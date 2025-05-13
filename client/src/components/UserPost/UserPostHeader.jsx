import userIcon from "../../assets/icons/smile.png";

export default function UserPostHeader() {
    return (
        <div className="post-container__header">
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <img src={userIcon} alt="user image"/>
                <span className="username">Torrex</span>
            </div>

            <time>19:00</time>
        </div>
    )
}