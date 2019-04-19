import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  navigate()
  {
    this._router.navigate(['home']);
  }

}
