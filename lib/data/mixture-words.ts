
export interface MixtureWord {
  word: string;
  options: string[];
  correctIndex: number;
  image: string;
}

export const wordExercises: MixtureWord[] = [
  {
    word: "kot",
    options: ["kot", "kop", "kos", "koc"],
    correctIndex: 0,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320083/kot_rxflxu.jpg",
  },
  {
    word: "dom",
    options: ["dop", "dom", "don", "dow"],
    correctIndex: 1,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320084/home_egan7x.jpg",
  },
  {
    word: "słońce",
    options: ["słoń", "slonc", "słońce", "słońze"],
    correctIndex: 2,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320084/sun_furv0v.jpg",
  },
  {
    word: "jabłko",
    options: ["jabłko", "jabułko", "japłko", "iabłko"],
    correctIndex: 0,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320083/apple_up1dos.jpg",
  },
  {
    word: "piłka",
    options: ["tiłka", "biłka", "piłka", "piłpa"],
    correctIndex: 2,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749675890/pexels-oandremoura-2471259_cmw63g.jpg",
  },
  {
    word: "kwiaty",
    options: ["kmiaty", "kwiaty", "bwiaty", "krzew"],
    correctIndex: 1,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749933850/flower_imayfk.jpg",
  },
  {
    word: "samochód",
    options: ["samochód", "sawochód", "samolot", "zamochód"],
    correctIndex: 0,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1750075914/pexels-alexgtacar-745150-1592384_aubtof.jpg",
  },
  {
    word: "mama",
    options: ["mawa", "wawa", "mana", "mama"],
    correctIndex: 3,
    image:
      "https://res.cloudinary.com/dadi3oed4/image/upload/v1750624028/pexels-polina-tankilevitch-3875205_rmutr1.jpg",
  },
  {
    word: "truskawki",
    options: ["tróskawki", "truskawki", "truspawki", "trampki"],
    correctIndex: 1,
    image:
      "https://res.cloudinary.com/dadi3oed4/image/upload/v1751975557/strawberries_hz2xvp.jpg",
  },
]