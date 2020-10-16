import React from 'react';

function Quotes() {
    return (
        <div className="quotes">
            <div className="quotes__text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus accumsan tempus. Proin a sem dolor. Donec vitae sollicitudin metus. Donec sapien enim, semper ut arcu quis, porta imperdiet libero.
                </p>
            </div>

            <div className="quotes__author">
                <p>Lorem Ipsum</p>
            </div>

            <div className="quotes__buttons">
                <div className="social__media">
                    <a href="#" className="twitter">
                        <span><img src="" alt="" /></span>
                    </a>
                </div>
            </div>

            <button className="new_quote">New Quote</button>
        </div>
    )
}

export default Quotes;
