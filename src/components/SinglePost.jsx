import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const apiUrl = `http://localhost:3000/post/${id}`;

  function pullJson() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => console.error("Error fethcing Post", error));
  }

  useEffect(() => {
    pullJson();
  }, []);

  return (
    <div className="flex flex-col p-12 ">
      <div className="flex flex-col md:flex-row p-4 gap-12 ">
        <div className="space-y-4">
          <h3 className="text-4xl font-bold"> Single Post</h3>
          <h1 className="font-e text-gray-400 text">{data.title}</h1>
          <p className="text-start">{data.body} </p>
        </div>

        <img className="px-4" src={data.photoUrl} alt="Post Photo" />
      </div>
    </div>
  );
}

export default SinglePost;
