import React from 'react'
import vid from '../../Components Navbar/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from '../../Pages/VideoPage/LikeWatchLaterSaveBtns'
import Comments from '../../Components Navbar/Comments/Comments';
function VideoPage() {
  return (
    <>
    <div className='container_videoPage'>
       <div className='container2_videoPage'>
          <div className='video_display_screen_videoPage'>
            <video src={vid}
            className={"video_ShowVideo_videoPage"}
            controls
            // autoPlay
            ></video>
           <div className='video_details_videoPage'>
              <div className='video_btns_title_videoPage_cont'>
                <p className='video_title_videoPage'>Title</p>
                  <div className='views_date_btn_videoPage'>
                     <div className='views_videoPage'>
                        5 views <div className='dot'></div> uploded 1 year ago
                     </div>
                     <LikeWatchLaterSaveBtns/>
                 </div>
              </div>
              <div className='chanel_details_videoPage'>
                <b className='chanel_logo_videoPage'>
                  <p>C</p>
                </b>
                <p className='chanel_name_videoPage'>Chanel name</p>
              </div>
              <div className='coment_VideoPage'>
                <h2>
                  <u>
                    Coment
                  </u>
                </h2>
                <Comments/>  
              </div>
           </div>
           
          </div>
          <div className='moreVideobar'>
              More Video
          </div>
       </div>
    </div>
    </>

  );
}

export default VideoPage
