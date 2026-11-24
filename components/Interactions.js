"use client";
import { useEffect } from "react";

/* Every animation and interaction on the page: intro, logo flight, hero feed,
   story viewer, call sheet, BTS grow, services, split-flap board, reveals.
   Plain DOM code, run once after hydration. */
export default function Interactions() {
  useEffect(() => {
    if (window.__caBooted) return; // guard against double-run in dev Strict Mode
    window.__caBooted = true;
    (()=>{
      const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
      const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
      const wait=ms=>new Promise(r=>setTimeout(r,ms));
      if('scrollRestoration' in history) history.scrollRestoration='manual';
      if(!location.hash) scrollTo(0,0);

      /* nav + footer: the real logo badge, built from the same handwritten strokes */
      const wordPaths=$('#intro .w').innerHTML.replace(/<circle[^>]*><\/circle>|<circle[^>]*\/>/g,'');
      const badge=`<circle class="d" cx="650" cy="650" r="640"/><circle class="r" cx="650" cy="650" r="596"/><g transform="translate(100 536)">${wordPaths}</g>`;
      $$('svg.badge').forEach(s=>s.innerHTML=badge);

      /* REC pill counts a 20-second take, then loops */
      const recT=$('#recT'), recB=$('#recB'); let recS=performance.now();
      (function rec(now){if(document.body.classList.contains('ready')){const t=((now-recS)/1000)%20;
        recT.textContent='00:'+String(Math.floor(t)).padStart(2,'0');recB.style.setProperty('--p',(t/20).toFixed(3))}else recS=now;
        requestAnimationFrame(rec)})(recS);

      /* headline fills its column exactly (no dead space beside it) */
      const h1=$('.hero h1'), lines=$$('.hero h1 .l>span');
      function fit(){h1.style.fontSize='100px';const w=Math.max(...lines.map(l=>l.offsetWidth)), col=h1.parentElement.clientWidth;
        h1.style.fontSize=Math.min(250,Math.max(54,col/w*100*0.99))+'px'}
      document.fonts.ready.then(fit); document.fonts.addEventListener('loadingdone',fit); addEventListener('resize',fit,{passive:true}); fit();

      /* hero film reel is pure CSS (rolls on its own); nothing to drive here */

      /* ---------- Intro: pen writes the word stroke by stroke ---------- */
      const intro=$('#intro'), strokes=$$('#intro .w path'), pen=$('#intro .pen');
      const lens=strokes.map(p=>p.getTotalLength()), total=lens.reduce((a,b)=>a+b,0);
      const starts=[];lens.reduce((a,l,i)=>(starts[i]=a,a+l),0);
      strokes.forEach((p,i)=>{p.style.strokeDasharray=lens[i];p.style.strokeDashoffset=lens[i]});
      let done=false;
      document.documentElement.style.overflow='hidden';
      // BTS footage behind the sign: the small 720p cut is plenty once it's darkened and softened
      const introVid=$('#introVid');
      if(!reduce){
        introVid.src='/assets/video/bts-sm.mp4';
        introVid.addEventListener('playing',()=>introVid.classList.add('on'),{once:true});
        introVid.play().catch(()=>{});
      }
      function drawTo(s){
        let tip=null;
        strokes.forEach((p,i)=>{const d=Math.max(0,Math.min(lens[i],s-starts[i]));p.style.strokeDashoffset=lens[i]-d;if(d>0&&d<lens[i])tip=p.getPointAtLength(d)});
        if(tip){pen.setAttribute('cx',tip.x);pen.setAttribute('cy',tip.y);pen.style.opacity=1}else pen.style.opacity=0;
      }
      function write(ms){return new Promise(res=>{const t0=performance.now();
        const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
        (function f(now){if(done)return res();const t=Math.min(1,(now-t0)/ms);drawTo(total*(.15*t+.85*ease(t)));t<1?requestAnimationFrame(f):res()})(t0)})}
      // the finished sign turns into the real logo and flies into the nav slot
      async function finish(){
        if(done)return;done=true;drawTo(total);pen.style.opacity=0;
        const skipped=!intro.classList.contains('logo');
        intro.classList.add('ringed','lit','logo','say');
        if(skipped&&!reduce) await wait(500);
        scrollTo(0,0);
        const sign=$('.sign'), a=sign.getBoundingClientRect(), b=$('#navLogo').getBoundingClientRect();
        const s=b.width/a.width;
        intro.classList.add('fly');
        document.documentElement.style.overflow='';
        document.body.classList.add('ready');
        setTimeout(()=>$('.hero h1').classList.add('unclip'),1300);
        try{sessionStorage.setItem('ca_seen','1')}catch(e){}
        const anim=sign.animate([{transform:'none'},{transform:`translate(${b.left-a.left}px,${b.top-a.top}px) scale(${s})`}],
          {duration:reduce?1:1050,easing:'cubic-bezier(.76,0,.24,1)',fill:'forwards'});
        await anim.finished;
        document.body.classList.add('landed');intro.classList.add('gone');
        introVid.pause();introVid.removeAttribute('src');introVid.load(); // free the decoder once the intro is gone
      }
      intro.addEventListener('click',finish);
      addEventListener('keydown',e=>{if(['Escape',' ','Enter'].includes(e.key))finish()},{once:true});
      (async()=>{
        let seen=false;try{seen=sessionStorage.getItem('ca_seen')}catch(e){}
        if(reduce){drawTo(total);intro.classList.add('ringed','lit','say');await wait(900);return finish()}
        const k=seen?.5:1;
        await wait(300*k);
        await write(2500*k); if(done)return;
        pen.style.opacity=0; intro.classList.add('ringed'); await wait(650*k); if(done)return;
        intro.classList.add('lit'); await wait(950*k); if(done)return;
        intro.classList.add('logo','say'); await wait(1150*k); finish();
      })();

      /* ---------- nav ---------- */
      const nav=$('#nav');
      /* nav lives only at the top of the page (position:absolute), so it scrolls away */
      /* BTS film: progress through its tall wrapper drives the grow */
      const bts=$('#bts'), btsFrame=$('.bts-frame'), btsVid=$('#btsVid');
      let btsLoaded=false;
      const onScroll=()=>{
        const r=bts.getBoundingClientRect(), span=r.height-innerHeight;
        const p=Math.min(1,Math.max(0,(innerHeight*.55-r.top)/(span+innerHeight*.55)));
        btsFrame.style.setProperty('--p',reduce?1:(p<.02?0:Math.min(1,p*1.25)).toFixed(4));
      };
      new IntersectionObserver(([en])=>{
        if(en.isIntersecting){
          if(!btsLoaded){btsVid.src=innerWidth<760?'/assets/video/bts-sm.mp4':'/assets/video/bts.mp4';btsLoaded=true}
          btsVid.play().catch(()=>{});
        } else btsVid.pause();
      },{rootMargin:'50% 0px'}).observe(bts);
      addEventListener('scroll',onScroll,{passive:true});onScroll();

      /* ---------- brand stories (from Instagram highlights) ---------- */
      const HL='https://www.instagram.com/stories/highlights/';
      // [name, file, story caption, highlight id, category, what we made, with]
      const brands=[
        ['JBL','jbl','@munagauchan_official × @jblindia','17866689696128183','Audio','In-store creator reel at Reliance Digital','@munagauchan_official'],
        ['Tuborg','tuborg','@tuborg_india × @collabadda','17882339322223078','Beverages','Creator-led party reel','@vivekkeshari1'],
        ['HSBC','hsbc','@nauheedc × @hsbc_in','17945373929881522','Banking','Event coverage &amp; creator vlog','@nauheedc'],
        ['Mastercard','mastercard','@mastercardindia × @iamnehanagar','17897017166960626','Payments','Travel-booking comedy skit','@iamnehanagar'],
        ['Snitch','snitch','@chandrahaaschowdary24 × @snitch.co.in','17953843235844880','Menswear','Lookbook reel, styled at home','@chandrahaaschowdary24'],
        ['mCaffeine','mcaffeine','“Pata Lagao” celeb shoot','17990413667537217','Personal care','“Pata Lagao” celeb shoot','Shivaji Satam'],
        ['Villain','villain','@the_fashioncaptain × @villainlife.official','18055743385770517','Fragrance','Underwater fashion film','@the_fashioncaptain'],
        ['SUGAR','sugar','@trysugar creator collab','17935921019894132','Cosmetics','Product-demo creator reel','Creator collab'],
        ['Code','code','@codeofficial_in × @asimriaz77.official','18049013269830994','Grooming · Wild Stone','Live gig content','@asimriaz77.official'],
        ['Secret Temptation','secret','@secrettemptationofficial × @mr.mnv','18037658765077585','Fragrance','Valentine’s surprise skit','@mr.mnv'],
        ['Garima Agarbatti','garima','@sakshitanwarworld × @garimaagarbatti','18009927614531370','Incense','Festive ritual reel','@sakshitanwarworld'],
      ];
      const SHOW=7, wrap=$('#stories');
      wrap.innerHTML=brands.slice(0,SHOW).map(([n,f],i)=>`<button class="story rv" style="--i:${i}" data-i="${i}" aria-label="Watch ${n} story">
        <span class="ring"><i><img src="/assets/img/logos/${f}.webp" width="240" height="240" alt="${n} logo" loading="lazy"></i></span>
        <span class="nm">${n}</span></button>`).join('')+
        `<button class="clap-btn story rv" style="--i:${SHOW}" id="clapBtn" aria-label="View all ${brands.length} brands">
          <span class="cb"><span class="cb-stick"></span><span class="cb-body"><b>+${brands.length-SHOW}</b><small>TAKE 02</small></span></span>
          <span class="nm">View all brands</span></button>`;

      /* call sheet rows */
      $('#castList').innerHTML=brands.map(([n,f,,,cat,what,who],i)=>`<li style="--i:${i}">
        <span class="sc">SC.${String(i+1).padStart(2,'0')}</span>
        <img src="/assets/img/logos/${f}.webp" width="240" height="240" alt="" loading="lazy">
        <span class="bn"><b>${n}</b><small>${cat}</small></span>
        <span class="wh">${what}<small>with ${who}</small></span>
        <button class="go" data-i="${i}">Watch ▶</button></li>`).join('');

      /* clapper transition -> call sheet */
      const fx=$('#clapFx'), cast=$('#cast');
      async function openCast(){
        if(reduce){cast.classList.add('open');document.documentElement.style.overflow='hidden';return}
        document.documentElement.style.overflow='hidden';
        fx.classList.add('on');                       // board drops in, stick open
        await wait(620); fx.classList.add('clack');   // CLACK
        await wait(380); cast.classList.add('open');  // call sheet underneath
        fx.classList.add('cut');                      // board splits like a cut
        await wait(700); fx.className='';
      }
      function closeCast(){cast.classList.remove('open');document.documentElement.style.overflow=''}
      $('#clapBtn').addEventListener('click',e=>{e.stopPropagation();const b=e.currentTarget;b.classList.add('snap');setTimeout(()=>b.classList.remove('snap'),400);setTimeout(openCast,180)});
      $('#castX').onclick=closeCast;
      cast.addEventListener('click',e=>{if(e.target===cast)closeCast();const g=e.target.closest('.go');if(g)open(+g.dataset.i)});
      addEventListener('keydown',e=>{if(e.key==='Escape'&&cast.classList.contains('open')&&!sv.classList.contains('open'))closeCast()});

      const sv=$('#sv'), svImg=$('#svImg'), bars=$('#svBars');
      bars.innerHTML=brands.map(()=>'<i></i>').join('');
      const barEls=[...bars.children];
      let cur=0, t0=0, raf=0, paused=false, pauseAt=0; const DUR=5000;
      // preload neighbours only when viewer is in use
      const pre=i=>{const b=brands[(i+brands.length)%brands.length];const im=new Image();im.src=`/assets/img/hl/${b[1]}.webp`};
      function show(i){
        if(i<0)i=0; if(i>=brands.length)return close();
        cur=i;const [n,f,c,id]=brands[i];
        svImg.src=`/assets/img/hl/${f}.webp`;svImg.alt=`${n} × CollabAdda story`;
        $('#svAv').style.backgroundImage=`url(/assets/img/logos/${f}.webp)`;
        $('#svName').textContent=n;$('#svCap').textContent=c;$('#svLink').href=HL+id+'/';
        barEls.forEach((b,j)=>b.style.setProperty('--f',j<i?1:0));
        if(i<SHOW) wrap.children[i].classList.add('seen');
        pre(i+1);t0=performance.now();
      }
      function loop(now){if(!paused){const p=Math.min(1,(now-t0)/DUR);barEls[cur].style.setProperty('--f',p);if(p>=1)show(cur+1)}raf=requestAnimationFrame(loop)}
      function open(i){sv.classList.add('open');document.documentElement.style.overflow='hidden';show(i);cancelAnimationFrame(raf);raf=requestAnimationFrame(loop);$('#svX').focus()}
      function close(){sv.classList.remove('open');if(!cast.classList.contains('open'))document.documentElement.style.overflow='';cancelAnimationFrame(raf)}
      wrap.addEventListener('click',e=>{const b=e.target.closest('.story:not(.clap-btn)');if(b)open(+b.dataset.i)});
      $$('.sv-nav button').forEach(b=>b.addEventListener('click',()=>show(cur+ +b.dataset.d)));
      $('#svP').onclick=()=>show(cur-1);$('#svN').onclick=()=>show(cur+1);$('#svX').onclick=close;
      sv.addEventListener('click',e=>{if(e.target===sv)close()});
      addEventListener('keydown',e=>{if(!sv.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
      const card=$('.sv-card');
      card.addEventListener('pointerdown',()=>{paused=true;pauseAt=performance.now()});
      addEventListener('pointerup',()=>{if(paused){t0+=performance.now()-pauseAt;paused=false}});

      /* ---------- services: the row for this part of the scroll opens ---------- */
      const svc=$('#services'), svcItems=[...$('#svcList').children], svcN=$('#svcN');
      let svcCur=0;
      function svcSet(i){if(i===svcCur)return;svcCur=i;svcItems.forEach((li,j)=>li.classList.toggle('on',j===i));svcN.textContent='0'+(i+1)}
      function svcScroll(){const r=svc.getBoundingClientRect(), span=r.height-innerHeight;
        const p=Math.min(.999,Math.max(0,-r.top/span));svcSet(Math.floor(p*svcItems.length))}
      addEventListener('scroll',svcScroll,{passive:true});svcScroll();
      svcItems.forEach((li,i)=>li.querySelector('.svc-head').addEventListener('click',()=>{
        const span=svc.offsetHeight-innerHeight;scrollTo({top:svc.getBoundingClientRect().top+scrollY+span*(i+.5)/svcItems.length,behavior:reduce?'auto':'smooth'})}));

      /* ---------- split-flap board: tiles flap 0→9→target every time it comes into view ---------- */
      const SD=45; // ms per half-flap
      const leaves=d=>`<span class="h t"><b>${d}</b></span><span class="h b"><b>${d}</b></span><span class="h t fa"><b>${d}</b></span><span class="h b fb"><b>${d}</b></span>`;
      $$('.cells').forEach(c=>{c.innerHTML=[...c.dataset.v].map(d=>`<span class="cell" data-d="${d}" data-cur="${d}" style="--sd:${SD}ms">${leaves(d)}</span>`).join('')});
      const allCells=$$('.cell');
      const setAll=(el,d)=>{el.querySelectorAll('b').forEach(b=>b.textContent=d);el.dataset.cur=d};
      function flip(el,next){ // one mechanical flip: old top half falls, new bottom half lands
        const cur=el.dataset.cur, [t,b,fa,fb]=el.querySelectorAll('b');
        t.textContent=next; b.textContent=cur; fa.textContent=cur; fb.textContent=next;
        el.classList.remove('go'); void el.offsetWidth; el.classList.add('go');
        setTimeout(()=>{b.textContent=next;el.dataset.cur=next},SD*2);
      }
      let flapTimers=[], played=false;
      function playBoard(){
        flapTimers.forEach(clearTimeout); flapTimers=[];
        allCells.forEach((el,k)=>{
          setAll(el,'0');
          const target=+el.dataset.d, steps=10+target; // one full lap of digits, then land
          for(let i=1;i<=steps;i++) flapTimers.push(setTimeout(()=>flip(el,String(i%10)),k*110+i*(SD*2+12)));
        });
      }
      if(!reduce){
        new IntersectionObserver(([en])=>{
          if(en.intersectionRatio>=.45&&!played){played=true;playBoard()}
          else if(!en.isIntersecting){played=false} // flips again next time you come back
        },{threshold:[0,.45]}).observe($('.flap'));
      }

      /* ---------- reveal on scroll ---------- */
      const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
      $$('.rv').forEach(el=>io.observe(el));

      /* ---------- drag-to-scroll reels (mouse only) ---------- */
      const reels=$('#reels');let down=false,sx=0,sl=0,moved=false;
      reels.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=reels.scrollLeft});
      addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>5){moved=true;reels.classList.add('drag')}reels.scrollLeft=sl-dx});
      addEventListener('pointerup',()=>{down=false;reels.classList.remove('drag')});
      reels.addEventListener('click',e=>{if(moved){e.preventDefault();moved=false}},true);
      reels.addEventListener('dragstart',e=>e.preventDefault());
    })();
  }, []);
  return null;
}
