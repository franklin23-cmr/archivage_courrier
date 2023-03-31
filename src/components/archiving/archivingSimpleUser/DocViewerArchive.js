import React from 'react'
import { useRecordContext } from 'react-admin'
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const DocViewerArchive = () => {
  const record = useRecordContext()
  console.log("all the context", record)
  if(!record) return null

  const tabs = record.piece_jointe
  const docs = [];
    tabs.forEach(element => {
        console.log("path element is defined",element.path)
        const uriLoad = {
          uri : element.path
        }
        docs.push(uriLoad)
    });
  console.log("all the uri docs" , docs);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    {/* <DocViewer
      documents={docs}
      initialActiveDocument={docs[1]}
      pluginRenderers={DocViewerRenderers}
      theme={{
        primary: "#5296d8",
        // secondary: "#ffffff",
        // tertiary: "#5296d899",
        // text_primary: "#ffffff",
        // text_secondary: "#5296d8",
        text_tertiary: "#00000099",
        // disableThemeScrollbar: false,
      }}
      config={{
        noRenderer: {
          overrideComponent: ({ document, fileName }) => {
            const fileText = fileName || document?.fileType || "";
            console.log(document);
            if (fileText) {
              return <div>no renderer for {fileText}</div>;
            }
            return <div>no renderer</div>;
          },
        },
        loadingRenderer: {
          overrideComponent: ({ document, fileName }) => {
            const fileText = fileName || document?.fileType || "";
            if (fileText) {
              return <div>loading ({fileText})</div>;
            }
            return <div>loading</div>;
          },
        },
        csvDelimiter: ",",
        pdfZoom: {
          defaultZoom: 1.1,
          zoomJump: 0.2,
        },
      }}
      language="pl"
    /> */}
    </div> 
  )
}
export default DocViewerArchive