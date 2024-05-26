import { Injectable } from '@angular/core';
import { GenericService, METHODS } from '../commons/genericservice';
import { Response } from '../commons/Response';
import { UrlServices } from '../commons/url.services';


@Injectable({ providedIn: 'root' })
export class CharacterService {

    constructor(private genericService: GenericService, private urlService: UrlServices) {
    }

    getCharacterData(id: number): Promise<Response> {
        const queryParameters = new Map();
        if (id) {
          queryParameters.set('characterId', id);
        }
        return this.genericService.genericCallServices(this.urlService.urlGetCharacterById, queryParameters);
    }


    getCharacters(): Promise<Response> {
        return this.genericService.genericCallServices(this.urlService.urlGetCharacterById, null);
    }
}