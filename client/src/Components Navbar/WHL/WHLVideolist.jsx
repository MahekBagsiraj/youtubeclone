import React from 'react'
import ShowVideoList from '../ShowVideo/ShowVideoList'

function WHLVideolist({page,videoList}) {
  return (
    <>
      {
        videoList.map(m=>{
            return(
                <>
                <ShowVideoList videoId={m._id} key={m._id}/>
                </>
            )
        })
      }
    </>
  )
}

export default WHLVideolist
