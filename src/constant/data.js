import { Check, Error } from "../components/common/svg-components";

export const navData = [
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Register",
    link: "/register",
  },
];

export const success = {
  id: 1,
  title: "Success",
  crossColor: "#02BF90",
  icon: <Check />,
};

export const failure = {
  id: 2,
  title: "Danger",
  crossColor: "#B11313",
  icon: <Error />,
};

export const categories = [
  {
    name: "Sport",
    _id: "661267921e576b150a4bdd05",
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2",
  },

  {
    name: "Music",
    _id: "661267921e576b150a4bdd05",
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2",
  },
  {
    name: "Food",
    _id: "66127786498a3682011d6090",
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2",
  },
];
