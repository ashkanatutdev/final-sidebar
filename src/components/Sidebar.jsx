import React from 'react'
import '../css/sidebar.css'
import { HiMenuAlt2, HiMenuAlt3, HiSearchCircle } from 'react-icons/hi'
import SidebarBtn from './SidebarBtn'
import { jobs } from '../app/jobList'
import { toggleSidebar } from '../features/sidebar/sidebarSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

const Sidebar = () => {
    const jobList = jobs.map(j => (
        <SidebarBtn key={j.name} name={j.name} address={j.path} icon={j.icon} />
    ))
    const sidebarStatus = useSelector((state) => state.sidebar).isOpen
    const dispatch = useDispatch()
    const toggleSB = () => {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("open");
        dispatch(toggleSidebar())
    }
    const toggleBtn = !sidebarStatus ? <i onClick={toggleSB} className='bx' id="btn" ><HiMenuAlt2 /></i> : <i onClick={toggleSB} className='bx' id="btn" ><HiMenuAlt3 /></i>



    console.log(sidebarStatus)
    return (
        <div>
            <div className="sidebar">
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus icon'></i>
                    <div className="logo_name">TopMedia</div>
                    {toggleBtn}
                </div>
                <ul className="nav-list">
                    <li>
                        <i className='bx-search' ><HiSearchCircle /></i>
                        <input type="text" placeholder="Search..." />
                        <span className="tooltip">Search</span>
                    </li>
                    {jobList}
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<section className="home-section">
                    <div className="text">Home</div>
                </section>} />
                <Route path="/job1" element={<section className="home-section">
                    <div className="text">Job 1</div>
                </section>} />
                <Route path="/job2" element={<section className="home-section">
                    <div className="text">Job 2</div>
                </section>} />
                <Route path="/job3" element={<section className="home-section">
                    <div className="text">Job 3</div>
                </section>} />
                <Route path="/job4" element={<section className="home-section">
                    <div className="text">Job 4</div>
                </section>} />
                <Route path="/job5" element={<section className="home-section">
                    <div className="text">Job 5</div>
                </section>} />
                <Route path="/job6" element={<section className="home-section">
                    <div className="text">Job 6</div>
                </section>} />
            </Routes>
        </div>
    )
}

export default Sidebar