import React from 'react'

const AsyncExample = () => {

    async function generateNumber() {
        return 1
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }
    
    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showSessionStorage() {
        saveSessionStorage('name', 'Flako')
            .then((response) => {
                let value = response
                alert(`Save Name: ${value}`)
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => console.log('SUCCESS: Name saved and retreived'))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000)
        })

        let message = await promise

        await alert(`Message Resived: ${message}`)
    }

    const retunrError = async () => {
        await Promise.reject(new Error('Ooops!'))
    }

    const consumeError = () => {
        retunrError()
            .then((response) => alert('everthing is OK: ', response))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error} (check your console)`)
        }
    }

    const multiplePromises = async () => {
        let results = new Promise.all(
            [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something is wrong with yours URLs: ${error} (Check your console)`))
    }

    return (
        <div>
            <button onClick={ obtainNumber }>Obtain Number</button>
            <button onClick={ obtainPromiseNumber }>Obtain Promise Number</button>
            <button onClick={ showSessionStorage }>Save Name</button>
            <button onClick={ obtainMessage }>Recive Message</button>
            <button onClick={ consumeError }>Obtain Error</button>
            <button onClick={ urlNotFound }>Invalid URL</button>
            <button onClick={ multiplePromises }>Muiltiple Promises</button>
        </div>
    )
}

export default AsyncExample