import { Component } from "react";

import Editor from "./Editor";

import "./styles.css";

class Quill_container extends Component {
  render() {
    return (
      <div
        class="editor_view"
        style="display: flex; justify-content: space-around"
      >
        <div id="quill_container">
          <Editor />
        </div>
        <div
          id="canvas_container"
          style="border: 1px solid slategrey; background-color: white"
        >
          <canvas id="canvas" width="450px" height="640px"></canvas>
        </div>
      </div>
    );
  }
}

export default Quill_container;
