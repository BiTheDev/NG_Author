import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Authors; 
  constructor(private _httpService: HttpService){
  }

  ngOnInit() {
    this.allAuthor();
  }
  // ngOnChanges(){
  //   this.allAuthor()
  // }
  allAuthor(){
    let obs = this._httpService.getAllAuthor();
    obs.subscribe(data =>{
      console.log("Got all author",data);
      this.Authors = data;
      console.log("All Authors " + this.Authors);
    } )
  }
  deleteAuthor(id){
    let obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data =>{
      console.log("delete a data",data);
    });
    this.allAuthor()
  }
}
