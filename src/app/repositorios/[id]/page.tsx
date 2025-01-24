
interface PageDetailProps {
    params: {
        id: string;
    }
}

async function getData(id: string) {
    console.log(id);
    const data = await fetch("https://api.github.com/users/renan-mion/repos");
    return data.json();
  }

export default async function RepositorioId({ params }: PageDetailProps) {
    const { id } = await Promise.resolve(params);
    const data = await getData(id);
    
    return (
        <div>
            <h1>Página detalhes do repositório {id}</h1>
        </div>
    )
}