import opCover from './img/mangaCover/onePiece.jpg'
import blCover from './img/mangaCover/bloomingLove.jpg'
import jinruiCover from './img/mangaCover/jinruiShoku.jpg'
import elusiveSamurai from './img/mangaCover/elusiveSamurai.jpg'
import tisTime from './img/mangaCover/tisTime.jpg'
import shojoNull from './img/mangaCover/shojoNull.jpg'
import history from './img/mangaCover/historyMentalist.jpg'
import choujinCover from './img/mangaCover/choujinX.jpg'
import kaijuCover from './img/mangaCover/kaiju.jpg'
import onkCover from './img/mangaCover/oshiNoKO.jpg'
import chainsawCover from './img/mangaCover/chainsawMan.jpg'
import magilumièreCover from './img/mangaCover/magiLumiere.jpg'
import hopeCover from './img/mangaCover/hopeHappy.jpg'
import sakamatoCover from './img/mangaCover/sakamotoDays.jpg'
import twinCover from './img/mangaCover/twinStar.jpg'
import hokkaidoCover from './img/mangaCover/hokkaidoGals.jpg'
import akabaneCover from './img/mangaCover/akabane.jpg'
import blueCover from './img/mangaCover/blueBox.jpg'
import jjkCover from './img/mangaCover/jujutsu.jpg'
import spyCover from './img/mangaCover/spyFamily.jpg'
import straberryCover from './img/mangaCover/strabery.jpg'
import dandadanCover from './img/mangaCover/dandadan.jpg'
import summer from './img/mangaCover/summer.jpg'
import tokyoCover from './img/mangaCover/tokyoUnderworld.jpg'
import astroCover from './img/mangaCover/astro.jpg'
import vampireCover from './img/mangaCover/vampire.jpg'
import showCover from './img/mangaCover/showha.jpg'
import seraph from './img/mangaCover/seraph.jpg'



const allMangas = []; //Contain all object
let WSJMangas = [];   //Contain the objects supposed to be shown in the first category
let jumpPlusMangas = []; //Contain the objects supposed to be shown in the second category
let othersMangas = [];  //Contain the objects supposed to be shown in the third category
let freeReadMangas = []; //Contain the objects supposed to be shown in the fourth category


    /**
     * This component is a constructor.
     * It contain all the data about the structure of the Manga object that will be shown everywhere on the website.
     * It also, as a constructor, contain various function allowing to get different that about the manga
     */

    export function Manga(cover, title, author, chapterNumber, lastChapterTitle, french, english) {

        this.cover = cover;
        this.title = title;
        this.author = author;
        this.chapterNumber = chapterNumber;

        this.views = () => {
            return Math.ceil(Math.random()*999999) //Views count randomly generated
        }

        this.lastChapterTitle = lastChapterTitle;
        this.french = french;
        this.english = english;
        allMangas.push(this);

    }


    export function arrayRandomize() {
            //Function that randomize the item in the array

            function compareRandom(a, b) {
            return Math.random() - 0.5;
            }
        
            // We use the function to sort all Mangas in a array
            return allMangas.sort(compareRandom);

    }


    export function getWSJ() {
        //Function that randomly select 20 mangas and store them in the WSJ Array
        let numberAlreadyUsed = [];

        do {
        const random = Math.floor(Math.random()*allMangas.length) //Randomize number of views
        const selectedManga = allMangas[random];
        if (!numberAlreadyUsed.includes(random))
        {
            WSJMangas.push(selectedManga)
            numberAlreadyUsed.push(random)
        }
        }

        while (WSJMangas.length < 20)
    }

export function getJumpPlus() {

    //Function that randomly select 20 mangas and store them in the JumpPlus Array
    let numberAlreadyUsed = [];
    do {
      const random = Math.floor(Math.random()*allMangas.length) //Randomize number of views
      const selectedManga = allMangas[random];
      if (!numberAlreadyUsed.includes(random))
       {
           jumpPlusMangas.push(selectedManga)
           numberAlreadyUsed.push(random)
       }
    }
   while (jumpPlusMangas.length < 20)

}

export function getOthers() {

    //Function that randomly select 20 mangas and store them in the Others Array
    let numberAlreadyUsed = [];
    do {
      const random = Math.floor(Math.random()*allMangas.length) //Randomize number of views
      const selectedManga = allMangas[random];
      if (!numberAlreadyUsed.includes(random))
       {
           othersMangas.push(selectedManga)
           numberAlreadyUsed.push(random)
       }
    }
   while (othersMangas.length < 20)

}

export function getFreeRead() {
        //Function that randomly select 20 mangas and store them in the freeRead Array
    let numberAlreadyUsed = [];
    do {
      const random = Math.floor(Math.random()*allMangas.length) //Randomize number of views
      const selectedManga = allMangas[random];
      if (!numberAlreadyUsed.includes(random))
       {
           freeReadMangas.push(selectedManga)
           numberAlreadyUsed.push(random)
       }
    }
   while (freeReadMangas.length < 20)
    
}


