import axios from "axios"
import MovieCard from "components/MovieCard"
import Pagination from "components/Pagination"
import { useEffect, useState } from "react"
import { MoviePage } from "types/movies"
import { BASE_URL } from "utils/requests"

function Listing() {

    const [pageNumber, setPageNumber] = useState(0)

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(resp => {
                const result = resp.data as MoviePage
                setPage(result)
                console.log(result)
            })
    }, [pageNumber])

    const handPageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber)
    }

    return (
        <>
            <Pagination pageP={page} onChange={handPageChange}/>

            <div className="container">
                <div className="row">
                    {page.content.map(pagMovie => (
                        <div key={pagMovie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={pagMovie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Listing