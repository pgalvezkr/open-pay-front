import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Character } from '../model/Character';
import { Stories } from '../model/Stories';
import { Thumbnail } from '../model/Thumbnail';
import { CharacterService } from '../services/characteresService';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrl: './characteres.component.css'
})
export class CharacteresComponent implements OnInit {
 
  visible: boolean= false;
  selectedCharacter: Character = new Character();
  characteres: Character [] = [];
  loading: boolean = false;

  constructor (private characteresService: CharacterService,  private messageService: MessageService){}

  ngOnInit(): void {
   
    this.characteresService.getCharacters().then(resp =>{
      if (resp.code === 200) {
        this.characteres = [];
        console.log(resp);
        this.characteres = resp.data ? resp.data.results : undefined;
      } else {
        this.messageService.add({ severity: 'error', summary: "Error", detail: resp.description, life: 5000 });
      }
    }).catch(err => {
      this.messageService.add({ severity: 'error', summary: "Error", detail: err.message, life: 5000 });
    });
  }

  onRowSelect(event: any) {
    console.log("Character selected:");

    console.log(this.selectedCharacter);

    if(this.selectedCharacter){
        this.visible= true;
    }
  }
  
}
