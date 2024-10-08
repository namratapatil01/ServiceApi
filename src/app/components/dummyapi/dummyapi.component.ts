import { Component } from '@angular/core';
import { DummyapiService } from 'src/app/services/dummyapi.service';

@Component({
  selector: 'app-dummyapi',
  templateUrl: './dummyapi.component.html',
  styleUrls: ['./dummyapi.component.css']
})
export class DummyapiComponent {
  constructor(private dummyApiService:DummyapiService ){}
  allPost:any;

  getAllPost(){
   
    this.dummyApiService.getAllPost().subscribe((Response) => {
this.allPost = Response;
    });
  }
}
