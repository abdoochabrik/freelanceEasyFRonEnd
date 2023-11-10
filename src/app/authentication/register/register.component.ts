import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CenterOfInterest } from 'src/app/admin/Models/CenterOfIneters.enum';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  centersOfInterest:any[] = [{label:"web Development",value:CenterOfInterest.WEB},
  {label:"Cyber security",value:CenterOfInterest.SECURITY},
  {label:"Data engineering",value:CenterOfInterest.DATA}
 ]

  @Output() loginEvent = new EventEmitter();
  @Output() registerEvent = new EventEmitter();

  public username!:string;
  public password!:string;
  public centerOfIterest!:{label:string,value:CenterOfInterest};
  public email!:string;
  public activateNotifications!:boolean;

  constructor( private readonly authService:AuthService) {
  }

  ngOnInit(): void {

  }

  register() {
    /*this.authService.register(this.username,this.email,this.password,this.centerOfIterest.value).subscribe(user => {
        this.loginEvent.emit();
    })*/
    const data = {
      username:this.username,
      email:this.email,
      password:this.password,
      centerOfInterest:this.centerOfIterest.value
    }
    this.registerEvent.emit(data);
  }
}
