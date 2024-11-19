export interface Resposta {
    usuario: string;
    periodo: string;
    data: string;
    resposta: string;
}
export interface Pergunta {
    usuario: string;
    periodo: string;
    data: string;
    pergunta: string;
    descricao: string;
    respostas: Resposta[];
}

  