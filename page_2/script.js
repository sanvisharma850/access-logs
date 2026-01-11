const list = document.getElementById("list");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* ==============================
   1. CULPRITS (ONLY THESE WORK)
   ============================== */
const culprits = [
  {
    name: "Dr. Mehta",
    username: "dr_mehta",
    password: "admin42"
  }
];

/* ==============================
   2. FAKE EMPLOYEES (46)
   ============================== */
const fakeEmployees = [
  { name:"Aarav Kumar", username:"aarav12", password:"x7k2p9" },
  { name:"Rahul Verma", username:"rahul04", password:"p0x9az" },
  { name:"Neha Sharma", username:"neha88", password:"q2m91z" },
  { name:"Vikram Singh", username:"vikram77", password:"7y2nqa" },
  { name:"Aditi Mehra", username:"aditi23", password:"m92kzx" },
  { name:"Siddharth Jain", username:"sid_j", password:"z1p9a3" },
  { name:"Pooja Patel", username:"pooja_p", password:"v8k1x0" },
  { name:"Arjun Malhotra", username:"arjun_m", password:"r2a9c7" },
  { name:"Sneha Iyer", username:"sneha_i", password:"1x9qma" },
  { name:"Rohit Khanna", username:"rohit_k", password:"9kax12" },
  { name:"Manish Gupta", username:"manishg", password:"w92kq1" },
  { name:"Tanvi Joshi", username:"tanvi_j", password:"8p3x2k" },
  { name:"Karthik Rao", username:"karthik_r", password:"k9x2pa" },
  { name:"Nisha Arora", username:"nisha_a", password:"0m2xkp" },
  { name:"Varun Das", username:"varun_d", password:"px92ka" },
  { name:"Abhishek Roy", username:"abhi_roy", password:"2qk9pa" },
  { name:"Isha Kapoor", username:"isha_k", password:"a92xpk" },
  { name:"Aman Tiwari", username:"aman_t", password:"p9xq2k" },
  { name:"Sonal Bansal", username:"sonal_b", password:"kxa912" },
  { name:"Nitin Sharma", username:"nitin_s", password:"2pxk91" },
  { name:"Ritika Sen", username:"ritika_s", password:"x9p2ak" },
  { name:"Yash Agarwal", username:"yash_a", password:"m9p2xk" },
  { name:"Deepak Mishra", username:"deepak_m", password:"k2pxa9" },
  { name:"Kiran Desai", username:"kiran_d", password:"9xp2ka" },
  { name:"Mohit Saxena", username:"mohit_s", password:"p92kxa" },
  { name:"Ankit Yadav", username:"ankit_y", password:"2x9pak" },
  { name:"Priya Nair", username:"priya_n", password:"kx2p9a" },
  { name:"Rakesh Pandey", username:"rakesh_p", password:"92kpxa" },
  { name:"Shivani Kulkarni", username:"shivani_k", password:"x2k9pa" },
  { name:"Harsh Vardhan", username:"harsh_v", password:"pk92xa" },
  { name:"Mehul Shah", username:"mehul_s", password:"9xpka2" },
  { name:"Kavya Goyal", username:"kavya_g", password:"p9k2xa" },
  { name:"Saurabh Jain", username:"saurabh_j", password:"xk9pa2" },
  { name:"Ritu Chawla", username:"ritu_c", password:"2kp9xa" },
  { name:"Naveen Pillai", username:"naveen_p", password:"p2k9xa" },
  { name:"Simran Kaur", username:"simran_k", password:"xkp92a" },
  { name:"Ajay Rawat", username:"ajay_r", password:"92xapk" },
  { name:"Divya Malhotra", username:"divya_m", password:"k9px2a" },
  { name:"Gaurav Sinha", username:"gaurav_s", password:"2k9xpa" },
  { name:"Bhavya Jain", username:"bhavya_j", password:"px2k9a" },
  { name:"Pankaj Thakur", username:"pankaj_t", password:"k92xpa" },
  { name:"Saloni Mathur", username:"saloni_m", password:"x2p9ka" },
  { name:"Tarun Oberoi", username:"tarun_o", password:"9kp2xa" },
  { name:"Rupal Shah", username:"rupal_s", password:"x9k2pa" },
  { name:"Nilesh Patil", username:"nilesh_p", password:"p2x9ka" },
  { name: "Rhea Sharma", username: "rhea_92", password: "silence" },
  { name: "Ananya Singh", username: "ananya_7", password: "lastclue" },
  { name: "Kunal Mehra", username: "kunal_m", password: "bloodmoon" },
];

/* ==============================
   3. MERGE → TOTAL = 50
   ============================== */
const employees = [...fakeEmployees, ...culprits];
shuffle(employees);

/* ==============================
   4. DISPLAY DATA
   ============================== */
employees.forEach(emp => {
  list.innerHTML += `
    <div class="employee">
      <div>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${emp.name}</div>
      <div>Username : ${emp.username}</div>
      <div>Password : ${emp.password}</div>
    </div>
  `;
});

/* ==============================
   5. FINAL LOGIN CHECK
   ============================== */
let attempts = 0;

function check() {
  if (attempts >= 2) {
    document.getElementById("msg").innerText = "TRIES EXCEEDED";
    return;
  }

  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  const admin = culprits[0];

  if (u === admin.username && p === admin.password) {
    // Store flag for audio autoplay
    sessionStorage.setItem('playAudio', 'true');
    
    // REDIRECT TO ADMIN PAGE
    window.location.href = "https://sanvisharma850.github.io/access-logs/Admin/";
  } else {
    attempts++;
    if (attempts >= 2) {
      document.getElementById("msg").innerText = "TRIES EXCEEDED";
    }
  }
}

/* ==============================
   6. ANTI-COPY (TIME WASTE)
   ============================== */
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("contextmenu", e => e.preventDefault());