import axios from 'axios'
const baseUrl = 'https://raw.githubusercontent.com/Bey0ndH0riz0ns/DB/main/'

const getData = ({meta_file}) => {
    const request = axios.get(`${baseUrl}/data/${meta_file}.json`)
    return request.then(response => response.data)
}

const getText = ({text_file}) => {
    const request = axios.get(`${baseUrl}/texts/${text_file}.md`)
    return request.then(response => response.data)
}

export default { getData, getText }
