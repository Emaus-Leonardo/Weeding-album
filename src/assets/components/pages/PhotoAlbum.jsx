import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'; // Importe os ícones necessários

const PhotoAlbum = () => {
  // Array que armazena o caminho das imagens
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

  // armazena o índice da imagem selecionada em tela cheia
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Função para abrir uma imagem em tela cheia, recebendo o índice da imagem como parâmetro
  const openFullScreen = (index) => {
    setSelectedImageIndex(index);
  };

  // Função que fehca a imagem em tela cheia
  const closeFullScreen = () => {
    setSelectedImageIndex(null);
  };

  // função que retrocede a imagem
  const previousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? fotos.length - 1 : prevIndex - 1));
  };
  
  // função que avança imagem
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === fotos.length - 1 ? 0 : prevIndex + 1));
  };

 // aonde o conteudo é renderizado
  return (
    <div className="p-5 px-40 tablet:px-10 md:px-10 md:p-19 bg-custom transition-all">
      <div className="columns-1 gap-5 lg:gap-6 sm:columns-2 lg:columns-4 xl:columns-5 tablet:columns-2 md:columns-3 
      [&>img:not(:firs-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 sm:[&>img:not(:first-child)]:mt-8 md:[&>img:not(:first-child)]:mt-8">
        {fotos.map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt={`Foto ${index + 1}`}
            className="hover:scale-105 hover:shadow-2x1 transition-all rounded-lg cursor-pointer"
            onClick={() => openFullScreen(index)}
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
          <img src={fotos[selectedImageIndex]} alt="Fullscreen" className="max-w-full max-h-full" />
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-2 hover:scale-110 transition-all" onClick={previousImage}>
            <FiChevronLeft />
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-2 hover:scale-110 transition-all" onClick={nextImage}>
            <FiChevronRight />
          </button>
          <button className="absolute top-4 right-4 bg-white text-gray-800 px-2 py-1.5 hover:scale-110 transition-all" onClick={closeFullScreen}>
            <FiX />
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbum;
