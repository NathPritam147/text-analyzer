import React from "react";

export default function About(props) {
  return (
    <div className="container"  style={{
        color: props.mode === "light" ? "black" : "white",
      }}>
      <h1 className="my-3">About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        repudiandae eum rem dicta architecto culpa aliquam unde consequatur,
        impedit consequuntur harum labore ullam voluptatem velit aut aspernatur
        atque quisquam obcaecati.
      </p>
    </div>
  );
}
