import "./preloader.css";
import preloaderImg from "../../assets/preloader.svg";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <img src={preloaderImg} width="50" height="50" alt="" className="img" />
      </div>
    </div>
  );
};

export default Preloader;
