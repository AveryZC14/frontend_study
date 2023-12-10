import { ScoreItem } from "./ScoreItem";

export function ScoreTable({ scores, deleteScore, editScore }:any): any {
  return (
    <table className="list">
      <tr>
        <th>rank</th>
        <th>Name</th>
        <th>Score</th>
        <th></th>
      </tr>
    {scores.map((score:any) => 
        {return (<ScoreItem {...score} key={score.id} deleteScore={deleteScore} editScore={editScore} />)} 
    )}
    

      
    </table>
  );
}
