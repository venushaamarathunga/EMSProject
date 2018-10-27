import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rc-front-page',
  templateUrl: './rc-front-page.component.html',
  styleUrls: ['./rc-front-page.component.css']
})
export class RcFrontPageComponent implements OnInit {
  
  profileForm = new FormGroup({
    name: new FormControl(''),
    place: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    
  }

}
