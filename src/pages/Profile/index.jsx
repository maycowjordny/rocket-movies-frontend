import { Container, ProfileImg, Form } from "./styles";

import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Link } from "react-router-dom"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'


export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar" />
                </Link>
            </header>
            <Form>

                <ProfileImg>
                    <img src="https://github.com/maycowjordny.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">

                        <FiCamera />
                        <input id="avatar" type="file" />
                    </label>
                </ProfileImg>

                <Input icon={FiUser} type="name" placeholder="Nome" />
                <Input icon={FiMail} type="email" placeholder="E-mail" />
                <Input icon={FiLock} type="password" placeholder="Senha atual" />
                <Input icon={FiLock} type="password" placeholder="Nova senha" />
            </Form>
        </Container>
    )

}