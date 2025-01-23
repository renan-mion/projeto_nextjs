"use client"

import { useState, useEffect } from "react";

interface DataProps {
    id: number,
    name: string,
    full_name: string,
    owner: {
        login: string,
        id: number,
        avatar_url: string,
        url: string
    }
}

export default function Repositorios() {
    const [repos, setRepos] = useState<DataProps[]>([]);

    useEffect(() => {
        async function getData() {
            fetch("https://api.github.com/users/renan-mion/repos")
                .then(response => response.json())
                .then((data: DataProps[]) => {

                    setTimeout(() => {
                        setRepos(data);
                    }, 2000);
                    
                });
        }

        getData();
    }, [])

    return (
        <div>
            <h1>Página Repositórios</h1>

            <h2>Detalhes do usuário Renan Mion</h2>
            {repos.map((item) => (
                <div key={item.id}>
                    <strong>Repositório: </strong><a>{item.name}</a>
                    <br /><br />
                </div>
            ))}
        </div>
    )
}