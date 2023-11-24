// çıktıyı boşluklara yazıyoruz örneğin:
// false
// true
// 1
// gibi

// *Tek seferde bütün kodun çalışması için değişken isimlerini duruma göre verdim.
//!ve operatörü iki tarafında true olması lazım

console.log("Soru-1");
console.log(1 && 3);
//?3;
console.log(1 && 0);
//?0;
console.log([] && 1);
//?1;
//! veya operatörü en az bir taraf true olsa yeter
console.log(0 || false);
//?false;
console.log(0 || true);
//?true;
console.log(1 || true);
//?true;

//if/else - ternary
// kullanıcıdan yaş değeri alan ve yaş >= 18 ise "Yaşınız ... , oy verebilirsiniz.", aksi halde "Yaşınız ... , oy veremezsiniz." uyarısı veren kodu if/else ve ternary kullanarak yazınız
console.log("Soru-2");
//?if
let yas = parseInt(prompt("Yaşınızı giriniz:"));

if (yas >= 18) {
  console.log("Yaşınız " + yas + ", oy verebilirsiniz.");
} else {
  11;
  console.log("Yaşınız " + yas + ", oy veremezsiniz.");
}

//?ternary
let yasT = parseInt(prompt("Yaşınızı giriniz:"));
let mesaj =
  yasT >= 18
    ? "Yaşınız " + yasT + ", oy verebilirsiniz."
    : "Yaşınız " + yasT + ", oy veremezsiniz.";
console.log(mesaj);

//functions
// kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız
console.log("Soru-3");
//?FUNCTİON DECLARATION
function yasHesapla(isim, dogumYili) {
  const buYil = new Date().getFullYear();
  const yas = buYil - dogumYili;
  console.log(`${isim}'in yaşı: ${yas}`);
}
yasHesapla("bahadir", 2001);

//?ARROW FUNCTION
const yasHesaplaArrow = (isimAr, dogumYiliAr) => {
  const buYilAr = new Date().getFullYear();
  const yasAr = buYilAr - dogumYiliAr;
  console.log(`${isimAr}in yaşi: ${yasAr}`);
};
yasHesaplaArrow("bahadir", 2001);

//Array iterators
//  isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.
//  const isimler = [
//   'Ahmet',
//   'mehmet',
//   'ismet',
//   'SAFFET',
//   'Can',
//   'Canan',
//   'Cavidan',
// ];
console.log("Soru-4");
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const kucukHarfIsimler = isimler.map((isim) => isim.toLowerCase());

console.log(kucukHarfIsimler);
console.log(isimler);

// fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalınız.
//const fiyatlar = [100, 250, 50, 89];
console.log("Soru-5");
const fiyatlar = [100, 250, 50, 89];

const dusukFiyatlar = fiyatlar.filter((fiyat) => fiyat < 250);

console.log(dusukFiyatlar);

//  Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeleyiniz.
// const kisiler = [
//   {
//     name: 'Ahmet',
//     surname: 'Can',
//     job: 'developer',
//     age: 30,
//   },
//   {
//     name: 'Mehmet',
//     surname: 'Baki',
//     job: 'tester',
//     age: 35,
//   },
//   {
//     name: 'Nur',
//     surname: 'Ersan',
//     job: 'team lead',
//     age: 40,
//   },
//   {
//     name: 'Merve',
//     surname: 'Veli',
//     job: 'developer',
//     age: 26,
//   }
// ];
console.log("Soru-6");
const kisiler = [
  {
    name: "Ahmet",
    surname: "Can",
    job: "developer",
    age: 30,
  },
  {
    name: "Mehmet",
    surname: "Baki",
    job: "tester",
    age: 35,
  },
  {
    name: "Nur",
    surname: "Ersan",
    job: "team lead",
    age: 40,
  },
  {
    name: "Merve",
    surname: "Veli",
    job: "developer",
    age: 26,
  },
];

const yeniKisiler = kisiler.filter((kisi) => kisi.age < 33);

yeniKisiler.forEach((kisi) => {
  console.log(kisi.name, kisi.age);
});

// Objects
// calisan objesinde … değerlerini consola yazdırınız
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };
console.log("Soru-7");
//? . notasyonu kullanmak istedim ama soy ad isim olarak uygun olmadığı için onu [] ile çağırdım.
const calisan = {
  ad: "Ahmet",
  "soy-ad": "Yilmaz",
  yas: 30,
  is: "developer",
  lokasyon: { sehir: "Ankara", ilce: "Kızılay" },
  diller: ["C", "C++", "Python", "JS"],
  maas: 120000,
};

console.log("Ad:", calisan.ad);
console.log("Soyad:", calisan["soy-ad"]);
console.log("Yaş:", calisan.yas);
console.log("İş:", calisan.is);
console.log("Şehir:", calisan.lokasyon.sehir);
console.log("İlçe:", calisan.lokasyon.ilce);
console.log("Diller:", calisan.diller.join(", "));
console.log("Maaş:", calisan.maas);

// Spread
// araclar ve otomobiller dizilerini başka bir dizide birleştiriniz
// const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
// const otomobiller = ['Tır', 'Otobus', 'Araba', 'SUV'];
console.log("Soru-8");
const araclar = ["Uçak", "Helikopter", "Bisiklet"];
const otomobiller = ["Tır", "Otobüs", "Araba", "SUV"];

const yeniDizi = [...araclar, ...otomobiller];

console.log(yeniDizi);

// calısan objesine ait değerleri yas değerini güncelleyerek yeni bir obje içinde biriktiriniz
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };
// const newCalisan = {...calisan, yas: 35}

//?spread kullanarak kopyaladım ve yaş değerini güncelledim. değişken adının q2 olma sebebi diğer değişkenle çakışması.
console.log("Soru-9");
const calisanQ2 = {
  ad: "Ahmet",
  "soy-ad": "Yilmaz",
  yas: 30,
  is: "developer",
  lokasyon: { sehir: "Ankara", ilce: "Kızılay" },
  diller: ["C", "C++", "Python", "JS"],
  maas: 120000,
};

const yeniCalisan = { ...calisanQ2, yas: 31 };

console.log(yeniCalisan);

//Destructuring
// car objesinden brand, model,name,surname propertilerini destruct ediniz
// const car = {
//     brand: 'BMW',
//     model: 1990,
//     engine: 1.6,
//     owner:{
//       name: 'Ahmet',
//       surname: 'Can',
//   },
// };
//!bu soruda chatgpt den yardım aldım
console.log("Soru-10");
const car = {
  brand: "BMW",
  model: 1990,
  engine: 1.6,
  owner: {
    name: "Ahmet",
    surname: "Can",
  },
};

const {
  brand,
  model,
  owner: { name, surname },
} = car;

console.log("Brand:", brand);
console.log("Model:", model);
console.log("Name:", name);
console.log("Surname:", surname);

// Data fetching
// aşağıdaki url'den data çekerek first name değerini console'da gösteriniz
// let url= 'https://randomuser.me/api/'
//!bu soru maalesef boş. internetten araştırdım aam bilmediğim için buraya yazmak istemedim
