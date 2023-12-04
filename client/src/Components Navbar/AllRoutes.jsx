import React from 'react'
import Home from '../Pages/Home/Home'
import {
    Routes,
    Route,
  } from "react-router-dom"
import YourVideo from '../Pages/YourVideo/YourVideo'
import WatchHistory from '../Pages/History/WatchHistory'
import LikedVideo from '../Pages/LikedVideo/LikedVideo'
import WatchLater from '../Pages/WatchLater/WatchLater'
import VideoPage from '../Pages/VideoPage/VideoPage'
import Library from '../Pages/Library/Library'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='/yourVideo' element={<YourVideo/>}/>
        <Route path='/watchLater' element={<WatchLater/>}/>
        <Route path='/likedVideo' element={<LikedVideo/>}/>
        <Route path='/videoPage/:vid' element={<VideoPage/>}/>
    </Routes>
  )
}

export default AllRoutes
