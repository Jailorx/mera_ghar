import React from "react";

const Card = ({ title, content }) => {
  return (
    <article className="flex flex-col w-64 h-40 items-center justify-center p-4 shadow-xl rounded-md hover:scale-110 bg-primary-custom-indigo-100">
      <h1 className="font-bold text-4xl text-primary-custom-indigo-600">
        {title}
      </h1>
      <p className="text-xl">{content}</p>
    </article>
  );
};

export default Card;
