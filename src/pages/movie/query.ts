export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzllNGU1N2RmYTliMDdmNmI2OGI5NGQ1ZGQ1NWUwNyIsInN1YiI6IjY1OTQ2ZGVmZWJiOTlkNjBkMDlkZDYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9B1JlSbUADP2e8QThtm9sTrL6a0vUcqwjagnJkIjDi4"
            },
        }
    )

    return res.json();
}
