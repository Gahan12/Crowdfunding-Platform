import { nanoid } from "nanoid";

const RewardData = [
  {
    title: "Reward 1",
    subheading: "Pledge $25 or more",
    text: "You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    standsleft: 101,
    id: nanoid(),
    pledge: 0,
    radio: false,
  },
  {
    title: "Reward 2",
    subheading: "Pledge $75 or more",
    text: "You’ll be added to our Backer member list. Shipping is included.",
    standsleft: 64,
    id: nanoid(),
    pledge: 0,
    radio: false,
  },
  {
    title: "Reward 3",
    subheading: "Pledge $200 or more",
    text: "You’ll be added to our Backer member list. Shipping is included.",
    standsleft: 30,
    id: nanoid(),
    pledge: 0,
    radio: false,
  },
];

export default RewardData;