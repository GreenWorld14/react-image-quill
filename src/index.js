import { Fragment, StrictMode } from "react";
import ReactDOM from "react-dom";

// import Editor from "./EditorWithUseQuill";
// import Editor from "./Editor";
import Quill_container from "./Container";

ReactDOM.render(
  // <Fragment>
  //   <div
  //     class="editor_view"
  //     style="display: flex; justify-content: space-around"
  //   >
  //     <div id="quill_container">
  <StrictMode>
    {/* <Editor placeholder={"Write something..."} /> */}
    <Quill_container />
  </StrictMode>,
  /* </div>
      <div
        id="canvas_container"
        style="border: 1px solid slategrey; background-color: white"
      >
        <canvas id="canvas" width="450px" height="640px"></canvas>
      </div>
    </div>
  </Fragment>, */
  document.getElementById("root")
);
