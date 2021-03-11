import React from "react";
import { useDispatch } from "react-redux";
import { currentKeep, deleteKeep } from "../actions/keepAction";

const Keep = ({ _id, title, message, tag, file }) => {
  const dispatch = useDispatch();

  const deleteKeepHandle = (id) => {
    dispatch(deleteKeep(id));
  };

  const updateKeepHandle = (id) => {
    dispatch(currentKeep(id));
  };

  return (
    <div className="keep-card">
      {file ? (
        <img src={file} alt="title" />
      ) : (
        <img src="/no-img.jpg" alt="title" />
      )}
      <div className="keep-title">
        <h3>{title}</h3>
      </div>
      <div className="keep-message">
        <textarea defaultValue={message}></textarea>
      </div>
      <div className="keep-footer">
        <h4>
          <i className="fas fa-tags"></i>
          {tag}
        </h4>
        <div className="keep-btn">
          <button onClick={() => updateKeepHandle(_id)}>
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={() => deleteKeepHandle(_id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keep;
