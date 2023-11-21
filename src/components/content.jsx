const works = [
  {
    imagePath: "./src/images/CV-maker.png",
    title: "CV-Maker App",
    link: "https://github.com/Harshalshirote2002/CVmaker",
    description:
      "An user-friendly tool built that enables individuals to effortlessly create and customize their CV online",
  },
  {
    imagePath: "./src/images/knights-travails.png",
    title: "Knights Travails path visualized",
    link: "https://harshalshirote2002.github.io/knights-travails/",
    description:
      "Finds the Knight's shortest path from start to end node using the Breadth First Search algorithm",
  },
  {
    imagePath: "./src/images/ANPR.png",
    title: "Automatic Number Plate Recognition",
    link: "https://github.com/Harshalshirote2002/ANPR",
    description:
      "Incorporates number plate localization based solely upon morphological processing of the input image",
  },
  {
    imagePath: "./src/images/image-stitcher.png",
    title: "Image Stitcher",
    link: "https://github.com/Harshalshirote2002/image-stitching",
    description: "Combines two input images together to form a panoramic view",
  },
  {
    imagePath: "./src/images/weather-app.png",
    title: "Weather App",
    link: "https://github.com/Harshalshirote2002/weather-app",
    description: "Displays real-time weather data for user-specified locations",
  },
  {
    imagePath: "./src/images/todo-list.png",
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
          <img src="./src/images/open.svg" />
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
