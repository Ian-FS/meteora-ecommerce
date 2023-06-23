import './SearchBar.scss'

export default function SearchBar() {
    return (
        <>
            <div className='search__bar'>
                <input type="text" id='input-bar' placeholder='Digite o produto' />
                <button>Search</button>
            </div>
        </>
    )
}
