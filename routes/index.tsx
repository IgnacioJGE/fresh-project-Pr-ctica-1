import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Axios from "npm:axios";
import { ManipulationSettingsContainer } from "https://deno.land/x/ts_morph@20.0.0/ts_morph.js";
import { Button } from "../components/Button.tsx";
type tipofrase = {
  data: string;
};
export default async function Home() {
  const randomnumber:number= Math.floor(Math.random()*150+1);
  const frase = await Axios.get<tipofrase>(`https://learnyourlesson.deno.dev/${randomnumber}`);

  return (
    <html>
      <head>

      </head>
      <body>
        <audio controls  loop>
        <source src="/musica.mp3"/>
        </audio>
        <video class="videobaile"src="/bailesito.mp4" type="video/mp4" autoplay loop muted></video>
        <h1 class ="center2">El conocimiento es poder</h1>
        <h2 class="center">{frase.data}</h2>
        <p class="clasetextaudio">Recomiendo poner la musica para una mejor experiencia</p>
        <div class="flecha"><i class="fas fa-arrow-down"></i></div>
        <img class="susbreaking"src="/breaking-bad_r.jpg"/>
        <img class="bien" src="/bienvenido.png"></img>

      </body>
    </html>
  );
}
