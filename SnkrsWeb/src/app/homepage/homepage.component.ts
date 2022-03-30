import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'Snkrs';
  subtitle = 'Which one do you want?';

  constructor() { }

  ngOnInit(): void {
  }

}
