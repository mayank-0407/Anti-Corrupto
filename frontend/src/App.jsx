import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { images } from "./assets/images";

export default function App() {
  return (
    <div className="App">
      <Carousel
        className="crsl"
        // autoPlay
        // infiniteLoop
        centerMode
        dynamicHeight
        // interval={1000}`
      >
        {images.map((image) => (
          <img src={image.download_url} alt={image.author} />
        ))}
      </Carousel>
    </div>
  );
}

