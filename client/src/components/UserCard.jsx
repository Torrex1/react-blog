import smile from '../assets/icons/smile.png'
export default function UserCard() {
    return (
        <div className="friendlist__content">
            <div className="img-wrapper">
                <img src={smile} alt=""/>
            </div>

            <span className="title">Gensuhaaa</span>
        </div>
    )
}