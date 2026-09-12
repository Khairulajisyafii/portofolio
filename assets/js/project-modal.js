const projectData = {
  efficiweb: {
    title: "Efficiweb",
    subtitle: "Minimalist Frontend Developer Companion",
    youtubeId: "dQw4w9WgXcQ", 
    repoLink: "https://github.com/Khairulajisyafii/Efficiweb",
    webLink: "https://www.mediafire.com/file/8z0f59ys4t2f7ud/Efficiweb+2.0.rar/file",
    webLabel: "DOWNLOAD",
    description: `
      <h3>1. Latar Belakang Masalah (The Problem)</h3>
      <p>Sebagai Frontend Developer, aktivitas sehari-hari sering melibatkan berbagai aset kecil seperti kode warna, link dokumentasi, file Figma, API, hingga potongan kode CSS yang digunakan berulang kali. Meskipun terlihat sederhana, mencari dan berpindah-pindah antara berbagai aplikasi untuk mengakses aset tersebut dapat mengganggu fokus dan memperlambat workflow.</p>
      <p>Masalah tersebut mendorong saya untuk membuat <strong>Efficiweb</strong>, sebuah aplikasi desktop ringan yang membantu Frontend Developer menyimpan dan mengakses aset coding dari satu tempat tanpa harus sering berpindah aplikasi.</p>

      <h3>2. Solusi (The Solution)</h3>
      <p><strong>Efficiweb</strong> dirancang sebagai companion yang selalu tersedia di sisi layar developer. Aplikasi ini memungkinkan pengguna menyimpan berbagai aset yang sering digunakan dan mengaksesnya dengan cepat ketika sedang melakukan coding.</p>
      <p>Saya berfokus pada dua hal utama: <strong>mempermudah pengelolaan aset coding</strong> dan <strong>meminimalkan gangguan terhadap area kerja utama developer</strong>.</p>

      <h3>3. Fitur Utama (Core Features)</h3>
      <p><strong>Smart Asset Management</strong><br>Efficiweb menyediakan satu tempat untuk menyimpan berbagai kebutuhan coding sehari-hari.</p>
      <ul>
        <li><strong>Color Palette:</strong> Pengguna dapat memasukkan kode warna dalam berbagai format seperti HEX, RGB, atau HSL. Sistem kemudian memproses dan menyimpan representasi warna tersebut sehingga pengguna dapat menyalin warna yang dibutuhkan hanya dengan satu klik.</li>
        <li><strong>Global & Project Links:</strong> Pengguna dapat menyimpan link yang sering digunakan, seperti dokumentasi, file Figma, dan API. Setiap link dapat diberi nama dan ikon emoji untuk mempermudah identifikasi.</li>
        <li><strong>CSS Vault:</strong> Potongan kode CSS yang sering digunakan dapat disimpan dan digunakan kembali tanpa harus mencari kembali dari project atau file sebelumnya.</li>
      </ul>
      <p><strong>Dynamic Resizable UI</strong><br>Efficiweb dirancang untuk menggunakan ruang layar seminimal mungkin agar tidak mengganggu code editor.</p>
      <p>Sidebar dapat diubah ukurannya secara dinamis. Ketika ukurannya diperkecil hingga batas tertentu, teks navigasi secara otomatis disembunyikan dan digantikan dengan ikon sehingga aplikasi dapat berubah menjadi sebuah toolbar vertikal yang ringkas.</p>

      <h3>4. Kompleksitas Teknis (Technical Highlights)</h3>
      <p>Efficiweb dibangun sebagai aplikasi desktop ringan menggunakan <strong>Python dan CustomTkinter</strong>, dengan <strong>JSON sebagai local database</strong> untuk menyimpan data pengguna.</p>
      <p>Salah satu bagian yang paling menantang adalah membuat antarmuka yang tetap responsif ketika pengguna melakukan resize window secara cepat. Saya perlu mengatur perubahan ukuran, layout, visibility elemen, serta transisi antara tampilan penuh dan tampilan icon-only agar aplikasi tetap nyaman digunakan.</p>

      <h3>5. Pembelajaran yang Saya Dapatkan (Learning Outcomes)</h3>
      <p>Melalui project ini, saya belajar bahwa sebuah aplikasi tidak selalu harus memiliki banyak fitur untuk menyelesaikan sebuah masalah. Dengan memahami workflow pengguna, saya dapat memfokuskan aplikasi pada masalah kecil tetapi terjadi berulang kali dalam aktivitas sehari-hari.</p>
    `
  },
  waveflow: {
    title: "Waveflow",
    subtitle: "Terpusat menggabungkan manajemen proyek Kanban dengan CI/CD",
    youtubeId: "dQw4w9WgXcQ",
    repoLink: "https://github.com/Khairulajisyafii/Waveflow-",
    webLink: "https://waveflow-sepia.vercel.app/",
    webLabel: "VISIT WEB",
    description: `
      <h3>1. Latar Belakang Masalah (The Problem)</h3>
      <p>Dalam proses pengembangan perangkat lunak modern, tim developer sering menggunakan berbagai platform untuk menjalankan workflow mereka. Manajemen tugas biasanya dilakukan melalui platform seperti Trello atau Jira, sementara proses testing dan deployment dipantau melalui platform seperti GitHub. Kondisi ini membuat workflow menjadi terfragmentasi.</p>
      <p>Akibatnya, anggota tim dan project manager dapat kesulitan mendapatkan gambaran menyeluruh mengenai hubungan antara pekerjaan yang sedang dilakukan dengan kondisi kode. Sebuah task mungkin terlihat sudah selesai, tetapi belum tentu kode yang dihasilkan berhasil melewati proses testing atau bahkan dapat menyebabkan masalah pada sistem.</p>

      <h3>2. Solusi (The Solution)</h3>
      <p>Untuk mengatasi masalah tersebut, saya mengembangkan <strong>Waveflow</strong>, sebuah platform terpusat yang menggabungkan manajemen proyek berbasis Agile Kanban dengan pemantauan status CI/CD.</p>
      <p>Melalui Waveflow, tim dapat mengelola task, berkolaborasi dalam satu project, dan memantau hasil proses testing serta deployment dari satu dashboard. Dengan demikian, proses pengembangan menjadi lebih terintegrasi dan tim dapat mengetahui kondisi kode tanpa harus berpindah-pindah platform.</p>

      <h3>3. Fitur Utama (Core Features)</h3>
      <ul>
        <li><strong>Automated CI/CD Webhook Integration:</strong> Waveflow menyediakan endpoint webhook yang dapat dihubungkan dengan GitHub Actions. Setiap kali proses testing atau deployment selesai, GitHub secara otomatis mengirimkan hasil proses tersebut ke Waveflow. Status pipeline kemudian diperbarui secara otomatis menjadi SUCCESS atau FAILED.</li>
        <li><strong>Real-Time Collaborative Kanban Board:</strong> Waveflow menyediakan papan Kanban interaktif dengan beberapa tahap seperti To Do, In Progress, Review, dan Done. Perubahan task dapat tersinkronisasi secara otomatis.</li>
        <li><strong>Role-Based Access Control (RBAC):</strong> Waveflow menerapkan sistem role untuk mengatur akses dalam sebuah project. Owner dan Admin memiliki hak untuk mengelola anggota.</li>
        <li><strong>Dynamic UI & Dark Mode:</strong> Waveflow memiliki antarmuka yang responsif dengan dukungan Light Mode dan Dark Mode yang dibuat secara dinamis menggunakan CSS Variables.</li>
      </ul>

      <h3>4. Kompleksitas Teknis (Technical Highlights)</h3>
      <p>Waveflow dibangun menggunakan arsitektur full-stack yang memanfaatkan teknologi web modern.</p>
      <ul>
        <li><strong>Frontend & Backend:</strong> Aplikasi dikembangkan menggunakan <strong>Next.js dengan App Router dan TypeScript</strong>.</li>
        <li><strong>Database & ORM:</strong> Data aplikasi disimpan menggunakan <strong>PostgreSQL</strong> dan dikelola melalui <strong>Prisma ORM</strong>.</li>
        <li><strong>Authentication & Security:</strong> Waveflow menerapkan autentikasi dengan password hashing menggunakan bcrypt serta session management menggunakan JOSE/JWT.</li>
        <li><strong>CI/CD & Webhook Communication:</strong> Waveflow menerima payload dari GitHub Actions, memvalidasi request menggunakan secret, kemudian menerjemahkan hasil pipeline menjadi status di dashboard.</li>
      </ul>

      <h3>5. Pembelajaran yang Saya Dapatkan (Learning Outcomes)</h3>
      <p>Melalui project ini, saya belajar bagaimana berbagai sistem dapat berkomunikasi satu sama lain melalui internet dan bagaimana sebuah workflow software development dapat diintegrasikan ke dalam satu sistem.</p>
      <p>Saya juga belajar merancang sistem autentikasi, mengelola database relasional, serta memastikan webhook dapat memvalidasi request menggunakan secret tanpa mengekspos kredensial pengguna.</p>
    `
  }
};

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  document.getElementById('pm-title').innerText = data.title;
  document.getElementById('pm-subtitle').innerText = data.subtitle;
  document.getElementById('pm-desc').innerHTML = data.description;
  
  // Set iframe (placeholder youtube id)
  const iframe = document.getElementById('pm-youtube');
  iframe.src = "https://www.youtube.com/embed/" + data.youtubeId;

  // Set links
  const repoBtn = document.getElementById('pm-repo');
  if (data.repoLink) {
    repoBtn.style.display = 'inline-block';
    repoBtn.href = data.repoLink;
  } else {
    repoBtn.style.display = 'none';
  }

  const webBtn = document.getElementById('pm-web');
  if (data.webLink) {
    webBtn.style.display = 'inline-block';
    webBtn.href = data.webLink;
    webBtn.innerText = data.webLabel || "VISIT WEB";
  } else {
    webBtn.style.display = 'none';
  }

  document.getElementById('projectModalOverlay').style.display = 'flex';
}

function closeProjectModal() {
  document.getElementById('projectModalOverlay').style.display = 'none';
  // Stop video playing
  const iframe = document.getElementById('pm-youtube');
  iframe.src = "";
}
