import './SearchButton.css'
const SearchButton = (props) => {
    const {onClick, label} = props

    return (
        <button type="button" onClick={onClick}>{label}</button>
    )
}

export default SearchButton
