const projects={
desert:{label:'01 / GAME DEVELOPMENT',title:'DesertRunner',lead:'An endless desert. A finite set of clever systems.',tags:['Unity','C#','Universal Render Pipeline'],body:`<img class="case-image" src="assets/desert.svg" alt="Concept illustration of DesertRunner’s desert trail"><p class="case-caption">Portfolio concept illustration inspired by the project report; not an in-game screenshot.</p><p>DesertRunner, titled <strong>DESERT DASH</strong> in-game, is a three-lane 3D endless runner set in a sun-baked canyon. Ride a sandboard, collect coins, jump over logs, slide beneath arches, and dodge boulders and approaching coyotes.</p><div class="case-stats"><div><strong>3</strong><span>Movement lanes</span></div><div><strong>6 × 40</strong><span>Recycled track units</span></div><div><strong>2</strong><span>Power-ups</span></div></div><h3>The engineering challenge</h3><p>Make an endless world feel varied while keeping object creation under control. The track uses six recycled segments, with pooled scenery, obstacles, and coins. Procedural patterns vary the challenge while preserving a route through each obstacle sequence.</p><h3>What makes it work</h3><ul><li><strong>Responsive movement:</strong> smooth lane switching, custom jump gravity, and a timed slide, with keyboard and touch-swipe input.</li><li><strong>Progressive difficulty:</strong> speed rises from 12 to 28 units per second; harder patterns and coyotes enter as the pace increases.</li><li><strong>Power-ups:</strong> an 8-second Magnet attracts coins, while a Shield lasts up to 12 seconds and absorbs one collision.</li><li><strong>Procedural content:</strong> models are assembled from Unity primitives, with code-generated sound effects and music.</li><li><strong>A complete game loop:</strong> menu, play, pause, and game-over states, plus a locally saved best score.</li></ul><h3>Built to keep evolving</h3><p>The project supports replacing generated objects with custom models. The report identifies richer animation, additional environments, and online leaderboards as future enhancements.</p><p class="case-note">The technical details here are drawn from the project report. A playable build and gameplay screenshots are not included in this portfolio yet.</p>`,links:[['Read project report ↗','assets/DesertRunner-Report.pdf']]},
bug:{label:'02 / AI-ASSISTED DEVELOPMENT',title:'AI-Powered Bug Fixing Platform',lead:'Turning debugging into a more guided workflow.',tags:['AI/ML','Java','Python','JavaScript','HTML/CSS'],body:`<h3>The idea</h3><p>An AI-assisted platform that detects code bugs and suggests fixes through a user interface. The focus is on connecting a problem in the code to a useful next step.</p><h3>Project context</h3><p>Developed as part of my academic and self-learning work at SR University. It brings together my interest in developer tools, debugging, and practical AI-assisted applications.</p><h3>What it does</h3><p>The platform analyzes code, detects bugs using AI/ML techniques, and suggests fixes. A UI workflow lets you review the suggestions, accept or reject fixes, and track code quality improvements over time.</p><h3>What I explored</h3><ul><li>Bug detection and suggested corrections.</li><li>A user interface for moving through the debugging workflow.</li><li>Problem-solving and translating an idea into a functional prototype.</li></ul><p class="case-note">The cover is an illustrative portfolio visual. A live demo and project-specific source link have not been provided.</p>`,links:[['Visit my GitHub ↗','https://github.com/Sprusheeth']]},
tourist:{label:'03 / SIH HACKATHON',title:'Smart Tourist Safety Monitoring System',lead:'A real-world safety idea, prototyped in 24 hours.',tags:['SIH','24-hour Hackathon','Java','JavaScript','HTML/CSS','SQL','Real-time alerts'],body:`<h3>The challenge</h3><p>Build a prototype around real-time tourist safety alerts during the SIH 24-hour hackathon.</p><h3>What it does</h3><p>A real-time monitoring system that tracks tourist locations, detects safety threats, and sends instant alerts to authorities. It was built as a team, delivering a functional prototype under intense time pressure.</p><h3>Working under a deadline</h3><p>This project was part of my hands-on work at SR University, collaborating with peers, planning project structure, and delivering a functional prototype under time pressure.</p><h3>The takeaway</h3><p>A short hackathon demands clear priorities, fast communication, and practical problem-solving. The project brought those skills together around a useful safety-focused application.</p><p class="case-note">The map on the cover is an illustrative project visual, not a live monitoring system. A live demo and project-specific repository have not been provided.</p>`,links:[['Visit my GitHub ↗','https://github.com/Sprusheeth']]},
blog:{label:'04 / FRONTEND DEVELOPMENT',title:'Blog Website',lead:'A clean interface for a better reading experience.',tags:['HTML','CSS','JavaScript'],body:`<h3>The idea</h3><p>A responsive blog page built with HTML, CSS, and JavaScript, with a clean user interface at its core.</p><h3>What it includes</h3><p>Built from scratch with HTML, CSS, and JavaScript: clean typography, smooth animations, a mobile-first design, a well-structured content layout, and category filtering.</p><h3>Learning by building</h3><p>Part of my academic and self-learning projects, the blog gave me hands-on practice with frontend development, page structure, and responsive presentation.</p><h3>Focus areas</h3><ul><li>A straightforward, readable interface.</li><li>Responsive layout across screen sizes.</li><li>Working with core web technologies.</li></ul><p class="case-note">The editorial cover is an illustrative portfolio visual. A live blog URL and project-specific source link have not been provided.</p>`,links:[['Visit my GitHub ↗','https://github.com/Sprusheeth']]}
};
const certs=[["Cloud Developing", "aws", "Nov 2025", "aws-cloud-developing.pdf"], ["Cloud Web Application Builder", "aws", "Nov 2025", "aws-cloud-web-application-builder.pdf"], ["Cloud Security Builder", "aws", "Nov 2025", "aws-cloud-security-builder.pdf"], ["Cloud Foundations", "aws", "Mar 2025", "aws-cloud-foundations.pdf"], ["Data Engineering", "aws", "Mar 2025", "aws-data-engineering.pdf"], ["Networking Basics", "cisco", "Dec 2024", "cisco-networking-basics.pdf"], ["Endpoint Security", "cisco", "Dec 2024", "cisco-endpoint-security.pdf"], ["Junior Cybersecurity Analyst", "cisco", "Dec 2024", "cisco-junior-cybersecurity-analyst.pdf"], ["Data Analytics Essentials", "cisco", "Dec 2024", "cisco-data-analytics-essentials.pdf"], ["Software Engineering", "infosys", "Sep 2025", "infosys-software-engineering.pdf"], ["Probability & Statistics using Python", "infosys", "Apr 2025", "infosys-probability-statistics-python.pdf"], ["Machine Learning with Python", "infosys", "Dec 2024", "infosys-machine-learning-python.pdf"], ["Introduction to AI", "infosys", "Oct 2024", "infosys-intro-ai.pdf"], ["Introduction to Deep Learning", "infosys", "Oct 2024", "infosys-deep-learning.pdf"], ["Introduction to NLP", "infosys", "Oct 2024", "infosys-nlp.pdf"], ["Computer Vision 101", "infosys", "Oct 2024", "infosys-computer-vision-101.pdf"], ["Front End Development", "infosys", "Oct 2024", "infosys-front-end-development.pdf"], ["UNIX & Linux Fundamentals", "infosys", "Oct 2024", "infosys-unix-linux.pdf"], ["Robotic Process Automation", "infosys", "Oct 2024", "infosys-rpa.pdf"], ["Prelude", "infosys", "Oct 2024", "infosys-prelude.pdf"], ["Matrix Algebra for Engineers", "infosys", "Apr 2024", "infosys-matrix-algebra.pdf"], ["Digital Electronics", "infosys", "Mar 2024", "infosys-digital-electronics.pdf"]];
const issuers={aws:'AWS Academy',cisco:'Cisco',infosys:'Infosys Springboard'};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

