import Stars from 'components/Stars'
import './style.css'

type Props = {
    scoreP: number;
    countP: number;
}

function Scores({scoreP, countP} : Props) {

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{scoreP > 0 ? scoreP.toFixed(1) : '-'}</p>
            <Stars score={scoreP}/>
            <p className="dsmovie-score-count">{countP} avaliações</p>
        </div>
    )
}

export default Scores