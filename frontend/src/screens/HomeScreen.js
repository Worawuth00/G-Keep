import React, { useEffect } from "react";
import Keep from "../components/Keep";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { getKeeps } from "../actions/keepAction";
import Navbar from "../components/Navbar";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const keepList = useSelector((state) => state.keepList);
  const keepfilter = useSelector((state) => state.keepfilter);

  if (keepfilter) {
    var keep = keepList.filter((k) => k.tag === keepfilter);
  } else {
    keep = keepList;
  }

  useEffect(() => {
    dispatch(getKeeps());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Form />

      <div className="keep-center container">
        {keep.map((keep) => {
          return <Keep key={keep._id} {...keep} />;
        })}
      </div>
    </>
  );
};

export default HomeScreen;
