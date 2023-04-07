import "./homepage.scss";
import HomeProfile from "../../component/HomeProfile/HomeProfile";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dummy = {
  id: "1",
  img_url:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  first_name: "James",
  last_name: "Chen",
  age: "27",
  gender: "Male",
  profession: "writer",
  budegt: "2000",
  area: "soho",
  pet: "false",
  movein_date: "date string",
  about:
    "Very easy going, clean, and professions in an office 5 days a week! I profession in fashion so I’m always down to hit up thrift stores, also a big foodie so always trying new restaurants in the city! I am also very independent and love alone time as well.",
};

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      return navigate("/login");
    } else {
      axios
        .get("http://localhost:8080/api/user")
        .then((res) => {
          // console.log(res.data);
          dispatch(userActions.GET_USER_SUCCESS(res.data));
        })
        .catch((err) => {
          // console.log(err);
          dispatch(userActions.GET_USER_FAILED(err));
        });
    }
  }, [dispatch]);

  return (
    <>
      {loading ? (
        "LOADING>>>"
      ) : error ? (
        `ERROR!!! ${error}`
      ) : (
        <HomeProfile user={user} />
      )}
    </>
  );
};

export default Homepage;
