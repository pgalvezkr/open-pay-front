import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Call } from '../model/Call';
import { CallService } from '../services/callService';

@Component({
  selector: 'app-call-services',
  templateUrl: './call-services.component.html',
  styleUrl: './call-services.component.css'
})
export class CallServicesComponent implements OnInit{

  calls: Call[] =[];

  constructor (private callService: CallService,  private messageService: MessageService){}



  ngOnInit(): void {
      this.callService.getCalls().then(resp =>{
        if (resp.code === 200) {
          this.calls = [];
          this.calls = resp.data ? resp.data.calls : undefined;
        } else {
          this.messageService.add({ severity: 'error', summary: "Error", detail: resp.description, life: 5000 });
        }
      }).catch(err => {
        this.messageService.add({ severity: 'error', summary: "Error", detail: err.message, life: 5000 });
      });
  }
  

}
