import { Stories } from "./Stories";
import { Thumbnail } from "./Thumbnail";

export class Character {
    id: number = 0;
    name: string = "";
    description: string = "";
    modified: string = "";
    thumbnail: Thumbnail;
    comics: string[] = [];
    series: string[] = [];
    events: string[] = [];
    stories: Stories[] = [];

    constructor(id: number, name: string, description: string, modified: string, thumbnail: Thumbnail, comics: string[],
        series: string[], events: string[], stories: Stories[]){
            this.id = id;
            this.name = name;
            this.description = description;
            this.modified = modified;
            this.thumbnail = thumbnail;
            this.comics = comics;
            this.series = series;
            this.events = events;
            this.stories = stories;
    }
}