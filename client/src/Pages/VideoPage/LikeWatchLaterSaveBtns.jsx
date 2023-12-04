import React, { useState } from 'react';
import {BsThreeDots} from 'react-icons/bs';
import {AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai';
import {MdPlaylistAddCheck} from 'react-icons/md';
import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardFill} from 'react-icons/ri';
import './LikeWatchLaterSaveBtns.css';

function LikeWatchLaterSaveBtns() {
  const [SAveVideo, setSAveVideo] = useState(true);
  const [DislikeBtn, setDislikeBtn] = useState(false);
  const [Likebtn, setLikebtn] = useState(false);

  const toggelSavedVideo=()=>{
    if(SAveVideo){
      setSAveVideo(false);
    }else{
      setSAveVideo(true);
    }
  }
  const toggelLikeBtn=()=>{
    if(Likebtn){
      setLikebtn(false);
    }else{
      setLikebtn(true)
    }
  }
  const toggelDislikeBtn=()=>{
    if(DislikeBtn){
      setDislikeBtn(false);
    }else{
      setDislikeBtn(true);
    }
  }
  return (
    <div className='Btns_conts_videoPage'>
      <div className='btn_VideoPage'>
        <BsThreeDots/>
      </div>
      
    <div className='btn_VideoPage'>
    <div className="like_videoPage" onClick={()=>toggelLikeBtn()}>
        {Likebtn ? (
          <>
          <AiFillLike size={22} className='bts_videoPage'/>
          
          </>
        ) : ( 
          <>
            <AiOutlineLike size={22} className='bts_videoPage'/>
            
          </>
        )}
        <b>1</b>
      </div>
    <div className="like_videoPage" onClick={()=>toggelDislikeBtn()}>
        {DislikeBtn ? (
          <>
          <AiFillDislike size={22} className='bts_videoPage'/>
          
          </>
        ) : ( 
          <>
            <AiOutlineDislike size={22} className='bts_videoPage'/>
            
          </>
        )}
        <b>DISLIKE</b>
      </div>
      <div className="like_videoPage" onClick={()=>toggelSavedVideo()}>
        {SAveVideo ? (
          <>
          <RiPlayListAddFill size={22} className='bts_videoPage'/>
          <b>Save</b>
          </>
        ) : ( 
          <>
            <MdPlaylistAddCheck size={22} className='bts_videoPage'/>
            <b>saved</b>
          </>
        )}
      </div>
      <div className="like_videoPage">
          <>
          <RiHeartAddFill size={22} className='bts_videoPage'/>
          <b>Thanks</b>
          </>
      </div>
      <div className="like_videoPage">
          <>
          <RiShareForwardFill size={22} className='bts_videoPage'/>
          <b>Share</b>
          </>
      </div>
    </div>
    
  </div>
  );
}

export default LikeWatchLaterSaveBtns;
