import React from 'react';
import './pokedex.css';
import { PokemonTile } from "../PokemonTile/pokemonTile"
import { data } from "../../MockData/mockData"
import { CompareTable } from "../CompareTable/compareTable"

export class Pokedex extends React.Component 
{
    state= {
        CompareList:[]
    }

    onClickHandler = (id, event) => {
        const { CompareList } = this.state
        let arr = CompareList
        if (!arr.includes(id)) {
            arr.push(id)
        }
        else {
            const index = arr.indexOf(id);
            arr.splice(index, 1);
        }
            this.setState({CompareList : arr})
        }

render() {
    const { CompareList } = this.state
 return (
    <div>
        <h3 style={{color: "black"}}>Compare Pokemon</h3>
        <div >
            <div className="tileContainer">
            { data.map((x,idx) => (
                <PokemonTile 
                    data={x} 
                    key={idx} 
                    CompareList={CompareList} 
                    onClick={(id) => this.onClickHandler(id)}
                />
                ))
            }
            </div>
        </div>
        <div className="Box">
            { CompareList.length >1 && <CompareTable CompareList={CompareList} data={data} />}
        </div>
    </div>

)}} 