// ── Data ──
const roomData = [
  {n:'101',type:'Standard',status:'occupied',guest:'Vikram Singh',rate:4200},
  {n:'102',type:'Standard',status:'available',guest:null,rate:4200},
  {n:'103',type:'Standard',status:'occupied',guest:'Neha Patel',rate:4200},
  {n:'104',type:'Standard',status:'cleaning',guest:null,rate:4200},
  {n:'105',type:'Standard',status:'occupied',guest:'Simran Kaur',rate:4200},
  {n:'106',type:'Standard',status:'available',guest:null,rate:4200},
  {n:'107',type:'Standard',status:'occupied',guest:'Arun Das',rate:4200},
  {n:'108',type:'Standard',status:'available',guest:null,rate:4200},
  {n:'201',type:'Standard',status:'occupied',guest:'Tanya Roy',rate:4200},
  {n:'202',type:'Standard',status:'occupied',guest:'Shiv Kumar',rate:4200},
  {n:'203',type:'Deluxe',status:'occupied',guest:'Pooja Mishra',rate:6500},
  {n:'204',type:'Deluxe',status:'available',guest:null,rate:6500},
  {n:'205',type:'Deluxe',status:'occupied',guest:'Karan Mehta',rate:6500},
  {n:'206',type:'Deluxe',status:'occupied',guest:'Divya Nair',rate:6500},
  {n:'207',type:'Deluxe',status:'reserved',guest:'Rohan Gupta',rate:6500},
  {n:'208',type:'Deluxe',status:'occupied',guest:'Priya Joshi',rate:6500},
  {n:'209',type:'Deluxe',status:'cleaning',guest:null,rate:6500},
  {n:'210',type:'Deluxe',status:'cleaning',guest:null,rate:6500},
  {n:'301',type:'Deluxe',status:'occupied',guest:'Ananya Singh',rate:6500},
  {n:'302',type:'Deluxe',status:'occupied',guest:'Rohit Verma',rate:6500},
  {n:'303',type:'Deluxe',status:'occupied',guest:'Manish Rao',rate:6500},
  {n:'304',type:'Deluxe',status:'occupied',guest:'Priya Sharma',rate:6500},
  {n:'305',type:'Deluxe',status:'available',guest:null,rate:6500},
  {n:'306',type:'Deluxe',status:'occupied',guest:'Sahil Khan',rate:6500},
  {n:'307',type:'Deluxe',status:'occupied',guest:'Kavya Nair',rate:6500},
  {n:'308',type:'Deluxe',status:'available',guest:null,rate:6500},
  {n:'309',type:'Suite',status:'occupied',guest:'Aman Batra',rate:12000},
  {n:'310',type:'Suite',status:'occupied',guest:'Ritu Kapoor',rate:12000},
  {n:'401',type:'Suite',status:'occupied',guest:'Nikhil Dev',rate:12000},
  {n:'402',type:'Suite',status:'occupied',guest:'Sonal Arora',rate:12000},
  {n:'403',type:'Suite',status:'cleaning',guest:null,rate:12000},
  {n:'404',type:'Suite',status:'occupied',guest:'Amit Sharma',rate:12000},
  {n:'405',type:'Suite',status:'occupied',guest:'Pallavi Iyer',rate:12000},
  {n:'406',type:'Suite',status:'available',guest:null,rate:12000},
  {n:'407',type:'Suite',status:'occupied',guest:'Deepak Tiwari',rate:12000},
  {n:'408',type:'Suite',status:'occupied',guest:'Sneh Arya',rate:12000},
  {n:'409',type:'Suite',status:'available',guest:null,rate:12000},
  {n:'410',type:'Suite',status:'reserved',guest:'Raj Malhotra',rate:12000},
  {n:'501',type:'Presidential',status:'occupied',guest:'Rahul Mehta',rate:28000},
  {n:'502',type:'Presidential',status:'occupied',guest:'Sunita Rao',rate:28000},
  {n:'503',type:'Presidential',status:'available',guest:null,rate:28000},
  {n:'504',type:'Presidential',status:'available',guest:null,rate:28000},
  {n:'411',type:'Standard',status:'occupied',guest:'Lalita Devi',rate:4200},
  {n:'412',type:'Standard',status:'occupied',guest:'Jatin Mehta',rate:4200},
  {n:'413',type:'Standard',status:'occupied',guest:'Ravi Seth',rate:4200},
  {n:'414',type:'Deluxe',status:'occupied',guest:'Nandini Rao',rate:6500},
  {n:'415',type:'Deluxe',status:'occupied',guest:'Suresh Bose',rate:6500},
  {n:'416',type:'Deluxe',status:'occupied',guest:'Hina Malik',rate:6500},
];

