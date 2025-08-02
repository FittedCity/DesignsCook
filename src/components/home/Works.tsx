import WorkItem, { type Subsection } from "../reuseable/WorkItem";

const renderingsSubsections: Subsection[] = [
  {
    id: "exterior",
    title: "3D Exterior",
    content:
      "For every exterior rendering, we deliver two initial sketches to help you visualize composition and mood from different angles. Our renderings serve as the visual backbone of architectural presentations and marketing — adaptable across brochures, websites, and large-format displays. We bring fresh perspectives, test bold ideas, and refine every detail to elevate your final presentation.",
  },
  {
    id: "interior",
    title: "3D Interior",
    content:
      "Our project leads double as interior designers, offering a seamless blend of style and structure. When a project comes without a clear interior vision, we build one crafting moodboards with curated furniture, lighting, and color concepts that set the tone.",
  },
  {
    id: "floorplan",
    title: "3D Floor Plan",
    content:
      "Our 3D floor plans turn layouts into lived-in possibilities offering a clear, visual overview of how spaces connect and function. These renderings help your audience see more than just measurements—they reveal how a space can feel.",
  },
  {
    id: "vr",
    title: "360° VR Experience",
    content:
      "Our immersive 360° virtual tours let buyers explore every part of your project as if they were truly there. This interactive experience helps people connect with your vision and remember your project long after the tour ends.",
  },
];

const animationSubsections: Subsection[] = [
  {
    id: "signature",
    title: "Signature Animation",
    content:
      "For visionary developments and architectural competitions where distinctiveness is everything, our Signature Film delivers more than visuals — it tells a story with cinematic depth. With custom VFX, 2D motion graphics, and creative direction, we craft films that elevate architecture into unforgettable visual narratives.",
  },
  {
    id: "cinematography",
    title: "Cinematography",
    content:
      "We create high-quality cinemagraphs that blend stillness and movement to draw attention, elevate mood, and bring your architectural visuals to life. Perfect for social media, websites, and digital campaigns.",
  },
];

const marketingSubsections: Subsection[] = [
  {
    id: "presentation",
    title: "Presentation",
    content:
      "We craft presentation-ready materials that transform your visuals into impactful storytelling tools — pitch decks, animated slide sequences, or branded showcases. Each is tailored to your audience with 3D visuals, motion design, messaging, and layout that deliver clarity and conversion.",
  },
  {
    id: "website",
    title: "Website",
    content:
      "From wireframe to launch, we build conversion-focused websites to showcase your 3D renderings and animations. Every page—from homepage to apartment listings and tours—is optimized to engage visitors and guide them to action.",
  },
  {
    id: "brochure",
    title: "Brochure",
    content:
      "We design and produce elegant, high-impact brochures and flyers. Each combines custom visuals, infographics, and thoughtful layout. From concept through print production, we manage every detail to deliver a polished result.",
  },
];

const productSubsections: Subsection[] = [
  {
    id: "prototype",
    title: "",
    content:
      "We offer 3D visualization and prototyping support for industrial and product designers. From machinery and tools to consumer products, we help you visualize complex forms and functions, making it easier to refine designs and gain stakeholder buy-in.",
  },
];

const Works: React.FC = () => {
  const items = [
    {
      title: "Renderings",
      mediaType: "image",
      mediaSrc: "/assets/home/rendering.jpg",
      side: "right",
      subsections: renderingsSubsections,
    },
    {
      title: "3D Animation",
      mediaType: "video",
      mediaSrc: "/assets/home/animation.mp4",
      side: "left",
      subsections: animationSubsections,
    },
    {
      title: "Marketing",
      mediaType: "image",
      mediaSrc: "/assets/home/marketing.jpg",
      side: "right",
      subsections: marketingSubsections,
    },
    {
      title: "Product Design",
      mediaType: "video",
      mediaSrc: "/assets/home/animation.mp4",
      side: "left",
      subsections: productSubsections,
    },
  ];

  return (
    <div className="container mx-auto px-0 sm:px-6 lg:px-8">
      {items.map((item, index) => (
        <WorkItem
          key={index}
          title={item.title}
          mediaType={item.mediaType as "image" | "video"}
          mediaSrc={item.mediaSrc}
          side={item.side as "left" | "right"}
          subsections={item.subsections}
        />
      ))}
    </div>
  );
};

export default Works;
