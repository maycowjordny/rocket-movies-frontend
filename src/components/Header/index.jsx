import { Container, Profile } from "./styles";

import { Input } from "../../components/Input"
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useEffect, useState } from "react";
import AvatarPlaceHolder from "../../assets/avatar null.svg"

import { api } from "../../service/api";
export function Header({ handleCallback }) {
    const { signOut, user } = useAuth()
    const [search, setSearch] = useState("");
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder;




    useEffect(() => {

        if (handleCallback != null) {
            handleCallback(search)
        }

    }, [search]);


    return (

        <Container>
            <h2>RocketMovies</h2>

            <Input
                placeholder="Pesquisar pelo título"
                icon={FiSearch}
                onChange={(e) => setSearch(e.target.value)}
            />




            <Profile >
                <div className="logout">
                    <Link to="/profile">
                        <strong>{user.name}</strong>
                    </Link>

                    <Link to="/" onClick={signOut}>Sair</Link>
                </div>

                <img src={avatarUrl}
                    alt={user.name} />

            </Profile>
        </Container>


    )
}