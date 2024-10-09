import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import TopPost from "./components/TopPost.jsx";
import Navbar from "./components/Navbar.jsx";
import PostTiles from "./components/PostTiles";
import SinglePost from "./components/SinglePost.jsx";
import { useState, useEffect } from "react";
import "./App.css";
import PostDoubleImage from "./components/PostDoubleImage.jsx";

function App() {
  const [data, setData] = useState({ posts: [], photos: [] });
  const apiUrl = "http://localhost:3000/posts";

  function pullJson() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }

  useEffect(() => {
    pullJson();
  }, []);

  if (
    !data ||
    !data.posts ||
    !data.photos ||
    data.posts.length === 0 ||
    data.photos.length === 0
  ) {
    return <div>Loading...</div>; // Display a loading message or any fallback content
  }

  const firstPost = data.posts[0];
  const firstPhoto = data.photos[0];
  const secondPost = data.posts[1];
  const secondPhotos = data.photos.slice(1, 3);
  console.log(secondPhotos);

  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Navbar visible on all routes */}
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <TopPost post={firstPost} photo={firstPhoto} />
                <PostDoubleImage post={secondPost} photos={secondPhotos} />
                <PostTiles posts={data.posts} photos={data.photos} />{" "}
                {/* PostTiles component with clickable images */}
              </>
            }
          />

          {/* Route for single post */}
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
        <Footer /> {/* Footer visible on all routes */}
      </div>
    </Router>
  );
}

export default App;
