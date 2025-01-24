import { Component } from '@angular/core';

interface Resultado {
  videoThumbnail: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent {

  results: Resultado[] = //[]; // Lista de resultados comente os array [] cheios Para teste de sugestao
  [
    {
      title: 'Html',
      description: 'HTML é uma linguagem de marcação utilizada...',
      videoThumbnail: 'https://img.youtube.com/vi/bjAvA-qk_V4/0.jpg', // Miniatura do vídeo no YouTube
    },
    {
      title: 'Css',
      description: 'CSS é uma linguagem de estilo utilizada...',
      videoThumbnail: 'https://img.youtube.com/vi/bjAvA-qk_V4/1.jpg',
    },
    {
      title: 'JavaScript',
      description: 'JavaScript é uma linguagem de programação...',
      videoThumbnail: 'https://img.youtube.com/vi/bjAvA-qk_V4/2.jpg',
    },
    {
      title: "2000's Music Hits ~ Nostalgia Playlist",
      description: 'Playlist nostálgica com hits dos anos 2000.',
      videoThumbnail: 'https://img.youtube.com/vi/bjAvA-qk_V4/0.jpg',
    },
  ];

  // Método para lidar com o clique no botão "Sugerir Palavra"
  sugerirPalavra() {
    alert('Funcionalidade de sugerir palavra ainda não implementada!');
  }

}
