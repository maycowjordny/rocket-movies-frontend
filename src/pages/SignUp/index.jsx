import { Container, Form, BackGround } from "./styles";

import { Input } from "../../components/Input"
import { Link } from "react-router-dom"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

export function SignUp() {
    return (
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input type="name"
                    icon={FiUser}
                    placeholder="Nome"
                />

                <Input type="email"
                    icon={FiMail}
                    placeholder="E-mail"
                />

                <Input type="password"
                    icon={FiLock}
                    placeholder="Senha"
                />

                <Button title="Cadastrar" />

                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
                </Link>
            </Form>

            <BackGround />

        </Container>
    )

}