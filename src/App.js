import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Email from './components/Email';
import Nav from './components/Nav';
import Icon from './components/Icon';

function App() {
  return (
    <div className="App">
      <Nav />
      <Email
        letter="R"
        name="reenaishtiaq"
        subj="Re: [reenaishtiaq/githu..."
        text="Merged #1 into master. You a..."
        color="lightgrey"
      />

      <Email
        letter="T"
        name="Talha Hussain"
        subj="Seriously.."
        text="Hello please help me i am a stud..."
        color="lightgreen"
      />

      <Email
        letter="T"
        name="me, Tuba 2"
        subj="Leave Application"
        text="Get well soon. On Thu, Sep 19,2..."
        color="pink"
      />

      <Email
        letter="K"
        name="Khansa Saeed"
        subj="WaiCamp Confirmation + Remi..."
        text="Dear Participant! We are happy t..."
        color="lightblue"
      />

      <Email
        letter="K"
        name="Khansa, me 2"
        subj="***Pending WaiCamp Confirmation"
        text="Dear Miss, Thanks for your email..."
        color="lightblue"
      />

      <Icon
        symbol="+"
      />
    </div>
  );
}

export default App;
