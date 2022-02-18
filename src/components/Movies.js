import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movies({ id, coverImg, title, year, summary, genres }) {
    return (
        <div className={styles.movie}>
            <img src={coverImg !== null ?
                coverImg : <h1>NO IMAGE</h1>}
                alt={title}
                className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <ul className={styles.movie__genres}>
                    {genres !== null ? // genres가 있으면 리스트 출력 없으면 null 처리
                        genres.map((g) => (
                            <li key={g}>{g}</li>
                        )) : null}
                </ul>
                <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
            </div>
        </div>
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movies;