import { Injectable } from '@angular/core';
import { GenericService, METHODS } from '../commons/genericservice';
import { Response } from '../commons/Response';
import { UrlServices } from '../commons/url.services';


@Injectable({ providedIn: 'root' })
export class CallService {

    constructor(private genericService: GenericService, private urlService: UrlServices) {
    }

    getCalls(): Promise<Response> {
        return this.genericService.genericCallServices(this.urlService.callContext, null);
    }
}