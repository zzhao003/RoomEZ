import "./singlechat.scss";

const SingleChat = ({ item }) => {
  return (
    <div className="singlechat">
      <img className="singlechat__img" src={item.img_url} />
      <h4 className="singlechat__name">{item.first_name}</h4>
    </div>
  );
};

export default SingleChat;
