import { workouts } from 'workouts';

// --- DOM Elements ---
const selectionScreen = document.getElementById('selection-screen');
const workoutScreen = document.getElementById('workout-screen');
const backToSelectionBtn = document.getElementById('back-to-selection');
const workoutGrid = document.getElementById('workout-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const durationSlider = document.getElementById('duration-slider');
const durationValueDisplay = document.getElementById('duration-value');

// Workout screen elements
const workoutTitle = document.getElementById('workout-title');
const workoutLevel = document.getElementById('workout-level');
const workoutTarget = document.getElementById('workout-target');
const workoutDuration = document.getElementById('workout-duration');
const timerDisplay = document.getElementById('timer');
const timerLabel = document.getElementById('timer-label');
const progressFill = document.getElementById('progress-fill');
const currentStepName = document.getElementById('current-step-name');
const currentInstruction = document.getElementById('current-instruction');
const exerciseExplanation = document.getElementById('exercise-explanation');
const progressIndicator = document.getElementById('progress-indicator');
const nextExercise = document.getElementById('next-exercise');
const startBtn = document.getElementById('start-btn');
const pauseResumeBtn = document.getElementById('pause-resume-btn');
const skipBtn = document.getElementById('skip-btn');
const resetBtn = document.getElementById('reset-btn');

// --- Global State ---
let currentWorkout = null;
let currentStepIndex = 0;
let timeLeft = 0;
let timerInterval = null;
let isWorkoutRunning = false;
let isPaused = false;
let isPreparingStep = true; // NEW: state to show explanation before timer starts
let currentFilters = { level: 'all', target: 'all', duration: parseInt(durationSlider.value) };

// --- Exercise Explanations ---
const exerciseExplanations = {
    'Liegestützen (auf Knien)': {
        title: 'Liegestützen auf den Knien',
        steps: [
            'Knie dich auf den Boden und stütze dich auf deine Hände',
            'Hände schulterbreit auseinander platzieren',
            'Körper von den Knien bis zum Kopf gerade halten',
            'Langsam nach unten drücken bis die Brust fast den Boden berührt',
            'Kraftvoll nach oben drücken in die Ausgangsposition'
        ]
    },
    'Standard-Liegestützen': {
        title: 'Standard Liegestützen',
        steps: [
            'Plank-Position einnehmen, Hände unter den Schultern',
            'Körper komplett gerade von Kopf bis Fuß',
            'Langsam nach unten bis die Brust fast den Boden berührt',
            'Kraftvoll nach oben in die Ausgangsposition drücken',
            'Gleichmäßige Atmung: Einatmen beim Runtergehen, Ausatmen beim Hochdrücken'
        ]
    },
    'Engere Liegestützen': {
        title: 'Diamond Push-ups',
        steps: [
            'Hände dicht zusammen, Daumen und Zeigefinger formen ein Dreieck',
            'Plank-Position mit geradem Körper',
            'Fokus auf Trizeps und innere Brustmuskulatur',
            'Langsame, kontrollierte Bewegung',
            'Schwieriger als normale Liegestützen - weniger Wiederholungen sind normal'
        ]
    },
    'Breite Liegestützen': {
        title: 'Breite Liegestützen',
        steps: [
            'Hände weiter als schulterbreit auseinander',
            'Fokus auf die äußere Brustmuskulatur',
            'Körper gerade halten trotz breiterer Handposition',
            'Tiefere Bewegung möglich durch breiteren Stand',
            'Mehr Belastung für die Brust, weniger für den Trizeps'
        ]
    },
    'Plank': {
        title: 'Plank (Unterarmstütz)',
        steps: [
            'Unterarme auf den Boden, Ellbogen unter den Schultern',
            'Körper komplett gerade wie ein Brett',
            'Bauch anspannen und Hüfte nicht hängen lassen',
            'Gleichmäßig weiteratmen, nicht die Luft anhalten',
            'Position halten ohne zu zittern oder zu schwanken'
        ]
    },
    'Crunches': {
        title: 'Bauchcrunches',
        steps: [
            'Auf den Rücken legen, Knie angewinkelt',
            'Hände hinter den Kopf, aber nicht ziehen',
            'Oberkörper langsam anheben, nur die Schulterblätter vom Boden',
            'Bauch zusammenziehen und kurz halten',
            'Langsam und kontrolliert wieder absenken'
        ]
    },
    'Beinheben (flach)': {
        title: 'Beinheben im Liegen',
        steps: [
            'Flach auf den Rücken legen, Arme seitlich für Stabilität',
            'Beine gerade oder leicht angewinkelt',
            'Langsam beide Beine gleichzeitig anheben',
            'Bis etwa 90° oder so weit wie möglich',
            'Kontrolliert wieder absenken, aber nicht ganz auf den Boden'
        ]
    },
    'Russischer Twist (ohne Gewicht)': {
        title: 'Russian Twist',
        steps: [
            'Sitzend, Oberkörper leicht zurücklehnen',
            'Beine angewinkelt, Füße können angehoben werden',
            'Hände vor der Brust zusammen',
            'Oberkörper abwechselnd nach links und rechts drehen',
            'Bauch konstant angespannt halten'
        ]
    },
    'Plank mit Armheben': {
        title: 'Plank mit alternierenden Armheben',
        steps: [
            'Standard Plank Position einnehmen',
            'Abwechselnd einen Arm nach vorne ausstrecken',
            'Hüfte und Körper stabil halten, nicht rotieren',
            'Arm 2-3 Sekunden halten, dann wechseln',
            'Core-Stabilität ist hier besonders wichtig'
        ]
    },
    'Seiten-Plank (links)': {
        title: 'Seitlicher Unterarmstütz Links',
        steps: [
            'Auf die linke Seite legen, linker Unterarm stützt',
            'Körper gerade von Kopf bis Fuß',
            'Rechte Hand in die Hüfte oder nach oben',
            'Hüfte nicht hängen lassen',
            'Seitliche Bauchmuskulatur arbeitet'
        ]
    },
    'Seiten-Plank (rechts)': {
        title: 'Seitlicher Unterarmstütz Rechts',
        steps: [
            'Auf die rechte Seite legen, rechter Unterarm stützt',
            'Körper gerade von Kopf bis Fuß',
            'Linke Hand in die Hüfte oder nach oben',
            'Hüfte nicht hängen lassen',
            'Seitliche Bauchmuskulatur arbeitet'
        ]
    },
    'Kniebeugen': {
        title: 'Kniebeugen',
        steps: [
            'Hüftbreiter Stand, Zehen leicht nach außen',
            'Rücken gerade, Blick nach vorne',
            'Po nach hinten schieben, als ob du dich setzen würdest',
            'Knie folgen der Richtung der Zehen, nicht nach innen kippen',
            'Tief gehen, bis die Oberschenkel parallel zum Boden sind (oder so tief wie möglich)',
            'Kraftvoll aus den Fersen nach oben drücken'
        ]
    },
    'Ausfallschritte (alternierend)': {
        title: 'Ausfallschritte (alternierend)',
        steps: [
            'Aufrecht stehen, ein Bein nach vorne stellen',
            'Beine beugen, bis das hintere Knie fast den Boden berührt',
            'Vorderes Knie bleibt über dem Knöchel, Unterschenkel senkrecht',
            'Oberkörper aufrecht halten, Bauch anspannen',
            'Zurück zur Ausgangsposition drücken und Bein wechseln',
            'Gleichmäßige und kontrollierte Bewegung'
        ]
    },
    'Wadenheben': {
        title: 'Wadenheben',
        steps: [
            'Aufrecht stehen, Füße hüftbreit',
            'Langsam auf die Zehenspitzen stellen, Waden anspannen',
            'Kurz halten an der Spitze der Bewegung',
            'Kontrolliert wieder absenken, Ferse kurz über dem Boden',
            'Um die Balance zu halten, kannst du dich festhalten'
        ]
    },
    'Wand-Sitz': {
        title: 'Wand-Sitz',
        steps: [
            'Rücken an eine Wand lehnen',
            'Langsam die Knie beugen und den Körper an der Wand heruntergleiten lassen',
            'Stoppen, wenn die Oberschenkel parallel zum Boden sind (90-Grad-Winkel in den Knien)',
            'Der gesamte Rücken sollte Kontakt zur Wand haben',
            'Halte diese Position statisch, Bauch anspannen'
        ]
    },
    'Jumping Jacks': {
        title: 'Hampelmann (Jumping Jacks)',
        steps: [
            'Aufrecht stehen, Füße zusammen, Arme seitlich am Körper',
            'Gleichzeitig springen, Beine spreizen und Arme über den Kopf heben',
            'Wieder springen, Beine zusammenführen und Arme senken',
            'Flüssige und rhythmische Bewegung',
            'Achte auf eine weiche Landung auf den Fußballen'
        ]
    },
    'Burpees': {
        title: 'Burpees',
        steps: [
            'Aufrecht stehen, dann in die Hocke gehen und Hände auf den Boden legen',
            'Beine nach hinten springen lassen in die Plank-Position',
            'Optional: Eine Liegestütze ausführen',
            'Beine wieder nach vorne zur Hocke ziehen',
            'Explosiv nach oben springen, Arme über den Kopf strecken'
        ]
    },
    'Mountain Climbers': {
        title: 'Mountain Climbers',
        steps: [
            'Plank-Position einnehmen, Hände unter den Schultern',
            'Rücken gerade, Bauch fest anspannen',
            'Abwechselnd ein Knie schnell zur Brust ziehen',
            'Die Bewegung sollte flüssig und schnell sein, als würdest du rennen',
            'Halte den Oberkörper stabil, vermeide Schaukeln der Hüfte'
        ]
    },
    'Jump Squats': {
        title: 'Sprung Kniebeugen (Jump Squats)',
        steps: [
            'Beginne in der Kniebeugenposition (Po tief, Rücken gerade)',
            'Explosiv nach oben springen, Arme können für Schwung genutzt werden',
            'Weich auf den Füßen landen und direkt wieder in die tiefe Kniebeuge übergehen',
            'Knie beim Landen leicht beugen, um den Aufprall zu dämpfen',
            'Konzentriere dich auf eine kontrollierte Landung'
        ]
    },
    'Plank Jacks': {
        title: 'Plank Jacks',
        steps: [
            'Beginne in einer Plank-Position (Hände unter den Schultern, Körper gerade)',
            'Halte den Rumpf stabil und angespannt',
            'Springe gleichzeitig mit beiden Beinen seitlich auseinander und wieder zusammen',
            'Die Hüfte sollte dabei möglichst stabil und ruhig bleiben',
            'Kontrollierte Bewegung, nicht durchhängen lassen'
        ]
    },
    'V-Ups': {
        title: 'V-Ups',
        steps: [
            'Flach auf den Rücken legen, Arme über dem Kopf, Beine ausgestreckt',
            'Gleichzeitig Arme und Beine heben, bis sich Hände und Füße in der Mitte treffen (V-Form)',
            'Bauchmuskeln fest anspannen und Rücken gerade halten',
            'Kontrolliert in die Ausgangsposition zurückkehren',
            'Vermeide Schwung – die Kraft kommt aus dem Bauch'
        ]
    },
    'Reverse Crunches': {
        title: 'Beinheben Reverse Crunches',
        steps: [
            'Flach auf den Rücken legen, Knie angewinkelt oder Beine gestreckt',
            'Bauchmuskeln anspannen und Beine Richtung Decke heben',
            'Dabei den Po leicht vom Boden abheben, um die unteren Bauchmuskeln zu aktivieren',
            'Langsam und kontrolliert wieder absenken, ohne die Füße abzulegen',
            'Konzentriere dich auf die Bewegung im unteren Rücken und Becken'
        ]
    },
    'Bicycle Crunches': {
        title: 'Fahrrad-Crunches (Bicycle Crunches)',
        steps: [
            'Flach auf den Rücken legen, Hände hinter dem Kopf, Knie angewinkelt',
            'Oberkörper leicht anheben, Schulterblätter vom Boden',
            'Abwechselnd den Ellbogen zum gegenüberliegenden Knie ziehen',
            'Das andere Bein gleichzeitig ausstrecken',
            'Rhythmische, fließende Bewegung, die Bauchmuskeln rotieren lassen'
        ]
    },
    'Bulgarian Split Squats (links)': {
        title: 'Bulgarian Split Squats (linkes Bein)',
        steps: [
            'Stelle dich mit dem Rücken zu einem Stuhl oder einer erhöhten Fläche.',
            'Lege den Spann deines linken Fußes auf die erhöhte Fläche hinter dir ab.',
            'Halte den Oberkörper aufrecht und das rechte Bein stabil.',
            'Senke den Körper langsam ab, indem du das rechte Knie beugst (bis ca. 90 Grad).',
            'Drücke dich aus der Ferse des rechten Fußes wieder nach oben.'
        ]
    },
    'Bulgarian Split Squats (rechts)': {
        title: 'Bulgarian Split Squats (rechtes Bein)',
        steps: [
            'Stelle dich mit dem Rücken zu einem Stuhl oder einer erhöhten Fläche.',
            'Lege den Spann deines rechten Fußes auf die erhöhte Fläche hinter dir ab.',
            'Halte den Oberkörper aufrecht und das linke Bein stabil.',
            'Senke den Körper langsam ab, indem du das linke Knie beugst (bis ca. 90 Grad).',
            'Drücke dich aus der Ferse des linken Fußes wieder nach oben.'
        ]
    },
    'Glute Bridge': {
        title: 'Glute Bridge',
        steps: [
            'Lege dich auf den Rücken, Knie angewinkelt, Füße hüftbreit und nah am Po.',
            'Arme liegen seitlich am Körper, Handflächen nach unten.',
            'Drücke die Fersen in den Boden und hebe die Hüfte nach oben.',
            'Spanne den Po fest an und bilde eine gerade Linie von den Schultern zu den Knien.',
            'Halte kurz und senke die Hüfte kontrolliert wieder ab, ohne sie ganz abzulegen.'
        ]
    },
    'High Knees': {
        title: 'High Knees (Kniehebelauf)',
        steps: [
            'Aufrecht stehen, Arme im 90-Grad-Winkel wie beim Laufen.',
            'Rennt auf der Stelle und zieht die Knie abwechselnd so hoch wie möglich zur Brust.',
            'Die Arme bewegen sich entgegengesetzt zu den Beinen.',
            'Halte das Tempo hoch, um die Herzfrequenz zu steigern.',
            'Achte auf eine aktive Rumpfspannung.'
        ]
    },
    'Trizeps Dips (Stuhl)': {
        title: 'Trizeps Dips am Stuhl',
        steps: [
            'Stelle dich mit dem Rücken zu einem stabilen Stuhl oder einer Bank.',
            'Greife die Kante des Stuhls mit den Händen schulterbreit auseinander, Finger zeigen nach vorne.',
            'Strecke die Beine nach vorne aus, Fersen auf dem Boden.',
            'Senke den Körper langsam ab, indem du die Ellbogen nach hinten beugst.',
            'Drücke dich aus den Trizeps wieder nach oben in die Ausgangsposition.'
        ]
    },
    'Bicep Curls (ohne Gewicht)': {
        title: 'Bicep Curls (ohne Gewicht)',
        steps: [
            'Stehe aufrecht, Arme locker an den Seiten, Handflächen nach vorne.',
            'Beuge die Arme und ziehe die Hände zu den Schultern, als ob du Gewichte hebst.',
            'Spanne dabei den Bizeps bewusst an.',
            'Senke die Arme langsam und kontrolliert wieder ab.',
            'Konzentriere dich auf die Muskelkontraktion statt auf Schwung.'
        ]
    },
    'Plank Shoulder Taps': {
        title: 'Plank Shoulder Taps',
        steps: [
            'Beginne in einer hohen Plank-Position (Hände unter den Schultern).',
            'Körper ist eine gerade Linie von Kopf bis Fuß, Bauch fest angespannt.',
            'Hebe eine Hand vom Boden und tippe die gegenüberliegende Schulter an.',
            'Halte die Hüfte so ruhig wie möglich, um ein Schaukeln zu vermeiden.',
            'Wechsle die Seite und führe die Bewegung kontrolliert aus.'
        ]
    },
    'Pike Push-ups': {
        title: 'Pike Push-ups',
        steps: [
            'Beginne in einer Liegestützposition, hebe dann den Po nach oben, sodass dein Körper ein umgekehrtes "V" bildet.',
            'Deine Hände sind schulterbreit auseinander, der Kopf zeigt zum Boden.',
            'Beuge die Ellbogen und senke den Kopf Richtung Boden ab, als würdest du eine Kopfstand-Liegestütze machen.',
            'Drücke dich aus den Schultern wieder nach oben.',
            'Fokus auf Schultern und oberen Rücken.'
        ]
    },
    'Supermans': {
        title: 'Supermans',
        steps: [
            'Lege dich flach auf den Bauch, Arme und Beine ausgestreckt.',
            'Hebe gleichzeitig die Arme, den Kopf, die Brust und die Beine vom Boden ab.',
            'Spanne dabei den unteren Rücken und die Gesäßmuskulatur an.',
            'Halte die Position für einen Moment und senke sie dann kontrolliert ab.',
            'Achte darauf, nicht zu rucken und die Bewegung langsam auszuführen.'
        ]
    },
    'Triceps Push-ups (auf Knien)': {
        title: 'Trizeps Liegestützen (auf Knien)',
        steps: [
            'Knie dich auf den Boden und stütze dich auf deine Hände.',
            'Hände enger als schulterbreit, direkt unter den Schultern platzieren.',
            'Halte die Ellbogen eng am Körper, während du dich absenkst.',
            'Körper von den Knien bis zum Kopf gerade halten.',
            'Drücke dich aus den Trizeps wieder nach oben.'
        ]
    },
    'Rudern am Tisch': {
        title: 'Rudern am Tisch (Inverted Row)',
        steps: [
            'Lege dich unter einen stabilen Tisch oder eine Stange.',
            'Greife die Kante des Tisches mit den Händen etwas weiter als schulterbreit auseinander.',
            'Strecke die Beine aus, Körper ist eine gerade Linie von Kopf bis Fuß.',
            'Ziehe die Brust zur Tischkante hoch, indem du die Schulterblätter zusammenziehst.',
            'Kontrolliert wieder absenken. Je gerader die Beine, desto schwerer.'
        ]
    },
    'Archer Liegestützen': {
        title: 'Archer Liegestützen',
        steps: [
            'Beginne in einer breiten Liegestützposition.',
            'Verlagere dein Gewicht auf eine Seite, strecke den anderen Arm seitlich aus (Ellbogen durchgedrückt).',
            'Senke den Körper ab, wobei der Ellbogen des gebeugten Arms nahe am Körper bleibt.',
            'Drücke dich aus dem gebeugten Arm wieder hoch, der gestreckte Arm unterstützt minimal.',
            'Wechsle die Seite oder mache mehrere Wiederholungen auf einer Seite, bevor du wechselst.'
        ]
    },
    'Sprung Ausfallschritte': {
        title: 'Sprung Ausfallschritte (Jump Lunges)',
        steps: [
            'Starte in der Ausfallschrittposition.',
            'Springe explosiv nach oben und wechsle die Position deiner Beine in der Luft.',
            'Lande sanft im Ausfallschritt mit dem anderen Bein vorne.',
            'Achte auf eine weiche Landung und dass das Knie des vorderen Beins nicht über die Zehenspitzen ragt.',
            'Halte den Oberkörper aufrecht und den Core angespannt.'
        ]
    },
    'Pistol Squats (assistiert)': {
        title: 'Pistol Squats (assistiert)',
        steps: [
            'Stelle dich auf ein Bein, das andere Bein nach vorne ausstrecken.',
            'Halte dich an einem Stuhl, einer Wand oder einer Tür fest zur Unterstützung.',
            'Senke den Körper langsam ab, indem du das Standbein beugst, als würdest du dich hinsetzen.',
            'Das ausgestreckte Bein bleibt in der Luft.',
            'Drücke dich aus der Ferse des Standbeins wieder nach oben.'
        ]
    },
    'Commando Plank': {
        title: 'Commando Plank',
        steps: [
            'Beginne in einer hohen Plank-Position (auf den Händen).',
            'Wechsle mit einer Hand auf den Unterarm, dann mit der anderen, sodass du im Unterarmstütz bist.',
            'Kehre dann mit der ersten Hand wieder auf die Hand zurück, dann mit der zweiten, zurück zur hohen Plank.',
            'Halte den Körper während der gesamten Bewegung stabil und parallel zum Boden.',
            'Wechsle die führende Hand bei jedem Wechsel.'
        ]
    },
    'Fersen zum Po': {
        title: 'Fersen zum Po (Butt Kicks)',
        steps: [
            'Stehe aufrecht und beginne, auf der Stelle zu joggen.',
            'Ziehe dabei die Fersen aktiv und schnell zum Gesäß hoch.',
            'Die Arme schwingen wie beim Laufen mit.',
            'Halte das Tempo hoch und atme gleichmäßig.',
            'Fokus auf die Aktivierung der hinteren Oberschenkelmuskulatur.'
        ]
    },
    'Step-ups auf Erhöhung': {
        title: 'Step-ups auf Erhöhung',
        steps: [
            'Stelle dich vor eine stabile Erhöhung (Stuhl, Treppenstufe).',
            'Steige mit einem Fuß auf die Erhöhung, drücke dich nach oben, bis beide Beine gestreckt sind.',
            'Das andere Bein folgt oder bleibt leicht in der Luft.',
            'Steige kontrolliert wieder ab, führe das Bein, das zuerst hochging, zuerst wieder runter.',
            'Wechsle das führende Bein oder mache mehrere Wiederholungen auf einer Seite.'
        ]
    },
    'Sonnengruß': {
        title: 'Sonnengruß (Sun Salutation)',
        steps: [
            'Beginne im Stehen (Tadasana), atme ein, Arme über den Kopf.',
            'Ausatmen, Vorbeuge (Uttanasana).',
            'Einatmen, halbe Vorbeuge, Rücken gerade.',
            'Ausatmen, Hände zum Boden, Beine zurück in die Plank.',
            'Optional: Knie, Brust, Kinn zum Boden oder Chaturanga.',
            'Einatmen, Kobra oder Heraufschauender Hund.',
            'Ausatmen, Herabschauender Hund. Halte einige Atemzüge.',
            'Einatmen, Füße nach vorne zu den Händen, halbe Vorbeuge.',
            'Ausatmen, ganze Vorbeuge.',
            'Einatmen, Arme über den Kopf, komm nach oben zum Stehen.',
            'Ausatmen, Arme senken (Tadasana).'
        ]
    },
    'Krieger I': {
        title: 'Krieger I (Warrior I)',
        steps: [
            'Beginne im Stehen, mache einen großen Schritt nach hinten mit einem Fuß (Ferse bleibt am Boden, Fuß zeigt leicht schräg nach außen).',
            'Vorderes Knie beugen (90 Grad), hinteres Bein gestreckt und stark.',
            'Rumpf nach vorne ausrichten, Arme über den Kopf strecken, Handflächen zueinander.',
            'Schultern entspannt, Blick nach vorne oder leicht nach oben.',
            'Achte auf Stabilität in den Beinen und Länge im Oberkörper.'
        ]
    },
    'Herabschauender Hund': {
        title: 'Herabschauender Hund (Downward-Facing Dog)',
        steps: [
            'Beginne im Vierfüßlerstand, Hände schulterbreit, Knie hüftbreit.',
            'Drücke die Hände fest in den Boden, hebe die Hüfte nach oben und hinten.',
            'Strecke die Arme und Beine, bilde ein umgekehrtes "V".',
            'Fersen ziehen Richtung Boden (müssen nicht aufsetzen), Rücken ist lang und gerade.',
            'Lass den Kopf locker hängen, Blick zu den Füßen oder Knien.'
        ]
    },
    'Katze-Kuh Dehnung': {
        title: 'Katze-Kuh Dehnung (Cat-Cow Stretch)',
        steps: [
            'Beginne im Vierfüßlerstand, Hände unter den Schultern, Knie unter den Hüften.',
            'Einatmen: Rücken durchdrücken, Kopf heben, Blick nach vorne (Kuh-Position).',
            'Ausatmen: Rücken runden, Kinn zur Brust, Bauchnabel einziehen (Katze-Position).',
            'Fließe sanft und bewusst zwischen diesen beiden Positionen im Rhythmus deines Atems.',
            'Macht die Wirbelsäule geschmeidig und mobilisiert den Rücken.'
        ]
    },
    'Kindeshaltung': {
        title: 'Kindeshaltung (Child\'s Pose)',
        steps: [
            'Knie dich auf die Matte, große Zehen berühren sich, Knie hüftbreit oder weiter auseinander.',
            'Setze dich auf deine Fersen oder zwischen sie.',
            'Beuge dich mit dem Oberkörper nach vorne über deine Beine.',
            'Lege die Stirn auf den Boden und strecke die Arme nach vorne oder lege sie entspannt neben dem Körper ab, Handflächen nach oben.',
            'Atme tief in den Bauch ein und aus, lass alle Anspannung los.'
        ]
    }
};

// --- Functions ---

function calculateWorkoutDuration(workout) {
    const totalSeconds = workout.sequence.reduce((sum, step) => sum + step.duration, 0);
    const minutes = Math.floor(totalSeconds / 60);
    return minutes; // Return minutes as number for filtering
}

function renderWorkoutCards() {
    const filteredWorkouts = workouts.filter(workout => {
        const levelMatch = currentFilters.level === 'all' || workout.level === currentFilters.level;
        const targetMatch = currentFilters.target === 'all' || workout.target === currentFilters.target;
        const durationMatch = calculateWorkoutDuration(workout) <= currentFilters.duration;
        return levelMatch && targetMatch && durationMatch;
    });

    workoutGrid.innerHTML = '';
    
    filteredWorkouts.forEach(workout => {
        const card = document.createElement('div');
        card.className = 'workout-card';
        card.dataset.workoutId = workout.id;
        
        const exerciseNames = workout.sequence
            .filter(step => step.type === 'exercise')
            .map(step => step.name)
            .join(', ');

        const workoutMinutes = calculateWorkoutDuration(workout);

        card.innerHTML = `
            <h3>${workout.name}</h3>
            <div class="card-meta">
                <span class="badge">${workout.level}</span>
                <span class="badge">${workout.target}</span>
                <span class="badge">${workoutMinutes} Min</span>
            </div>
            <div class="description">
                ${workout.sequence.length} Übungen mit Pausen für optimales Training
            </div>
            <div class="exercises-preview">
                Übungen: ${exerciseNames}
            </div>
        `;
        
        card.addEventListener('click', () => selectWorkout(workout));
        workoutGrid.appendChild(card);
    });

    if (filteredWorkouts.length === 0) {
        workoutGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">Keine Workouts für die gewählten Filter gefunden.</p>';
    }
}

function selectWorkout(workout) {
    currentWorkout = workout;
    resetWorkoutState();
    
    workoutTitle.textContent = workout.name;
    workoutLevel.textContent = workout.level;
    workoutTarget.textContent = workout.target;
    workoutDuration.textContent = `${calculateWorkoutDuration(workout)} Min`;
    
    updateInstructions();
    updateProgress();
    
    selectionScreen.style.display = 'none';
    workoutScreen.style.display = 'block';
    
    // Set initial time left for the first step, but don't start timer
    if (currentWorkout && currentWorkout.sequence.length > 0) {
        timeLeft = currentWorkout.sequence[0].duration;
        updateTimerDisplay();
    }
}

function goBackToSelection() {
    if (isWorkoutRunning) {
        if (!confirm('Training läuft noch. Wirklich zur Auswahl zurückkehren?')) {
            return;
        }
    }
    
    resetWorkoutState();
    selectionScreen.style.display = 'block';
    workoutScreen.style.display = 'none';
}

function resetWorkoutState() {
    clearInterval(timerInterval);
    isWorkoutRunning = false;
    isPaused = false;
    isPreparingStep = true;
    currentStepIndex = 0;
    timeLeft = 0;
    exerciseExplanation.style.display = 'block'; // Ensure explanation is visible initially
    updateTimerDisplay();
    updateButtonStates();
    updateProgress();
}

function startWorkout() {
    if (!currentWorkout || isWorkoutRunning) return;

    isWorkoutRunning = true;
    isPaused = false;
    startCurrentStep();
}

function startCurrentStep() {
    if (!isWorkoutRunning || !isPreparingStep) return;
    
    isPreparingStep = false;
    exerciseExplanation.style.display = 'none';
    updateButtonStates();

    // Start the timer
    const currentStep = currentWorkout.sequence[currentStepIndex];
    timeLeft = currentStep.duration;
    updateTimerDisplay();

    timerInterval = setInterval(tick, 1000);
}

function togglePauseResume() {
    if (!isWorkoutRunning) return;

    if (isPaused) {
        isPaused = false;
        timerInterval = setInterval(tick, 1000);
        pauseResumeBtn.textContent = 'Pause';
        timerLabel.textContent = getCurrentStepType();
    } else {
        isPaused = true;
        clearInterval(timerInterval);
        pauseResumeBtn.textContent = 'Weiter';
        timerLabel.textContent = 'Pausiert';
    }
    updateButtonStates();
}

function skipStep() {
    if (!currentWorkout || isPreparingStep) return; // Can't skip during preparation
    currentStepIndex++;
    prepareNextStep();
}

function prepareNextStep() {
    clearInterval(timerInterval);
    isPreparingStep = true;

    if (currentStepIndex >= currentWorkout.sequence.length) {
        finishWorkout();
        return;
    }

    const nextStep = currentWorkout.sequence[currentStepIndex];
    timeLeft = nextStep.duration;
    
    exerciseExplanation.style.display = 'block';
    updateInstructions();
    updateTimerDisplay();
    updateProgress();
    updateButtonStates();
}

function tick() {
    if (isPaused) return;

    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
        currentStepIndex++;
        prepareNextStep();
    }
}

