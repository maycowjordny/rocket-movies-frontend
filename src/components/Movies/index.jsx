import { Container } from "./styles";
import { Tags } from "../Tags"
import { Rating } from "../Rating"
import { FiClock, FiX } from "react-icons/fi"
import { format, toDate } from "date-fns";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import avatarPlaceholder from "../../assets/avatar null.svg";

export function Movies({ data, ...rest }) {
    const { user } = useAuth();
    const [date, setDate] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {

        async function formatedDate() {
            if (data.created_at) {
                const formatedDate = await format(toDate(Date.parse(data.created_at)), `dd/MM/yyyy 'às' H:mm`);
                setDate(formatedDate);
            }
        }
        formatedDate()
    }, [data]);

    return (

        <Container {...rest}>
            <div className="title-rating">
                <h1>{data.title}</h1>
                <span><Rating rating={data.rating} /></span>

            </div>

            <div className="name-date">
                <img src={avatarUrl} alt="Foto do usuário" />
                <span>Por {user.name}</span>
                <FiClock />{date}
            </div>

            {
                data.tags &&
                <section>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                    }
                </section>
            }
            <p>{data.description ? data.description : "Nenhuma descricao disponivel"}</p>

        </Container>
    )
}