import { useState } from "react";
import avatar from "../components/images/avatar.webp";
import "./style/topbar.css";
import CreatePost from "./createpost";

const TopBar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="left-section">
        <h1>Vist Me<span className="span"> Daily</span>.</h1>
        </div>
        <div className="middle-section">
          <input type="text" className="search-bar" placeholder="search" />
          <button className="search-btn">
            <iconify-icon icon="ion:search-outline"></iconify-icon>
          </button>
          <div
            className="newpost-btn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            New post
            <span className="plus-icon">
              <iconify-icon icon="icons8:plus"></iconify-icon>
            </span>
          </div>
        </div>
      </div>
      {openModal && <CreatePost closeModal={setOpenModal} />}
    </>
  );
};
export default TopBar;
