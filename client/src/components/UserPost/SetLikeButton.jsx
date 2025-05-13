import likeIcon from "../../assets/icons/like.svg";

export default function SetLikeButton() {
    return (
        <button className="setLike">
            <img src={likeIcon} alt="like"/>
        </button>
    )
}