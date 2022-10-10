export function getSearch(searchText){
    let data = {query:searchText,client_id:'yZrWtKe_uzlx-4E0moOSpn1z_8RPRDYJrlFppLsvCGI'};
    let url = new URL(`?query=${data.query}&client_id=${data.client_id}`,'https://api.unsplash.com/search/photos');
     const response = fetch(url.href,{
        mode:'cors',
        method: "GET",
        header: {
            "Origin": "https://localhost:3000",
            "Access-Control-Allow-Origin": "*"
            },
     })
    return response
}
//https://api.unsplash.com/search/photos?query=water&client_id=yZrWtKe_uzlx-4E0moOSpn1z_8RPRDYJrlFppLsvCGI
//search/photos
//https://unsplash.com/search/photos?query=water&client_id=yZrWtKe_uzlx-4E0moOSpn1z_8RPRDYJrlFppLsvCGI
//https://api.unsplash.com/search/photos?page=1&query=office
//https://api.unsplash.com/photos/?query=office&client_id=yZrWtKe_uzlx-4E0moOSpn1z_8RPRDYJrlFppLsvCGI