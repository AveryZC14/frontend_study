import { ScoreItem } from "./ScoreItem";

export function ScoreTable({ scores, deleteScore, editScore }:any): any {
  let rankCount:number = 0
  return (
    <table className="list">
      <tbody>
        <tr>
          <th>rank</th>
          <th>Name</th>
          <th>Score</th>
          <th></th>
        </tr>
            {scores.map((score:{id:string,name:string,scoreNum:number}) =>
          {rankCount++;
            return (<ScoreItem {...score} key={score.id} scoreRank ={rankCount} deleteScore={deleteScore} editScore={editScore} />)} 
            )}
      </tbody>

      
    </table>
  );
}
