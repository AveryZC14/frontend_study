import { useState } from "react";

export function ScoreItem({
  id,
  name,
  scoreNum,
  scoreRank,
  deleteScore,
  editScore,
}: any): any {
  // console.log(id,name,scoreNum)
  const [showEdit,setShowEdit]:[Boolean,any] = useState(false);
  const [newScore,setNewScore]:[number,any] = useState(scoreNum);

  function editToggle(){
    setShowEdit(!showEdit)
  }

  function renderEdit(){
    if (showEdit){
      return(
        <>
        <button className="cancel-edit-score" onClick={editToggle} >Cancel</button>
        <form onSubmit={()=>editScore(id,newScore)} style={{display:"inline"}}>
          <label htmlFor="new-score">New Score:</label>
          <input type="number" value = {newScore} name="newScore" id="new-score" onChange={(e) => setNewScore(e.target.value)} size={10} />
          <button type="submit">Update Score</button>
        </form>
        </>
      )
    }else{
      return (<button className="edit-score" onClick={editToggle}>Edit Score</button>)
    }
  }

  return (
    <tr>
      <td>{scoreRank}</td>
      <td>{name}</td>
      <td>{scoreNum}</td>
      <td>
        <button className="Delete-score" onClick={()=>deleteScore(id)}>
          Delete Score
        </button>
      </td>
      <td>
        {renderEdit()}
        {/* <button className="edit-score">Edit Score</button>
        <form onSubmit={editScore}>
          <label htmlFor="new-score">New Score:</label>
          <input type="number" name="newScore" id="new-score" />
          <button type="submit">Update Score</button>
        </form> */}
      </td>
    </tr>
  );
}
