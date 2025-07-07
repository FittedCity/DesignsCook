import GalleryGrid from "../reuseable/GalleryGrid";

const galleryImages = [
  {
    className: "div1",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
  {
    className: "div2",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
  {
    className: "div3",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
  {
    className: "div4",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
  {
    className: "div5",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
  {
    className: "div6",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
  {
    className: "div7",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
  {
    className: "div8",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
  {
    className: "div9",
    imageUrl: "/assets/marketing/marketing.jpg",
    showOverlay: true,
  },
];

const overlay = <div className="bg-black/39 w-full h-full" />;

const Gallery = () => {
  return (
    <div className="py-10">
      <GalleryGrid items={galleryImages} overlayContent={overlay} />
    </div>
  );
};

export default Gallery;
