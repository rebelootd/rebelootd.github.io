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
  const link = document.getElementById("link").value;

  // Ambil file gambar
  const file = document.getElementById("fileGambar").files[0];
    alert("Pilih gambar dulu ya 😊");
    return;
  }

  // Upload ke Cloudinary
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "rebelootd_upload");

  const upload = await fetch(
    "https://api.cloudinary.com/v1_1/lbjs42j0/image/upload",
    {
      method: "POST",
      body: formData
    }
  );

  const hasil = await upload.json();

  const gambar = hasil.secure_url;

  await addDoc(collection(db, "products"), {
    Name: nama,
    price: Number(harga),
    rating: Number(rating),
    image: gambar,
    Link: link
  });

  alert("Produk berhasil ditambahkan! 🎉");

});
