import { Text } from "@ui5/webcomponents-react"
const NoData = () => {

    return(
        <div className ="NoData">
            <Text
                style={{
                    fontSize:"30px",
                    justifyContent:"center",
                }}
            >
                A Pokemon nem található
            </Text>
            <Text
            style={{
                fontSize:"20px",
                justifyContent:"center",
            }}
            >
                Keress rá egy Pokemonra a kereső segítségével
            </Text>
            <img alt="logo" src="https://cdn141.picsart.com/316822369071211.png" style={{width: '65%'}}/>
        </div>
    )
}

export default NoData