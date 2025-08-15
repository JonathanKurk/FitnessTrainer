export const workouts = [
    {
        id: 'pushup-beginner',
        name: 'Liegestützen Basis',
        level: 'Anfänger',
        target: 'Oberkörper',
        sequence: [
            { type: 'exercise', name: 'Liegestützen (auf Knien)', duration: 60, display: '1 Minute Liegestützen auf den Knien. Langsam und kontrolliert, 8-12 Wiederholungen anstreben.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Durchatmen und entspannen.' },
            { type: 'exercise', name: 'Liegestützen (auf Knien)', duration: 60, display: 'Zweite Runde! Fokus auf saubere Ausführung, auch wenn es schwerer wird.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause. Du machst das super!' },
            { type: 'exercise', name: 'Plank', duration: 45, display: '45 Sekunden Plank halten. Körper gerade wie ein Brett, gleichmäßig atmen.' },
            { type: 'rest', name: 'Erholung', duration: 60, display: '1 Minute Erholung. Trinke etwas Wasser.' },
            { type: 'exercise', name: 'Liegestützen (auf Knien)', duration: 45, display: 'Finale! Gib nochmal alles bei den Liegestützen auf den Knien.' }
        ]
    },
    {
        id: 'pushup-intermediate',
        name: 'Liegestützen Fortgeschritten',
        level: 'Fortgeschritten',
        target: 'Oberkörper',
        sequence: [
            { type: 'exercise', name: 'Standard-Liegestützen', duration: 60, display: '1 Minute Standard-Liegestützen. 15-20 Wiederholungen anpeilen.' },
            { type: 'rest', name: 'Kurze Pause', duration: 20, display: '20 Sekunden kurze Verschnaufpause.' },
            { type: 'exercise', name: 'Engere Liegestützen', duration: 45, display: '45 Sekunden Diamond Push-ups. Schwieriger, aber mega effektiv für den Trizeps!' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Das war anspruchsvoll!' },
            { type: 'exercise', name: 'Breite Liegestützen', duration: 45, display: '45 Sekunden breite Liegestützen. Spüre die äußere Brustmuskulatur arbeiten.' },
            { type: 'rest', name: 'Erholung', duration: 45, display: '45 Sekunden Erholung. Bereite dich auf die Plank-Variante vor.' },
            { type: 'exercise', name: 'Plank mit Armheben', duration: 60, display: '60 Sekunden Plank mit alternierenden Armheben. Core-Stabilität ist gefragt!' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause. Gleich hast du es geschafft!' },
            { type: 'exercise', name: 'Standard-Liegestützen', duration: 90, display: 'Finale: 90 Sekunden gemischte Liegestützen. Wechsle zwischen den Varianten!' }
        ]
    },
    {
        id: 'core-beginner',
        name: 'Bauch Basis Training',
        level: 'Anfänger',
        target: 'Bauch',
        sequence: [
            { type: 'exercise', name: 'Crunches', duration: 45, display: '45 Sekunden Crunches. Konzentriere dich auf die Bauchmuskulatur.' },
            { type: 'rest', name: 'Pause', duration: 20, display: '20 Sekunden Pause.' },
            { type: 'exercise', name: 'Beinheben (flach)', duration: 45, display: '45 Sekunden Beinheben. Arbeite an deinem unteren Bauch.' },
            { type: 'rest', name: 'Pause', duration: 20, display: '20 Sekunden Pause.' },
            { type: 'exercise', name: 'Russischer Twist (ohne Gewicht)', duration: 45, display: '45 Sekunden Russian Twist. Trainiert die seitlichen Bauchmuskeln.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Du machst das toll!' },
            { type: 'exercise', name: 'Plank', duration: 60, display: '60 Sekunden Plank. Der ganze Rumpf arbeitet jetzt.' },
            { type: 'rest', name: 'Vorbereitung', duration: 30, display: '30 Sekunden Vorbereitung für die Seitstütze.' },
            { type: 'exercise', name: 'Seiten-Plank (links)', duration: 30, display: '30 Sekunden linke Seite. Seitliche Bauchmuskeln aktivieren!' },
            { type: 'exercise', name: 'Seiten-Plank (rechts)', duration: 30, display: '30 Sekunden rechte Seite. Gleichmäßig auf beiden Seiten trainieren.' },
            { type: 'rest', name: 'Cool-down', duration: 30, display: '30 Sekunden Cool-down. Langsam entspannen und dehnen.' }
        ]
    },
    {
        id: 'fullbody-beginner',
        name: 'Ganzkörper Einsteiger',
        level: 'Anfänger',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Liegestützen (auf Knien)', duration: 45, display: '45 Sekunden Liegestützen auf Knien für den Oberkörper.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Crunches', duration: 45, display: '45 Sekunden Crunches für die Bauchmuskulatur.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Plank', duration: 45, display: '45 Sekunden Plank - ganzer Körper arbeitet.' },
            { type: 'rest', name: 'Erholung', duration: 45, display: '45 Sekunden Erholung. Du machst das großartig!' },
            { type: 'exercise', name: 'Beinheben (flach)', duration: 30, display: '30 Sekunden Beinheben für den unteren Bauch.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Liegestützen (auf Knien)', duration: 45, display: 'Nochmal 45 Sekunden Liegestützen. Du wirst stärker!' }
        ]
    },
    {
        id: 'legs-beginner',
        name: 'Beine Basis Training',
        level: 'Anfänger',
        target: 'Beine',
        sequence: [
            { type: 'exercise', name: 'Kniebeugen', duration: 60, display: '1 Minute Kniebeugen. Füße schulterbreit, Po nach hinten schieben, Knie nicht über Zehen.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Lockere deine Beine.' },
            { type: 'exercise', name: 'Ausfallschritte (alternierend)', duration: 60, display: '1 Minute Ausfallschritte. Abwechselnd die Beine nach vorne, Knie über dem Knöchel.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Super gemacht!' },
            { type: 'exercise', name: 'Wadenheben', duration: 45, display: '45 Sekunden Wadenheben. Auf die Zehenspitzen stellen und wieder senken.' },
            { type: 'rest', name: 'Erholung', duration: 60, display: '1 Minute Erholung. Hol dir etwas zu trinken.' },
            { type: 'exercise', name: 'Wand-Sitz', duration: 60, display: '60 Sekunden Wand-Sitz. Rücken an die Wand, als würdest du auf einem Stuhl sitzen.' }
        ]
    },
    {
        id: 'legs-advanced',
        name: 'Beine Intensiv Training',
        level: 'Fortgeschritten',
        target: 'Beine',
        sequence: [
            { type: 'exercise', name: 'Jump Squats', duration: 60, display: '1 Minute explosive Jump Squats. Landung sanft und direkt in die nächste Kniebeuge.' },
            { type: 'rest', name: 'Kurze Pause', duration: 20, display: '20 Sekunden kurze Verschnaufpause.' },
            { type: 'exercise', name: 'Bulgarian Split Squats (links)', duration: 45, display: '45 Sekunden Bulgarian Split Squats für das linke Bein. Eine sehr effektive Übung für Oberschenkel und Po.' },
            { type: 'exercise', name: 'Bulgarian Split Squats (rechts)', duration: 45, display: '45 Sekunden Bulgarian Split Squats für das rechte Bein. Wechsle das Bein.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Die Beine brennen schon!' },
            { type: 'exercise', name: 'Glute Bridge', duration: 60, display: '1 Minute Glute Bridge. Po anspannen und Hüfte nach oben drücken.' },
            { type: 'rest', name: 'Erholung', duration: 45, display: '45 Sekunden Erholung. Tief durchatmen.' },
            { type: 'exercise', name: 'High Knees', duration: 45, display: '45 Sekunden High Knees. Knie abwechselnd schnell zur Brust ziehen.' },
            { type: 'rest', name: 'Finale Dehnung', duration: 30, display: '30 Sekunden Dehnung der Oberschenkel.' }
        ]
    },
    {
        id: 'arms-beginner',
        name: 'Arme Basis Training',
        level: 'Anfänger',
        target: 'Arme',
        sequence: [
            { type: 'exercise', name: 'Trizeps Dips (Stuhl)', duration: 45, display: '45 Sekunden Trizeps Dips am Stuhl. Langsam und kontrolliert.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Arme ausschütteln.' },
            { type: 'exercise', name: 'Bicep Curls (ohne Gewicht)', duration: 45, display: '45 Sekunden Bicep Curls ohne Gewicht. Konzentriere dich auf die Muskelkontraktion.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Du machst das super!' },
            { type: 'exercise', name: 'Plank Shoulder Taps', duration: 60, display: '60 Sekunden Plank Shoulder Taps. Halte den Rumpf stabil.' },
            { type: 'rest', name: 'Erholung', duration: 45, display: '45 Sekunden Erholung. Hol dir etwas zu trinken.' },
            { type: 'exercise', name: 'Pike Push-ups', duration: 45, display: '45 Sekunden Pike Push-ups. Für die Schultern und oberen Brustmuskeln.' }
        ]
    },
    {
        id: 'arms-advanced',
        name: 'Arme Kraft Training',
        level: 'Fortgeschritten',
        target: 'Arme',
        sequence: [
            { type: 'exercise', name: 'Engere Liegestützen', duration: 60, display: '1 Minute enge Liegestützen. Fokus auf den Trizeps!' },
            { type: 'rest', name: 'Kurze Pause', duration: 20, display: '20 Sekunden kurze Pause.' },
            { type: 'exercise', name: 'Supermans', duration: 45, display: '45 Sekunden Supermans. Rücken und Schultern stärken.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Plank mit Armheben', duration: 60, display: '60 Sekunden Plank mit Armheben. Stabilisiere den Rumpf, während die Arme arbeiten.' },
            { type: 'rest', name: 'Erholung', duration: 45, display: '45 Sekunden Erholung. Du bist stark!' },
            { type: 'exercise', name: 'Triceps Push-ups (auf Knien)', duration: 45, display: '45 Sekunden Trizeps Liegestützen auf den Knien. Ellbogen bleiben nah am Körper.' },
            { type: 'rest', name: 'Finale Pause', duration: 30, display: '30 Sekunden letzte Pause.' },
            { type: 'exercise', name: 'Diamond Push-ups (Wiederholung)', duration: 45, display: '45 Sekunden Diamond Push-ups. Gib alles im Finale!' }
        ]
    },

    // --- 10 NEUE WORKOUTS ---

    {
        id: 'fullbody-intermediate',
        name: 'Ganzkörper Fortgeschritten',
        level: 'Fortgeschritten',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Jumping Jacks', duration: 60, display: '1 Minute Jumping Jacks zum Aufwärmen und für die Kondition.' },
            { type: 'rest', name: 'Kurze Pause', duration: 20, display: '20 Sekunden kurze Pause.' },
            { type: 'exercise', name: 'Burpees', duration: 60, display: '1 Minute Burpees. Tempo finden und durchziehen!' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause. Du bist stark!' },
            { type: 'exercise', name: 'Mountain Climbers', duration: 60, display: '1 Minute Mountain Climbers. Knie schnell zur Brust ziehen.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Standard-Liegestützen', duration: 60, display: '1 Minute Standard-Liegestützen. Saubere Ausführung ist wichtig.' },
            { type: 'rest', name: 'Erholung', duration: 45, display: '45 Sekunden Erholung. Tief durchatmen.' },
            { type: 'exercise', name: 'Jump Squats', duration: 45, display: '45 Sekunden Jump Squats. Kniebeuge mit explosivem Sprung nach oben.' },
            { type: 'rest', name: 'Finale Pause', duration: 30, display: '30 Sekunden letzte Pause.' },
            { type: 'exercise', name: 'Plank Jacks', duration: 45, display: '45 Sekunden Plank Jacks. In Plank-Position Beine seitlich spreizen und schließen.' }
        ]
    },
    {
        id: 'core-advanced',
        name: 'Bauchmuskeln Extrem',
        level: 'Fortgeschritten',
        target: 'Bauch',
        sequence: [
            { type: 'exercise', name: 'V-Ups', duration: 45, display: '45 Sekunden V-Ups. Arme und Beine gleichzeitig anheben, bis sie sich treffen.' },
            { type: 'rest', name: 'Pause', duration: 20, display: '20 Sekunden Pause. Sehr anspruchsvoll!' },
            { type: 'exercise', name: 'Reverse Crunches', duration: 45, display: '45 Sekunden Reverse Crunches. Beine anheben, Po vom Boden lösen.' },
            { type: 'rest', name: 'Pause', duration: 20, display: '20 Sekunden Pause.' },
            { type: 'exercise', name: 'Bicycle Crunches', duration: 60, display: '1 Minute Bicycle Crunches. Ellbogen zu gegenüberliegendem Knie.' },
            { type: 'rest', name: 'Längere Pause', duration: 40, display: '40 Sekunden Pause. Gut gemacht, dein Bauch brennt!' },
            { type: 'exercise', 'name': 'Plank Jacks', 'duration': 45, 'display': '45 Sekunden Plank Jacks. Stabilität und Cardio für den Core.' },
            { type: 'rest', name: 'Vorbereitung', duration: 30, display: '30 Sekunden Vorbereitung für die letzte Übung.' },
            { type: 'exercise', name: 'Plank mit Armheben', duration: 60, display: '60 Sekunden Plank mit Armheben. Halte den Rumpf super stabil.' }
        ]
    },
    {
        id: 'upperbody-master',
        name: 'Oberkörper Meister',
        level: 'Fortgeschritten',
        target: 'Oberkörper',
        sequence: [
            { type: 'exercise', name: 'Standard-Liegestützen', duration: 75, display: '1:15 Minute Standard-Liegestützen. Kontrolliert und kraftvoll.' },
            { type: 'rest', name: 'Kurze Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Archer Liegestützen', duration: 60, display: '1 Minute Archer Liegestützen. Fokus auf eine Seite, dann wechseln.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause. Gut gemacht!' },
            { type: 'exercise', name: 'Rudern am Tisch', duration: 90, display: '1:30 Minute Rudern am Tisch. Ziehe dich kraftvoll hoch.' },
            { type: 'rest', name: 'Erholung', duration: 60, display: '1 Minute Erholung. Hol dir Wasser.' },
            { type: 'exercise', name: 'Engere Liegestützen', duration: 75, display: '1:15 Minute Diamond Push-ups. Gib alles für den Trizeps!' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause.' },
            { type: 'exercise', name: 'Plank mit Armheben', duration: 90, display: '1:30 Minute Plank mit Armheben. Halte den Core stabil.' },
            { type: 'rest', name: 'Finale Pause', duration: 30, display: '30 Sekunden letzte Pause.' },
            { type: 'exercise', name: 'Breite Liegestützen', duration: 60, display: '1 Minute breite Liegestützen. Finale für die Brust.' }
        ]
    },
    {
        id: 'fullbody-power',
        name: 'Ganzkörper Power',
        level: 'Fortgeschritten',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Burpees', duration: 75, display: '1:15 Minute Burpees. Halte das Tempo hoch!' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause.' },
            { type: 'exercise', name: 'Sprung Ausfallschritte', duration: 75, display: '1:15 Minute Sprung Ausfallschritte. Explosiv wechseln.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause.' },
            { type: 'exercise', name: 'Pistol Squats (assistiert)', duration: 90, display: '1:30 Minute Pistol Squats (assistiert). Wechsle die Beine.' },
            { type: 'rest', name: 'Erholung', duration: 60, display: '1 Minute Erholung. Durchatmen.' },
            { type: 'exercise', name: 'Commando Plank', duration: 90, display: '1:30 Minute Commando Plank. Zwischen Plank und Unterarmstütz wechseln.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause.' },
            { type: 'exercise', name: 'Mountain Climbers', duration: 75, display: '1:15 Minute Mountain Climbers. Schnell und stabil.' },
            { type: 'rest', name: 'Finale Pause', duration: 30, display: '30 Sekunden letzte Pause.' },
            { type: 'exercise', name: 'Plank Jacks', duration: 60, display: '1 Minute Plank Jacks. Power-Finale!' }
        ]
    },
    {
        id: 'cardio-blast',
        name: 'Intensives Cardio',
        level: 'Fortgeschritten',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Jumping Jacks', duration: 90, display: '1:30 Minute Jumping Jacks. Warm-up und Cardio-Start.' },
            { type: 'rest', name: 'Kurze Pause', duration: 20, display: '20 Sekunden Pause.' },
            { type: 'exercise', name: 'High Knees', duration: 75, display: '1:15 Minute High Knees. Knie hoch zur Brust!' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Fersen zum Po', duration: 75, display: '1:15 Minute Fersen zum Po. Hacken hoch!' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Burpees', duration: 60, display: '1 Minute Burpees. Gib alles!' },
            { type: 'rest', name: 'Erholung', duration: 45, display: '45 Sekunden Erholung. Tief durchatmen.' },
            { type: 'exercise', name: 'Step-ups auf Erhöhung', duration: 90, display: '1:30 Minute Step-ups. Abwechselnd die Beine benutzen.' },
            { type: 'rest', name: 'Finale Sprint', duration: 30, display: '30 Sekunden Vorbereitung auf den Endspurt.' },
            { type: 'exercise', name: 'Mountain Climbers', duration: 90, display: '1:30 Minute Mountain Climbers. Finale - zeig was du drauf hast!' }
        ]
    },
    {
        id: 'yoga-flow',
        name: 'Entspannter Yoga Flow',
        level: 'Anfänger',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Sonnengruß', duration: 120, display: '2 Minuten Sonnengruß. Fließende Bewegungen, atme tief ein und aus.' },
            { type: 'rest', name: 'Kurze Pause', duration: 30, display: '30 Sekunden Pause. Finde deine Mitte.' },
            { type: 'exercise', name: 'Herabschauender Hund', duration: 90, display: '1:30 Minute Herabschauender Hund. Dehne Rücken und Beine.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause.' },
            { type: 'exercise', name: 'Krieger I', duration: 60, display: '1 Minute Krieger I (linke Seite). Starker Stand, Arme hoch.' },
            { type: 'exercise', name: 'Krieger I', duration: 60, display: '1 Minute Krieger I (rechte Seite). Wechsle die Seite.' },
            { type: 'rest', name: 'Erholung', duration: 60, display: '1 Minute Erholung. Spüre die Energie.' },
            { type: 'exercise', name: 'Katze-Kuh Dehnung', duration: 90, display: '1:30 Minute Katze-Kuh Dehnung. Mache den Rücken geschmeidig.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause.' },
            { type: 'exercise', name: 'Kindeshaltung', duration: 120, display: '2 Minuten Kindeshaltung. Entspanne dich vollständig.' }
        ]
    },
    {
        id: 'quick-morning-boost',
        name: '10-Minuten Morgen-Boost',
        level: 'Anfänger',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Jumping Jacks', duration: 60, display: '60 Sekunden Hampelmänner, um den Kreislauf in Schwung zu bringen.' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15 Sekunden durchatmen.' },
            { type: 'exercise', name: 'Kniebeugen', duration: 60, display: '60 Sekunden saubere Kniebeugen.' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15 Sekunden Beine lockern.' },
            { type: 'exercise', name: 'Liegestützen (auf Knien)', duration: 45, display: '45 Sekunden Liegestützen auf den Knien.' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15 Sekunden Arme schütteln.' },
            { type: 'exercise', name: 'Plank', duration: 60, display: '60 Sekunden Plank halten.' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15 Sekunden Pause.' },
            { type: 'exercise', name: 'Crunches', duration: 45, display: '45 Sekunden Crunches.' },
            { type: 'rest', name: 'Cool Down', duration: 30, display: 'Kurzes Dehnen. Super Start in den Tag!' }
        ]
    },
    {
        id: 'stability-challenge',
        name: 'Stabilitäts-Challenge',
        level: 'Anfänger',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Plank', duration: 90, display: '90 Sekunden Unterarmstütz. Atme ruhig und halte die Spannung.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause.' },
            { type: 'exercise', name: 'Wand-Sitz', duration: 90, display: '90 Sekunden Wandsitz. Die Oberschenkel werden brennen!' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden Pause.' },
            { type: 'exercise', name: 'Glute Bridge', duration: 90, display: '90 Sekunden Glute Bridge halten. Po fest anspannen.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Seiten-Plank (links)', duration: 60, display: '60 Sekunden Seitstütz links.' },
            { type: 'exercise', name: 'Seiten-Plank (rechts)', duration: 60, display: '60 Sekunden Seitstütz rechts.' },
            { type: 'rest', name: 'Erholung', duration: 60, display: 'Gut gemacht! Statische Übungen sind super für die Tiefenmuskulatur.' }
        ]
    },
    {
        id: 'abs-obliques-focus',
        name: 'Fokus: Bauch & Seiten',
        level: 'Fortgeschritten',
        target: 'Bauch',
        sequence: [
            { type: 'exercise', name: 'Bicycle Crunches', duration: 60, display: '60 Sekunden Bicycle Crunches. Tempo halten!' },
            { type: 'rest', name: 'Pause', duration: 20, display: '20 Sekunden Pause.' },
            { type: 'exercise', name: 'Russischer Twist (ohne Gewicht)', duration: 60, display: '60 Sekunden Russian Twist. Füße vom Boden für mehr Intensität.' },
            { type: 'rest', name: 'Pause', duration: 20, display: '20 Sekunden Pause.' },
            { type: 'exercise', name: 'Seiten-Plank (links)', duration: 45, display: '45 Sekunden Seitstütz links mit Hüft-Dips.' },
            { type: 'exercise', name: 'Seiten-Plank (rechts)', duration: 45, display: '45 Sekunden Seitstütz rechts mit Hüft-Dips.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Beinheben (flach)', duration: 60, display: '60 Sekunden langsames und kontrolliertes Beinheben.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Plank Shoulder Taps', duration: 60, display: '60 Sekunden Plank Shoulder Taps. Hüfte stabil halten!' }
        ]
    },
    {
        id: 'lower-body-burnout',
        name: 'Bein-Burnout',
        level: 'Fortgeschritten',
        target: 'Beine',
        sequence: [
            { type: 'exercise', name: 'Kniebeugen', duration: 90, display: '90 Sekunden Kniebeugen. Achte auf Tiefe und Form.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Ausfallschritte (alternierend)', duration: 90, display: '90 Sekunden Ausfallschritte. Große, stabile Schritte.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Jump Squats', duration: 60, display: '60 Sekunden explosive Jump Squats.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45 Sekunden durchatmen!' },
            { type: 'exercise', name: 'Wadenheben', duration: 90, display: '90 Sekunden Wadenheben. Langsam hoch, kurz halten, langsam runter.' },
            { type: 'rest', name: 'Pause', duration: 30, display: '30 Sekunden Pause.' },
            { type: 'exercise', name: 'Wand-Sitz', duration: 90, display: 'Finale: 90 Sekunden Wandsitz. Halte durch!' }
        ]
    }
];
