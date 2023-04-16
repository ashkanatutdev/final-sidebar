import React from 'react'
import '../css/sidebar.css'

const SidebarBtn = ({icon, name, address}) => {
    return (
        <li>
            <a href={`${address}`}>
                <i>{icon}</i>
                <span className="links_name">{name}</span>
            </a>
            <span className="tooltip">{name}</span>
        </li>
    )
}

export default SidebarBtn