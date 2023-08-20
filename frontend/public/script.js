const saveData = async () => {
    const form = document.querySelectorAll('#profileEditor input[type=text]')
    const result = new FormData();
    for (let input of form) {
        result.append(`${input.id}`, input.value)
    };
    const files = document.querySelector("input[type=file]")
    const file = files.files[0];
    result.append("picture", file);
    
    console.dir(result);

    let fetchData = await fetch("http://127.0.0.1:9000/", {
        method: 'POST',
        body:  result,
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
    // var response = await fetch("http://localhost:9000/", fetchData);
}

const saveButton = document.getElementById('saveBtn')
saveButton.addEventListener('click', saveData)
