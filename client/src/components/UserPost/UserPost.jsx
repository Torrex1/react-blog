import './userPost.css'
import trashIcon from '../../assets/icons/trash.svg'
import editIcon from '../../assets/icons/edit.svg'
import likeIcon from '../../assets/icons/like.svg'
import userIcon from '../../assets/icons/smile.png'

export default function UserPost() {
    return (
        <div className="post-container">

            <div className="post-container__header">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <img src={userIcon} alt="userImg"/>
                    <span className="username">Torrex</span>
                </div>

                <time>19:00</time>
            </div>

            <div className="post-container__content">
                <span className="user-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi distinctio dolore eaque, eligendi esse eveniet, hic impedit ipsam laudantium minima nesciunt nisi, quisquam rem sit. Cumque dolore totam veritatis?</span>
            </div>

            <div className="post-container__footer">
                <button className="setLike">
                    <img src={likeIcon} alt=""/>
                </button>

                <div style={{ display: 'flex', gap: '10px'}}>
                    <button className="editPost">
                        <img className="tesst" src={editIcon} alt=""/>
                    </button>
                    <button className="deletePost">
                        <img src={trashIcon} alt=""/>
                    </button>
                </div>

            </div>
        </div>
    )
}