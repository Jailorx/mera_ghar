import React from "react";
import Card from "./Card/Card";

const HomePage = () => {
  return (
    <main className="flex flex-col w-full p-10">
      <section>
        <h1 className="font-bold  text-primary-custom-indigo-700 text-5xl leading-snug">
          Find your dream home
        </h1>
        <p className="mt-4 text-3xl leading-normal">
          Your go-to hub for effortlessly buying, selling, or renting homes and
          flats. Experience real estate made easy, fast, and reliable!"
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-5 p-5 w-full justify-center items-center">
        <Card title="5000+" content="Verified Customers" />
        <Card title="5+" content="Years of Experience" />
        <Card title="1000+" content="Satisfied customers" />
      </section>
    </main>
  );
};

export default HomePage;
