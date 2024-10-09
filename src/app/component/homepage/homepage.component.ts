import { Component, OnInit } from '@angular/core'; // Importa OnInit per l'interfaccia
import { Ipost } from '../../ipost'; // Assicurati che il percorso sia corretto

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'] // Corretto da styleUrl a styleUrls
})
export class HomepageComponent implements OnInit { // Implementa OnInit
  posts: Ipost[] = []; // Qui stai creando un array di oggetti di tipo Ipost

  constructor() {}

  ngOnInit() {
    this.loadPost(); // Chiama il metodo per caricare i post
  }

  loadPost() {
    fetch("/db.json")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log("Dati caricati:", data); // Controlla la struttura dei dati
        // Assicurati che `data` sia un oggetto con una proprietà `posts`
        if (data && data.posts) {
          this.posts = data.posts; // Usa direttamente data.posts
        } else {
          console.error('Nessun post trovato nella risposta');
        }
      })
      .catch(err => {
        console.error('Error fetching the posts:', err);
      });
  }


}
