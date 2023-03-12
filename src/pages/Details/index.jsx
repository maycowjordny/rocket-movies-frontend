import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Container, Section } from "./styles"
import { FiArrowLeft } from "react-icons/fi"
import { Movies } from "../../components/Movies"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../service/api"

export function Details() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  async function handleRemoveMovie() {
    const confirm = window.confirm("Deseja remover esse filme?")

    if (confirm) {
      await api.delete(`/movies/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setMovie(response.data)
    }


    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />


      <main>
        <Section>
          <Link to="/">
            <ButtonText icon={FiArrowLeft} title="Voltar" />
            <ButtonText title="Excluir filme" onClick={handleRemoveMovie} />
          </Link>

          <Movies data={movie} />

        </Section>
      </main>

    </Container>


  )
}