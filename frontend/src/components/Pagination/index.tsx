import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import { MoviePage } from 'types/movies'
import './style.css'

type Props = {
    pageP: MoviePage;
    onChange: Function;
}

function Pagination({pageP, onChange} : Props) {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" 
                    disabled={pageP.first} onClick={() => onChange(pageP.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${pageP.number + 1} de ${pageP.totalPages}`}</p>
                <button className="dsmovie-pagination-button" 
                    disabled={pageP.last} onClick={() => onChange(pageP.number + 1)} >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    )
}

export default Pagination