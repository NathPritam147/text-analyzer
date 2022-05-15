import React from "react";

export default function Contact(props) {
  return (
    <div
      className="container"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}>
      <h1 className="my-3">Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        necessitatibus, est dolorum numquam qui ut excepturi cum vel esse
        molestiae harum vero nulla ipsum quidem. Odio debitis aspernatur animi
        distinctio?
      </p>
    </div>
  );
}
