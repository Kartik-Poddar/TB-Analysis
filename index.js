let imgUrl
document.getElementById('upload_image').addEventListener('change', function () {
    const fileInput = this;
    const file = fileInput.files[0]; // Get the uploaded file

    if (file) {
        const reader = new FileReader(); // Create a file reader to read the file

        reader.onload = function (e) {
            imgUrl = e.target.result; // Get the file URL
            const img = new Image(); // Create an image element

            img.onload = function () {
                const imgWidth = img.width;
                const imgHeight = img.height;
                const aspectRatio = imgWidth / imgHeight;

                // Set the desired width for the box (you can adjust this as needed)
                const boxWidth = 500; // Fixed width
                const boxHeight = boxWidth / aspectRatio; // Calculate height based on aspect ratio

                // Update the show_img div with the correct size and background image
                const showImgDiv = document.querySelector('.show_img');
                showImgDiv.style.width = `${boxWidth}px`;
                showImgDiv.style.height = `${boxHeight}px`;
                showImgDiv.style.backgroundImage = `url(${imgUrl})`; // Set background image
            };

            img.src = imgUrl; // Set the image source to the uploaded file
        };

        reader.readAsDataURL(file); // Read the file as a Data URL
    } else {
        alert('Please select an image file.');
    }
});

document.getElementById('submit_img').addEventListener('click',function(){
    if (imgUrl) {
        // Store the image in local storage as Base64 string
        localStorage.setItem('uploadedImage', imgUrl);

        // Verify if the image is successfully saved
        const savedImg = localStorage.getItem('uploadedImage');
        if (savedImg) {
            alert('Image saved in local storage');
        } else {
            alert('Failed to save image in local storage');
        }
    } else {
        alert('No image uploaded yet.');
    }
});


