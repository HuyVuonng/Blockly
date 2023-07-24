import { useState, useCallback } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import ConfigFiles from "./initContent/content";
import "./App.css";

function App() {
  // const [toolboxConfiguration, setToolboxConfiguration] = useState(
  //   ConfigFiles.INITIAL_TOOLBOX_JSON
  // );
  const [generatedCode, setGeneratedCode] = useState("");

  const onWorkspaceChange = useCallback((workspace) => {
    workspace.registerButtonCallback("myFirstButtonPressed", () => {
      alert("button is pressed");
    });
    const code = javascriptGenerator.workspaceToCode(workspace);
    setGeneratedCode(code);
  }, []);

  const runcode = () => {
    const splitCode = generatedCode.split("\n");
    for (let i = 0; i < splitCode.length; i++) {
      try {
        eval(JSON.parse(splitCode[i]).Start);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div
      className="App"
      style={{ width: "90vw", display: "flex", alignItems: "center" }}
    >
      <div style={{ width: "80%" }}>
        <button onClick={runcode}>Run code</button>
        <div style={{ height: "600px", width: "100%" }}>
          <BlocklyWorkspace
            toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON}
            workspaceConfiguration={{
              grid: {
                spacing: 20,
                length: 3,
                colour: "#ccc",
                snap: true,
              },
            }}
            initialXml={ConfigFiles.INITIAL_XML}
            className="fill-height"
            onWorkspaceChange={onWorkspaceChange}
          />
        </div>
      </div>
      <textarea
        style={{ height: "200px", width: "20%" }}
        value={generatedCode}
        readOnly
      />
    </div>
  );
}

export default App;
