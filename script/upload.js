
function uploadFile() {
    var fileInput = document.getElementById('carImage');
    var file = fileInput.files[0];
    var successMessage = document.createElement('div');
    successMessage.innerText = 'File uploaded successfully';
    successMessage.style.color = '#28a745';

    if (file) {
        var reader = new FileReader();

        reader.onload = function(event) {
            var imageSrc = event.target.result;
            var imageElement = document.createElement('img');
            imageElement.src = imageSrc;

            document.getElementById('response').innerHTML = '';
            document.getElementById('response').appendChild(imageElement);
            document.getElementById('response').appendChild(successMessage);
        }

        reader.readAsDataURL(file);
    }
    else {
        var errorMessage = document.createElement('div');
        errorMessage.innerText = 'No file selected';
        errorMessage.style.color = '#dc3545';
        
        document.getElementById('response').innerHTML = '';
        document.getElementById('response').appendChild(errorMessage);
    }
}