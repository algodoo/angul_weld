import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../form'; 
import { Location } from '@angular/common'

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  @Input() form: Form;
  constructor(private location: Location) { }

  Close(): void{
    document.getElementById("someid").style.display="none";
  }

  

  ngOnInit() {
  }

}
