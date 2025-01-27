import { Component } from '@angular/core';

@Component({
  selector: 'app-topicoslibras',
  templateUrl: './topicoslibras.component.html',
  styleUrls: ['./topicoslibras.component.scss']
})
export class TopicoslibrasComponent {

  items = [
    {
      title: 'Internet Protocolo',
      description: 'Um endereço numérico atribuído a cada dispositivo conectado a uma rede.',
      image: 'https://img.youtube.com/vi/-ZDkdbPqUZg/maxresdefault.jpg',
      videoUrl: 'https://youtu.be/-ZDkdbPqUZg?list=PL8eRdbSEC-1lKAl3SEaFezjDPg2BPgSCe&t=2'
    },
    {
      title: 'DNS Explicado',
      description: 'Entenda como o Sistema de Nomes de Domínio funciona na Internet.',
      image: 'https://img.youtube.com/vi/-ZDkdbPqUZg/maxresdefault.jpg',
      videoUrl: 'https://youtu.be/-ZDkdbPqUZg?list=PL8eRdbSEC-1lKAl3SEaFezjDPg2BPgSCe&t=2'
    },
    {
      title: 'Redes e Sub-redes',
      description: 'Aprenda sobre redes e como dividir endereços IP.',
      image: 'https://img.youtube.com/vi/-ZDkdbPqUZg/maxresdefault.jpg',
      videoUrl: 'https://youtu.be/-ZDkdbPqUZg?list=PL8eRdbSEC-1lKAl3SEaFezjDPg2BPgSCe&t=2'
    }
  ];
}
