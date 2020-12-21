let Personne = function (sonNom, sonPrenom, sonAge, sonSexe) {
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;

    this.NomPrenom = function (nouveauNom, nouveauPrenom) {
        sonNom = nouveauNom;
        sonPrenom = nouveauPrenom;
    }

    this.getInformation = function() {
        return "Il/Elle s'appelle " + sonNom + " " + sonPrenom + ", " + "Il/Elle a " + sonAge + " ans" + ", c'est un(e) " + sonSexe;
    }
}

let John = new Personne("Doe", "John", 36, "H");
let Harry = new Personne("Potter", "Harry", 21, "H");

let divProp1 = document.getElementById("prop1");
let divProp2 = document.getElementById("prop2");
let divProp3 = document.getElementById("prop3");
let divProp4 = document.getElementById("prop4");
divProp1.innerHTML = John.nom;
divProp2.innerHTML = John.prenom;
divProp3.innerHTML = John.age;
divProp4.innerHTML = John.sexe;

let divMethode1 = document.getElementById("methode1");
let divMethode2 = document.getElementById("methode2");

divMethode1.innerHTML = John.getInformation();
John.NomPrenom("Chirac", "Patrick");
divMethode2.innerHTML = John.getInformation();





let divProp1Bis = document.getElementById("p2Prop1");
let divProp2Bis = document.getElementById("p2Prop2");
let divProp3Bis = document.getElementById("p2Prop3");
let divProp4Bis = document.getElementById("p2Prop4");
divProp1Bis.innerHTML = Harry.nom;
divProp2Bis.innerHTML = Harry.prenom;
divProp3Bis.innerHTML = Harry.age;
divProp4Bis.innerHTML = Harry.sexe;

let divMethode1Bis = document.getElementById("p2methode1");
let divMethode2Bis = document.getElementById("p2methode2");

divMethode1Bis.innerHTML = Harry.getInformation();
Harry.NomPrenom("Weasley", "Ron");
divMethode2Bis.innerHTML = Harry.getInformation();
