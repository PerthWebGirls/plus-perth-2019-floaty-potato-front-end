import React from 'react';

const MovieDetail = ({ movieDetail, ...props }) => {
    console.log("MovieDetail_3", movieDetail);
    return (
        <>
            <div>
                <img src={movieDetail.image} />
            </div>
            <div>
                <h3>{movieDetail.title}</h3>
            </div>
            <div>
                {(movieDetail.provider || []).map((item, index) => (
                    <div key={index}>
                        <ul>
                            {/* <Link to={item.url}> */}
                            <li>{item.name}</li>
                            {/* </Link> */}
                        </ul>
                    </div>
                ))}
            </div>
            <div>
                <p>{movieDetail.summary}</p>
                <h5>{movieDetail.duration}</h5>
                <h5>{movieDetail.release_date}</h5>
            </div>
            <div>
                {(movieDetail.genre || []).map((item, index) => (
                    <div key={index}>
                        <ul>
                            <li>{item.name}</li>
                        </ul>
                    </div>
                ))}
            </div>
            <div>
                {(movieDetail.classification || {}).text}
            </div>
        </>
    );

}
export default MovieDetail;