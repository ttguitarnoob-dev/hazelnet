async function handleFetch(endpoint, options) {

    const URL = `https://api.ttguitarnoob.cloud/${endpoint}`

    try {
        console.log(`fetching at url ${URL}, with these options:`, options)
        const response = await fetch(URL, options)
        const data = await response.json()
        return data
    } catch(err){
        console.log('Something horrendous happened when fetching', err)
    }


}

module.exports = { handleFetch }