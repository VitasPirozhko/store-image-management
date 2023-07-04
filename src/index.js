// const DOMAIN = 'https://menutool-import-from-admin.menu-tool.glovoapp.com';
const DOMAIN = window.location.origin;
const loader = document.querySelector('.js_loader');
let csvFile = null;
let archiveFile = null;

const readSingleFile = (evt) => {
    csvFile = evt.target.files[0]; 
    const cvsLabel = document.querySelector('.uploadCvsInput');
    cvsLabel.textContent = csvFile.name;
}

const readArchive = (evt) => {
    archiveFile = evt.target.files[0]; 
    const archiveLabel = document.querySelector('.uploadArchiveInput');
    archiveLabel.textContent = archiveFile.name;
}

const handleLoaderShow = (visible) => {
    loader.style.display = visible ? 'flex' : 'none';
};

const sendCsv = () => {
    let formData = new FormData();
    formData.append('file', csvFile);

    handleLoaderShow(true);
    fetch(`${DOMAIN}/store_images`, {
        method: "POST",
        // headers: {
        //     'Authorization': 'Basic bWVudTopcDtcSnhONEZ1JFpOdkpW',
        // },
        body: formData,
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        handleLoaderShow(false);
    })
}

const sendArchive = () => {
    let formData = new FormData();
    formData.append('file', archiveFile);

    handleLoaderShow(true);
    fetch(`${DOMAIN}/store_images`, {
        method: "POST",
        // headers: {
        //     'Authorization': 'Basic bWVudTopcDtcSnhONEZ1JFpOdkpW',
        // },
        body: formData,
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        handleLoaderShow(false);
    })
}

document.getElementById('uploadCvsFile').addEventListener('change', readSingleFile);
document.getElementById('uploadArchive').addEventListener('change', readArchive);
document.getElementById('sendCsv').addEventListener('click', sendCsv);
document.getElementById('sendArchive').addEventListener('click', sendArchive);