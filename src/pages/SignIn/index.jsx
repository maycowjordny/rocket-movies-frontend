import { Container, Form, BackGround } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom";


export function SignIn() {
    return (
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <Input type="email"
                    icon={FiMail}
                    placeholder="E-mail"
                />

                <Input type="password"
                    icon={FiLock}
                    placeholder="Senha"
                />
                <Link to="/">
                    <Button title="Entrar" />
                </Link>
                <div className="create">
                    <Link to="/register">Criar conta</Link>
                </div>
            </Form>

            <BackGround />

        </Container>
    )

}