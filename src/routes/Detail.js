import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieView from "../components/MovieView";
import styles from "./Detail.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const getMovie = useCallback(
        async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setDetail(json.data.movie);
            setLoading(false);
        }, [id]);
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div>
                    {
                        <MovieView
                            key={detail.id}
                            coverImg={detail.medium_cover_image}
                            title={detail.title}
                            year={detail.year}
                            runtime={detail.runtime}
                            rating={detail.rating}
                            genres={detail.genres}
                            summary={detail.description_full}
                        />
                    }
                </div>
            )}
        </div>
    );
}

export default Detail;