// Cards.tsx
import React from 'react';
import { Character } from '../../models/character';
import StatusBadge from '../StatusBadge/StatusBadge';
import './Cards.scss';

interface CardsProps {
    results: Character[];
}

const Cards: React.FC<CardsProps> = ({ results }) => {
    if (results) {

        return (
            <div className="cards-container row my-2 justify-content-between">
                {results.map((character) => (
                    <div key={character.id} className="card d-flex flex-row col-5 rounded-lg px-0 my-2">
                        <StatusBadge status={character.status} />
                        <img className='character-image' src={character.image} alt={character.name} />
                        <div className="px-2">
                            <h5 className="card-title d-flex flex-column">{character.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{character.species}</h6>
                            <p>
                                <h6>Origin:</h6>
                                <span>{character.origin?.name}</span>
                            </p>
                            <p>
                                <h6>Last known location:</h6>
                                <span>{character.location?.name}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="alert alert-warning my-5" role="alert">
           Your search did not return any results.
        </div>
    );
};

export default Cards;
