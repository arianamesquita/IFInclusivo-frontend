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
export interface Topico {
    id: number,
    descricao?: string,
    professor: Professor,
    dataCriacao: Date,
    tema: string,
    titulo: string,
    publicacoes?: []
}
export interface Professor {
    dataCriacao: Date,
    formacao: string,
    id: number,
    matricula: number,
    nome: string
}

export function removerAcentuacoesEspacos(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_");
}