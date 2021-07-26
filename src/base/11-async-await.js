// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
  try {
    const apikKey = "kua7ckiJim07QPyAO3iA0YFUvt0lAq7N";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apikKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    //    const img = document.createElement('img');
    //    img.src = url;
    //    document.body.append(img);
    return url;
  } catch (error) {
    return 'No encontro ninguna url...'
  }
};

// getImagen();
