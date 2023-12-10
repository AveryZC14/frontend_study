import React, { useState } from "react";

export function NewScoreForm({ onSubmit }: any = (a:any,b:any) => {}): any {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerScore, setNewPlayerScore] = useState(0);

  function handleSubmit(e:any){
    e.preventDefault()
    if (onsubmit != null){
        onsubmit(newPlayerName);
    }
    
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