/* WORK / INFO views */
const views={work:$('#view-work'),info:$('#view-info')};
function show(v,push){
  if(!views[v])v='work';
  Object.entries(views).forEach(([k,el])=>el.hidden=k!==v);
  $$('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===v)));
  if(push)history.replaceState(null,'','#'+v);
  window.scrollTo({top:0,behavior:'instant'});
}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.view,true)));
show(location.hash.slice(1)==='info'?'info':'work',false);

/* project case-study dialog */
const dialog=$('#project-dialog');let lastTrigger=null;
$$('[data-project]').forEach(btn=>btn.addEventListener('click',()=>{
  const p=projects[btn.dataset.project];if(!p)return;lastTrigger=btn;
  $('#dialog-content').innerHTML=`<p class="eyebrow">${p.label}</p><h2 id="dialog-title" class="case-title">${p.title}</h2><p class="case-lead">${p.lead}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="case-body">${p.body}</div><div class="case-links">${p.links.map(([l,u])=>`<a class="button" href="${u}" target="_blank" rel="noopener">${l}</a>`).join('')}</div>`;
  dialog.showModal();dialog.scrollTop=0;
}));
$('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>lastTrigger?.focus({preventScroll:true}));

/* cursor-following preview on the work list */
const preview=$('#preview'),list=$('#work-list');
const covers={desert:'#e8b574',bug:'#dcdde9',tourist:'#dee6d6',blog:'#e6d7c8'};
function fill(id,num){
  const p=projects[id];preview.style.background=covers[id];
  preview.innerHTML=id==='desert'
   ?`<img src="assets/desert.svg" alt=""><span>${num}</span><span style="background:#f5e9ce;padding:4px 8px;align-self:flex-start">Concept illustration</span>`
   :`<span>${num}</span><span class="big">${num.replace(/\D/g,'')}</span><span class="cap">${p.lead}</span>`;
}
$$('.row',list).forEach(row=>{
  row.addEventListener('mouseenter',()=>{fill(row.dataset.project,$('.num',row).textContent);preview.classList.add('on');});
  row.addEventListener('mouseleave',()=>preview.classList.remove('on'));
});
list.addEventListener('mousemove',e=>{
  const w=270,h=340;let x=e.clientX+32;if(x+w>innerWidth-12)x=e.clientX-32-w;
  const y=Math.max(70,Math.min(innerHeight-h-56,e.clientY-h/2));
  preview.style.transform=`translate(${x}px,${y}px)`;
});

/* credentials */
const certList=$('#cert-list');
const short=d=>{const[m,y]=d.split(' ');return`${m.toUpperCase()} ${y.slice(2)}`};
function renderCerts(f){
  certList.innerHTML=certs.filter(c=>f==='all'||c[1]===f).map((c,i)=>`<a class="crow" href="assets/certs/${c[3]}" target="_blank" rel="noopener"><span class="n">[ ${String(i+1).padStart(2,'0')} ]</span><span class="t">${c[0]}</span><span class="iss">${issuers[c[1]]}</span><span class="d">[ ${short(c[2])} ]</span></a>`).join('');
}
renderCerts('all');
$$('[data-cert-filter]').forEach(b=>b.addEventListener('click',()=>{
  $$('[data-cert-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  renderCerts(b.dataset.certFilter);
}));

/* email, year, clock */
$('#copy-email').addEventListener('click',async()=>{const s=$('#copy-status');try{await navigator.clipboard.writeText('Sprusheethrao.m@gmail.com');s.textContent='Email copied.';}catch{s.textContent='Sprusheethrao.m@gmail.com';}});
$('.yr').textContent=new Date().getFullYear();
const clock=$('#clock'),tick=()=>clock.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());
tick();setInterval(tick,30000);
