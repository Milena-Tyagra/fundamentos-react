import React from 'react'

export default function ComParametro({nota, titulo, aluno}) {
    const status = nota >= 7 ? 'Aprovado' :  'Em recuperação'
    const notaInt = Math.ceil(nota)
    return (
        <div>
            <h2>{titulo}</h2>
            <p>
                <strong> {aluno} </strong>
                 tem nota
                <strong> {notaInt} </strong>
                e está
                <strong> {status} </strong>

            </p>
        </div>
    )
}