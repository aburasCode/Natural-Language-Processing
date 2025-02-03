import axios from "axios";

//calling the isValidUrl function to use after sumission
const { isValidUrl } = require("./checkURL");

const input = document.getElementById("URI");

//handle input change
document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener("change", (e)=>{
        e.preventDefault()
        hide_error()
        show_results(false)
    })
}
)


// handle the submit
async function handleSubmit(e) {
    e.preventDefault();

    const form = document.querySelector("form");

    if (!isValidUrl(input.value)) {
        show_error();
        document.getElementById("error").innerHTML = "Please, Enter a valid URL";
        input.value = "";
        return;
    }
    loading(true);
    const { data } = await axios.post(
        'http://localhost:8000/',
        form,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    display_results(data);
}

//showing the data on the ui
const display_results = data => {

    loading(false)
    if (data.msg) {
        show_error()
        show_results(false)
        document.getElementById("error").innerHTML = `${data.msg}`;

        return;
    }
    hide_error()
    show_results(true)

    document.getElementById("agreement").innerHTML = `Agreement: ${data.sample.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.sample.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.sample.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.sample.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.sample.score_tag}`;
}


const loading = (bool) => {
    // loader
    const loader = document.getElementById('loader');
    //
    if (bool) {
        // Show the loader
        loader.style.display = 'block';
        return;
    }
    //hide the loader
    loader.style.display = 'none';

}

const show_results = (bool) => {
    if (bool) {
        document.querySelectorAll("ul li").forEach(element => {
            element.style.display = "block"
        })
        return;
    }
    document.querySelectorAll("ul li").forEach(element => {
        element.style.display = "none"
    })
    return;
}

const show_error = () => document.getElementById("error").style.display = "block";
const hide_error = () => document.getElementById("error").style.display = "none";

export { handleSubmit }
