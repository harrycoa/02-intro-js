// Async
const getImage = async() => {
    try {
        const apiKey = '0cSIiADZ7lcyB2NB2beHpxD4rLhPhhK2';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

        const  { data } = await resp.json();
        console.log(data)

        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
            
    } catch (error) {
        console.error(error);
    }
}
getImage();


