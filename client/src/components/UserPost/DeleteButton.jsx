import trashIcon from "../../assets/icons/trash.svg";

export default function DeleteButton() {
    return (
        <button className="deletePost">
            <img src={trashIcon} alt="trash"/>
        </button>
    )
}