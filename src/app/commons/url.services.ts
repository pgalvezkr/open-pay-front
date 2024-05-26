import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';


@Injectable({ providedIn: 'root' })
export class UrlServices {
    urlApiBackend = environment.urlBackend;
    characterContext = this.urlApiBackend + '/characters';
    urlGetCharacterById = this.characterContext + '/{characterId}'
    callContext = this.urlApiBackend + '/calls';
}
