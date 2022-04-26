import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-name-card';

  cardName: string = "TOXIC";

  email: string = "hoanghuutri97@gmail.com";

  phone: string = "0359626826";
}
