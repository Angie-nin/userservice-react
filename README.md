# UserService React App

## Beskrivning

Detta projekt är en frontend-applikation byggd med React (Vite). Applikationen fungerar som en Single Page Application (SPA) och hämtar data från ett separat API (UserService).

Syftet är att visa och hantera användardata på ett tydligt och användarvänligt sätt.

## Funktionalitet

* Hämtar användare från API (`GET /api/Users`)
* Visar användare i ett responsivt grid
* Sökfunktion (filtrerar på namn, email och roll)
* Visar antal användare
* Loading-indikator vid hämtning av data
* Visuell markering av användarroll (Admin/User)

## Teknologier

* React
* Vite
* JavaScript
* CSS

## Hur man kör applikationen

### 1. Starta API (UserService)

* Öppna UserService i Visual Studio
* Starta projektet (https)
* API:t körs på:
  https://localhost:7055

### 2. Starta React-applikationen

Öppna terminal i projektmappen:

```
cd userservice-react
npm install
npm run dev
```

Öppna sedan i webbläsaren:
http://localhost:5173

## Viktigt att veta

* API:t måste vara igång för att frontend ska fungera
* Databasen skapas automatiskt vid första uppstart
* Testanvändare seedas automatiskt (5 st)
* Gemensamt lösenord för testanvändare: `Test123!`

## AI-användning

AI har använts som stöd för:

* Strukturering av React-komponenter
* Felsökning (CORS, npm, setup)
* Förbättring av UI/UX
* Kodförslag och refaktorering
* Hjälp med struktur i ReadMe

All AI-genererad kod har granskats och anpassats efter projektets behov.

## Reflektion

Projektet demonstrerar integration mellan frontend (React) och backend (ASP.NET Core API). Fokus har legat på tydlig struktur, användarvänlighet och fungerande kommunikation mellan systemen.
