let Personne = function (sonNom, sonPrenom, sonAge, sonSexe) {
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;

    this.getInformation = function() {
        return "Il/Elle s'appelle " + sonNom + " " + sonPrenom + ", " + "Il/Elle a " + sonAge + " ans" + ", c'est un(e) " + sonSexe;
    }

    this.
}