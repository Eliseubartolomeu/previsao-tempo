export function Search() {
    return(
        <header>
            <form className="d-flex" role="search">
            <input className="form-control" type="text" placeholder="Buscar cidade..." aria-label="Buscar cidade"/>
            <button className="btn btn-light" type="submit">Buscar</button>
            </form>
        </header>
    )
}