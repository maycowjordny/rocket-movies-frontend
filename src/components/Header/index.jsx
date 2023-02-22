import { Container, Profile } from "./styles";

import { Input } from "../../components/Input"
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <Container>
            <h2>RocketMovies</h2>

            <Input placeholder="Pesquisar pelo título" icon={FiSearch} />




            <Profile >
                <div className="logout">
                    <Link to="/profile">
                        <strong>Maycow Jordny</strong>
                    </Link>

                    <Link to="/">Sair</Link>
                </div>

                <img src="https://github.com/maycowjordny.png"
                    alt="Foto do usuário" />

            </Profile>
        </Container>


    )
}