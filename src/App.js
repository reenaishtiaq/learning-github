import React from 'react';
import logo from './logo.svg';
import './App.css';
import email from './components/email';

function App() {
  return (
    <div className="App">
      <email 
        letter="R" 
        name="reenaishtiaq" 
        subj="Re: [reenaishtiaq/githu..."
        text="Merged #1 into master. You a..."/>
      
      <email 
        letter="T" 
        name="Talha Hussain" 
        subj="Seriously.." 
        text="Hello please help me i am a stud..."/>
      
      <email 
        letter="T" 
        name="me, Tuba 2" 
        subj="Leave Application" 
        text="Get well soon. On Thu, Sep 19,2..."/>
      
      <email 
        letter="K" 
        name="Khansa Saeed" 
        subj="WaiCamp Confirmation + Remi..." 
        text="Dear Participant! We are happy t..."/>
      
      <email 
        letter="K" 
        name="Khansa, me 2" 
        subj="***Pending WaiCamp Confirmation" 
        text="Dear Miss, Thanks for your email..."/>
    </div>
  );
}

export default App;
