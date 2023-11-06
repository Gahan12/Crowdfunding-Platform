import React from "react";

function RewardStands({
  title,
  subheading,
  text,
  standsleft,
  openModalFn,
  id,
}) {
  return (
    <div id="reward-stand">
      <p className="reward-heading">{title}</p>

      <p className="reward-subheading">{subheading}</p>

      <p className="reward-paragraph">{text}</p>

      <p className="reward-left">
        {standsleft}
        <span>left</span>
      </p>

      <button className="select-reward" onClick={openModalFn}>
        <a href={ `#${id}`}> Select Reward</a>
      </button>
    </div>
  );
}

export default RewardStands;