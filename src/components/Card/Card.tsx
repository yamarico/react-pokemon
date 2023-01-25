import React from 'react';
import "./Card.css";
import { useNavigate } from "react-router-dom";


const Card = ({ key, pokemon }: { key: number, pokemon: any },) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/cards/${key}`);
    };

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={pokemon.sprites.front_default} />
                </div>
                <h3 className="card-name">{pokemon.name}</h3>
                <div className="cardTypes">
                    <div> タイプ</div>
                    {pokemon.types.map((type: any) => {
                        return <div>
                            <span className='typeName'>{type.type.name}</span>
                        </div>
                    })}
                </div>
                <div className='cardInfo'>
                    <div className="cardData">
                        <p>重さ :{pokemon.weight}</p>
                    </div>
                    <div className="cardData">
                        <p>高さ :{pokemon.height}</p>
                    </div>
                    <div className="cardData">
                        <p>アビリティ :{pokemon.abilities[0].ability.name}</p>
                    </div>
                </div>
            </div>
            <div onClick={handleClick}>
                <h2>{pokemon}</h2>
            </div>
        </>
    )
};

export default Card
