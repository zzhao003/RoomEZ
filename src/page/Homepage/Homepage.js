import "./homepage.scss";
import HomeProfile from "../../component/HomeProfile/HomeProfile";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { feedActions } from "../../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, feed, error } = useSelector((state) => state.feed);
  const { user } = useSelector((state) => state.user);
  const [toggleFeed, setToggleFeed] = useState(false);

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    axios
      .post("http://localhost:8080/api/feed", { id: user.id })
      .then((res) => {
        dispatch(feedActions.GET_FEED_SUCCESS(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(feedActions.GET_FEED_FAILED(err));
      });
  }, [dispatch, navigate, user, toggleFeed]);

  const skipHandler = () => {
    //get new feed by rerender page with change for toggleFeed
    setToggleFeed((prev) => !prev);
  };

  const likeHandler = () => {
    //axios call to create entry in lovestory,need user.id and feed.id
    const newLike = { user_id: user.id, like: feed.id };
    axios
      .post("http://localhost:8080/api/liked/postalike", newLike)
      .then((res) => {
        setToggleFeed((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {loading ? (
        "LOADING>>>"
      ) : error ? (
        `ERROR!!! ${error}`
      ) : (
        <HomeProfile
          feed={feed}
          skipHandler={skipHandler}
          likeHandler={likeHandler}
        />
      )}
    </>
  );
};

export default Homepage;
