const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1"
const axios = require("axios")


analyze = async (url, key) => {
    // the URL=`${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    analysis = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`)
        .then(function (response) {
            const { code } = response.data.status
            //handle errors
            if (code == 100) {
                const error = handleError(code, "please enter a valid URL")
                return error
            } else if (code == 212) {
                const error = handleError(code, response.data.status.msg)
                return error
            }
            return successResponse(response.data, code)
        })
    return analysis
}

const handleError = (code, msg) => {
    const error = {
        code: code,
        msg: msg
    }
    return error
}

//cure the data and send it to the client
const successResponse = (data, code) =>{
    const { score_tag, agreement, subjectivity, confidence, irony } = data
            let sample = {
                score_tag: score_tag,
                agreement: agreement,
                subjectivity: subjectivity,
                confidence: confidence,
                irony: irony
            }
            result = { sample, status: code }
            return result
}

module.exports = {
    analyze
}