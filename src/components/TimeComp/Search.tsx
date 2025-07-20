import { useRef } from "react";
import { Link } from "react-router-dom";

interface SearchProps {
  onSearch: (cidade: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const cidade = inputRef.current?.value?.trim();
    if (!cidade) return;
    onSearch(cidade);
    inputRef.current!.value = "";
  }

  return (
    <header>
        <div className="btn-back">
            <Link to="/" className="btn btn-light"><i className="bi bi-arrow-left"></i></Link>
        </div>
        
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="form-control-search"
          type="text"
          placeholder="Buscar cidade..."
          aria-label="Buscar cidade"
        />
        <button className="btn btn-light" type="submit">
          Buscar
        </button>
      </form>
    </header>
  );
}
