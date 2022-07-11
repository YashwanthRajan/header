import React from "react";
import ReactDOM from "react-dom";

export const Search = () => {
  return (
    <>
      <label>
        search:
        <input type="text" value={""} />{" "}
      </label>
      <input type="submit" value="Submit" />
      <div className="content">Content</div>
      <style jsx>
        {`
          .content {
            padding: 20px;
            background-color: aqua;
          }
          label {
            background-color: yellow;
            height: 10px;
          }
        `}
      </style>
    </>
  );
};
