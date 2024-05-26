import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Configuration } from './configuration';
import { Response } from './Response';

export enum METHODS {
    POST = 'post',
    GET = 'get',
    UPDATE = 'update',
    PUT = 'put',
    DELETE = 'delete',
    FORMDATA = 'formData',
    FILE = 'file'
}


@Injectable({providedIn: 'root'})
export class GenericService {

    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    constructor(private _http: HttpClient) {
    }

 
    public genericCallServices(context: string, additionalParameters: any):
        Promise<Response> {
        let contextoTypeEnd = context;
        let queryParameters = new HttpParams();
        if (additionalParameters) {
            additionalParameters.forEach((value: string, key: string) => {
                queryParameters = queryParameters.append(key, value);
            });
        }

        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts: string[] = ['application/json'];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes: string[] = ['application/json' ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);

        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this._http.get(contextoTypeEnd, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }).toPromise().then((resp: any) => {
                return Promise.resolve(resp);
            }).catch(this.handleError());
    }

    private handleError() {
        return (res: any) => {
            let errMessage: any;
            try {
                if (res.status === 412) {
                    errMessage = { status: res.status, message: res.text() };
                } else if (res.status === 401) {

                } else if (res.status === 0 && res.statusText === 'Unknown Error') {
                    res.message = 'Problemas de conectividad, verifique su conexión a Internet';
                    errMessage = res.json();
                } else {
                    errMessage = res.json();
                }
            } catch (err) {
                throw res;
            }
            const error: any = new Error(errMessage);
            error.timestamp = Date.now();
            throw error;
        };
    }

}