import React, { useState } from 'react'
import './comments.css'
import DisplayComments from './DisplayComments';
function Comments() {
    const [commentText, setCommentText]= useState("")

    const commentsList=[
      {
        _id:"1",
       commentBody:"hello",
       userCommented:"abc"
    },{
      _id:"2",
    commentBody:"hiii",
    userCommented:"xyz"
 }
    ]
    const hanleOnSubmit=(e)=>{
         e.preventDefault(); 
    }
  return (
    <>
    <form className='comments_sub_from_comments'
    onSubmit={hanleOnSubmit}>
        <input type='text'
        onChange={e=>setCommentText(e.target.value)}
        placeholder='add_comment...'
        className='comment_ibox'
        />
        <input type="submit" value="add" className='comments_add_btn_comments' />
    </form>
      <div className='display_comment_container'>
        {
            commentsList.map(m=>{
                return (
                    <DisplayComments
                    cId={m._id}
                    commentBody={m.commentBody}
                    userCommented={m.userCommented}
                    />
                )
            })
        }
        <DisplayComments/>
      </div>
    </>
  )
}

export default Comments
