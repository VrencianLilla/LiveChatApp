# Descrierea aplicatiei
Am dezvoltat o aplicatie web folosind Node.js WebSocket si Angular, care permite utilizatorilor sa comunice in timp real.
Aplicatia a fost deployata folosind Vercel si Render.
Aceasta aplicatie simuleaza foarte bine un sistem real de comunicare intr-un bloc de locuinte, unde locatarii pot semnala probleme, pot cere suport si pot interactiona direct intre ei sau cu adminitratorii.

## Cum functioneaza?
La accesarea linkului https://frontend-qcrggiub4-lillas-projects-f6353234.vercel.app/ , utilizatorul este intampinat de o pagina de login, unde isi introduce numele. Dupa apasarea butonului "Enter Chat", acesta este redirectionat carte pagina de conversatie de tip Chat.
In zoda de chat, utilizatorii pot trimite si primi mesaje instant. Toti utilizatorii conectati pot vedea in timp real mesajele celorlalti, ceea ce permite o comunicare rapida si eficienta.
Aplicatia suporta mai multi utilizatori simultan, fiecare avand posibilitatea de a raporta probleme, de a cere ajutor sau de a discuta intre ei.
Atunci cand un nou utilizator se conecteaza, toti ceilalti primesc automat in chat un mesaj de sistem de forma: SYSTEM: *numele utilizatorului care a intrat in conversatie* joined the chat. Acest mesaj ii anunta pe toti ca un nou particiapant a intrat in conversatie.
De asemenea, fiecare mesaj afiseaza ora exacta in care a fost trimisa, pentru a pastra claritatea si contextul discutie. (Trebuie sa scrieti pe campul de text ceva ca sa puteti vizualiza mesajul anterior)

## Instructiuni pentru instalare si rulare
### Clonarea proiectului:
$ git clone https://github.com/VrencianLilla/LiveChatApp.git
$ cd LiveChatApp
### Backend (local):
$ cd backend
$ npm install <- instaleaza dependentele
$ node index.js <- porneste serverul
### Frontend (local):
$ cd frontend
$ npm install
$ ng serve
### Conectarea Frontend <-> Backend:
In Angular unde initializezi Socket.IO:
const socket = io('http://localhost:3000')
Daca este hostat pe Render atunci:
const socket = io('https://livechatapp-bd18.onrender.com')

## Organizarea proiectului
Pentru planificarea si organizarea sarcinilor am folosit Trello, unde am creat un dashboard dedicat proiectului. Acolo am structurat activitatile pe coloane precum:
  TO DO - cerinte de implementat
  In Progress - task-uri aflate in dezvoltare
  Testing - functionalitati care necesita verificare
  Done - elemente finalizate
  Necesitati - linkuri, site-uri utile
Acest dashboard m-a ajutat sa urmaresc progresul, sa prioritez sarcinile si sa mentin o imagine clara asupra intregului flux de lucru.
https://trello.com/invite/b/6990a5eae7e13441a9254239/ATTI394b3a217b87f47637e28ba19b3fe4c725B03A60/resident-live-chat