//Just adding some manga and their data
new Manga (opCover, 'One Piece', 'EIICHIRO ODA', 1108, 'Chapitre 1008: Allô le monde, vous m\'entendez ?', true, true)
new Manga (blCover, 'Blooming Love', 'DAICHI KAWADA', '024', 'Chapter 24', false, true)
new Manga (jinruiCover, 'Jinrui-Shoku: Blight of Man', 'MITSUCHIYOMARU / YUKI SATO', '021', 'Chapitre 21: Sneak Attack', false, true)
new Manga (elusiveSamurai, 'The Elusive Samurai', 'YUSEI MATSUI', 146, 'Chapitre 146: 1338, Retrouvailles', true, true)
new Manga (tisTime, '\'Tis Time for "Torture," Princess', 'ROBINSON HARUHARA / HIRAKEI', 221, 'Torture 221', true, true)
new Manga (shojoNull, 'Shojo Null', 'KANAE NAKANISHI / AKIMA', '017', 'Chapitre 17: The Police Officer With The Most Heinous Passion', false, true)
new Manga (history, 'History’s Mentalist', 'TOMATO TRI/ NATSUKO URUMA', '015', 'Episode 15: Freelance! Kenko the Monk', false, true)
new Manga (choujinCover, 'Choujin X', 'SUI ISHIDA', '049-3', 'Chapitre 49, Part 3: The Matters Leading Up To August 1999', false, true)
new Manga (kaijuCover, 'KAIJU NO.8 (KAIJU N° 8)', 'NAOYA MATSUMOTO', 103, 'Episode 103', true, true)
new Manga (onkCover, '【OSHI NO KO】', 'AKA AKASAKA X MENGO YOKOYARI', 142, 'RESPONSABILITY', false, true)
new Manga (chainsawCover, 'CHAINSAW MAN', 'TATSUKI FUJIMOTO', 156, 'Episode 56: FLAP FLAP FLAP FLAP VRR VRR VRR', true, true)
new Manga (magilumièreCover, 'Magilumière Co. Ltd.', 'SEKKA IWATA / YU AOKI', 103, 'Chapitre 103: Magikyù !!', true, true)
new Manga (hopeCover, 'Hope You\'re Happy, Lemon', 'MIZUKI KISHIKAWA', '016', 'Chapiter 16', false, true)
new Manga (sakamatoCover, 'SAKAMOTO DAYS', 'YUTO SUZUKI', 156, 'DAY 156: Sportif', true, true)
new Manga (twinCover, 'Twin Star Exorcists', 'YOSHIAKI SUKENO', 127, '#127 Huh?!', true, true)
new Manga (hokkaidoCover, 'Hokkaido Gals Are Super Adorable!', 'KAI IKADA', 109, '109: Chapter 109', true, true)
new Manga (akabaneCover, 'Akane-banashi', 'YUKI SUENAGA / TAKAMASA MOUE', 100, 'Histoire 100: Rakugo multiverse', true, true)
new Manga (blueCover, 'Blue Box', 'KOUJI MIURA', 139, '#139 I\'ve Done My Fair Share', false, true)
new Manga (jjkCover, 'Jujutsu Kaisen', 'GEGE AKUTAMI', 252, 'Chapitre 252 : La bataille du no man\s land de Shijuku (24)', true, true)
new Manga (spyCover, 'SPY x FAMILY', 'TATSUYA ENDO', '095', 'Mission 95', false, true)
new Manga (straberryCover, 'Wild Strawberry', 'IRE YONEMOTO', '016', 'Chapter16: Into The Mouth', false, true)
new Manga (dandadanCover, 'DANDADAN', 'YUKINOBU TATSU', 142, 'Episode 142: Les sucreries, ça suffit', true, true)
new Manga (summer, 'At Summer’s End', 'TAKUYA NISHIO', '011', 'Chapter 11: Winter', false, true)
new Manga (tokyoCover, 'Tokyo Underworld', 'KENJI SAKAKI', '069', 'Chapter 69: Half Executioner Misogi', false, true)
new Manga (astroCover, 'Astro Baby', 'SHIRO MORIYA', '004', 'Chapter 4: The Baby\'s Name', false, true)
new Manga (vampireCover, 'The Pension Life Vampire', 'SHOICHI TAGUCHI', '023', '23RD NIGHT FAMILY AND FRIENDS', false, true)
new Manga (showCover, 'Show-ha Shoten!', 'AKINARI ASAKURA/TAKESHI OBATA', '027', 'Chapitre 27: Manzai and Inversion', false, true)
new Manga (seraph, 'Seraph of the End: Vampire Reign', 'TAKAYA KAGAMI / YAMATO YAMAMOTO / DAISUKE FURUYA', 135, 'Chapitre 135: Front Seats to the End', false, true)

export {allMangas, WSJMangas, jumpPlusMangas, othersMangas, freeReadMangas}