function finishWorkout() {
    clearInterval(timerInterval);
    isWorkoutRunning = false;
    isPaused = false;
    isPreparingStep = true;
    
    timerDisplay.textContent = '🎉';
    timerLabel.textContent = 'Geschafft!';
    currentStepName.textContent = 'Training beendet!';
    currentInstruction.textContent = 'Herzlichen Glückwunsch! Du hast dein Training erfolgreich abgeschlossen.';
    exerciseExplanation.innerHTML = '<h4>🏆 Gut gemacht!</h4><p>Vergiss nicht, dich zu dehnen und ausreichend zu trinken.</p>';
    exerciseExplanation.style.display = 'block';
    progressIndicator.textContent = `${currentWorkout.sequence.length}/${currentWorkout.sequence.length} abgeschlossen`;
    nextExercise.textContent = '';
    
    progressFill.style.width = '100%';
    
    updateButtonStates();
    
    // Allow restarting
    currentStepIndex = 0;
}

function getCurrentStepType() {
    if (!currentWorkout || currentStepIndex >= currentWorkout.sequence.length) return 'Bereit';
    if (isPreparingStep) return 'Vorbereitung';
    const step = currentWorkout.sequence[currentStepIndex];
    return step.type === 'exercise' ? 'Übung' : 'Pause';
}

