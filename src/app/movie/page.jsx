
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';


const Movie = async () => {




    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    // const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a26e3223cdmsh8c1775e8d11df93p14af24jsnb437f7f68969',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = await data.titles;
    console.log(main_data);



    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>

            </section>̵


        </>
    )
}

export default Movie