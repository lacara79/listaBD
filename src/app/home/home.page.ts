import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url = 'http://localhost/aplicativo/';
  lista = [];

  constructor(private http: HttpClient, private alert: AlertController) { }

  nome: any;
  email: any;

  ngOnInit() {
    this.listar(); //Chamando a lista inicial
    // this.atualizarAlunos(null)
  }

  //Carrega a lista inicialmente
  listar(){
    return this.http.get<any>(`${this.url}`+"select.php").subscribe((resp) => {
      this.lista = resp;
      console.log(this.lista);
    })
  }

  async cadastrar(){ 

    //Criando um alerta no momento do Registro
    const alert = await this.alert.create({
      message: "Registro efetuado com sucesso...",
      buttons: ['ok']
    }) 

    await alert.present();

    // Inserindo o nome e o email e após 2 segundos atualizar a lista.
    this.http.get(`${this.url}`+`insert.php?nome=${this.nome}&email=${this.email}`).subscribe(data => {    
      setTimeout(() => {
            this.atualizarAlunos(event);
          }, 2000);
    });
    this.nome = ""; //Zerando a caixa de texto Nome
    this.email = ""; //Zerando a caixa de texto Email
  }

  //Método para chamar o Refresh e atualizar a nossa lista, nela não tem temporizar, 
  //apenas chamamos o nosso select, caso ele tenha alteração o mesmo será recarregado na lista
  atualizarAlunos(event) {
    return this.http
      .get<any>(`${this.url}`+`select.php`)
      .subscribe(data => {
        this.lista = data;

        if (event)
          event.target.complete();
      }, error => {
        console.log(error);

        if (event)
          event.target.complete();
      })
  }
}
