import React from 'react'

interface SearchProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Search: React.FC<SearchProps> = ({ setSearch, setPage }) => {

    return (
        <form onReset={(e) => {
            setPage(1);
            setSearch("");
        }}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by name..."
                    onChange={(e) => {
                        setPage(1);
                        setSearch(e.target.value);
                    }} />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="reset" id="searchCharacter">Clear</button>
                </div>
            </div>
        </form>
    )
}

export default Search