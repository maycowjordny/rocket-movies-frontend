import { Container } from "./styles";


export function Button({ icon: Icon, title, loading = false, ...rest }) {
    return (
        <Container type="button"
            {...rest}
            disabled={loading}
        >
            {Icon && <Icon size={16} />}
            {loading ? "Carregando..." : title}


        </Container>
    )


}