import React from 'react';
import './support.css';
import { SupportItem } from './SupportItem';

export const Support = () => {
    return (
        <div className='support section'>
            <img src="https://www.boloforms.com/_next/static/media/stars.6ce54309.png" alt="extra" id='img-extra'/>
            <h2 className='section__title'>Award Winning Support</h2>
            <span className='section__subtitle'>Best-in-class support. We’re always here to help – here’s how to connect.</span>
            <div className="supports">
                <SupportItem imgSrc={"https://www.boloforms.com/_next/static/media/live-chat-support.8700dc17.png"} heading={"? Whatsapp Chat"} subHeading={"Ask a question right now."} btnText={"Start a chat"} />
                <SupportItem imgSrc={"https://www.boloforms.com/_next/static/media/support-email.d67bf660.png"} heading={"? Whatsapp Chat"} subHeading={"Ask a question right now."} btnText={"Start a chat"} />
                <SupportItem imgSrc={"https://www.boloforms.com/_next/static/media/helpcenter.1d93444b.png"} heading={"? Whatsapp Chat"} subHeading={"Ask a question right now."} btnText={"Start a chat"} />
                <SupportItem imgSrc={"https://www.boloforms.com/_next/static/media/book-time.934f28c8.png"} heading={"? Whatsapp Chat"} subHeading={"Ask a question right now."} btnText={"Start a chat"} />  
            </div>
        </div>
    )
}