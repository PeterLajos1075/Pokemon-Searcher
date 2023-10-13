import { Grid} from "@ui5/webcomponents-react";
import React from "react";
const  SavedPoke = () => {
    return(
        <div className = "Saved">
            <Grid
                style={{margin:"50px"}}
            
            >
                <React.Fragment key=".0">
                    <div
                        data-layout-indent="XL1 L1 M1 S0"
                        data-layout-span="XL8 L8 M8 S12"
                        style={{backgroundColor: '#afd69b'}}>
                            
                    </div>
                    <div
                        style={{ backgroundColor: '#b7cc9d'}}>
                            Div 2
                    </div>
                    <div style={{backgroundColor: '#a6dbbc'}}>
                            Div 3
                    </div>
                    <div style={{backgroundColor: '#8fb6ab'}}>
                            Div 4
                    </div>
                    <div style={{backgroundColor: '#8ca19e'}}>
                            Div 5
                    </div>
                    <div style={{backgroundColor: '#838f8c'}}>
                            Div 6
                    </div>
                </React.Fragment>
            </Grid>
        
        
        </div>

    )
}
export default SavedPoke