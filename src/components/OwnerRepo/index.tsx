"use client"

import { useState } from "react";

import Image from "next/image"

interface OwnerRepoProps {
    avatar_url: string,
    name: string
}

export function OwnerRepo({ avatar_url, name }: OwnerRepoProps) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            {show && (
                <>
                    <Image src={avatar_url}
                        alt="Foto do avatar do usuário"
                        width={34}
                        height={34}
                        style={{ borderRadius: 8 }}
                    />
                    <strong>{name}</strong></>
            )}
            <button onClick={handleClick}>
                {show ? "Ocultar foto" : "Mostrar foto"}
            </button>
        </div>
    )
}