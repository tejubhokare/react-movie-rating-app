export const fetchMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzllNGU1N2RmYTliMDdmNmI2OGI5NGQ1ZGQ1NWUwNyIsInN1YiI6IjY1OTQ2ZGVmZWJiOTlkNjBkMDlkZDYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9B1JlSbUADP2e8QThtm9sTrL6a0vUcqwjagnJkIjDi4"
            },
        }
    )

    return res.json();
}

export const fetchTvShows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzllNGU1N2RmYTliMDdmNmI2OGI5NGQ1ZGQ1NWUwNyIsInN1YiI6IjY1OTQ2ZGVmZWJiOTlkNjBkMDlkZDYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9B1JlSbUADP2e8QThtm9sTrL6a0vUcqwjagnJkIjDi4"
            },
        }
    )

    return res.json();
}