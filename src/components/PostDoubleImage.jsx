function PostDoubleImage({ post, photos }) {
  // returing 2 images and 1 post
  return (
    <div className="flex flex-col items-center p-8 ">
      {
        <div className=" double-image-position">
          <img className="p-2" src={photos[0].url} alt="Missing Post" />
          <img className="p-2" src={photos[1].url} alt="Missing Post" />
        </div>
      }
      <div className="text-center mt-4 px-4 md:px-8 lg:px-12 w-full">
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDoubleImage;
