import { Text } from "@ui5/webcomponents-react"
const NoData = () => {

    return(
        <div className ="NoData">
            <Text>
                A Pokemon nem található
            </Text>
            <Text
            style={{}}
            >
            Keress rá egy Pokemonra a kereső segítségével
            </Text>
            <img alt="logo" src="https://cdn141.picsart.com/316822369071211.png" style={{width: '80%'}}/>
        </div>
    )
}

export default NoData