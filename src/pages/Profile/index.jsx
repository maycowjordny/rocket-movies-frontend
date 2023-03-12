import { Container, ProfileImg, Form } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { api } from "../../service/api";
import AvatarPlaceHolder from "../../assets/avatar null.svg"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'


export function Profile() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder;
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)


    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar" />
                </Link>
            </header>
            <Form>

                <ProfileImg>
                    <img src={avatar} alt="Foto do usuário" />
                    <label htmlFor="avatar">

                        <FiCamera />
                        <input id="avatar" type="file" onChange={handleChangeAvatar} />
                    </label>
                </ProfileImg>

                <Input
                    icon={FiUser}
                    type="name"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    icon={FiMail}
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha atual"
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )

}