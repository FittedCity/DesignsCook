import GalleryGrid from "../reuseable/GalleryGrid";

const galleryImages = [
  { className: "div1", imageUrl: "/assets/rendering/img1.jpg" },
  { className: "div2", imageUrl: "/assets/rendering/img2.jpg" },
  { className: "div3", imageUrl: "/assets/rendering/img3.jpg" },
  { className: "div4", imageUrl: "/assets/rendering/img4.jpg" },
  { className: "div5", imageUrl: "/assets/rendering/img5.jpg" },
  { className: "div6", imageUrl: "/assets/rendering/img6.jpg" },
  { className: "div7", imageUrl: "/assets/rendering/img7.jpg" },
  { className: "div8", imageUrl: "/assets/rendering/img8.jpg" },
  { className: "div9", imageUrl: "/assets/rendering/img9.jpg" },
];

const Gallery = () => {
  return (
    <div className="py-10">
      <GalleryGrid
        items={galleryImages}
      />
    </div>
  );
};

export default Gallery;
