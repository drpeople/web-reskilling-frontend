function TopPost({ post, photo }) {
  // const [data, setData] = useState({ posts: [], photos: [] });

  // const apiUrl = "http://localhost:3000/posts";

  // function pullJson() {
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((responseData) => setData(responseData));
  // }

  // useEffect(() => {
  //   pullJson();
  // }, []);

  //const firstPost = data.posts[0];
  //const firstPhoto = data.photos[0];

  return (
    <div className="p-8">
      <div className="flex flex-col items-start p-6">
        <h2 className=" text-3xl font-bold">Posts Lists</h2>
        <h3 className="text-gray-400">{post.title}</h3>
      </div>
      <div className="flex flex-col items-center p-2  ">
        <img src={photo.url} className="  max-w-full " />
        <p className="text-center">{post.body}</p>
      </div>
    </div>
  );
}

export default TopPost;
