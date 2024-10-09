function PostDoubleImage({ post, photos }) {
  return (
    <div className="flex flex-col items-center p-8 ">
      {
        <div className="  flex flex-col xl:px-4 lg:flex-row justify-center items-center gap-4 px-12 lg:px-12 w-full ">
          <img src={photos[0].url} />
          <img src={photos[1].url} />
        </div>
      }
      <div className="text-center mt-4 px-4 md:px-8 lg:px-12 w-full">
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDoubleImage;
