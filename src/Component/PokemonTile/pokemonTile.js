import React, { useState } from 'react';
import './pokemonTile.css';


export const PokemonTile = ({data, onClick, CompareList}) => {
    const [showButton, setShowButton ] = useState(false)

    const getLabel = (id) => {
        if (CompareList.includes(id)) {
            return "REMOVE"
        }
        return "COMPARE"
    }

    return (
<div className="container">
    <div className="card">
        <div onMouseEnter={() => setShowButton(true)} onMouseLeave={() => getLabel(data.id) !== "REMOVE" ? setShowButton(false): ""}>
            <div className="imageWrapper" >
                <div 
                className="image" 
                style={{  
                    backgroundImage: `url("${data.image}")`, 
                    opacity: showButton ? 0.3 :1 }}>
                </div>
                { showButton && <button 
                    className="button" 
                    onClick={() => {
                       
                        onClick(data.id)    
                    }}>{getLabel(data.id)}
                </button>}
            </div>
        </div>
        <div className="bottom">
            <span>{data.name}</span>
        </div>
    </div>
</div>
)} 