import GalleryGrid from "../reuseable/GalleryGrid";

const galleryImages = [
  {
    className: "div1",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
  {
    className: "div2",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
  {
    className: "div3",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
  {
    className: "div4",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
  {
    className: "div5",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
  {
    className: "div6",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
  {
    className: "div7",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
  {
    className: "div8",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
  {
    className: "div9",
    imageUrl: "/assets/product-design/animation.mp4",
    isVideo: true,
  },
];

const Gallery = () => {
  return (
    <div className="py-10">
      <GalleryGrid items={galleryImages} />
    </div>
  );
};

export default Gallery;
