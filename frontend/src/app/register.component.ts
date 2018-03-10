import { Component } from '@angular/core';
import { AuthService} from './auth.service';

@Component({
  selector: 'retister',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
    registerData = {};
    
    constructor ( private authService: AuthService){}
    
    post(){
        this.authService.registerUser(this.registerData);
    }
}
