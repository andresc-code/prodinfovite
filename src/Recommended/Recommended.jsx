import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Branches</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Zaru" title="Zaru" />
          <Button onClickHandler={handleClick} value="Elan" title="Elan" />
          <Button onClickHandler={handleClick} value="UrbanVibe" title="Urban Vibe" />
          <Button onClickHandler={handleClick} value="trendfushion" title="Trend Fushion" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
