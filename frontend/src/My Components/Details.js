import { useState, useEffect } from "react";
import "./App1.css";
import Banner from "./Sub-Component/Banner";
import Rewards from "./Sub-Component/Rewards";
import RewardStands from "./Sub-Component/RewardStands";
import RewardData from "./Sub-Component/RewardData";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import ModalThankyou from "./Sub-Component/ModalThankyou";
import { useLocation } from "react-router-dom";

function Details(props) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  let [contribution, setContribution] = useState(53000);
  let [backers, setBackers] = useState(5007);
  const [daysLeft, setDaysLeft] = useState(56);
  const [successWidth, setSuccessWidth] = useState(contribution);
  const [openModal, setOpenModal] = useState(null);
  const [rewardData, setRewardData] = useState(RewardData);
  const [radio, setRadio] = useState(false);
  const [thanksModal, setThanksModal] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const location = useLocation();

  const user = location.state?.user;

  useEffect(() => {
    if (props.data.name) {
      props.connect(user.address);
    }
    else {
      window.location.pathname = '/login';
    }
  }, []);

  //function to handle pledge submitted and update the rewardsData array

  const handlePledgeSubmitted = (ids, input) => {
    const newRewardData = rewardData.map((item) => {
      let newStandsLeft = item.standsleft;
      let newPledge = parseInt(input);

      if (item.id === ids) {
        newStandsLeft = newStandsLeft - 1;

        return {
          ...item,
          standsleft: newStandsLeft,
          pledge: parseInt(item.pledge) + newPledge,
        };
      }
      return item;
    });

    setRewardData(newRewardData);

    setBackers(() => {
      return backers++;
    });

    setOpenModal(null);
    setThanksModal(true);
  };

  //Open mobile nav menu function
  const openMenu = () => {
    setOpenMobileMenu((current) => !current);
  };

  //Open modal function
  const openModalFn = () => {
    setOpenModal(true);
  };

  //Close modal btn function
  const closeModalIcon = () => {
    setOpenModal(null);
  };

  //Close modal on tap outside modal fn
  const closeModalOnTap = () => {
    if (openModal) {
      setOpenModal(null);
    }
  };

  //update width for success bar

  useEffect(() => {
    setSuccessWidth(() => `${(contribution / 100000) * 100}%`);
  }, [contribution]);

  //update contribution with new pledge

  useEffect(() => {
    const newContribution = rewardData.reduce(
      (total, obj) => obj.pledge + total,
      contribution,
    );

    setContribution(newContribution);
  }, [backers]);

  //style for the success bar
  const successBarStyle = {
    backgroundColor: "hsl(176, 50%, 47%)",
    height: "12px",
    borderRadius: "20px",
    width: successWidth,
    maxWidth: "280px",
  };

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <div id="Details">
      <main
        id="main"
        className={`${openMobileMenu ? "overlay" : ""} `}
        onClick={() => (openMobileMenu ? setOpenMobileMenu(false) : "")}
      >
        <div onClick={closeModalOnTap}>
          <Banner
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
            openMenu={openMenu}
          />
          <div className="project-card">
            <div className="project-card-container">
              <div className="card-holder">
                <div className="icon">
                  <img src={user.image} alt="img not found" />
                </div>

                <div className="card-info">
                  <h3 className="heading">{user.title}</h3>

                  <p className="paragraph">
                    {user.description}
                  </p>

                  <div className="buttons">
                    <button className="back-project" onClick={openModalFn}>
                      Fund this project
                    </button>

                    <button className="bookmark" onClick={handleBookmark}>
                      <svg
                        width="56"
                        height="56"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <circle
                            fill={bookmark ? "hsl(176, 50%, 47%)" : "#2F2F2F"}
                            cx="28"
                            cy="28"
                            r="28"
                          />
                          <path
                            fill={bookmark ? "white" : "#B1B1B1"}
                            d="M23 19v18l5-5.058L33 37V19z"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card">
            <div className="data-card">
              <div className="datacard-container">
                <div className="datacard-heading-paragraphh">
                  <h3 className="heading">{contribution}</h3>
                  <p className="paragraph">of $100,000 backed</p>
                  <div className="bottom-line"></div>
                </div>
                <div className="datacard-heading-paragraphh">
                  <h3 className="heading">{backers}</h3>
                  <p className="paragraph">total backers</p>
                  <div className="bottom-line"></div>
                </div>
                <div className="datacard-heading-paragraphh">
                  <h3 className="heading">{user.date}</h3>
                  <p className="paragraph">days left</p>
                  <div className="bottom-line"></div>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-container">
                  <div className="success-bar" style={successBarStyle}></div>
                </div>
              </div>
            </div>

            <div className="about-project">
              <div className="about-project-container">
                <p className="about-heading">About this project</p>

                <div className="about-paragraph">
                  <p>
                    {user.story}
                  </p>
                </div>
              </div>
              <div className="rewards-container">
                {rewardData.map((item) => {
                  const { title, subheading, text, standsleft, id } = item;
                  return (
                    <RewardStands
                      key={nanoid()}
                      title={title}
                      subheading={subheading}
                      text={text}
                      id={id}
                      standsleft={standsleft}
                      openModalFn={openModalFn}
                      setOpenModal={setOpenModal}
                      openModal={openModal}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-container">
          {openModal && (
            <>
              <div className="modal-backdrop" onClick={closeModalIcon}></div>
              <motion.div
                id="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={` modal ${openModal ? "modal-overlay" : ""}`}
              >
                <div className="modal-container">
                  <div className="modal-title-btn">
                    <p className="modal-title">Back this project</p>
                    <svg
                      width="15"
                      height="15"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={closeModalIcon}
                    >
                      <path
                        d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                        fill="#000"
                        fillRule="evenodd"
                        opacity=".4"
                      />
                    </svg>
                  </div>
                  <p className="text">
                    Want to support us in bringing Mastercraft Bamboo Monitor
                    Riser out in the world?
                  </p>

                  <div className="reward-container">
                    <div>
                      <div className="rewards-holder">
                        <div className="radio-title">
                          <div className="radio-btn">
                            <div className="radio-active"></div>
                          </div>

                          <div className="title">
                            <p className="main-title">Pledge with no reward</p>
                            <p className="sub-title"> </p>
                          </div>
                        </div>
                        <div className="reward-paragraph">
                          <p>
                            Choose to support us without a reward if you simply
                            believe in our project. As a backer, you will be
                            signed up to receive product updates via email.
                          </p>
                        </div>
                      </div>
                    </div>
                    {rewardData.map((item) => {
                      const { title, subheading, text, standsleft, id } = item;
                      return (
                        <Rewards
                          key={nanoid()}
                          title={title}
                          subheading={subheading}
                          text={text}
                          id={id}
                          standsleft={standsleft}
                          openModalFn={openModalFn}
                          setOpenModal={setOpenModal}
                          openModal={openModal}
                          radio={radio}
                          setRadio={setRadio}
                          rewardData={rewardData}
                          setRewardData={setRewardData}
                          handlePledgeSubmitted={handlePledgeSubmitted}
                          state={props.state}
                          address={user.address}
                          setThanksModal={setThanksModal}
                          _id={user._id}
                          eth={user.eth}
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>

        {
          <ModalThankyou
            thanksModal={thanksModal}
            setThanksModal={setThanksModal}
          />
        }
      </main>
    </div>
  );
}

export default Details;