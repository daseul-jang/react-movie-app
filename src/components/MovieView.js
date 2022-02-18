import PropTypes from "prop-types";

function MovieView({ coverImg, title, year, runtime, rating, genres, summary }) {
    return (
        <div>
            <img src={coverImg !== null ?
                coverImg : <h1>NO IMAGE</h1>}
                alt={title} />
            <h2>{title}</h2>
            <span>{`${year}년 | ${runtime} 분 | 평점 : ${rating}`}</span>
            <ul>
                {genres !== null ?
                    genres.map((g) => (
                        <li key={g}>{g}</li>
                    )) : null}
            </ul>
            <p>{summary}</p>
        </div>
    );
}

MovieView.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired
};

export default MovieView;