export class Cat {
    id: number;
    private _nom: string;
    age: number;
    race: string;
    private _vivant: boolean;

    constructor(id:number, nom:string, age:number, race:string, vivant:boolean) {
        this.id = id;
        this._nom = nom;
        this.age = age;
        this.race = race;
        this._vivant = vivant;
    }
    
    get nom():string {
        return this._nom;
    }

    set nom(value:string) {
        this._nom = value;
    }
}