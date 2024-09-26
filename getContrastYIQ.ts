const getContrastYIQ = (hexcolor: string) => {
    if (!hexcolor) return 'black'; // Gère le cas où hexcolor est null ou indéfini
    hexcolor = hexcolor.replace("#", ""); // Supprime le caractère '#' au début de la chaîne
    const r = parseInt(hexcolor.slice(0, 2), 16); // Extrait la composante rouge
    const g = parseInt(hexcolor.slice(2, 4), 16); // Extrait la composante verte
    const b = parseInt(hexcolor.slice(4, 6), 16); // Extrait la composante bleue
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000; // Calcule la luminance
    return (yiq >= 128) ? '#000000' : '#ffffff'; // Retourne noir ou blanc selon la luminance
  }
  