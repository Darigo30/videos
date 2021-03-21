// Generamos las clases y la herencia:

class Multimedia {
    constructor(url) {
        const _url = url;
        this.pepito = () => _url;
    }
    get url() {
        return this.pepito();
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        const _id = id;
        this.getId = () => _id
    }

    get id() {
        return this.getId();
    }

    playMultimedia() {
        Videos(this.url, this.id);
    }
    setInicio(tiempo = 0) {
        const idDOM = document.getElementById(this.id);
        if (!idDOM) return;
        idDOM.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
}

const Videos = (() => {
    const agregarVideo = (url, id) => {
        const idDOM = document.getElementById(id);
        if (!idDOM) return;
        idDOM.setAttribute("src", url);
    }
        const AgregarVideoPublico = (url, id) => agregarVideo(url, id);
        return AgregarVideoPublico;
})();

const pelicula = new Reproductor("https://www.youtube.com/embed/DrmMexI4rhE", "pelicula");
pelicula.playMultimedia();
const musica = new Reproductor("https://www.youtube.com/embed/hYJ_1d2FA84", "musica");
musica.playMultimedia();
const serie = new Reproductor("https://www.youtube.com/embed/fUCdSWPD9Uo", "serie");
serie.playMultimedia();

