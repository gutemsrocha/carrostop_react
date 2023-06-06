import './styles.css';

export default function SearchBar() {
    return (
        <form className="ct-search-bar">
            <input type="text" placeholder="Digite sua busca"  />
            <button type="submit">BUSCAR</button>
        </form>
);
}

