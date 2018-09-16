import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newAuthor = {name : ""};
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router){
  }
  ngOnInit() {
  }
  CreateAuthor(){
    let obs = this._httpService.createAuthor(this.newAuthor);
    obs.subscribe(data=>{
      console.log("Create author success",data);
      this.newAuthor = {name : ""};
      this.goHome();
    })
  }
  goHome(){
    this._router.navigate(['/']);
  }
}
