import { Injectable } from '@angular/core';
import { Form } from './form';
import { PEOPLE } from './people_list'
import { Observable, of} from 'rxjs'
import { MessageService } from  './message.service';

@Injectable({
  providedIn: 'root'
})
export class HumanService {

    getPeople(): Observable<Form[]> {
      this.messageService.add('HumanService: fetched people');
      return of (PEOPLE);
    }

    

  constructor(private messageService: MessageService) { }
}
