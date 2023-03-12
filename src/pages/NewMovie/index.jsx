import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { TextArea } from "../../components/TextArea"
import { Input } from "../../components/Input"
import { NoteItem } from "../../components/NoteItem"
import { Link } from "react-router-dom"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft } from 'react-icons/fi'
import { useState } from "react"
import { api } from "../../service/api"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
export function NewMovie() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const [rating, setRating] = useState("")

    const navigate = useNavigate()


    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovie() {
        if (!title) {
            return alert("Digite o título do filme.")
        }

        if (!rating) {
            return alert("Você não avaliou o filme.")
        }

        if (newTag) {
            return alert("Você deixou uma tag no campo de adicionar,mas não clicou em adicionar.Clique para adicionar ou deixe o campo vazio")
        }

        await api.post("/movies", {
            title,
            description,
            tags,
            rating
        });
        alert("Filme criado com sucesso!");
        navigate(-1);
    }

    return (
        <Container>
            <Header />

            <main>

                <Form>
                    <header>
                        <Link to="/">
                            <ButtonText icon={FiArrowLeft} title="Voltar" />
                        </Link>
                        <h1>Novo Filme</h1>
                    </header>

                    <section>
                        <div className="input-name-avaliation">
                            <Input
                                placeholder="Título"
                                onChange={e => setTitle(e.target.value)}
                            />
                            <Input placeholder="Sua nota (de 0 a 5)" type="number" onChange={e => setRating(e.target.value)} />
                        </div>

                        <TextArea
                            placeholder="Observações"
                            onChange={e => setDescription(e.target.value)}
                        />

                        <Section title="Marcadores">
                            <div className="tags">


                                {
                                    tags.map((tag, index) => (
                                        < NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => { handleRemoveTag(tag) }}
                                        />
                                    ))
                                }



                                <NoteItem
                                    isNew
                                    placeholder="Novo Marcador"
                                    onChange={e => setNewTag(e.target.value)}
                                    value={newTag}
                                    onClick={handleAddTag} />

                            </div>
                        </Section>

                        <div className="form-button">
                            <Button title="Excluir filme " />
                            <Button onClick={handleNewMovie} title="salvar" />
                        </div>
                    </section>
                </Form>

            </main>
        </Container>
    )
}