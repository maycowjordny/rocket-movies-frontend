import { Container, Form, BackGround } from "./styles";
import { useState } from "react"
import { Input } from "../../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { api } from "../../service/api"


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")

        }

        api.post("/users", { name, email, password }).then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possivel cadastrar")
                }
            })
    }

    return (
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input type="name"
                    icon={FiUser}
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                />

                <Input type="email"
                    icon={FiMail}
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input type="password"
                    icon={FiLock}
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
                </Link>
            </Form>

            <BackGround />

        </Container>
    )

}