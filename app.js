const notices=[
 {date:"01 OCT 2026",title:"Reunión general con padres de familia",text:"Se invita a madres, padres y tutores a la reunión informativa del periodo.",tag:"Importante"},
 {date:"30 SEP 2026",title:"Entrega de documentación escolar",text:"Consulta los requisitos y fechas para entregar la documentación pendiente.",tag:"Control escolar"},
 {date:"28 SEP 2026",title:"Actividad académica de octubre",text:"Consulta los detalles de las actividades programadas para el próximo mes.",tag:"Académico"}
];
const events=[
 {day:"05",month:"OCT",title:"Reunión general de padres",desc:"Auditorio escolar · 17:00 h",type:"REUNIÓN"},
 {day:"09",month:"OCT",title:"Consejo Técnico Escolar",desc:"Suspensión de actividades para estudiantes.",type:"ESCOLAR"},
 {day:"16",month:"OCT",title:"Entrega de evaluaciones",desc:"Consulta con cada grupo el horario correspondiente.",type:"ACADÉMICO"},
 {day:"23",month:"OCT",title:"Actividad cultural",desc:"Patio central · 10:00 h",type:"EVENTO"}
];
const docs=[
 {icon:"📘",title:"Reglamento escolar",text:"Normas de convivencia y funcionamiento.",file:"#"},
 {icon:"📄",title:"Circular informativa",text:"Comunicado general para madres, padres y tutores.",file:"#"},
 {icon:"📝",title:"Formato de justificación",text:"Formato para justificar inasistencias.",file:"#"},
 {icon:"📚",title:"Lista de útiles",text:"Material requerido por grado y grupo.",file:"#"},
 {icon:"📅",title:"Calendario escolar",text:"Fechas y actividades del ciclo escolar.",file:"#"},
 {icon:"☎️",title:"Directorio",text:"Áreas y medios oficiales de contacto.",file:"#"}
];
document.getElementById("noticeGrid").innerHTML=notices.map(n=>`<article class="notice-card"><div class="date">${n.date}</div><h3>${n.title}</h3><p>${n.text}</p><span class="tag">${n.tag}</span></article>`).join("");
document.getElementById("calendarList").innerHTML=events.map(e=>`<article class="calendar-item"><div class="calendar-date">${e.month}<strong>${e.day}</strong></div><div><h3>${e.title}</h3><p>${e.desc}</p></div><span class="type">${e.type}</span></article>`).join("");
document.getElementById("documentGrid").innerHTML=docs.map(d=>`<article class="document-card"><span>${d.icon}</span><h3>${d.title}</h3><p>${d.text}</p><a class="download" href="${d.file}">Consultar documento →</a></article>`).join("");
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("formNote").textContent="Mensaje preparado. En la versión con servidor se enviará al correo institucional.";e.target.reset();});
document.getElementById("showAllNotices").addEventListener("click",()=>alert("En la siguiente versión conectaremos este botón a un archivo/base de datos con el historial completo de avisos."));
