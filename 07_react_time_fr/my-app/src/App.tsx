import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewScoreForm } from "./NewScoreForm";
import { ScoreTable } from "./ScoreTable";

function App() {
  const [scores, setScores]:[object[],any] = useState([]);

  function addScore(name: string, scoreNum: number) {
    setScores((currentScores:any) => {
      return [...currentScores, { id: crypto.randomUUID(), name, scoreNum }];
    });
  }
  function deleteScore(id:string) {
    setScores((currentScores:any) => {
      return currentScores.filter((score:any) => score.id !== id)
    })
  }
  function editScore() {}
  return (
    <>
      {/* <NewScoreForm />
    <h1>ScoreBoard</h1>
    <ScoreList/> */}
      <NewScoreForm onSubmit={addScore} />
      <h1>ScoreBoard</h1>
      <ScoreTable
        scores={scores}
        deleteScore={deleteScore}
        editScore={editScore}
      />
    </>
  );
}

export default App;
