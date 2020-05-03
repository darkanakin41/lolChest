import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  open = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.open = !this.open;
  }

}
