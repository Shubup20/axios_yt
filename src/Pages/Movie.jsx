import { useEffect, useState } from "react";
import { Card } from "../Components/UI/Card";
import { getMovie } from "../Services/GetServices";

export const Movie = () => {
  const [data, setData] = useState([]);

  const getMovieData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.error("Error message:", error.message);
      console.error("Error message:", error.response.status);
      console.error("Error data:", error.response.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <h1 className="heading-movie">MovieFlix</h1>
      <ul className="container grid grid-four--cols">
        {data.map((curElem) => {
          return <Card key={curElem.imdbID} movieData={curElem} />;
        })}
      </ul>
    </div>
  );
};
