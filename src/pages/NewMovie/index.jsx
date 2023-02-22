import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { TextArea } from "../../components/TextArea"
import { Input } from "../../components/Input"
import { NoteItem } from "../../components/NoteItem"
import { Link } from "react-router-dom"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft } from 'react-icons/fi'

export function NewMovie() {
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
                            <Input placeholder="Título" type="name" />
                            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
                        </div>

                        <TextArea placeholder="Observações" />

                        <Section title="Marcadores">
                            <div className="tags">
                                <NoteItem value="React" />
                                <NoteItem isNew placeholder="Novo Marcador" />
                            </div>
                        </Section>

                        <div className="form-button">
                            <button id="button-delete">Excluir filme</button>
                            <button id="button-save">Salvar alterações</button>
                        </div>
                    </section>
                </Form>

            </main>
        </Container>
    )
}