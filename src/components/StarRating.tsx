import React from "react";
import '../Styles/StarRating.css';

interface StarRatingInt{
    star: number;
}

const StarRating: React.FC<StarRatingInt> = ({star}) => {

    return (
        <nav className="starRating">
            <ul>
                {(() => {
                    const rows = [];
                    for (let i = 0; i < star; i++) {
                        rows.push(<li className="active" key={i}><i></i></li>);
                    }
                    return rows;
                })()}
            </ul>
        </nav>
    )
}

export default StarRating;
