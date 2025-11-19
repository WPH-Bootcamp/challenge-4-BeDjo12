const prompt = require("prompt-sync")({ sigint: true });

let todos = [];

function cleanInput(text) {
  if (typeof text !== "string") return "";
  return text.trim();
}

function generateUniqueId() {
  // TODO: Implementasi fungsi untuk menghasilkan ID unik
  // Ini akan digunakan secara internal untuk setiap objek to-do
  // Contoh: Gabungan waktu saat ini dan angka acak
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
  /*36 untuk memanggil basis numerik maksimum (0-9 a-z)*/
}

function addTodo() {
  // TODO: Implementasi logika untuk menambah to-do baru
  // 1. Minta input teks to-do dari user menggunakan `prompt()`
  let text = prompt("Masukkan to-do baru: ");
  let cleanedText = cleanInput(text);
  // 2. Validasi input: Pastikan teks tidak kosong atau hanya spasi
  if (cleanedText === "") {
    console.log("Gagal: Input tidak boleh kosong.");
    return;
  }
  // 3. Buat objek to-do baru dengan properti: id (dari generateUniqueId), text, dan isCompleted (boolean, default false)
  let newTodo = {
    id: generateUniqueId(),
    text: cleanedText,
    isComplete: false,
  };
  // 4. Tambahkan objek to-do ini ke array `todos`
  todos.push(newTodo);
  // 5. Beri feedback ke user bahwa to-do berhasil ditambahkan
  console.log(`\n Berhasil menambahkan: "${cleanedText}"`);
}

function markTodoCompleted() {
  // TODO: Implementasi logika untuk menandai to-do sebagai selesai
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  listTodos();
  // 2. Minta user memasukkan NOMOR to-do yang ingin ditandai sebagai selesai
  let input = prompt(
    `Masukkan Nomor yang ingin diselesaikan (1-${todos.length}): `
  );
  let indexToMark = parseInt(input) - 1; // index array
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid (1 sampai jumlah to-do)
  if (isNaN(indexToMark) || indexToMark < 0 || indexToMark >= todos.length) {
    console.log("Gagal: Nomor yang dimasukkan tidak valid");
    return;
  }
  // 4. Ubah properti `isCompleted` dari to-do yang dipilih menjadi `true`
  // 5. Beri feedback ke user bahwa to-do berhasil ditandai selesai
  // 6. Tangani kasus jika to-do sudah selesai
  let todo = todos[indexToMark];
  if (todo.isComplete) {
    console.log(`\n To-do "${todo.text}" sudah selesai sebelumnya.`);
  } else {
    todo.isComplete = true;
    console.log(`\n Todo "${todo.text}" Berhasil Selesai!`);
  }
}

function deleteTodo() {
  // TODO: Implementasi logika untuk menghapus to-do
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  listTodos();
  // 2. Minta user memasukkan NOMOR to-do yang ingin dihapus
  let input = prompt(`Masukkan Nomor yang ingin dihapus (1-${todos.length}): `);
  let indexToDelete = parseInt(input) - 1; // index array
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid
  if (
    isNaN(indexToDelete) ||
    indexToDelete < 0 ||
    indexToDelete >= todos.length
  ) {
    console.log("Gagal: Nomor yang dimasukkan tidak valid");
    return;
  }
  // 4. Hapus to-do yang dipilih dari array `todos`
  let [deleteTodo] = todos.splice(indexToDelete, 1);
  // 5. Beri feedback ke user bahwa to-do berhasil dihapus
  console.log('\n Berhasil menghapus: "${deletedTodo.text}');
}

function listTodos() {
  // TODO: Implementasi logika untuk menampilkan semua to-do
  // 1. Tampilkan judul daftar (misal: "--- YOUR TO-DO LIST ---")
  console.log("\n----DAFTAR TO-DO ANDA----");
  // 2. Cek apakah array `todos` kosong. Jika ya, tampilkan pesan "No to-dos to display."
  if (todos.length === 0) {
    console.log("No to-dos to display.");
    return;
  }
  // 3. Jika tidak kosong, iterasi (loop) melalui array `todos`
  // 4. Untuk setiap to-do, tampilkan nomor urut, status ([DONE] atau [ACTIVE]), dan teks to-do
  //    Contoh format: "1. [ACTIVE] | Belajar JavaScript"
  todos.forEach((todo, index) => {
    let number = index + 1;
    let status = todo.isComplete ? "[SELESAI]" : "[AKTIF]";
    console.log(`${number}. ${status} | ${todo.text}`);
  });
  // 5. Tampilkan garis penutup daftar
  console.log("----------------------");
}

function runTodoApp() {
  // TODO: Implementasi logika utama aplikasi (menu interaktif)
  // Ini adalah "otak" aplikasi yang terus berjalan sampai user memilih untuk keluar
  let running = true;
  while (running) {
    // 1. Tampilkan menu perintah yang tersedia (add, complete, delete, list, exit)
    console.log("\n=== MENU PERINTAH ===");
    console.log("  [A]dd      : Tambah to-do baru");
    console.log("  [C]omplete : Tandai to-do sebagai selesai");
    console.log("  [D]elete   : Hapus to-do");
    console.log("  [L]ist     : Tampilkan daftar to-do");
    console.log("  [E]xit     : Keluar dari aplikasi");
    console.log("=====================");
    // 2. Minta user memasukkan perintah menggunakan `prompt()`
    const command = cleanInput(
      prompt("Masukkan perintah Anda: ")
    ).toUpperCase();
    // 3. Gunakan `switch` statement atau `if/else if` untuk memanggil fungsi yang sesuai
    //    berdasarkan perintah yang dimasukkan user
    switch (command) {
      case "A":
        addTodo();
        break;
      case "L":
        listTodos();
        break;
      case "C":
        markTodoCompleted();
        break;
      case "D":
        deleteTodo();
        break;
      case "E":
        running = false;

        // 4. Tangani perintah 'exit' untuk menghentikan loop aplikasi
        console.log("\nSampai jumpa! Aplikasi telah ditutup.");
        break;
      // 5. Tangani input perintah yang tidak valid

      default:
        console.log(
          `\nGagal: Perintah "${command}" tidak valid. Silakan coba lagi.`
        );
    }
  }
}

// Jangan ubah bagian di bawah ini. Ini adalah cara Node.js menjalankan fungsi utama
// dan mengekspor fungsi-fungsi untuk pengujian (jika nanti ada).

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
