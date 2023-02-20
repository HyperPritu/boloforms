import React from 'react'

export const SupportItem = ({ imgSrc, heading, subHeading, btnText }) => {

    return (
        <div className="support-item">
            <img alt='' src={imgSrc} />
            <h2>{heading}</h2>
            <p>{subHeading}</p>
            <button className='button button__outlined support__button'>{btnText}</button>
        </div>
    )
}
