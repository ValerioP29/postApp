export interface Ipost {
  id: number;        // ID del post
  title: string;     // Titolo del post
  body: string;      // Corpo del post
  userId: number;    // ID dell'utente
  tags: string[];     // Array di tag
  active: boolean;    // Stato del post (attivo/non attivo)
}

