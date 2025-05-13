import './userPost.css'
import UserPostHeader from "./UserPostHeader.jsx";
import UserPostContent from "./UserPostContent.jsx";
import UserPostFooter from "./UserPostFooter.jsx";

export default function UserPost() {
    return (
        <div className="post-container">
            <UserPostHeader />
            <UserPostContent />
            <UserPostFooter />
        </div>
    )
}