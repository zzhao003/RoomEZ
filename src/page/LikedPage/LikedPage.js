import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import HomeProfile from "../../component/HomeProfile/HomeProfile";
import { useNavigate } from "react-router-dom";

const LikedPage = () => {
  const navigate = useNavigate();
  const [likedFeed, setLikedFeed] = useState({});
  const { user } = useSelector((state) => state.user);
  const ID = "90ac3319-70d1-4a51-b91d-ba6c2464408c";
  // const ID = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";
  const [likeArr, setLikeArr] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/liked/getlikes", { id: ID })
      .then((res) => {
        //if no like returned redirect to home page
        console.log(res.data);
        if (res.data.length == 0) {
          alert("Waiting for someone to like you :)");
          navigate("/");
        } else {
          setLikeArr(res.data);
          setLikedFeed(res.data[0] || {});
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  const skipHandler = () => {
    // axios call to delete entry in db
    if (index < likeArr.length) {
      axios
        //must follow the weird way to format payload for axios delete
        .delete("http://localhost:8080/api/liked", {
          data: { id: likedFeed.id },
        })
        .then((res) => {
          // need to show the next profile in the array
          setLikedFeed(likeArr[index]);
          setIndex((prev) => prev + 1);
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/");
      alert("Waiting for someone to like you :)");
    }
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
