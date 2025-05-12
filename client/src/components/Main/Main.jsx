import './main.css'
import UserPost from '../UserPost/UserPost.jsx'
export default function Main() {
    return (
        <div className='main-container'>
            <h1>Новое</h1>

            <UserPost />

        </div>
    )
}