import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import HomeProfile from "../../component/HomeProfile/HomeProfile";

const LikedPage = () => {
  const [likedFeed, setLikedFeed] = useState({});
  const { user } = useSelector((state) => state.user);
  const ID = "90ac3319-70d1-4a51-b91d-ba6c2464408c";

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/liked/getlikes", { id: ID })
      .then((res) => {
        setLikedFeed(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const skipHandler = () => {
    // axios call to delete entry in db, will need id
  };
  const likeHandler = () => {
    //axios call to make match true for entry. will need id
    console.log("like");
  };

  return (
    <HomeProfile
      feed={likedFeed}
      skipHandler={skipHandler}
      likeHandler={likeHandler}
    />
  );
};

export default LikedPage;
