import "./chatpage.scss";
import SingleChat from "../../component/SingleChat/SingleChat";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import ChatModal from "../../component/ChatModal/ChatModal";

const ChatPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [curMatch, setCurMatch] = useState(false);
  const [matchArr, setMatchArr] = useState([]);

  const clickHandler = (item) => {
    // console.log(item);
    setCurMatch(item);
  };

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    axios
      .post("http://localhost:8080/api/chat", {
        id: user.id,
      })
      .then((res) => {
        console.log(res.data);

        const filteredMatch = res.data;
        // .map((item) => {
        //   if (item.user_id == user.id) {
        //     return item.like;
        //   } else {
        //     return item.user_id;
        //   }
        // });
        console.log(filteredMatch);
        setMatchArr(filteredMatch);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="chatpage">
      <h1 onClick={clickHandler}>Chat</h1>
      {matchArr.map((item) => (
        <div
          onClick={() => {
            clickHandler(item);
          }}
        >
          <SingleChat item={item} key={item.id} />
        </div>
      ))}
      {curMatch && <ChatModal curMatch={curMatch} setCurMatch={setCurMatch} />}
    </div>
  );
};

export default ChatPage;
