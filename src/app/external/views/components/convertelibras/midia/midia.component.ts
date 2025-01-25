import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';

// Pipe para tratar URLs seguras
@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

@Component({
  selector: 'app-midia',
  templateUrl: './midia.component.html',
  styleUrls: ['./midia.component.scss']
})
export class MidiaComponent implements OnInit {
  videoUrl: string = '';
  videoTitle: string = '';
  videoDate: string = '';
  videoDescription: string = '';

  relatedVideos = [
    {
      id: '1',
      title: 'CSS - Aprenda Flexbox',
      url: 'https://www.youtube.com/embed/video_id_1',
      description: 'Uma introdução ao flexbox em CSS.'
    },
    {
      id: '2',
      title: 'SCSS - Variáveis e Mixins',
      url: 'https://www.youtube.com/embed/video_id_2',
      description: 'Como usar variáveis e mixins no SCSS.'
    },
    {
      id: '3',
      title: 'JavaScript - Manipulação DOM',
      url: 'https://www.youtube.com/embed/video_id_3',
      description: 'Entenda como manipular o DOM usando JS.'
    },
    {
      id: '4',
      title: 'Angular - Introdução',
      url: 'https://www.youtube.com/embed/video_id_4',
      description: 'O básico para começar com Angular.'
    },
    {
      id: '5',
      title: 'PHP - Trabalhando com Arrays',
      url: 'https://www.youtube.com/embed/video_id_5',
      description: 'Aprenda a manipular arrays no PHP.'
    }
  ];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Obtém o vídeo da rota anterior
    const videoData = history.state.data;
    if (videoData) {
      this.videoUrl = videoData.url;
      this.videoTitle = videoData.title;
      this.videoDate = videoData.date || 'Data desconhecida';
      this.videoDescription = videoData.description || '';
    }
  }

  playVideo(video: any): void {
    // Atualiza o vídeo principal com os dados clicados
    this.videoUrl = video.url;
    this.videoTitle = video.title;
    this.videoDate = 'Data desconhecida'; // Se precisar, insira a data real
    this.videoDescription = 'Libras significa Língua Brasileira de Sinais. Através dela, é possível promover mais acessibilidade na comunicação para pessoas com surdas e deficientes auditivas.'
//video.description;
  }
}
