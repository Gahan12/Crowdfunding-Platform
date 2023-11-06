import React, { useState,useEffect } from "react";
import { ethers } from "ethers";

function Rewards({
  title,
  subheading,
  text,
  id,
  standsleft,
  handlePledgeSubmitted,
  state,
  address,
  setThanksModal,
  _id,
  eth
}) {
  const [radio, setRadio] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      '_id': _id,
      'eth': eth,
      'input': input
    });
  }, [input]);

  const handleInput = (e) => {
    if (e.target.value === "") {
      return;
    } else setInput(e.target.value);
  };

  const update = async () => {
        const response = await fetch("http://localhost:5000/update", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
  }

  const Transect = async (e) => {
    e.preventDefault();
    const { contract } =state;
    const amount = { value: ethers.utils.parseEther(input) };
    const transaction = await contract.transfer(address, amount);
    if (transaction) {
      setThanksModal(true);
      update();
    }
    else window.alert('Insufficient fund or transaction rejection');
  }

  return (
    <>
      <div className="rewards-holder" id={id}>
        <div>
          <div className="radio-title">
            <div className="radio-btn" onClick={() => setRadio(!radio)}>
              {radio && <div className="radio-active"></div>}
            </div>

            <div className="title">
              <p className="main-title">{title}</p>
              <p className="sub-title"> {subheading} </p>
            </div>
          </div>
          <div className="reward-paragraph">
            <p> {text} </p>
          </div>
          <p className="rewards-left">
            {standsleft}
            <span>left</span>
          </p>
        </div>
        <div className="reward-line"> </div>
        <div className={radio ? "active" : "pledge"}>
          <p className="enter-pledge">Enter your pledge</p>
          <form
            className="reward-input--continue"
            onSubmit={() => handlePledgeSubmitted(id, input)}
          >
            <input
              type="number"
              placeholder="$"
              onChange={handleInput}
              value={input}
            />
            <button disabled={input === "" ? true : false} onClick={Transect}>Continue</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Rewards;