function updateTimerDisplay() {
    if (timeLeft === 0 && !isWorkoutRunning) {
        timerDisplay.textContent = '00:00';
        timerLabel.textContent = 'Bereit';
        timerDisplay.className = '';
        return;
    }
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerLabel.textContent = getCurrentStepType();
    
    // Update timer color based on remaining time
    if (currentWorkout && currentStepIndex < currentWorkout.sequence.length && !isPreparingStep) {
        const currentStep = currentWorkout.sequence[currentStepIndex];
        const totalDuration = currentStep.duration;
        const timePercentage = timeLeft / totalDuration;
        
        timerDisplay.className = '';
        if (timePercentage <= 0.25) {
            timerDisplay.classList.add('danger');
        } else if (timePercentage <= 0.5) {
            timerDisplay.classList.add('warning');
        }
    } else {
        timerDisplay.className = '';
    }
}

function updateInstructions() {
    if (!currentWorkout) return;

    if (currentStepIndex >= currentWorkout.sequence.length) return;

    const step = currentWorkout.sequence[currentStepIndex];
    
    // Update step name with icon
    const stepIcon = step.type === 'exercise' ? 
        '<span class="step-icon exercise">💪</span>' : 
        '<span class="step-icon rest">😌</span>';
    currentStepName.innerHTML = `${stepIcon} ${currentStepIndex + 1}. ${step.name}`;
    currentInstruction.textContent = step.display;

    // Update exercise info container styling
    const exerciseInfoContainer = document.querySelector('.exercise-info');
    exerciseInfoContainer.className = 'exercise-info';
    if (isPreparingStep) {
        // No special border during preparation
    } else if (step.type === 'exercise') {
        exerciseInfoContainer.classList.add('exercise-active');
    } else {
        exerciseInfoContainer.classList.add('rest-active');
    }

    // Show exercise explanation
    if (step.type === 'exercise' && exerciseExplanations[step.name]) {
        const explanation = exerciseExplanations[step.name];
        exerciseExplanation.innerHTML = `
            <h4>💡 So geht's: ${explanation.title}</h4>
            <ul>
                ${explanation.steps.map(stepDesc => `<li>${stepDesc}</li>`).join('')}
            </ul>
        `;
    } else if (step.type === 'rest') {
        exerciseExplanation.innerHTML = `
            <h4>💤 Pause</h4>
            <p>Nutze die Zeit um dich zu entspannen und durchzuatmen. Trinke etwas Wasser und bereite dich auf die nächste Übung vor.</p>
        `;
    }

    // Show next exercise
    if (currentStepIndex + 1 < currentWorkout.sequence.length) {
        const nextStep = currentWorkout.sequence[currentStepIndex + 1];
        nextExercise.innerHTML = `<span class="next-exercise-preview">Als nächstes: ${nextStep.name}</span>`;
    } else {
        nextExercise.innerHTML = '<span class="next-exercise-preview">🏁 Letzter Schritt!</span>';
    }
}

