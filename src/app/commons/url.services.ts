import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';


@Injectable({ providedIn: 'root' })
export class UrlServices {
    urlApiBackend = environment.urlBackend;
    characterContext = this.urlApiBackend + 'api/marvel';
    urlGetCharacterById = this.characterContext + '/{characterId}'
    binnacle = this.urlApiBackend + 'api/binnacle';
}
