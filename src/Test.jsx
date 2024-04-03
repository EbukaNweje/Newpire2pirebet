import axios from "axios";
import {useEffect, useState} from "react";

export default function Test() {
    const key = "f84fc31d";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://www.omdbapi.com/?apikey=${key}&s=interstellar`)
            .then((response) => setData(response?.data?.Search))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(data);

    return (
        <>
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <h1>{item.Title}</h1>
                    </div>
                ))}
            </div>
        </>
    );
}
