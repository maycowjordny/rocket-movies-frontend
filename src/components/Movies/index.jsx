import { Container } from "./styles";
import { Tags } from "../Tags"
import { Rating } from "../Rating"
import { FiClock } from "react-icons/fi"

export function Movies({ data, ...rest }) {
    return (
        <Container {...rest}>
            <div className="title-rating">
                <h1>{data.title}</h1>
                <span><Rating rating={data.rating} /></span>
            </div>

            <div className="name-date">
                <img src="https://github.com/maycowjordny.png" alt="Foto do usuário" />
                <span>Por {data.name}</span>
                <FiClock />{data.date}
            </div>

            <section>

                {
                    data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                }
            </section>


            <p>{data.description}</p>

        </Container>

    )
}