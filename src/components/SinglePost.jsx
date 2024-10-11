import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const apiUrl = `http://localhost:3000/post/${id}`;

  // pull data
  function pullJson() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => console.error("Error Rendering the Post", error));
  }

  useEffect(() => {
    pullJson();
  }, []);

  return (
    <div className="flex flex-col p-12">
      <div className="flex flex-col md:flex-row p-4 gap-12">
        <div className="flex flex-col space-y-4 md:w-1/2">
          <h3 className="text-4xl font-bold">Single Post</h3>
          <h1 className="text-gray-400">{data.title}</h1>
          <p className="text-start">{data.body}</p>
        </div>
        <img
          className="w-full md:w-2/5 px-8 md:order-last"
          src={data.photoUrl}
          alt="Post Photo"
        />
      </div>
    </div>
  );
}

export default SinglePost;
