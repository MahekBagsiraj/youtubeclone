import React, { useState } from 'react'
import './comments.css'
function DisplayComments({cId,commentBody,userCommented}) {
    const [Edit, setEdit]= useState(false);
    const [cmtBdy, setcmtBdy]= useState("");

    const handleEdit=(ctId,ctBdy)=>{
        setEdit(true);
        setcmtBdy(ctBdy)
    }

    const hanleOnSubmit=(e)=>{
         e.preventDefault();
         setEdit(false);
    }
  return (
    <>
    {
        Edit ? (<>
        <form className='comments_sub_from_comments'
         onSubmit={hanleOnSubmit}
        >
        <input 
        type='text'
        onChange={e=>setcmtBdy(e.target.value)}
        placeholder='Edit_comment...'
        value={cmtBdy}
        className='comment_ibox'
        />
        <input 
        type="submit"
        value="Change" 
        className='comments_add_btn_comments' />
    </form>
        </>):(
            <p className='comment_body'>{commentBody}</p>
        )
    }
    <p className='usercommented'> - {userCommented} commented</p>
    <p className='EditDel_DisplayCommented'>
        <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
        <i>Delete</i>
    </p>
    </>
  );
}

export default DisplayComments
