import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  navigate()
  {
    this._router.navigate(['home']);
  }

}
