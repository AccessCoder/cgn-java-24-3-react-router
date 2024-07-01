import {useNavigate} from "react-router-dom";

export default function HomePage(){

    const navigate = useNavigate();

    function navToJulia(){
        navigate("/greet/Julia")
    }

    return(
        <>
            <h1>Welcome to Router Page</h1>
            <button onClick={navToJulia}>Greet Julia</button>
        </>
    )
}