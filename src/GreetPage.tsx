import {useParams} from "react-router-dom";

export default function GreetPage(){

    const params = useParams();

    return(
        <>
            <h2>Hello {params.name}!</h2>
        </>
    )
}