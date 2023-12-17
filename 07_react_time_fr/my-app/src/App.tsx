import React, { useEffect, useState } from "react";
import "./App.css";
import { NewScoreForm } from "./NewScoreForm";
import { ScoreTable } from "./ScoreTable";

interface Score {
  id: string;
  name: string;
  scoreNum: number;
}

function App() {
  const [scores, setScores]: [Score[], any] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(scores));
  }, [scores]);

  // function addScore(name: string, scoreNum: number) {
  function addScore(name: string, scoreNum: any): void {
    setScores((currentScores: Score[]): Score[] => {
      console.log("new one" + name + scoreNum);
      let newScores:Score[] = [...currentScores, { id: crypto.randomUUID(), name, scoreNum }]
      newScores.sort((a,b)=>(b.scoreNum-a.scoreNum))
      return newScores;
    });
  }
  function deleteScore(id: string) {
    setScores((currentScores: any): void => {
      return currentScores.filter((score: Score) => score.id !== id);
    });
  }
  function editScore(id: string, newScore: number) {
    setScores((currentScores: Score[]) => {
      //let newScores = []
      let newScores:any = currentScores.map((userScore: Score) => {
        if (userScore.id === id) {
          userScore.scoreNum = newScore;
        }
        return userScore;
      });
      newScores.sort((a:any,b:any)=>(b.scoreNum-a.scoreNum))
      return newScores
    });
  }
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
