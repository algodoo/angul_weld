import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
//import { PEOPLE } from '../people_list';
import { HumanService } from '../human.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
  
})
export class EditformComponent implements OnInit {
  people: Form[];
  selectHuman: Form;

  

  constructor(private humanService: HumanService, private location: Location) { }

  ngOnInit() {
    this.getPeople();
  }

  onSelect(form: Form): void {

    
    this.selectHuman = form;
    document.getElementById("someid").style.display="block";
    
  }
  getPeople(): void{
    this.humanService.getPeople().subscribe(people => this.people = people);
  }

  Back(): void{
    document.getElementById("Auth").style.display="table";
    this.location.back()
  }
}

