import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createKeep, currentKeep, updateKeep } from "../actions/keepAction";

const Form = () => {
  const dispatch = useDispatch();
  const [keepData, setKeepData] = useState({
    title: "",
    message: "",
    tag: "",
    file: "",
  });

  const keepList = useSelector((state) => state.keepList);
  const keepCurrent = useSelector((state) => state.keepCurrent);
  const keep = keepList.find((k) => k._id === keepCurrent);

  console.log(keepList);

  useEffect(() => {
    if (keep) {
      setKeepData(keep);
    }
  }, [keep]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keepCurrent) {
      dispatch(updateKeep(keepCurrent, keepData));
      dispatch(currentKeep(""))
      clear();
    } else {
      if (keepData.title) {
        dispatch(createKeep(keepData));
        clear();
      }
    }
  };

  const clear = () => {
    setKeepData({
      title: "",
      message: "",
      tag: "",
      file: "",
    });
  };

  return (
    <div className="form container">
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          className="title"
          name="title"
          type="text"
          placeholder="Title"
          value={keepData.title}
          onChange={(e) => setKeepData({ ...keepData, title: e.target.value })}
        />

        <textarea
          name="message"
          placeholder="Teke a note..."
          value={keepData.message}
          onChange={(e) =>
            setKeepData({ ...keepData, message: e.target.value })
          }
        ></textarea>
        <input
          className="tag"
          name="tag"
          type="text"
          placeholder="Tag ( For example work, personal )"
          value={keepData.tag}
          onChange={(e) => setKeepData({ ...keepData, tag: e.target.value })}
        />
        <span>
          <i className="fas fa-image"></i>
        </span>
        <FileBase
          type="file"
          multiple={false}
          className="upload-img"
          onDone={({ base64 }) => setKeepData({ ...keepData, file: base64 })}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
