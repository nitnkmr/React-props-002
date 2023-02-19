import React from "react";

const MovieCard = ({img,title,year}) => {
    console.log(img);
    return (
        <div className="card">
            <div className="left">
                <div className="topCard">
                    <div className="poster">
                        <img
                            src={img}
                            alt="poster"
                            id="poster"
                        />
                    </div>
                    <div className="description">
                        <h3 className="header">{title}</h3>
                        <div className="releaseDate">{year},David Ayer</div>
                        <div className="genere">
                            <span>117 min</span> Action,crime,Fantasy{" "}
                        </div>
                    </div>
                </div>
                <div className="storyLine">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
                    nobis veritatis praesentium eligendi dignissimos tenetur pariatur
                    commodi quibusdam libero qui?
                </div>
                <div className="icons">
                    <i>👍🏻</i>
                    <i>🔗</i>
                    <i>📨</i>
                </div>
            </div>
            <div className="center"></div>
            <div className="right">
            <img
                            src={img}
                            alt="poster"
                            id="poster"
                        />
            </div>
        </div>
    );
};

export default MovieCard;
