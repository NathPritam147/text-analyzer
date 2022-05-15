import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Convert to UPPER CASE
  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success");
  };

  // Convert to lower case
  const convertToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  // const convertToSentenceCase = () => {
  //   console.log("convertToSentenceCase called");
  //   let newText = text
  //     .split(".")
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  //     .join(".");
  //   setText(newText.trim());
  // };

  // Convert to Title Case
  const convertToTitleCase = () => {
    let newText = text
      .split([" "])
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText.trim());
    props.showAlert("Converted to TitleCase", "success");
  };

  // clear textarea
  const clear = () => {
    setText("");
    props.showAlert("Cleared text area", "success");
  };

  // Copy text to clipboard
  const handleCopy = () => {
    let text1 = document.getElementById("my-text");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert("Copied to clipboard", "success");
  };

  // Remove extra spaces
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Count total number of words
  const wordCount = () => {
    let count = 0;
    text
      .split(" ")
      .filter((i) => i)
      .forEach((word) => {
        count++;
      });
    return count;
  };

  return (
    <>
      <div
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}>
        <div className="container my-3">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control my-3"
              style={{
                backgroundColor: props.mode === "dark" ? "#061019" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
              id="my-text"
              value={text}
              onChange={handleOnChange}
              rows="5"
              placeholder="Enter your text here"
            />
            <button className="btn btn-primary mx-1" onClick={clear}>
              Clear Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>
              Copy Text
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={convertToUpperCase}>
              Convert to UPPERCASE
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={convertToLowerCase}>
              Convert to lowercase
            </button>
            {/* <button className="btn btn-primary" onClick={convertToSentenceCase}>
            Convert to SentenceCase
          </button> */}
            <button
              className="btn btn-primary mx-1"
              onClick={convertToTitleCase}>
              Convert to Title Case
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={removeExtraSpaces}>
              Remove Extra Spaces
            </button>
          </div>
        </div>
        <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p className="text-sum">
            {wordCount()} words {text.length} characters. Time to read:{" "}
            {Math.round(wordCount() * 0.008)} minutes.
          </p>
        </div>
        <div className="container my-3">
          <h2>Preview</h2>
          <p className="text-prev">{text}</p>
        </div>
      </div>
    </>
  );
}
