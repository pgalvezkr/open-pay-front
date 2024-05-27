import { Comic } from "./Comic";
import { Event } from "./Event";
import { Serie } from "./Serie";
import { Stories } from "./Stories";
import { Thumbnail } from "./Thumbnail";

export class Character {
    id: number = 0;
    name: string = "";
    description: string = "";
    modified: string = "";
    thumbnail: Thumbnail = new Thumbnail();
    comics: Comic = new Comic();
    series: Serie = new Serie();
    events: Event = new Event();
    stories: Stories = new Stories;


}