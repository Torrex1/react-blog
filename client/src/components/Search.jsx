import searchIcon from '../assets/icons/search.svg'
export default function Search() {
    return (
        <div className="container__search">
            <input type="text"/>
            <img src={searchIcon} alt="searchIcon"/>
        </div>
    )
}