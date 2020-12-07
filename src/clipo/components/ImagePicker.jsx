import React from 'react';

function ImagePicker() {
    const handleImage = (e) => {
        let selectedImage = e.target.files[0];

        //récupéréer et stocker image
        // associer event qui va passé e a une variable

    }
    return (
        <div>
            <input type="file"
                   onChange={handleImage}
            />
        </div>
    )
}
export default ImagePicker;