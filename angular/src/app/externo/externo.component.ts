import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any = 1;
  public fecha: any;
  public new_user: any;
  public user_saver: any;

  constructor(private _peticionesService: PeticionesService) { 
    this.new_user = {
      'name': '',
      'job': ''
    };
    this.user_saver = false;
  }

  ngOnInit(): void {
    this.fecha = new Date(1988,4,30);
    this.cambiarUser();
  }

  cambiarUser(): void {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        console.log(result);
        this.user = result.data;
      },
      error => {
        console.log(error);
      },
    );
  }

  onSubmit(form: any): void {
    this._peticionesService.adduser(this.new_user).subscribe(
      resp => {
        console.log(resp);
        this.user_saver = resp;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
