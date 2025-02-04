import React from 'react'

interface SearchProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Search: React.FC<SearchProps> = ({ setSearch, setPage }) => {

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" name="searchCharacter" placeholder="Search by name..."
                    onChange={(e) => {
                        // setPage(1);
                        // setSearch(e.target.value);
                    }} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" id="searchCharacter">Search</button>
                </div>
            </div>
        </form>
    )
}

export default Search