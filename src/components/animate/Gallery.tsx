import GalleryGrid from "../reuseable/GalleryGrid";

const galleryImages = [
  { className: "div1", imageUrl: "/assets/3d-animation/img1.jpg" },
  { className: "div2", imageUrl: "/assets/3d-animation/img2.jpg" },
  { className: "div3", imageUrl: "/assets/3d-animation/img3.jpg" },
  { className: "div4", imageUrl: "/assets/3d-animation/img4.jpg" },
  { className: "div5", imageUrl: "/assets/3d-animation/img5.jpg" },
  { className: "div6", imageUrl: "/assets/3d-animation/img6.jpg" },
  { className: "div7", imageUrl: "/assets/3d-animation/img7.jpg" },
  { className: "div8", imageUrl: "/assets/3d-animation/img8.jpg" },
  { className: "div9", imageUrl: "/assets/3d-animation/img9.jpg" },
];

const Gallery = () => {
  return (
    <div className="py-10">
      <GalleryGrid items={galleryImages} />
    </div>
  );
};

export default Gallery;
