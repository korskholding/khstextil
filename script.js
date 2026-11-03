(function(){
  var h=document.querySelector('.site-header'),b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
  function close(){h.classList.remove('open');b.setAttribute('aria-expanded','false');document.body.classList.remove('noscroll');}
  if(b&&n){b.addEventListener('click',function(){var o=h.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');document.body.classList.toggle('noscroll',o);});
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});}
  window.addEventListener('scroll',function(){h.classList.toggle('scrolled',window.scrollY>8);},{passive:true});
  var T={
    sk:{hi:'Dobrý deň,',ask:'prosím o cenovú ponuku.',name:'Meno',firm:'Firma',mail:'E-mail',tel:'Telefón',country:'Krajina',type:'Typ prevádzky',beds:'Počet lôžok / apartmánov',items:'Položky a množstvá',note:'Poznámka',bye:'Ďakujem.',subj:'Dopyt',done:'Otvorili sme váš e-mailový program s pripraveným dopytom. Stačí ho odoslať.'},
    en:{hi:'Hello,',ask:'I would like to request a quote.',name:'Name',firm:'Company',mail:'Email',tel:'Phone',country:'Country',type:'Type of business',beds:'Number of beds / apartments',items:'Items and quantities',note:'Message',bye:'Thank you.',subj:'Enquiry',done:'Your email app has opened with your enquiry ready. Just press send.'},
    cs:{hi:'Dobrý den,',ask:'prosím o cenovou nabídku.',name:'Jméno',firm:'Firma',mail:'E-mail',tel:'Telefon',country:'Země',type:'Typ provozu',beds:'Počet lůžek / apartmánů',items:'Položky a množství',note:'Poznámka',bye:'Děkuji.',subj:'Poptávka',done:'Otevřeli jsme váš e-mailový program s připravenou poptávkou. Stačí ji odeslat.'},
    de:{hi:'Guten Tag,',ask:'ich bitte um ein Angebot.',name:'Name',firm:'Firma',mail:'E-Mail',tel:'Telefon',country:'Land',type:'Art des Betriebs',beds:'Anzahl Betten / Wohnungen',items:'Artikel und Mengen',note:'Nachricht',bye:'Vielen Dank.',subj:'Anfrage',done:'Ihr E-Mail-Programm wurde mit der vorbereiteten Anfrage geöffnet. Sie müssen sie nur noch absenden.'}
  };
  var L=T[(document.documentElement.lang||'sk').slice(0,2)]||T.sk;
  var f=document.getElementById('dopyt');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    if(!f.checkValidity()){f.reportValidity();return;}
    var v=function(k){var el=f.elements[k];return el?(el.value||'').trim():'';};
    var body=[L.hi,'',L.ask,'',
      L.name+': '+v('meno'),L.firm+': '+v('firma'),L.mail+': '+v('email'),L.tel+': '+(v('telefon')||'-'),
      L.country+': '+v('krajina'),L.type+': '+v('typ'),L.beds+': '+(v('luzka')||'-'),'',
      L.items+':',v('polozky')||'-','',L.note+':',v('sprava')||'-','',L.bye].join('\n');
    var subj=L.subj+' – KHS Textil'+(v('firma')?' – '+v('firma'):'');
    window.location.href='mailto:a.hlavaty@korskholding.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
    var s=document.getElementById('form-status');if(s){s.textContent=L.done;}
  });}
})();
