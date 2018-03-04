import { Component } from '@angular/core';
import { ApiService} from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
        PSSocial
        <span style="flex: 1 1 auto"></span>
        <button md-button>Register</button>
    </mat-toolbar>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
