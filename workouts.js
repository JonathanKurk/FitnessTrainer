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
            { type: 'exercise', name: 'Plank Jacks', duration: 45, display: '45 Sekunden Plank Jacks. Stabilität und Cardio für den Core.' },
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

    // --- 5 NEUE LANGE WORKOUTS (20-60 MIN) ---

    {
        id: 'hiit-inferno-30',
        name: 'Das 30-Minuten HIIT Inferno',
        level: 'Fortgeschritten',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Jumping Jacks', duration: 120, display: '2 Minuten leichtes Aufwärmen mit Hampelmännern.' },
            { type: 'rest', name: 'Vorbereitung', duration: 30, display: 'Kurz durchatmen, Runde 1 beginnt.' },
            // Runde 1
            { type: 'exercise', name: 'Burpees', duration: 45, display: 'Runde 1: 45s Burpees. Gib dein Bestes!' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'High Knees', duration: 45, display: 'Runde 1: 45s High Knees. Knie hoch!' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'Mountain Climbers', duration: 45, display: 'Runde 1: 45s Mountain Climbers. Tempo!' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'Jump Squats', duration: 45, display: 'Runde 1: 45s Jump Squats. Explosiv!' },
            { type: 'rest', name: 'Rundenpause', duration: 60, display: 'Gute Arbeit! 1 Minute Pause vor Runde 2.' },
            // Runde 2
            { type: 'exercise', name: 'Burpees', duration: 45, display: 'Runde 2: 45s Burpees. Bleib dran!' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'High Knees', duration: 45, display: 'Runde 2: 45s High Knees.' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'Mountain Climbers', duration: 45, display: 'Runde 2: 45s Mountain Climbers.' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'Jump Squats', duration: 45, display: 'Runde 2: 45s Jump Squats.' },
            { type: 'rest', name: 'Rundenpause', duration: 60, display: 'Stark! 1 Minute Pause vor der letzten Runde.' },
            // Runde 3
            { type: 'exercise', name: 'Burpees', duration: 45, display: 'Runde 3: 45s Burpees. Letztes Mal!' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'High Knees', duration: 45, display: 'Runde 3: 45s High Knees. Finale!' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'Mountain Climbers', duration: 45, display: 'Runde 3: 45s Mountain Climbers. Alles geben!' },
            { type: 'rest', name: 'Pause', duration: 15, display: '15s Pause.' },
            { type: 'exercise', name: 'Jump Squats', duration: 45, display: 'Runde 3: 45s Jump Squats. Zieh durch!' },
            { type: 'rest', name: 'Pause', duration: 60, display: 'Fast geschafft! Bereite dich auf den Core-Finisher vor.' },
            // Finisher & Cool Down
            { type: 'exercise', name: 'Plank', duration: 90, display: 'Finisher: 90 Sekunden Plank halten.' },
            { type: 'exercise', name: 'Kindeshaltung', duration: 120, display: 'Cool Down: 2 Minuten entspannen in der Kindeshaltung. Du hast es dir verdient!' }
        ]
    },
    {
        id: 'total-body-strength-25',
        name: 'Total Body Kraft & Ausdauer',
        level: 'Anfänger',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Jumping Jacks', duration: 120, display: '2 Minuten leichtes Aufwärmen.' },
            { type: 'rest', name: 'Vorbereitung', duration: 30, display: 'Bereit für Runde 1.' },
            // Runde 1
            { type: 'exercise', name: 'Kniebeugen', duration: 90, display: 'Runde 1: 90s Kniebeugen. Langsam und kontrolliert.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45s Pause.' },
            { type: 'exercise', name: 'Liegestützen (auf Knien)', duration: 90, display: 'Runde 1: 90s Liegestützen auf Knien. Konzentrier dich auf die Form.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45s Pause.' },
            { type: 'exercise', name: 'Glute Bridge', duration: 90, display: 'Runde 1: 90s Glute Bridge. Po anspannen.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45s Pause.' },
            { type: 'exercise', name: 'Plank', duration: 90, display: 'Runde 1: 90s Plank. Halte durch.' },
            { type: 'rest', name: 'Rundenpause', duration: 90, display: 'Super! 90 Sekunden Pause, dann wiederholen wir das Ganze.' },
            // Runde 2
            { type: 'exercise', name: 'Kniebeugen', duration: 90, display: 'Runde 2: 90s Kniebeugen. Die zweite Runde ist immer für die Stärke.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45s Pause.' },
            { type: 'exercise', name: 'Liegestützen (auf Knien)', duration: 90, display: 'Runde 2: 90s Liegestützen. Du schaffst das!' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45s Pause.' },
            { type: 'exercise', name: 'Glute Bridge', duration: 90, display: 'Runde 2: 90s Glute Bridge. Spür die Aktivierung.' },
            { type: 'rest', name: 'Pause', duration: 45, display: '45s Pause.' },
            { type: 'exercise', name: 'Plank', duration: 90, display: 'Runde 2: 90s Plank. Das Finale!' },
            { type: 'rest', name: 'Cool Down', duration: 120, display: 'Fantastisch! 2 Minuten dehnen und entspannen.' }
        ]
    },
    {
        id: 'leg-pyramid-challenge-25',
        name: 'Pyramiden-Challenge Beine & Po',
        level: 'Fortgeschritten',
        target: 'Beine',
        sequence: [
            { type: 'exercise', name: 'Kniebeugen', duration: 120, display: '2 Minuten Warm-up: Lockere Kniebeugen und Beinschwingen.' },
            { type: 'rest', name: 'Vorbereitung', duration: 30, display: 'Die erste Pyramide startet: Kniebeugen.' },
            // Pyramide 1: Kniebeugen
            { type: 'exercise', name: 'Kniebeugen', duration: 30, display: '30 Sekunden Belastung.' }, { type: 'rest', name: 'Pause', duration: 15 },
            { type: 'exercise', name: 'Kniebeugen', duration: 45, display: '45 Sekunden Belastung.' }, { type: 'rest', name: 'Pause', duration: 15 },
            { type: 'exercise', name: 'Kniebeugen', duration: 60, display: 'Spitze der Pyramide: 60 Sekunden!' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Kniebeugen', duration: 45, display: 'Der Weg nach unten: 45 Sekunden.' }, { type: 'rest', name: 'Pause', duration: 15 },
            { type: 'exercise', name: 'Kniebeugen', duration: 30, display: 'Letzte Stufe: 30 Sekunden.' },
            { type: 'rest', name: 'Lange Pause', duration: 90, display: 'Pyramide 1 geschafft! 90s Pause, dann Ausfallschritte.' },
            // Pyramide 2: Ausfallschritte
            { type: 'exercise', name: 'Ausfallschritte (alternierend)', duration: 30, display: '30 Sekunden Belastung.' }, { type: 'rest', name: 'Pause', duration: 15 },
            { type: 'exercise', name: 'Ausfallschritte (alternierend)', duration: 45, display: '45 Sekunden Belastung.' }, { type: 'rest', name: 'Pause', duration: 15 },
            { type: 'exercise', name: 'Ausfallschritte (alternierend)', duration: 60, display: 'Spitze der Pyramide: 60 Sekunden!' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Ausfallschritte (alternierend)', duration: 45, display: 'Der Weg nach unten: 45 Sekunden.' }, { type: 'rest', name: 'Pause', duration: 15 },
            { type: 'exercise', name: 'Ausfallschritte (alternierend)', duration: 30, display: 'Letzte Stufe: 30 Sekunden.' },
            { type: 'rest', name: 'Lange Pause', duration: 90, display: 'Sehr gut! 90s Pause, dann der Finisher.' },
            // Finisher
            { type: 'exercise', name: 'Wand-Sitz', duration: 120, display: 'Finisher: 2 Minuten Wandsitz. Halte durch, bis es brennt!' },
            { type: 'rest', name: 'Cool Down', duration: 120, display: 'Beine ausschütteln und dehnen. Du hast es geschafft!' }
        ]
    },
    {
        id: 'endurance-flow-45',
        name: 'Der 45-Minuten Ausdauer-Flow',
        level: 'Anfänger',
        target: 'Ganzkörper',
        sequence: [
            { type: 'exercise', name: 'Sonnengruß', duration: 180, display: '3 Minuten sanfter Sonnengruß zum Aufwärmen.' },
            { type: 'rest', name: 'Pause', duration: 60, display: 'Bereit für den Ausdauerteil.' },
            { type: 'exercise', name: 'Jumping Jacks', duration: 180, display: '3 Minuten Hampelmänner. Finde ein gleichmäßiges Tempo.' },
            { type: 'rest', name: 'Aktive Pause', duration: 60, display: '1 Minute lockeres Gehen auf der Stelle.' },
            { type: 'exercise', name: 'Kniebeugen', duration: 180, display: '3 Minuten Kniebeugen. Es geht nicht um Geschwindigkeit, sondern um Durchhalten.' },
            { type: 'rest', name: 'Aktive Pause', duration: 60, display: '1 Minute lockeres Gehen auf der Stelle.' },
            { type: 'exercise', name: 'Mountain Climbers', duration: 180, display: '3 Minuten Mountain Climbers. Langsam und kontrolliert oder schnell - dein Tempo!' },
            { type: 'rest', name: 'Aktive Pause', duration: 60, display: '1 Minute lockeres Gehen auf der Stelle.' },
            { type: 'exercise', name: 'Plank', duration: 180, display: '3 Minuten Plank. Atme und halte die Spannung. Setze bei Bedarf kurz ab.' },
            { type: 'rest', name: 'Aktive Pause', duration: 60, display: '1 Minute lockeres Gehen auf der Stelle.' },
            { type: 'exercise', name: 'Ausfallschritte (alternierend)', duration: 180, display: '3 Minuten Ausfallschritte. Saubere Technik ist wichtiger als Tempo.' },
            { type: 'rest', name: 'Aktive Pause', duration: 60, display: '1 Minute lockeres Gehen auf der Stelle.' },
            { type: 'exercise', name: 'Burpees', duration: 180, display: '3 Minuten Burpees. Finde einen Rhythmus, den du halten kannst.' },
            { type: 'rest', name: 'Cool Down', duration: 180, display: 'Hervorragend! 3 Minuten Stretching. Fokus auf Beine, Brust und Rücken.' }
        ]
    },
    {
        id: 'full-hour-journey-60',
        name: 'Die 60-Minuten Fitness-Reise',
        level: 'Fortgeschritten',
        target: 'Ganzkörper',
        sequence: [
            // 1. Warm-Up (5 min)
            { type: 'exercise', name: 'Jumping Jacks', duration: 180, display: 'Warm-Up Teil 1: 3 Minuten Hampelmänner.' },
            { type: 'exercise', name: 'High Knees', duration: 120, display: 'Warm-Up Teil 2: 2 Minuten High Knees.' },
            { type: 'rest', name: 'Pause', duration: 60, display: 'Warm-Up geschafft. Jetzt kommt der Cardio-Block.' },
            // 2. Cardio (15 min)
            { type: 'exercise', name: 'Burpees', duration: 60, display: 'Cardio-Runde 1/3: 60s Burpees.' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Mountain Climbers', duration: 60, display: 'Cardio-Runde 1/3: 60s Mountain Climbers.' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Sprung Ausfallschritte', duration: 60, display: 'Cardio-Runde 1/3: 60s Sprung Ausfallschritte.' }, { type: 'rest', name: 'Rundenpause', duration: 60 },
            { type: 'exercise', name: 'Burpees', duration: 60, display: 'Cardio-Runde 2/3: 60s Burpees.' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Mountain Climbers', duration: 60, display: 'Cardio-Runde 2/3: 60s Mountain Climbers.' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Sprung Ausfallschritte', duration: 60, display: 'Cardio-Runde 2/3: 60s Sprung Ausfallschritte.' }, { type: 'rest', name: 'Rundenpause', duration: 60 },
            { type: 'exercise', name: 'Burpees', duration: 60, display: 'Cardio-Runde 3/3: 60s Burpees.' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Mountain Climbers', duration: 60, display: 'Cardio-Runde 3/3: 60s Mountain Climbers.' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Sprung Ausfallschritte', duration: 60, display: 'Cardio-Runde 3/3: 60s Sprung Ausfallschritte.' },
            { type: 'rest', name: 'Pause', duration: 90, display: 'Cardio geschafft! Trink was. Jetzt kommt der Oberkörper-Kraftteil.' },
            // 3. Upper Body Strength (15 min)
            { type: 'exercise', name: 'Standard-Liegestützen', duration: 90, display: 'Kraft OK 1/3: 90s Liegestützen. So viele saubere Wiederholungen wie möglich.' }, { type: 'rest', name: 'Pause', duration: 60 },
            { type: 'exercise', name: 'Rudern am Tisch', duration: 90, display: 'Kraft OK 1/3: 90s Rudern am Tisch.' }, { type: 'rest', name: 'Pause', duration: 60 },
            { type: 'exercise', name: 'Pike Push-ups', duration: 90, display: 'Kraft OK 1/3: 90s Pike Push-ups für die Schultern.' }, { type: 'rest', name: 'Rundenpause', duration: 90 },
            { type: 'exercise', name: 'Standard-Liegestützen', duration: 90, display: 'Kraft OK 2/3: 90s Liegestützen.' }, { type: 'rest', name: 'Pause', duration: 60 },
            { type: 'exercise', name: 'Rudern am Tisch', duration: 90, display: 'Kraft OK 2/3: 90s Rudern am Tisch.' }, { type: 'rest', name: 'Pause', duration: 60 },
            { type: 'exercise', name: 'Pike Push-ups', duration: 90, display: 'Kraft OK 2/3: 90s Pike Push-ups.' },
            { type: 'rest', name: 'Pause', duration: 90, display: 'Oberkörper erledigt. Jetzt sind die Beine dran.' },
            // 4. Lower Body Strength (10 min)
            { type: 'exercise', name: 'Bulgarian Split Squats (links)', duration: 90, display: 'Kraft Beine: 90s Bulgarian Split Squats links.' }, { type: 'rest', name: 'Pause', duration: 30 },
            { type: 'exercise', name: 'Bulgarian Split Squats (rechts)', duration: 90, display: 'Kraft Beine: 90s Bulgarian Split Squats rechts.' }, { type: 'rest', name: 'Pause', duration: 60 },
            { type: 'exercise', name: 'Glute Bridge', duration: 120, display: 'Kraft Beine: 2 Minuten Glute Bridges. Langsam und mit voller Anspannung.' },
            { type: 'rest', name: 'Pause', duration: 90, display: 'Beine brennen! Zum Abschluss der Core.' },
            // 5. Core Finisher (5 min)
            { type: 'exercise', name: 'V-Ups', duration: 60, display: 'Core Finisher: 60s V-Ups.' }, { type: 'rest', name: 'Pause', duration: 15 },
            { type: 'exercise', name: 'Bicycle Crunches', duration: 60, display: 'Core Finisher: 60s Bicycle Crunches.' }, { type: 'rest', name: 'Pause', duration: 15 },
            { type: 'exercise', name: 'Plank', duration: 120, display: 'Core Finisher: 2 Minuten Plank halten. Das Finale!' },
            // 6. Cool Down (5 min)
            { type: 'exercise', name: 'Katze-Kuh Dehnung', duration: 120, display: 'Cool Down: 2 Minuten Katze-Kuh für den Rücken.' },
            { type: 'exercise', name: 'Kindeshaltung', duration: 180, display: 'Cool Down: 3 Minuten in der Kindeshaltung entspannen. Du hast es geschafft!' }
        ]
    }
];
