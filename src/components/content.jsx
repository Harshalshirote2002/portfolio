import image1 from "../images/CV-maker.png";
import image2 from "../images/knights-travails.png";
import image3 from "../images/ANPR.png";
import image4 from "../images/image-stitcher.png";
import image5 from "../images/weather-app.png";
import image6 from "../images/todo-list.png";
import image7 from "../images/open.svg";

const works = [
  {
    imagePath: image1,
    title: "CV-Maker App",
    link: "https://github.com/Harshalshirote2002/CVmaker",
    description:
      "An user-friendly tool built that enables individuals to effortlessly create and customize their CV online",
  },
  {
    imagePath: image2,
    title: "Knights Travails path visualized",
    link: "https://harshalshirote2002.github.io/knights-travails/",
    description:
      "Finds the Knight's shortest path from start to end node using the Breadth First Search algorithm",
  },
  {
    imagePath: image3,
    title: "Automatic Number Plate Recognition",
    link: "https://github.com/Harshalshirote2002/ANPR",
    description:
      "Incorporates number plate localization based solely upon morphological processing of the input image",
  },
  {
    imagePath: image4,
    title: "Image Stitcher",
    link: "https://github.com/Harshalshirote2002/image-stitching",
    description: "Combines two input images together to form a panoramic view",
  },
  {
    imagePath: image5,
    title: "Weather App",
    link: "https://github.com/Harshalshirote2002/weather-app",
    description: "Displays real-time weather data for user-specified locations",
  },
  {
    imagePath: image6,
    title: "Todo-list App",
    link: "https://github.com/Harshalshirote2002/todo-list",
    description:
      "A streamlined web app for managing tasks and to-do lists with user-friendly features",
  },
];

function AddWork() {
  return works.map((work) => (
    <div key={work.title} className="work-card">
      <img className="work-card-screenshot" src={work.imagePath} />
      <div className="work-card-content">
        <div className="work-card-content-title">{work.title}</div>
        <a
          rel="noreferrer"
          target="_blank"
          className="work-card-content-icons"
          href={work.link}
        >
          <img src={image7} />
        </a>
        <div className="work-card-content-description">{work.description}</div>
      </div>
    </div>
  ));
}

export default function Content() {
  return (
    <div className="work">
      <h1>My Work</h1>
      <div className="work-content">
        <AddWork />
      </div>
    </div>
  );
}
