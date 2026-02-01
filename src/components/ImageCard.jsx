import img1 from "../assets/room1.png";
import img2 from "../assets/room2.png";

export default function ImageCard() {
  return (
    <div className="gallery">
      <div className="image-main">
        <img src={img1} alt="room" />

        <div className="info-box">
          <span>01 — Bed Room</span>
          <h3>Inner Peace</h3>
          <div className="arrow">→</div>
        </div>
      </div>

      <div className="image-side">
        <img src={img2} alt="room" />
      </div>
    </div>
  );
}
