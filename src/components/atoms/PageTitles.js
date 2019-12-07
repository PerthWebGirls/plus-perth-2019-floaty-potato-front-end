import React from 'react'
import "./PageTitles.css"

export const PageTitles = (props) => {
    return (
        <div className="PageTitleContainer">
            <h1 className="PageTitle">{props.children}</h1>
        </div>
    )
}

export default PageTitles;