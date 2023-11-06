import React from "react";

function ModalRewards() {
  return (
    <div className="reward-container">
      <Rewards
        heading="Pledge with no reward"
        subtitle=""
        paragraph="Choose to support us without a reward if you simply believe in our project. As a backer, 
                you will be signed up to receive product updates via email."
        RewardsLeft={bambooEdition}
        id="noPledge"
      />
      <Rewards
        heading="Bamboo Stand"
        subtitle=" Pledge $25 or more"
        paragraph=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                you’ll be added to a special Backer member list."
        RewardsLeft={bambooEdition}
        id="bamboo"
      />
      <Rewards
        heading="Black Edition Stand"
        subtitle="Pledge $75 or more"
        paragraph=" You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                member list. Shipping is included."
        RewardsLeft={bambooEdition}
        id="black"
      />
      <Rewards
        heading="Mahogany Special Edition"
        subtitle="Pledge $200 or more"
        paragraph="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                to our Backer member list. Shipping is included."
        RewardsLeft={bambooEdition}
        id="mahogany"
      />
    </div>
  );
}

export default ModalRewards;