import React from "react";

export default function Alert(props) {
  // Capitalize first letter of the alert type
  const getType = (element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{getType(props.alert.type)}</strong>: {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"></button>
      </div>
    )
  );
}