function updateProgress() {
    if (!currentWorkout) return;
    
    const stepToShow = isWorkoutRunning ? currentStepIndex + 1 : 1;
    progressIndicator.innerHTML = `<span class="progress-indicator-main">${stepToShow > currentWorkout.sequence.length ? currentWorkout.sequence.length : stepToShow}/${currentWorkout.sequence.length}</span>`;

    const progressPercent = ((currentStepIndex) / currentWorkout.sequence.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
}

function updateButtonStates() {
    if (!currentWorkout) {
        startBtn.disabled = true;
        pauseResumeBtn.disabled = true;
        skipBtn.disabled = true;
        resetBtn.disabled = true;
        return;
    }

    startBtn.disabled = isWorkoutRunning;
    resetBtn.disabled = false;

    if (isPreparingStep) {
        // We are in the "explanation" phase
        pauseResumeBtn.disabled = true;
        skipBtn.disabled = true;
        startBtn.disabled = false;
        
        if (isWorkoutRunning) {
            const stepType = currentWorkout.sequence[currentStepIndex].type === 'exercise' ? 'Übung' : 'Pause';
            startBtn.textContent = `${stepType} starten`;
        } else {
            startBtn.textContent = 'Training starten';
        }

    } else {
        // Timer is running or paused
        startBtn.disabled = true;
        pauseResumeBtn.disabled = false;
        skipBtn.disabled = isPaused; // Allow skipping only when not paused
        
        if (isPaused) {
            pauseResumeBtn.textContent = 'Weiter';
        } else {
            pauseResumeBtn.textContent = 'Pause';
        }
    }

    if (currentStepIndex >= currentWorkout.sequence.length) {
        startBtn.textContent = 'Neustarten';
        startBtn.disabled = false;
        pauseResumeBtn.disabled = true;
        skipBtn.disabled = true;
    }
}

// --- Event Listeners ---
backToSelectionBtn.addEventListener('click', goBackToSelection);

startBtn.addEventListener('click', () => {
    if (!isWorkoutRunning) {
        startWorkout();
    } else if (isPreparingStep) {
        if(currentStepIndex >= currentWorkout.sequence.length) {
            // "Neustarten" button after workout finished
            resetWorkoutState();
            updateInstructions();
        } else {
            startCurrentStep();
        }
    }
});

pauseResumeBtn.addEventListener('click', togglePauseResume);
skipBtn.addEventListener('click', skipStep);
resetBtn.addEventListener('click', () => {
    if (currentWorkout) {
        if (isWorkoutRunning && !confirm('Training wirklich neustarten?')) return;
        resetWorkoutState();
        updateInstructions();
        // Set initial time for first step
        timeLeft = currentWorkout.sequence[0].duration;
        updateTimerDisplay();
    }
});

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filterType = btn.dataset.filter;
        const filterValue = btn.dataset.value;
        
        // Remove active class from siblings
        btn.parentElement.querySelectorAll('.filter-btn').forEach(sibling => {
            sibling.classList.remove('active');
        });
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Update filters
        currentFilters[filterType] = filterValue;
        
        // Re-render cards
        renderWorkoutCards();
    });
});

durationSlider.addEventListener('input', () => {
    const value = parseInt(durationSlider.value);
    durationValueDisplay.textContent = `${value} Min`;
    currentFilters.duration = value;
    renderWorkoutCards();
});

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Set initial duration display
    durationValueDisplay.textContent = `${durationSlider.value} Min`;
    renderWorkoutCards();
});