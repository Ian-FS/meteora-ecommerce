import './SearchBar.scss'

// eslint-disable-next-line react/prop-types
export default function SearchBar({ searchList, setSearchList }) {
    return (
        <>
            <div className='search__bar'>
                <input type="text" onChange={(ev) => setSearchList(ev.target.value)} value={searchList} id='input-bar' placeholder='Digite o produto' />
                <button>Search</button>
            </div>
        </>
    )
}
