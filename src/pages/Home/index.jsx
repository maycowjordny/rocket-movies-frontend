import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { MoviesHome } from "../../components/MoviesHome";
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth"
import { useSearchParams, useNavigate } from "react-router-dom";

export function Home() {
    const { user } = useAuth();
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [searchParams] = useSearchParams();

    const navigate = useNavigate()


    function handleDetails(id) {
        navigate(`/details/${id}`)
    }



    const handleCallback = search => {
        setSearch(search)
    }

    useEffect(() => {
        const searchParam = searchParams.get("search")

        if (searchParam) {
            setSearch(searchParam)
        }

        async function fetchMovies() {
            const response = await api.get(`/movies?user_id=${user.id}&title=${search}`)
            setMovies(response.data)
        }


        fetchMovies()
    }, [search])
    return (
        <Container>
            <Header handleCallback={handleCallback} />
            <div className="title-button" >
                <h1>Meus filmes</h1>
                <Link to="/new">
                    <Button title="Adicionar filme" icon={FiPlus} />

                </Link>
            </div>
            <main>
                <div className="box">

                    {
                        movies.map(movie => (
                            < MoviesHome
                                key={movie.id}
                                data={movie}
                                onClick={() => handleDetails(movie.id)} />
                        ))
                    }



                </div>
            </main>
        </Container>
    )
}