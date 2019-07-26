import React from "react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  let info = {
    name: "Andrew Merrill",
    repo: "https://github.com/ALMerrill/PersonalSite"
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Andrew</h1>
        <p>
          Hi - this is the start of my personal site. It is automatically
          deployed to an AWS S3 bucket each time I commit new code to GitHub.
          This deployment if performed by a webhook to AWS CodePipeline that
          grabs the updated code, builds it using CodeBuild, and deploys it with
          an automatic AWS cli command. I'll be adding more information about
          myself now that I have most of the pipeline set up.
        </p>
      </header>
      <Footer personalInfo={info} />
    </div>
  );
}

export default App;
