import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import HomeProfile from "../../component/HomeProfile/HomeProfile";
import { useNavigate } from "react-router-dom";

const LikedPage = () => {
  const navigate = useNavigate();
  const [likedFeed, setLikedFeed] = useState({});
  const { user } = useSelector((state) => state.user);
  const [likeArr, setLikeArr] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    axios
      .post("http://localhost:8080/api/liked/getlikes", { id: user.id })
      .then((res) => {
        //if no like returned redirect to home page
        if (res.data.length == 0) {
          alert("Waiting for someone to like you :)");
          navigate("/");
        } else {
          setLikeArr(res.data);
          setLikedFeed(res.data[0]);
        }
      })
      .catch((err) => console.log(err));
  }, [navigate, user]);

  const skipHandler = () => {
    // axios call to delete entry in db
    axios
      //must follow the weird way to format payload for axios delete
      .delete("http://localhost:8080/api/liked", {
        data: { id: likedFeed.id },
      })
      .then((res) => {
        //rediret after deleting the last like
        if (index == likeArr.length - 1) {
          alert("Waiting for someone to like you :)");
          return navigate("/");
        }
        // need to show the next profile in the array
        setLikedFeed(likeArr[index + 1]);
        setIndex((prev) => prev + 1);
      })
      .catch((err) => console.log(err));
  };

  const likeHandler = () => {
    //axios call to make match true for entry. will need id
    axios
      .put("http://localhost:8080/api/liked", { id: likedFeed.id })
      .then((res) => {
        alert("Matched! Go to chat to start chatting!");
      })
      .catch((err) => console.log(err));

    //then activate chat with person
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
