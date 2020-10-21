import React from "react";
import './QuoteCard.css'

function displayQuote({props}) {
    return (
        <figure className="QuoteCard">
            <img
                src={props.image}
                alt={props.character}
            />
            <figcaption>
                <blockquote>
                    {props.quote}
                </blockquote>
                <p>
                    <cite>{props.character}</cite>
                </p>
            </figcaption>

        </figure>
    )
}

export default displayQuote;
