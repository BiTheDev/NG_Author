import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  AuthorId : String;
  AuthorInfo;
  update = {name : ""};
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router){
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.AuthorId = params.id;
    });
    this.getOneAuthor();
  }
  getOneAuthor(){
    let obs = this._httpService.OneAuthor(this.AuthorId);
    obs.subscribe(data=>{
      console.log("got current author", data);
      this.AuthorInfo = data;
      console.log(this.AuthorInfo);
      this.update = {name: this.AuthorInfo.name} ;
  })
  }
  updateAuthor(){
    let obs = this._httpService.updateAuthor(this.AuthorId,this.update);
    obs.subscribe(data=>{
      console.log("data update success",data);
      this.update = {name : ""};
      this.goHome();
    })
  }

  goHome(){
    this._router.navigate(['/']);
  }

}
