import React, { useState } from "react";

export function NewScoreForm({ onSubmit }:any) {
  const [newPlayerName, setNewPlayerName]:[string,(a:string)=>void] = useState("");
  const [newPlayerScore, setNewPlayerScore]:[number,(a:number)=>void] = useState(0);

  function handleSubmit(e:any){
    e.preventDefault()
    onSubmit(newPlayerName,newPlayerScore);
    setNewPlayerName("")
    setNewPlayerScore(0)
    
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Player Name:</label>
            <input value={newPlayerName} onChange={e => setNewPlayerName(e.target.value)}
              type="text"
              id="name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="score">Player Score:</label>
            <input value={newPlayerScore} onChange={e => setNewPlayerScore(Number(e.target.value))}
              type="number"
              id="score"
            />
          </div>
          <button className="btn">Add Score</button>
        </form>
    </>
  );
}
