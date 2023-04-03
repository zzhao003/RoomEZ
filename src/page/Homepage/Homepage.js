import HomeProfile from "../../component/HomeProfile/HomeProfile";
import "./homepage.scss";

const dummy = [
  {
    id: 1,
    first_name: "James",
    last_name: "Chen",
    age: 27,
    gender: "Male",
    race: "white",
    work: "writer",
    budegt: 2000,
    interest: ["soho", "LES"],
    pet: false,
    move: "date string",
    about:
      "Very easy going, clean, and works in an office 5 days a week! I work in fashion so I’m always down to hit up thrift stores, also a big foodie so always trying new restaurants in the city! I am also very independent and love alone time as well.",
  },
];

const Homepage = () => {
  return <HomeProfile />;
};

export default Homepage;
