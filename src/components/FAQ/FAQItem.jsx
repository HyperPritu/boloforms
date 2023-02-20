import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export const FAQItem = () => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className="faq-item">
            <div className="faq-item-top" onClick={() => setExpanded(!expanded)}>
                <p className="faq-title">FAQ Title Here</p>
                {expanded ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            { expanded ? <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto, necessitatibus totam consectetur quod eligendi deleniti aliquam vel itaque, neque officiis ipsum quidem aperiam corporis voluptates! Repellat voluptatibus ducimus debitis.</p> : "" }
        </div>
    )
}
