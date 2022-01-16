import FormCard from 'components/FormCard'
import { useParams } from 'react-router-dom'

function Form() {

    const params = useParams()

    return (
        <FormCard movie_Id={`${params.movieId}`}/>
    )
}

export default Form