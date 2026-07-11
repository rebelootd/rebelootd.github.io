import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const btn = document.getElementById("simpan");

btn.addEventListener("click", async () => {

  const nama = document.getElementById("nama").value;
  const harga = document.getElementById("harga").value;
  const rating = document.getElementById("rating").value;
  const gambar = document.getElementById("gambar").value;
  const link = document.getElementById("link").value;

  await addDoc(collection(db, "products"), {

    Name: nama,
    price: harga,
    rating: Number(rating),
    image: gambar,
    Link: link

  });

  alert("Produk berhasil ditambahkan! 🎉");

});
