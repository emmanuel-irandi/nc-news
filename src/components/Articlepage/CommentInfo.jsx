function CommentInfo ({comment}){
    return (
      <div key={comment.comment_id}>
      <br/>
      <h3>{comment.title}</h3>
      <br/>
      {comment.author}
      <br/>
      {comment.body}
      {comment.created_at}
      <br/>
      {comment.votes}
    </div>
    )
  }

export default CommentInfo