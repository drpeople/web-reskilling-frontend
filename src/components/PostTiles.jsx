import { useNavigate } from "react-router-dom";

function PostTiles({ posts, photos }) {
  const navigate = useNavigate();

  // navigate to a single post
  const handleImageClick = (id) => {
    navigate(`/post/${id}`);
  };

  // create data for 9 tiles
  const imageLimit = photos.slice(3, 12);
  const postLimit = posts.slice(3, 12);

  return (
    <div className="p-8">
      <h2 className="title">Related articles or posts</h2>

      {/* grid */}
      <div className="grid-tile">
        {imageLimit.map((image) => {
          // match the id of the images with the post
          const post = postLimit.find((post) => post.id === image.id);

          return (
            <div key={image.id} className="flex flex-col items-center">
              <img
                className="tile-image"
                src={image.url}
                alt="Missing Post"
                onClick={() => handleImageClick(image.id)}
              />
              <h4 className="font-bold py-2">{post.title}</h4>
              <p className="text-gray-400">Author {post.userId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostTiles;
