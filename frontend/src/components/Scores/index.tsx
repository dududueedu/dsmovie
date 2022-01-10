import Stars from 'components/Stars'
import './style.css'

function Scores() {

    const score = 2.8
    const count = 13

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <Stars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default Scores