import { Container } from "./styles";
import { Tags } from "../Tags"
import { Rating } from "../Rating"
import { Link } from "react-router-dom"

export function MoviesHome({ data, ...rest }) {
    return (
        <Link to="/details/id">
            <Container  {...rest} >

                <div className="title-rating">
                    <h1>{data.title}</h1>
                    <span><Rating rating={data.rating} /></span>
                </div>

                <p>{data.description}</p>

                <section>

                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                    }
                </section>


            </Container>
        </Link>

    )
}