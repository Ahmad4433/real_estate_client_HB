import React, { useState } from "react";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins/lists.min.js";
import "font-awesome/css/font-awesome.css";
import "froala-editor/js/third_party/font_awesome.min.js";
import "froala-editor/js/plugins/table.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import "froala-editor/js/plugins/font_size.min.js";


const TextEditor = ({ data, setData }) => {
  return (
    <div>
      <FroalaEditor
        config={{
          height: 200, // Set the height of the editor
          heightMax: 600,
        }}
        model={data}
        onModelChange={(event) => setData(event)}
        tag="textarea"
      />
    </div>
  );
};

export default TextEditor;
