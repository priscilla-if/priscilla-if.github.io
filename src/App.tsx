import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Intro from "./components/Intro";
import ProjectCard from "./components/ProjectCard";
import ProjectsList from "./components/ProjectsList";
import Japanese from "./components/Japanese";
import JapaneseIntro from "./components/JapaneseIntro";

function App() {
  return (
      <html data-theme="valentine">
    <div className="App">
      <Navbar></Navbar>
        <Intro/>
      <div>      <ProjectsList/>
      </div>
      <div>
        <Japanese/>
        <JapaneseIntro/>
      </div>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <div className="text-3xl">Oh baby baby feed me</div>*/}
        {/*  <div className="text-xl">meow meow meow meow meow...</div>*/}
        {/*<p>*/}

        {/*  Edit <code>src/App.tsx</code> and save to.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
      </html>
  );
}

export default App;
