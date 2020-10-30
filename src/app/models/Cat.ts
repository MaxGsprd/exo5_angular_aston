export class Cat {
    id: number;
    nom: string;
    age: number;
    race: string;
    vivant: boolean;

    constructor(id:number, nom:string, age:number, race:string, vivant:boolean) {
        this.id = id;
        this.nom = nom;
        this.age = age;
        this.race = race;
        this.vivant = vivant;
    }
}