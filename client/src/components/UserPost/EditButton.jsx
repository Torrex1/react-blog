import editIcon from "../../assets/icons/edit.svg";

export default function EditButton() {
    return (
        <button className="editPost">
            <img src={editIcon} alt="edit"/>
        </button>
    )
}