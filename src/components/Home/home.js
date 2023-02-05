import Carousel from "react-bootstrap/Carousel";
import { Card } from "./card";

function Home() {
  return (
    <div>
      <Carousel style={{ height: "100%" }}>
        <Carousel.Item>
          <img className="d-block w-100" src="2.jpeg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="3.jpeg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="4.jpeg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="1.jpeg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="row text-center">
          <h1 style={{ marginTop: 50 }}>O mnie</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-8 col-md-8" style={{ padding: 20 }}>
            <p className="p">
              Oskar Lewiński jest rodowitym gdynianinem z demografii lat 70.
              Chwyta się w życiu wielu różnych pasji, z których fotografia
              "trzyma" obecnie najmocniej. Obok pracy zawodowej jako inżynier w
              jednej z dużych gdyńskich firm, wolny czas w dużej mierze wypełnia
              "bieganie z aparatem".
            </p>
            <p className="p">
              Jego pierwsze zapamiętane zetknięcie z fotografią miało miejsce w
              wieku kilkunastu lat, kiedy to z kolegą z wieżowca obok wywoływali
              potajemnie w łazience różne, głównie cenzurowane zdjęcia z
              kolorowych gazet. Od dzieciństwa interesował się optyką,
              astronomią, światem skupionym. Zawsze chciał sięgnąć wzrokiem i
              światem jak najdalej w górę.
            </p>
            <p className="p">
              Obecna przygoda z fotografią trwa od kilku lat. Zainteresowanie
              "fotografią nocną" zrodziło się w Duisburgu w Niemczech, gdzie
              bohater wystawy miał okazję mieszkać przez kilka lat. Podpatrywał
              tam w wolnym czasie kunszt fotografów fotografujących noc
              "Landschaftspark Duisburg" - nieczynną hutę zamienioną na oazę
              kultury industrialnej. Z połączenia "nocy i stalowych potworów"
              zrodziło się na rodzimym gdyńskim gruncie zamiłowanie do
              uwieczniania stoczniowo-portowej infrastruktury, a już w ogóle
              najchętniej w połączeniu z elementami astro - jak to sam nazywa
              tzw. "astroindustriale".
            </p>
            <p className="p">
              Nieobca Oskarowi jest również fotografia dzienna, zwłaszcza kadry
              w świetlistych godzinach, ukazujące ulotne i niepowtarzalne chwile
              z pobliskich plaż czy innych znanych miejsc w Gdyni. Fascynuje go
              także czysty pejzaż miejski. Do jednych z ulubionych tematów
              fotografii należą.
            </p>
          </div>
          <div
            className="col-sm-4 col-md-4"
            style={{ padding: 20, display: "flex", justifyContent: "end" }}
          >
            <img
              src="5.jpeg"
              alt="First slide"
              style={{
                borderRadius: "50%",
                width: "100%",
                boxShadow:
                  "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
              }}
            />
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="row text-center">
          <h1 style={{ marginTop: 20 }}>Odkryj zdjęcia</h1>
        </div>
        <div
          className="grid-containerr"
          style={{
            marginTop: 30,
            marginBottom: 30,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 10,
          }}
        >
          <div className="grid-item">
            <Card image="1.jpeg" />
          </div>
          <div className="grid-item">
            <Card image="2.jpeg" />
          </div>
          <div className="grid-item">
            <Card image="3.jpeg" />
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="row text-center">
          <h1 style={{ marginTop: 20 }}>Najnowsze posty z bloga</h1>
        </div>
      </div>
      <br />
      <div align="center" className="socialbtns">
      <ul>
          <li>
            <a href="https://www.facebook.com/oskarlewinskifotografia" target="_blank" rel="noreferrer"  className="fa fa-lg fa-facebook"></a>
          </li>
          <li>
            <a href="https://www.instagram.com/oskarlewinski/"  target="_blank" rel="noreferrer" className="fa fa-lg fa-instagram"></a>
          </li>
          <li>
            <a href="https://www.facebook.com/lewinskiphotografia"  target="_blank" rel="noreferrer" className="fa fa-lg fa-facebook"></a>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Home;
