import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import './WHLcss.css'
import WHLVideolist from './WHLVideolist'
function WHL({page,videoList}) {
  return (
    <div className="container_Pages_App">
        <LeftSidebar/>
          <div className="container2_Pages_App">
            <p className='conatiner_whl'>
                <div className='box_WHL leftside_WHL'>
                <b> Your {page} Show here </b>
                {
                  page==="History"&&
                  <div className='clear_History_btn'>Clear history</div>
                }
                <div className='clear_History_btn'>
                    Clear History
                </div>
                </div>
                <div className='rightSide_wh1'>
                    <h1>{page}</h1>
                    <div className='whl_list'>
                    <WHLVideolist
                    pages={page}
                    videoList={videoList}
                    />
                    </div>
                </div>
            </p>
              
          </div>
    </div>
  )
}

export default WHL
