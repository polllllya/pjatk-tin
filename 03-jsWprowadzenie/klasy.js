class Zwierze {
  constructor(gatunek, srodowisko) {
    this._gatunek = gatunek;
    this._srodowisko = srodowisko;
  }

  get gatunek() {
    return this._gatunek;
  }

  set gatunek(gatunek) {
    this._gatunek = gatunek;
  }

  get srodowisko() {
    return this._srodowisko;
  }

  set srodowisko(srodowisko) {
    this._srodowisko = srodowisko;
  }

  opis() {
    return `
    Gatunek: ${this._gatunek} 
    Srodowisko: ${this._srodowisko}`;
  }
}

class Ptak extends Zwierze {
  constructor(gatunek, srodowisko, rodzajSkrzydel) {
    super(gatunek, srodowisko);
    this._rodzajSkrzydel = rodzajSkrzydel;
  }

  get rodzajSkrzydel() {
    return this._rodzajSkrzydel;
  }

  set rodzajSkrzydel(rodzajSkrzydel) {
    this._rodzajSkrzydel = rodzajSkrzydel;
  }

  opis() {
    return `
    Ptak 
    Gatunek: ${this._gatunek} 
    Srodowisko: ${this._srodowisko} 
    Rodzaj skrzydel: ${this._rodzajSkrzydel}`;
  }
}

class Ssak extends Zwierze {
  constructor(gatunek, srodowisko, rodzajFutro) {
    super(gatunek, srodowisko);
    this._rodzajFutro = rodzajFutro;
  }

  get rodzajFutro() {
    return this._rodzajFutro;
  }

  set rodzajFutro(rodzajFutro) {
    this._rodzajFutro = rodzajFutro;
  }

  opis() {
    return `
    Ssak 
    Gatunek: ${this._gatunek} 
    Srodowisko: ${this._srodowisko} 
    Rodzaj futro: ${this._rodzajFutro}`;
  }
}

const zwierze = new Zwierze("Ryś", "las");
const ptak = new Ptak("Sokół", "powietrze", "lotne");
const ssak = new Ssak("Wilk", "las", "długie");

console.log(zwierze.opis());
console.log(ptak.opis());
console.log(ssak.opis());
