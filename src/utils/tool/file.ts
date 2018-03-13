export function fileToBase64(file) {
    return new Promise((done, notDone)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            done(reader.result)
        };
        reader.onerror = function (error) {
            notDone(error)
        };
    })
 }