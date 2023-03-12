import { Container } from "./styles";
import { Tags } from "../Tags"
import { Rating } from "../Rating"
import { Link } from "react-router-dom"

export function MoviesHome({ data, ...rest }) {
    console.log(data.tags)
    return (

        <Link to={`/details/${data.id}`}>
            <Container  {...rest} >

                <div className="title-rating">
                    <h1>{data.title}</h1>
                    <span><Rating rating={data.rating} /></span>
                </div>

                <p>{data.description ? data.description : "Nenhuma descricao disponivel"}</p>

                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                        }
                    </footer>
                }

            </Container>
        </Link>

    )
}