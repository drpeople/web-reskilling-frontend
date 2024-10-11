function TopPost({ post, photo }) {
  return (
    // use data from a single post
    <div className="p-8">
      <div className="flex flex-col items-start p-6">
        <h2 className=" text-3xl font-bold">Posts Lists</h2>
        <h3 className="text-gray-400">{post.title}</h3>
      </div>
      <div className="flex flex-col items-center p-4  ">
        <img src={photo.url} alt="Missing Post" className=" p-2" />
        <p className="text-center p-2">{post.body}</p>
      </div>
    </div>
  );
}

export default TopPost;
