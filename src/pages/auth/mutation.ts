export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzllNGU1N2RmYTliMDdmNmI2OGI5NGQ1ZGQ1NWUwNyIsInN1YiI6IjY1OTQ2ZGVmZWJiOTlkNjBkMDlkZDYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9B1JlSbUADP2e8QThtm9sTrL6a0vUcqwjagnJkIjDi4"
            },
        }
    )
    console.log(res)
    return res.json();
}