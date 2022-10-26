import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const FAQ = () => {
    return (
        <div>
            <h1 className='text-center text-secondary my-3 fst-italic fs-1'>Frequently Ask Question</h1>
            <Accordion className='container'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can I cancel the Premium Access?</Accordion.Header>
                    <Accordion.Body>
                        You can cancel your subscription at any time through your Account Settings in the website. This will take you to the Subscription page for you to cancel.

                        However, if that is not possible for some reason, please refer to this answer.
                        More update coming soon.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to buy Course?</Accordion.Header>
                    <Accordion.Body>
                        If you want to buy a course you first need to register in our website. Then you can access to our course details. After checkout then make payment. Finally you can access our course. Thank You.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;