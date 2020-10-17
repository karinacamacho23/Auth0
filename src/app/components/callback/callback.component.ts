import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor( private auth:AuthService) { }

  ngOnInit(): void {
  	/*this.auth.handleRedirectCallback$;*/


  }

}/*
No es necesario porque una vezingresado me sale la opcion dle salir*/