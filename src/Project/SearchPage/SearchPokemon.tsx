import {FlexBox, Input, Label } from "@ui5/webcomponents-react";
import { Button } from "@ui5/webcomponents-react";
import {useState} from "react";
import Axios from "axios";
import NoData from "./NoData";
import { Pokemon } from "../Interface/Pokemon";
    
const SearchPokemon = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon>();
    const fetchData = () => {
            Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
            (response) => {
                setPokemon({
                    pokeName: response.data.species.name, 
                    pokeType: response.data.types[0].type.name,
                    pokeImage: response.data.sprites.other["official-artwork"].front_default,
                });
            }).catch(() => setPokemon(undefined))
        };

    return (
        <div className="Pokemon">
        <FlexBox
            style={{
                justifyContent:"center",
                width: "80%",
                margin:"35px",
            }}
        >
                <Input
                    style={{
                        width:"60%"
                    }}
                    onChange={(event) => {
                        setPokemonName(event.target.value || "'");
                    }} 
                />
                <Button
                    icon="search"
                    onClick={fetchData}
                    style={{marginTop:"3px",marginLeft:"5px"}}
                />
        </FlexBox>
        <FlexBox
            style={{
            width:"100%",
            justifyContent:"center",
            
            }}>
            
                {pokemon != undefined ?  (
                    <>
                    <Label
                        style={{
                            border:"2px solid",
                            borderRadius:"25px"
                         }}>
                        <h1>Neve: {pokemon.pokeName}
                        <Button 
                        style={{
                            marginInline:"5px"
                        }}
                            icon="favorite"
                            //onClick={}
                        />
                        </h1>
                        <h3>Tipusa: {pokemon.pokeType}</h3>
                        <img
                            className="img" 
                            src = {pokemon.pokeImage}
                            style={{
                                width: '100%',
                                textAlign:'center'
                            }}
                        />
                        </Label>
                    </> 
                    ) : <NoData/>}
            
        </FlexBox>
        </div>
    )
}
export default SearchPokemon