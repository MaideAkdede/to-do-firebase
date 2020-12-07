import React, { Fragment } from 'react'
import UrlForm from "./components/UrlForm";

export default function App() {
    return (
        <Fragment>
            <h1>Clipo</h1>
            <div>
                L'app doit être capable de{' '}
                <ul>
                    <li>Enregistrer une URL</li>
                    <li>
                        Extraire de cette URL des informations comme :
                        <ul>
                            <li>Le titre</li>
                            <li>La durée</li>
                            <li>un ou des thumbnails</li>
                        </ul>
                    </li>
                    <li>Ajouter des tags</li>
                    <li>Ajouter un screenshot</li>
                    <li>Ajouter une description</li>
                </ul>
            </div>

            <UrlForm />
        </Fragment>
    )
}