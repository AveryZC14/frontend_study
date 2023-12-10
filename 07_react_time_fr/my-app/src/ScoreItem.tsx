export function ScoreItem({
  id,
  name,
  scoreNum,
  deleteScore,
  editScore,
}: any): any {
  return (
    <tr>
      <td>1</td>
      <td>{name}</td>
      <td>{scoreNum}</td>
      <td>
        <button className="Delete-score" formAction={deleteScore}>
          Delete Score
        </button>
      </td>
      <td>
        <button className="edit-score">Edit Score</button>
        <form onSubmit={editScore}>
          <label htmlFor="new-score">New Score:</label>
          <input type="number" name="newScore" id="new-score" />
          <button type="submit">Update Score</button>
        </form>
      </td>
    </tr>
  );
}
