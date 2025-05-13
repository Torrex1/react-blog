import SetLikeButton from "./SetLikeButton.jsx";
import EditButton from "./EditButton.jsx";
import DeleteButton from "./DeleteButton.jsx";

export default function UserPostFooter() {
    return (
        <div className="post-container__footer">
            <SetLikeButton />

            <div style={{display: 'flex', gap: '10px'}}>
                <EditButton />
                <DeleteButton />
            </div>
        </div>
    )
}