interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    }
}

// Objetos (desestructuración)
// 
// Sin desestructuración ____________________

// console.log("Song: ", audioPlayer.song);
// console.log("Duration: ", audioPlayer.songDuration);
// console.log("Author: ", audioPlayer.details.author);


// Con desestructuración ____________________

// const song = "New Song"

// const {  song: anotherSong, songDuration: duration,  details, } = audioPlayer;

// const { author } = details;

// console.log("Song: ", anotherSong);
// console.log("Duration: ", duration);
// console.log("Author: ", author);



// Arrays (desestructuración)

// const dbz: string [] = ["Gokú", "Vegeta", "Trunk"];
// const trunks = dbz[3] || "No hay personaje";

// console.error("Personaje 3: ", trunks);


const[ ,  , trunks]: string [] = ["Gokú", "Vegeta", "Trunk"];

console.error("Personaje 3: ", trunks);



export {};