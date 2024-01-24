import React from 'react'
import SideBar from './SideBar'
import Details from './Details'
import style from "./PageLayout.module.css"

function PageLayout() {
  return (
    <div className={style.pageLayout}>
    <SideBar/>
    <Details/>
    </div>
  )
}

export default PageLayout