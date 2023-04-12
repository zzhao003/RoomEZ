import "./singlechat.scss";
import patrick from "../../asset/patrick.png";

const SingleChat = () => {
  return (
    <div className="singlechat">
      <img className="singlechat__img" src={patrick} />
      <h4 className="singlechat__name">name</h4>
    </div>
  );
};

export default SingleChat;
