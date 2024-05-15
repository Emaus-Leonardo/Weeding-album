const PhotoAlbum = () => {
  const fotos = [
    "/img/img1.jpeg",
    "/img/img2.jpeg",
    "/img/img3.jpeg",
    "/img/img4.jpeg",
    "/img/img5.jpeg",
    "/img/img6.jpeg",
    "/img/img7.jpeg",
    "/img/img8.jpeg",
    "/img/img9.jpeg",
    "/img/img10.jpeg",
    "/img/img11.jpeg",
    "/img/img12.jpeg",
    "/img/img13.jpeg",
    "/img/img14.jpeg",
    "/img/img15.jpeg",
    "/img/img16.jpeg",
    "/img/img17.jpeg",
    "/img/img18.jpeg",
    "/img/img19.jpeg",
  ];

  return (
    <div className="p-5 md:p-19">
      <div
        className="columns-1 gap-5 lg:gap-6 sm:columns-2 lg:columns-3 xl:columns-4 ssm:columns-1 sssm:columns-1
      [&>img:not(:firs-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 sm:[&>img:not(:first-child)]:mt-8 ssm:[&>img:not(:first-child)]:mt-8 sssm:[&>img:not(:first-child)]:mt-8"
      >
        {fotos.map((foto, index) => (
          <img key={index} src={foto} alt={`Foto ${index + 1}`} className="hover:scale-110 transition-all rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
