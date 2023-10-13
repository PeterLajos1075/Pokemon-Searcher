import { Button } from "@ui5/webcomponents-react";
import { Bar } from "@ui5/webcomponents-react/wrappers";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const navigate = useNavigate();

    return (  
        <div className="navbar">
            <Bar
                style={{
                    backgroundColor:"orange",
                    height: "80px",
                }}
                design="FloatingFooter"
                endContent={<>
                    <Button 
                        design="Transparent" 
                        icon="favorite"
                        onClick={() => navigate("/Favorites")}
                    />
                    <Button 
                        design="Transparent"
                        icon="search"
                        onClick={() => navigate("/")}
                    />
                </>}
                startContent={<>
                    <img 
                        alt="logo" 
                        src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
                        style={{
                             width: "150px", 
                        }}
                    />
                </>}
                >
            </Bar>
        </div>
    );
}
 
export default NavBar