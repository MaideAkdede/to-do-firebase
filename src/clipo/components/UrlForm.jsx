import React, {useState} from 'react'
import axios from 'axios'
import ImagePicker from "./ImagePicker";

//649aefac73214d1443c5adc48e844668
export default function UrlForm() {

    const [videoUrl, setVideoUrl] = useState('')

    const baseUrl = 'https://api.vimeo.com/';
    const vimeoToken = '649aefac73214d1443c5adc48e844668';
    const requete = axios.create({
        baseURL: baseUrl,
        /*timeout: 1000,*/
        headers: { Authorization: `bearer ${vimeoToken}` },
    })

    const handleLoadData = e => {
        e.preventDefault()
        requete.get(`/videos/481737053`).then(resp => console.log(resp.data))
    }
    const handleOnBlur = e => {

       /*
       * Si on perd le focus
       * il faut tester les données entrées dans le formulaire
       * vérifier si la chaîne de caractère contient une suite de 9 chiffres
       * Utilisation du regEx
       */

        if(videoUrl.match(/[0-9]{9}/g)) {
            console.log(videoUrl.match(/[0-9]{9}/g)[0]);
        }
    }
    return (
        <form>
            <fieldset>
                <legend>Charger la vidéo</legend>
                <input type='text'
                       onChange={(e)=>setVideoUrl(e.target.value)}
                       onBlur={handleOnBlur}
                />
                <button onClick={handleLoadData}>Load</button>
            </fieldset>
            <fieldset>
                <legend>Uploader une image</legend>
                <ImagePicker></ImagePicker>
            </fieldset>

        </form>
    )
}