let bookings = [
  {guest:'Vikram Singh',room:'101',type:'Standard',checkin:'2026-05-01',checkout:'2026-05-07',nights:6,amount:'₹25,200',status:'checked-in'},
  {guest:'Priya Sharma',room:'304',type:'Deluxe',checkin:'2026-05-06',checkout:'2026-05-09',nights:3,amount:'₹19,500',status:'checked-in'},
  {guest:'Rahul Mehta',room:'501',type:'Presidential',checkin:'2026-05-05',checkout:'2026-05-08',nights:3,amount:'₹84,000',status:'checked-in'},
  {guest:'Rohan Gupta',room:'207',type:'Deluxe',checkin:'2026-05-07',checkout:'2026-05-10',nights:3,amount:'₹19,500',status:'confirmed'},
  {guest:'Raj Malhotra',room:'410',type:'Suite',checkin:'2026-05-08',checkout:'2026-05-12',nights:4,amount:'₹48,000',status:'confirmed'},
  {guest:'Nisha Jain',room:'102',type:'Standard',checkin:'2026-04-28',checkout:'2026-05-04',nights:6,amount:'₹25,200',status:'checked-out'},
  {guest:'Riya Nair',room:'108',type:'Standard',checkin:'2026-04-30',checkout:'2026-05-05',nights:5,amount:'₹21,000',status:'checked-out'},
];

let guests = [
  {name:'Vikram Singh',phone:'+91 98101 23456',email:'vikram@gmail.com',room:'101',id:'Aadhaar',status:'In-House'},
  {name:'Priya Sharma',phone:'+91 99212 34567',email:'priya@outlook.com',room:'304',id:'Passport',status:'In-House'},
  {name:'Rahul Mehta',phone:'+91 70011 22334',email:'rahul.m@corp.in',room:'501',id:'PAN',status:'In-House'},
  {name:'Rohan Gupta',phone:'+91 88765 12309',email:'rohan@example.com',room:'207',id:'Aadhaar',status:'Upcoming'},
  {name:'Riya Nair',phone:'+91 90012 34560',email:'riya@mail.com',room:'—',id:'Driving Licence',status:'Checked-out'},
];

// ── Navigation ──
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  btn.classList.add('active');
}

// ── Modal ──
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if(e.target === o) o.classList.remove('open'); });
});

// ── Toast ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  setTimeout(() => t.style.display = 'none', 2800);
}

// ── Rooms ──
function renderRooms(filter='all') {
  const grid = document.getElementById('rooms-grid');
  const filtered = filter === 'all' ? roomData : roomData.filter(r => r.status === filter);
  const statusColor = {available:'dot-available',occupied:'dot-occupied',cleaning:'dot-cleaning',reserved:'dot-reserved'};
  const statusLabel = {available:'Available',occupied:'Occupied',cleaning:'Cleaning',reserved:'Reserved'};
  grid.innerHTML = filtered.map(r => `
    <div class="room-card ${r.status}" onclick="showRoomDetail('${r.n}')">
      <div class="room-number">${r.n}</div>
      <div class="room-type">${r.type}</div>
      <div class="room-status">
        <span class="room-status-dot ${statusColor[r.status]}"></span>
        ${statusLabel[r.status]}
      </div>
      ${r.guest ? `<div style="font-size:11px;color:var(--text-muted);margin-top:5px">${r.guest}</div>` : ''}
    </div>
  `).join('');
}

function showRoomDetail(num) {
  const r = roomData.find(x => x.n === num);
  document.getElementById('room-modal-title').textContent = 'Room ' + r.n;
  const statusColor = {available:'badge-success',occupied:'badge-danger',cleaning:'badge-info',reserved:'badge-warn'};
  document.getElementById('room-modal-body').innerHTML = `
    <table style="width:100%;font-size:13px">
      <tr><td style="color:var(--text-muted);padding:7px 0">Type</td><td style="text-align:right">${r.type}</td></tr>
      <tr><td style="color:var(--text-muted);padding:7px 0">Status</td><td style="text-align:right"><span class="badge ${statusColor[r.status]}">${r.status}</span></td></tr>
      <tr><td style="color:var(--text-muted);padding:7px 0">Rate</td><td style="text-align:right">₹${r.rate.toLocaleString()}/night</td></tr>
      <tr><td style="color:var(--text-muted);padding:7px 0">Guest</td><td style="text-align:right">${r.guest || '—'}</td></tr>
    </table>
  `;
  openModal('room-modal');
}

function filterRooms(filter, btn) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderRooms(filter);
}

