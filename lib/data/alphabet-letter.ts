interface WordExercise {
  word: string;
  options: string[];
  correctIndex: number;
  image: string;
}

export const wordExercises: WordExercise[] = [
  { word: "a", options: ["a", "o", "e", "u"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753906050/pexels-pixabay-51383_sgoefm.jpg" },
  { word: "b", options: ["d", "p", "b", "h"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1754068359/pexels-padli-772478_wmnvfs.jpg" },
  { word: "c", options: ["c", "s", "o", "a"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1754253691/pexels-pixabay-533342_cdhc5l.jpg" },
  { word: "d", options: ["r", "d", "s", "p"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320084/home_egan7x.jpg" },
  { word: "e", options: ["a", "e", "i", "o"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1754417850/elf_nvrygs.png" },
  { word: "f", options: ["g", "f", "t", "b"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1754833902/fortepian_ajldn2.jpg" },
  { word: "g", options: ["g", "q", "p", "b"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1755086961/grzebien_inbjhs.jpg" },
  { word: "h", options: ["m", "n", "h", "t"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1755547806/hak_zyk4fh.jpg" },
  { word: "i", options: ["i", "l", "j", "e"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1755672828/iguana_orpjpd.jpg" },
  { word: "j", options: ["j", "g", "b", "k"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320083/apple_up1dos.jpg" },
  { word: "k", options: ["k", "p", "o", "t"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320083/kot_rxflxu.jpg" },
  { word: "l", options: ["l", "i", "t", "e"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1756150955/doll_s0yj3q.jpg" },
  { word: "m", options: ["n", "b", "r", "m"], correctIndex: 3, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1756413296/mrowka_eyf76i.jpg" },
  { word: "n", options: ["n", "m", "u", "v"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1756712436/narty_lmvh1k.jpg" },
  { word: "o", options: ["u", "o", "a", "e"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1756712717/oko_cbkb5u.jpg" },
  { word: "p", options: ["a", "k", "p", "l"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1756712837/parasol_exi3ez.jpg" },
  { word: "q", options: ["g", "o", "q", "p"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1756712961/quad_fvevnc.jpg" },
  { word: "r", options: ["d", "p", "r", "f"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1757323522/rower_c6dbog.jpg" },
  { word: "s", options: ["p", "d", "s", "c"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1757709984/sok_ur61ow.jpg" },
  { word: "t", options: ["r", "t", "k", "i"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1758223287/phone_pqlybk.jpg" },
  { word: "u", options: ["o", "u", "a", "e"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1758537253/ule_ri4qat.jpg" },
  { word: "v", options: ["w", "v", "u", "y"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1758825448/volvo_tkbybf.jpg" },
  { word: "w", options: ["m", "n", "w", "v"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1759005498/wiatrak_oezoyo.jpg" },
  { word: "x", options: ["x", "k", "z", "t"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1759689103/xylofon_uewrc0.png" },
  { word: "y", options: ["i", "u", "y", "e"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1759821545/yeti_zzcs08.png" },
  { word: "z", options: ["z", "s", "x", "t"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1760119016/zebra_ampktd.jpg" },
]