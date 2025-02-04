import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { CharacterResult } from "../models/character-result";
import { apiService } from "../services/ApiService";

const CharacterSearchPage: React.FC = () => {
    let [pgNumber, setPage] = useState<number>(1);
    let [characterResult, updateCharacterResult] = useState<CharacterResult | null>(null);
    let [search, setSearch] = useState<string>("");
    let [errorMessage, setErrorMessage] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiService.getCharacteres(search, pgNumber);
                updateCharacterResult(response);
            } catch (error) {
                setErrorMessage("An error occured... try again after a few moments")
            }
        };

        fetchData();
    }, [search, pgNumber]);

    if (errorMessage) {
        return <div className="error-message">{errorMessage}</div>;
    }

    if (characterResult) {
        const { info, results } = characterResult;

        return (
            <div className="CharacterSearch">

                <div className="search-bar">
                    <Search setSearch={setSearch} setPage={setPage} />
                </div>
                <div className="cards-results">
                    <Cards results={results} />
                </div>
                <div><Pagination maxPages={info?.pages} currentPage={pgNumber} setPage={setPage} /></div>
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
};

export default CharacterSearchPage;
