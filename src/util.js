import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name: "When I get up in the morning",
            artist: "Middle School",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
            id: uuidv4(),
            active: false, //if the song is play or not
            color: ["#1A344A", "#B55B39"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=22933',
        },
        {
            name: "Dawn",
            artist: "Toonorth",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
            id: uuidv4(),
            active: false, //if the song is play or not
            color: ["#4C526A", "#3D4F6F"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=17941',
        },
        {
            name: "Badlands",
            artist: "Hanz, Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            id: uuidv4(),
            active: false, //if the song is play or not
            color: ["#ECC5B8", "#B9BF4B"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=20126',
        },
        {
            name: "Vintage",
            artist: "Evil Needle",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            id: uuidv4(),
            active: false, //if the song is play or not
            color: ["#EC6C53", "#5F8394"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=17088',
        },
        {
            name: "Playful Obsession",
            artist: "C Y G N",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            id: uuidv4(),
            active: false, //if the song is play or not
            color: ["#5972AE", "#864C9C"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=14983',
        },
    ];
}

export default chillHop;