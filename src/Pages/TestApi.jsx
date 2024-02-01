import axios from "axios";
import { useEffect } from "react";

const TestApi = () => {

  // const token = `uMEbjKezuknJCvXGfCt1sPBq6q5jmUR07H5fGh7TmCHT3mziGZZ9gYqq2qM8`
  // https://api.sportmonks.com/v3/football/fixtures/between/{start_date}/{end_date}
  // const start_date = "2023-1-31"
  // const end_date = "2023-2-1"

    const getData = () => {
      const url = `https://api.soccersapi.com/v2.2/fixtures/?user=raphealjunior07&token=6ee1b1feafb1393bfdf18c866e297003&t=schedule&d=2024-02-03`
      
        axios
            .get(url)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        // getData()
    }, []);

    return (
        <div>
            <h1 className="text3xl">Testing API</h1>
            <button className="w-max h-max p-3 bg-sky-200 rounded" onClick={getData}>
                Click
            </button>
        </div>
    );
};

export default TestApi;
