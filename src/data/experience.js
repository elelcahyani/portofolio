// Data Experience - Edit langsung di sini untuk menambah/mengubah pengalaman
export const experience = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Core Initiative",
    location: "Online",
    type: "Internship",
    start_month: 10, // 1 = January, 2 = February, dst.
    start_year: "2025",
    end_month: 10,
    end_year: "2025",
    is_current: 0, // 0 = sudah selesai, 1 = masih berlangsung
    description: "Program Project Based Virtual Internship Core Initiative x Rakamin",
    responsibilities: [
      "Mempelajari framework JavaScript yakni Vue js",
      "Mampu menghubungkan aplikasi dengan sistem Docker",
      "Mengembangkan website Ecommerce Catalog menggunakan Vue.js",
      "Implementasi desain website yang responsif",
      "Memahami penggunaan konsep API dengan mengembangkan Website Ecommerce katalog yang dapat menampilkan produk melalui Fakestore API"
    ],
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    position: "Bendahara",
    company: "UKM Risalah Maritim",
    location: "Tanjung Pinang",
    type: null,
    start_month: 9,
    start_year: "2024",
    end_month: null,
    end_year: null,
    is_current: 0,
    description: "Mengelola keuangan UKM sesuai dengan anggaran dan jumlah program kerja yang diadakan, Bekerja sama dengan divisi lain untuk memberikan transparansi anggaran yang di alokasikan. Mencatat dan mengakumulasikan jumlah pengeluaran dan pemasukan dalam satu  priode.",
    responsibilities: [
      "Melakukan dokumentasi terhadap setiap transaksi yang dilakukan",
      "Mengatur anggaran yang diberikan dengan proker yang dikerjakan",
      "Berkomunikasi dengan setiap kepala divisi untuk memastikan anggaran yang diberikan dapat disesuaikan dengan program kerja yang dilakukan",
      "Menyiapkan dana darurat untuk setiap program kerja",
      "Memberikan transparansi dalam setiap anggaran yang diberikan dan di alokasikan"
    ],
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 3,
    position: "Data Science",
    company: "Home Credite Indonesia",
    location: "online",
    type: "Internship",
    start_month: 10,
    start_year: "2025",
    end_month: 10,
    end_year: "2025",
    is_current: 0,
    description: "Program Project Based Virtual Internship Home Credit Indonesia x Rakamin",
    responsibilities: [
      "Melakukan Analisis terhadap data dan mencari problem yang dapat diselesaikan dari data tersebut menggunakan Jupyter notebook dan python untuk melakukan tahap pembedahan data (EDA)",
      "Melakukan pre processing dan data cleaning sebelum melakukan pengujian menggunakan 4 model (logistik regression, XGBOOST, Random Forrest, Gradient Boosting",
      "Mengukur performa model menggunakan Metric AUC-ROC sebagai indikator untuk dapat memebedakan  klien baik dan berisiko serta Classification Report termasuk recall dan precision untuk evaluasi rinci",
      "Mendapatkan hasil bahwa model XGBOOST mendapatkan hasil F-1 score yang cukup tinggi dibanding 3 model lainya",
      "Mengembangkan fitur baru dari model XGBOOST dan memberikan Bussines Recomendation berdasarkan hasil tersebut"
    ],
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 4,
    position: "Peserta Samsung Innovationn campus Batch 7", // Edit nama lomba
    company: "Dibimbing", // Edit penyelenggara
    location: "Online", // Edit lokasi
    type: "Competition", // Tipe: Competition
    start_month: 9, // Edit bulan mulai (1-12)
    start_year: "2025", // Edit tahun mulai
    end_month: null, // null karena masih berlangsung
    end_year: null, // null karena masih berlangsung
    is_current: 1, // 1 = masih berlangsung
    description: "Mempelajari Python dan cara kerja sistem IOT dan mengembangkan sistem IOT dengan Artificial  Intelligence", // Edit deskripsi
    responsibilities: [
      "Menyusun tugas dan dobdesk setiap anggota tim dan berperan sebagai Ketua Tim",
      "Mencari ide berdasarkan permasalahan yang ditemui untuk dapat dikembangkan kedalam sistem IOT",
      "Membuat alur program sistem IOT menggunakan flowchart",
      "Melakukan dokumentasi dan presentasi terkait sistem yang dikembangkan"
    ],
    color: "from-green-400 to-emerald-500" // Warna badge
  }
];
