# Asteroiden-Tracker

Ein Dashboard, um Live-Details über Asteroiden, die die Erde umkreisen, abzurufen.

# Quick Start

## Docker

Wenn du Docker installiert hast, kannst du diese Anweisungen folgen:

### Build the image
```bash
docker-compose build
```

### Start the app
```bash
docker-compose up 
```
Wenn du diesen Prozess abgeschlossen hast, solltest du die Anwendung auf http://localhost:3000 hosten können.

## Local Environment

Für diese Anwendung ist Node Package Manager erförderlich.

### Install dependencies
```bash
npm install
```

### Start the app
```bash
npm run dev
```
Wenn du diesen Prozess abgeschlossen hast, solltest du die Anwendung auf http://localhost:3000 hosten können.

# Anwendung

Auf diese Anwendung kann man:
- Metrics über Asteroiden schauen wie Größe, durchschnittliche Geschwindigkeit und Magnitude 
- Das erste und das letzte beobachtete Datum des jeweiligen Asteroiden sowie der Planeten herausfinden, die er umkreist.
- Daten über die Entfernung zwischen der Asteroid und die Erde analysieren 
- Zwischen verschiedenen Asteroiden navigieren oder einen zufälligen Asteroid auswählen
