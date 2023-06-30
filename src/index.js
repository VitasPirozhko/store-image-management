import axios from 'axios';

let csvFile = null;

const readSingleFile = (evt) => {
    csvFile = evt.target.files[0]; 
}

const sendCsv = () => {
    console.log(csvFile);
    // fetch('https://menutool-import-from-admin.menu-tool.glovoapp.com/store_images', {
    //     method: "GET",
    //     body: {
    //         file: csvFile,
    //     }
    // }).then((data) => {
    //     console.log(data);
    // })

    // axios.get('https://menutool-import-from-admin.menu-tool.glovoapp.com/store_images', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Basic bWVudTopcDtcSnhONEZ1JFpOdkpW'
    //     },
    //     body: {
    //         file: csvFile
    //     },
    // }).then((response) => {
    //     console.log(response)
    // })
}

console.log(111);

document.getElementById('uploadCvsFile').addEventListener('change', readSingleFile);
document.getElementById('sendCsv').addEventListener('click', sendCsv);