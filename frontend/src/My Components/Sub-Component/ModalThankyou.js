import React from "react";
import { motion } from "framer-motion";

function ModalThankyou({ thanksModal, setThanksModal }) {
  return (
    thanksModal && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`modal ${thanksModal ? "modal-overlay" : ""}`}
      >
        <div className="modal-container">
          <div className="modal-inner">
            <div className="check">
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
                  <path
                    stroke="#FFF"
                    stroke-width="5"
                    d="M20 31.86L28.093 40 44 24"
                  />
                </g>
              </svg>
            </div>

            <h3>Thank you for your support</h3>

            <p>
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign in completed
            </p>

            <button onClick={() => setThanksModal(false)}>Got it</button>
          </div>
        </div>
      </motion.div>
    )
  );
}

export default ModalThankyou;