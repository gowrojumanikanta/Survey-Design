import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigate()
  {
    this._router.navigate(['home']);
  }
}
