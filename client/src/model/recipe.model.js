/*
Constructor of the each recipes that we are looking for
or modeling data that come from api
*/
export default class Recipe {
    id;
    title;
    image;
    constructor(id, title, image){
        this.id = id;
        this.title = title;
        this.image = image;
    }
}