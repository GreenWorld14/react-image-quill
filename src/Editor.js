import { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./styles.css";

/*
 * Simple editor component that takes placeholder text as a prop
 */
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    console.log(html);
  }

  render() {
    return (
      <div
        class="editor_view"
        style="display: flex; justify-content: space-around"
      >
        <div id="quill_container">
          <ReactQuill
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={"#quill_container"}
            placeholder={this.props.placeholder}
          />
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

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "color", "background"],
  ],
  // clipboard: {
  //   matchVisual: false,
  // },
  // imageResize: {
  //   parchment: Quill.import("parchment"),
  //   modules: ["Resize", "DisplaySize"],
  // },
};
Editor.formats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "image",
  "background",
];

// Editor.modules = {
//   toolbar: [
//     [{ font: [] }],
//     [{ header: '1' }, { header: '2' }, { font: [] }],
//     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//     [
//       { list: 'ordered' },
//       { list: 'bullet' },
//       { indent: '-1' },
//       { indent: '+1' }
//     ],
//     ['link', 'image', 'video'],
//     ["image"],
//     ["clean"],
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
//   imageResize: {
//     parchment: Quill.import("parchment"),
//     modules: ["Resize", "DisplaySize"],
//   },
// };

// /*
//  * Quill editor formats
//  * See https://quilljs.com/docs/formats/
//  */
// Editor.formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "video",
// ];

export default Editor;
