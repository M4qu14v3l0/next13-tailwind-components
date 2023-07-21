import React from 'react'

// Reemplaza 'ruta_del_folder' con la ruta adecuada donde se encuentran tus imágenes.
const rutaDelFolder = '../public/face_pictures/';

// Función para obtener un cero inicial según el número de la imagen.
function obtenerCeroInicial(numero, longitud) {
  return numero.toString().padStart(longitud, '0');
}

// Número total de imágenes que tienes en el folder.
const totalImagenes = 300;

// Longitud del número más grande, esto te ayudará a generar los nombres adecuadamente.
const longitudNumero = totalImagenes.toString().length;

// Iterar desde 1 hasta el número total de imágenes y mostrar los nombres en consola.


export default function Home() {

  // for (let i = 1; i <= totalImagenes; i++) {
  //   const nombreImagen = `img0${obtenerCeroInicial(i, longitudNumero)},`;
  //   console.log(nombreImagen);
  // }

  return (
    <div>Home</div>
    
  )
}
