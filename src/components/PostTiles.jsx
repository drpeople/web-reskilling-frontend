import { useNavigate } from "react-router-dom";

function PostTiles({ posts, photos }) {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/post/${id}`);
  };

  const imageLimit = photos.slice(3, 12);
  const postLimit = posts.slice(3, 12);

  return (
    <div className="p-8">
      <h2 className="title">Related articles or posts</h2>

      <div className="grid grid-cols-3  text-center">
        {imageLimit.map((image) => {
          const post = postLimit.find((post) => post.id === image.id);

          return (
            <div key={image.id} className="flex flex-col items-center">
              <img
                className="p-2 hover:w-11/12 duration-300 h-auto object-cover rounded "
                src={image.url}
                onClick={() => handleImageClick(image.id)}
              />
              <h4 className=" font-bold py-2"> {post.title}</h4>
              <p className="text-gray-400"> Author {post.userId}</p>
            </div>
          );
        })}
      </div>
      {/* {postLimit.map((post) => (
        <div key={post.id}>
          <p className="text-gray-400"> Author {post.userId}</p>
        </div>
      ))} */}
    </div>
  );
}

export default PostTiles;
