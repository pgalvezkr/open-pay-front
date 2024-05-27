import { DatePipe } from "@angular/common";

export class Call {
    code: number = 0;
    servicio: string = "";
    fecha: DatePipe | undefined;
}