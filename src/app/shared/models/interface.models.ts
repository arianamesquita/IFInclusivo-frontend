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
    comentarios: Comentarios[];
}

export interface Topico {
    id: number,
    descricao?: string,
    professor: Professor,
    dataCriacao: Date,
    categoria: string,
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

export interface Publicacoes{
    id: string,
    titulo: string,
    text: string,
    urlVideo: string,
    urlFoto: string,
    dataCriacao: Date,
    usuario: Usuario,
    topico?: string,
    comentarios: Comentarios[],
    likeBy?: [] 
}

export interface Comentarios {
    id: number,
    content?: string,
    dataCriacao: Date,
    usuario: Usuario
}

export interface Usuario {
    id: number,
    nome: string,
    content?: string,
    dataCriacao: Date,
    biografia: string
}

export function removerAcentuacoesEspacos(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_");
}