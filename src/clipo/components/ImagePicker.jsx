import React, {useState} from 'react';
import firebase from "../../utils/firebaseConfig.js";

export default function ImagePicker() {

    const [percentage, setPercentage] = useState();
    const [error, setError] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleImage = (e) => {
        let selectedImage = e.target.files[0];

        const storage = firebase.storage().ref().child(`images/${selectedImage.name}`);

        storage.put(selectedImage).on('state_changed', (snap) => {
            console.log(snap);

            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

            setPercentage(percentage);
        },
            (error) => {
                setError(error);
            }, async () => {
            const url = await storage.getDownloadURL();
               setPercentage(null);
               setImageUrl(url);
            }
        ); //gestion de l'erreur
    }
    return (
        <div>
            <input type="file"
                   onChange={handleImage}
                   accept="image/png image/jpeg"
            />
            { percentage &&
                <progress
                    min="0"
                    max="0"
                    value={percentage}
                >
                    {percentage}%
                </progress>
            }
            <p>{error}</p>
        </div>
    )
}