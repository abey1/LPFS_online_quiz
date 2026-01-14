import React from "react";
import data from "../../data/data";
import SingleCategory from "../../components/single_item/SingleCategory";
import BackButton from "../../components/back_button/BackButton";

const Categories = () => {
  return (
    <div className="flex flex-col  w-full h-full justify-center items-center min-h-screen ">
      <BackButton />

      <h1 className="text-4xl font-bold">Categories</h1>
      <hr className="my-4 " />
      {Object.keys(data).map((categoryKey) => (
        <SingleCategory
          key={categoryKey}
          prop={{ ...data[categoryKey], categoryKey }}
        />
      ))}
    </div>
  );
};

export default Categories;
