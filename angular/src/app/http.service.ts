import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthor(){
    return this._http.get("/authors/");
  }
  createAuthor(author){
    return this._http.post("/authors/new/",author);
  }
  updateAuthor(id,update){
    return this._http.put("/authors/edit/" + id,update)
  }
  OneAuthor(id){
    return this._http.get("/authors/"+id);
  }
  deleteAuthor(id){
    return this._http.delete("/authors/delete/" + id);
  }

}