// ── Bookings ──
function renderBookings() {
  const statusClass = {'checked-in':'badge-success','confirmed':'badge-warn','checked-out':'badge-muted'};
  const statusLabel = {'checked-in':'Checked In','confirmed':'Confirmed','checked-out':'Checked Out'};
  document.getElementById('bookings-table').innerHTML = bookings.map((b,i) => `
    <tr>
      <td><strong>${b.guest}</strong></td>
      <td>${b.room} <span style="font-size:11px;color:var(--text-muted)">${b.type}</span></td>
      <td>${b.checkin}</td>
      <td>${b.checkout}</td>
      <td>${b.nights}</td>
      <td><strong>${b.amount}</strong></td>
      <td><span class="badge ${statusClass[b.status]}">${statusLabel[b.status]}</span></td>
      <td><button class="btn btn-ghost" style="padding:5px 10px;font-size:11px" onclick="deleteBooking(${i})">Remove</button></td>
    </tr>
  `).join('');
}

function deleteBooking(i) {
  bookings.splice(i, 1);
  renderBookings();
  showToast('Booking removed.');
}

function addBooking() {
  const first = document.getElementById('b-first').value.trim();
  const last = document.getElementById('b-last').value.trim();
  if (!first || !last) { showToast('Please enter guest name.'); return; }
  const cin = document.getElementById('b-in').value;
  const cout = document.getElementById('b-out').value;
  const nights = cin && cout ? Math.max(1, Math.round((new Date(cout)-new Date(cin))/(86400000))) : 1;
  const type = document.getElementById('b-type').value;
  const room = document.getElementById('b-room').value;
  const rates = {Standard:4200,Deluxe:6500,Suite:12000,Presidential:28000};
  const amount = '₹' + (nights * rates[type]).toLocaleString();
  bookings.unshift({guest:first+' '+last,room,type,checkin:cin||'2026-05-06',checkout:cout||'2026-05-07',nights,amount,status:'confirmed'});
  renderBookings();
  closeModal('booking-modal');
  showToast('Booking confirmed for ' + first + '!');
  ['b-first','b-last','b-phone','b-in','b-out'].forEach(id => document.getElementById(id).value = '');
}

// ── Guests ──
function renderGuests() {
  const statusClass = {'In-House':'badge-success','Upcoming':'badge-warn','Checked-out':'badge-muted'};
  document.getElementById('guests-table').innerHTML = guests.map(g => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div class="avatar" style="width:28px;height:28px;font-size:11px">${g.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div>
          ${g.name}
        </div>
      </td>
      <td>${g.phone}</td>
      <td style="color:var(--text-muted)">${g.email}</td>
      <td>${g.room}</td>
      <td>${g.id}</td>
      <td><span class="badge ${statusClass[g.status]}">${g.status}</span></td>
    </tr>
  `).join('');
}

function addGuest() {
  const first = document.getElementById('g-first').value.trim();
  const last = document.getElementById('g-last').value.trim();
  if (!first || !last) { showToast('Please enter guest name.'); return; }
  guests.unshift({
    name: first+' '+last,
    phone: document.getElementById('g-phone').value || '+91 —',
    email: document.getElementById('g-email').value || '—',
    room: document.getElementById('g-room').value || '—',
    id: document.getElementById('g-id').value,
    status: 'Upcoming'
  });
  renderGuests();
  closeModal('guest-modal');
  showToast('Guest added: ' + first + ' ' + last);
  ['g-first','g-last','g-phone','g-email','g-room'].forEach(id => document.getElementById(id).value = '');
}

// ── Tabs ──
function switchTab(id, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

// ── Revenue Chart ──
function renderChart() {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const vals = [82000,95000,71000,113000,98000,142000,120000];
  const max = Math.max(...vals);
  const chart = document.getElementById('revenue-chart');
  const labels = document.getElementById('chart-labels');
  chart.innerHTML = vals.map((v,i) => `
    <div class="bar-wrap">
      <div style="font-size:10px;color:var(--text-muted);margin-bottom:4px">₹${(v/1000).toFixed(0)}K</div>
      <div class="bar" style="height:${Math.round((v/max)*88)}px"></div>
    </div>
  `).join('');
  labels.innerHTML = days.map(d => `<span style="font-size:10px;color:var(--text-muted);flex:1;text-align:center">${d}</span>`).join('');
}

// ── Init ──
renderRooms();
renderBookings();
renderGuests();
renderChart();

// Set today's date as default for booking inputs
const today = new Date().toISOString().split('T')[0];
const tomorrow = new Date(Date.now()+86400000).toISOString().split('T')[0];
document.getElementById('b-in').value = today;
document.getElementById('b-out').value = tomorrow;
