import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

imageUrl: string ='src/assets/istockphoto-157423118-612x612.jpg'

  navpro = [
    'Home', 'About', 'Profile','Logo'
  ]


}
