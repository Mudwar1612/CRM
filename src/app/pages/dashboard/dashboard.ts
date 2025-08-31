import { Component } from '@angular/core';
import { Helloworld } from "../../components/helloworld/helloworld";

@Component({
  selector: 'app-dashboard',
  imports: [Helloworld],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
