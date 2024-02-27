class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url;
  }

  setInicio(tiempo) {
    return `Realizar cambio URL`;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }

  playMultimedia() {
    modulo.agregarVideoPublic(this._url, this._id);
  }

  setInicio(tiempo) {
    let elemento = document.getElementById(this._id);
    let urlConInicio = `${this._url}?start=${tiempo}`;
    elemento.setAttribute("src", urlConInicio);
    console.log(`Se ha establecido el inicio en el segundo ${tiempo}`);
  }
}

let modulo = (() => {
  let agregarVideoPrivate = (url, id) => {
    let elemento = document.getElementById(id);
    elemento.setAttribute("src", url);
  };
  return {
    agregarVideoPublic: (url, id) => {
      agregarVideoPrivate(url, id);
    },
  };
})();

let musica = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "musica"
);

let pelicula = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "peliculas"
);

let serie = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "series"
);

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
musica.setInicio(5);
pelicula.setInicio(10);
serie.setInicio(15);
