import React from 'react';
import './workflow.css'

function Workflow() {
	return (
		<section className="workflow section">
			<h2 className="section__title">Fully Automated Workflows</h2>
			<span className="section__subtitle">No more painful manual approval management and wasting countless hours.</span>

            <div className="workflow__content grid">
                <div className="left grid">
                    <div className="workflow__list-item">
                        <img src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" className="workflow__icon" />
                        <h3 className="workflow__text">Leave Application</h3>
                    </div>

                    <div className="workflow__list-item">
                        <img src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" className="workflow__icon" />
                        <h3 className="workflow__text">Purchase Order</h3>
                    </div>

                    <div className="workflow__list-item">
                        <img src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" className="workflow__icon" />
                        <h3 className="workflow__text">Fulfilment</h3>
                    </div>
                </div>

                <div className="image">
                    <img src="https://www.boloforms.com/_next/static/media/approvals.73c8d904.svg" alt="" />
                </div>

                <div className="right grid">
                    <div className="workflow__list-item">
                        <img src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" className="workflow__icon" />
                        <h3 className="workflow__text">Approve</h3>
                    </div>

                    <div className="workflow__list-item">
                        <img src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" className="workflow__icon" />
                        <h3 className="workflow__text">Reject</h3>
                    </div>
                    
                    <div className="workflow__list-item">
                        <img src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" className="workflow__icon" />
                        <h3 className="workflow__text">Send Pdf</h3>
                    </div>
                </div>
            </div>

            <span className="section__subtitle workflow__text-bottom">BoloForms workflows acts as a glue holding together all your approval processes.</span>
		</section>
	);
}

export default Workflow;
