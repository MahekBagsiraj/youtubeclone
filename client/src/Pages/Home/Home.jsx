import React from 'react'
import './Home.css'
import LeftSidebar from '../../Components Navbar/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components Navbar/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components Navbar/Video/vid.mp4'
function Home() {
  const vids = [
    {
      _id: 1,
      video_src: vid,
      Chanel:"62bafe6752cea35a6c30685f",
      title:"video 1",
      Uploder:"abc",
      description:"description of video 1"
    },
    {
      _id: 2,
      video_src: vid,
      Chanel:"cdd",
      title:"video 2",
      Uploder:"abc",
      description:"description of video 2"

    },
    {
      _id: 3,
      video_src: vid,
      Chanel:"add",
      title:"video 3",
      Uploder:"abc",
      description:"description of video 3"
    },
    {
      _id: 4,
      video_src: vid,
      Chanel:"add",
      title:"video 4",
      Uploder:"abc",
      description:"description of video 3"
    },
  ];
  const NavList=[
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Animals",
    "Gaming",
    "Comedy",
    "C++",
    "Movies",
    "Animals",
    "Gaming",
  "Comedy"
  ]
  return (
       <div className="container_Pages_App">
        <LeftSidebar/>
          <div className="container2_Pages_App">
            <div className='navigation_Home'>
              {
                NavList.map(m=>{
                  return(
                  <p key={m} className='btn_nav_home'>
                    {m}
                  </p>)
                })
              }
            </div>
              <ShowVideoGrid vids={vids}/>
          </div>
       </div>
  )
}

export default Home
