/*
 * NOTE: Please update semesterManager in js/logic.js as well, after updating this file
 *
 * This file must only be edited manually!
 * Remember to update 'Klubsprecher' and 'Studium Plus'!
 */

 /*
 *	NOTES to Conversion from Bachelor to Master
 *   Pflicht is always false, leave out
 *   vertiefung is always empty, logic uses kennung
 */

/*
 * Data structure for a course:
 *    kurz: Short text for the course. Make sure, it fits in the browser on 1024px
 *    lehrform: "Seminar" or "Projekt" or "Vorlesung"
 *    modul: "Vertiefungsgebiete" is what you want in most cases here
 *    semester: semester string: (WS|SS)[0-9]{2}, e.g. WS11
 *    pflicht: whether this course must be chosen or not
 *    empfohlen: integer indicating in which course this semester is recommended
 *    vertiefung: array containing strings for the vertiefungsgebiete, "BPET"/"HCT"/"IST"/"OSIS"/"SAMT" alphabetically!
 *    cp: how much credit points you get for this course
 *    vorher: identifier/key of the course/s which must be taken before the current one, e.g. 'mathematik1'
 *    dozent: self explaining
 *    nameLV: long name
 */

 var ws10_11 = "WS10/11",
    ss11    = "SS11",
    ws11_12 = "WS11/12",
    ss12    = "SS12",
    ws12_13 = "WS12/13",
    ss13    = "SS13",
    ws13_14 = "WS13/14",
    ss14 = "SS14";

var data = {
    advancedDataProfiling: {
        kurz: "adv Data <br />Profiling",
        kennung: ["VT BPET", "VT OSIS"],
        lehrform: ["Projekt", " Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        vertiefung: [""],
        cp: 4,
        dozent: ["Prof. Dr. Felix Naumann", "Thorsten Papenbrock"],
        nameLV: "Advanced Data Profiling"
    },
    advancedDesignThinking: {
        kurz: "D-School<br />Advanced Track",
        kennung: ["SSK-DT"],
        lehrform: ["Seminar"," Projekt"],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"],
        nameLV: "Advanced Design Thinking (D-School Advanced Track)"
    },
    advancedMDE: {
        kurz: "Advanced MDE",
        kennung: ["ITSE","VT SAMT"],
        lehrform: ["Seminar"," Projekt"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese","M. Sc. Thomas Beyhl"],
        nameLV: "Advanced MDE: Model Management"
    },
    advancedRecommendationTechniques: {
        kurz: "Advanced<br />Recommandation",
        kennung: ["VT BPET","VT OSIS"],
        lehrform: ["Seminar"," Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. Gjergji Kasneci"],
        nameLV: "Advanced Recommendation Techniques"
    },
    algorithmenGeovisualisierung: {
        kurz: "Algorithmen der<br />Geovisualisierung",
        kennung: ["ITSE","VT HCT","VT IST"],
        lehrform: ["Seminar"," Projekt"],
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner","Rico Richter","Stefan Buschmann"],
        nameLV: "Algorithmen und Techniken der Geovisualisierung (ehem.: Geovisualisierungsverfahren)"
    },
    automatedAnalysisOfFormalModels: {
        kurz: "Auto. Analysis of<br />Formal Models",
        kennung: ["ITSE","VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13,ws13_14, ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Holger Giese","Leen Lambers","M.Sc. Johannes Dyck"],
        nameLV: "Automated Analysis of Formal Models"
    },
    bringYourOwnProject: {
        kurz: "BYOP",
        kennung: ["SSK-KO","SSK-SK","SSK-MA"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13, ws13_14],
        benotet: false,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Karen Dittmann"],
        nameLV: "Bring your own project: IT-Projekte erfolgreich planen und managen"
    },
    businessEtikette: {
        kurz: "Business Etikette",
        kennung: ["SSK-SK","SSK-KO"],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Timm Krohn","Imme Vogelsang"],
        nameLV: "Business Etikette -<br />HPI Charm School"
    },
    businessProcessCompliance: {
        kurz: "BPC",
        kennung: ["VT BPET", "VT SAMT"],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 3,
        dozent: ["Matthias Kunze"],
        nameLV: "Business Process Compliance"
    },
    cloudSicherheit: {
        kurz: "Cloud Sicherheit",
        kennung: ["VT IST","VT OSIS","VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze","Christian Neuhaus"],
        nameLV: "Algorithmen und Analysemethoden für Sicherheit in Cloud-Infrastrukturen"
    },
    cloudUndVirtualisierung: {
        kurz: "Cloud &<br /> Virtualisierung",
        kennung: ["ITSE","VT IST","VT OSIS"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Christoph Meinel","Maxim Schnjakin"],
        nameLV: "Cloud und Virtualisierung"
    },
    constraintbasedprogramming: {
        kurz: "Constraint-basd<br />Programming",
        kennung: ["ITSE", "OSIS", "SAMT"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff"],
        nameLV: "Constraint-based Programming"
    },
    dataMining: {
        kurz: "Data<br />Mining",
        kennung: ["VT OSIS", "VT SAMT"],
        lehrform: ["Vorlesung", " Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Dr. Gjergji Kasneci"],
        nameLV: "Data Mining and Probabilistic Reasoning"
    },
    dataProfilingAndCleansing: {
        kurz: "Data Profiling<br /> and Cleansing",
        kennung: ["ITSE","VT BPET","VT OSIS"],
        lehrform: ["Vorlesung"," Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann"],
        nameLV: "Data Profiling and Data Cleansing"
    },
    dependableSystems: {
        kurz: "Dependable<br />Systems",
        kennung: ["ITSE","VT OSIS"],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. Peter Tröger"],
        nameLV: "Dependable Systems"
    },
    designingProgrammingInMemoryDatabases: {
        kurz: "Designing In-Mem DB",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"],
        lehrform: ["Projekt"," Seminar"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Christian Schwarz","Dr. Jürgen Müller","Dipl.-Kfm. Jens Krüger"],
        nameLV: "Designing and Programming Applications for In-Memory Databases"
    },
    designThinkingBasics: {
        kurz: "D-School<br />Basic Track",
        kennung: ["SSK-DT"],
        lehrform: ["Seminar"," Projekt"],
        modul: ["Softskills"],
        semester: [ss13,ws13_14, ss14],
        benotet: true,
        pflicht: false,
        cp: 9,
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"],
        nameLV: "Design Thinking Basics (D-School Basic Track)"
    },
    duplicationDetection: {
        kurz: "Duplication Detection",
        kennung: ["VT BPET","VT OSIS"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann","Arvid Heise"],
        nameLV: "Large Scale Duplicate Detection"
    },
    eingebetteteBetriebssysteme: {
        kurz: "Embedded<br />Systems",
        kennung: ["VT IST", "VT OSIS", "VT SAMT"],
        lehrform: ["Vorlesung", " Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Uwe Hentschel"],
        nameLV: "Eingebettete Betriebssysteme"
    },
    englisch3: {
        kurz: "Fachenglisch<br />Level 3",
        kennung: ["SSK-SK","SSK-KO"],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["David Meier"],
        nameLV: "Fachspezifisches Englisch (Level 3)"
    },
    eventprocessing: {
        kurz: "Event Processing",
        kennung: ["ITSE", "OSIS"],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. Anne Baumgraß", "Prof. Dr. Mathias Weske"],
        nameLV: "Event Processing"
    },
    eventProcessingTechnologies: {
        kurz: "Event Processing",
        kennung: ["VT BPET","VT OSIS"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Jan Mendling"],
        nameLV: "Event Processing Technologies"
    },
    fuehrungskompetenz: {
        kurz: "Führungs-<br />kompetenz",
        kennung: ["SSK-MA"],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Michael Karl Heidemann M.A.","Eugen Unger"],
        nameLV: "Führungskompetenz"
    },
    futureinteractivetechnology: {
        kurz: "Future Interactive<br>Technology",
        kennung: ["ITSE", "HCT", "SAMT"],
        lehrform: ["Vorlesung"],
        modul: ["IT Systems Engineering", "Vertiefungsgebiete"],
        semester: ss14,
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "Future Interactive Technology"
    },
    geovisualisierung: {
        kurz: "Geovisualisierung",
        kennung: ["ITSE","VT HCT","VT IST"],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner","Sebastian Pasewaldt","Sebastian Schmechel","Dr. Matthias Trapp"],
        nameLV: "Geovisualisierung"
    },
    hciProject: {
        kurz: "HCI<br />Projekt",
        kennung: ["ITSE", "VT HCT", "VT SAMT"],
        lehrform: ["Projekt", " Seminar"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Interactive Fabrication and Muscle Interfaces"
    },
    hciProjectSeminar: {
        kurz: "HCI Cameras<br /> and Haptics",
        kennung: ["ITSE","VT HCT","VT SAMT"],
        lehrform: ["Projekt"," Seminar"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Cameras, Haptics & Interactive Fabrication"
    },
    hciProjectSeminar2: {
        kurz: "HCI Projekt<br />Crowd Interaction",
        kennung: ["ITSE", "HCT", "SAMT"],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Crowd Interaction, Physical Computing and Digital Fabrication"
    },
    hciProjectSeminarVRG: {
        kurz: "HCI Projekt<br<VR Gaming",
        kennung: ["ITSE", "HCT", "SMAT"],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT Systems Engineering", "Vertiefungsgebiete"],
        semester: ss14,
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Virtual Reality Gaming"
    },
    hciResearch: {
        kurz: "HCI Research",
        kennung: ["ITSE","VT HCT","VT SAMT"],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "Human Computer Interaction Research"
    },
    informationretrieval: {
        kurz: "Information<br /> Retrieval",
        kennung: ["OSIS", "IST"],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Felix Naumann"],
        nameLV: "Information Retrieval"
    },
    informationssicherheit: {
        kurz: "Information<br />Security",
        kennung: ["ITSE","VT IST","VT OSIS"],
        lehrform: ["Vorlesung"," Übung"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel"],
        nameLV: "Informationssicherheit"
    },
    informationvisualization: {
        kurz: "Information<br /> Visualization",
        kennung: ["HCT", "IST"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Sebastian Kai Belle"],
        nameLV: "Information Visualization"
    },
    inmemorycomputing: {
        kurz: "In-Memory<br />Computing",
        kennung: ["ITSE", "HCT", "IST"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dr. Matthieu Schpranow", "Dr. Mariana Neves", "Cindy Fähnrich"],
        nameLV: "In-Memory Computing for Life Sciences"
    },
    inMemoryDatabases: {
        kurz: "In Memory<br />Databases",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Martin Faust","David Schwalb","Dipl.-Kfm. Jens Krüger","Dr. Jürgen Müller","Christian Schwarz"],
        nameLV: "In-Memory Databases: Algorithms and Data Structures on Modern Hardware"
    },
    inMemoryDataManagementResearch: {
        kurz: "InMem Data<br />Management",
        kennung: ["VT BPET", "VT OSIS", "VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        vertiefung: [""],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger"],
        nameLV: "In-Memory Data Management Research"
    },
    inMemoryDataStructuresAlgorithms: {
        kurz: "In-Memory <br />Data &amp; Algorthims",
        kennung: ["ITSE", "OSIS", "SAMT", "BPET"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Martin Faust", "David Schwalb"],
        nameLV: "Data Structures and Algorithms for In-Memory Databases"
    },
    interactiveData: {
        kurz: "Interactive Data",
        kennung: ["ITSE","VT SAMT","VT HCT"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld","Marcel Taeumel","Tim Felgentreff","Jens Lincke"],
        nameLV: "Interactive Representations of Data Structures and Algorithms"
    },
    introductionOfDesignThinking: {
        kurz: "Introduction<br />Design Thinking",
        kennung: ["SSK-DT"],
        lehrform: ["Seminar"," Projekt"],
        modul: ["Softskills"],
        semester: [ss13,ws13_14, ss14],
        benotet: false,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"],
        nameLV: "Introduction of Design Thinking (Einführung in das Design Thinking)"
    },
    itEntrepreneurship: {
        kurz: "Entrepreneurship",
        kennung: ["SSK-MA", "SSK-RE", "SSK-KO"],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ws13_14],
        benotet: false,
        cp: 6,
        dozent: ["Dr. Rouven Westphal"],
        nameLV: "IT-Entrepreneurship"
    },
    itEntrepreneurshipII: {
        kurz: "Entrepreneurship II",
        kennung: ["SSK-MA","SSK-KO","SSK-RE"],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Rouven Westphal"],
        nameLV: "IT Entrepreneurship II"
    },
    itFallstudien: {
        kurz: "Fallstudien",
        kennung: ["SSK-MA", "SSK-RE"],
        lehrform: ["Vorlesung"],
        modul: ["Softskills"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Prof. Dr.-Ing. Werner Zorn"],
        nameLV: "IT-Fallstudien - Was wir aus gescheiterten IT-Projekten lernen können"
    },
    itRecht: {
        kurz: "IT-Recht",
        kennung: ["SSK-RE"],
        lehrform: ["Vorlesung"],
        modul: ["Softskills"],
        semester: [ws13_14],
        benotet: true,
        cp: 3,
        dozent: ["Dr. Anselm Brandi-Dohrn", "Monika Menz"],
        nameLV: "IT-Recht"
    },
    komplexitaestheorie: {
        kurz: "Komplexitätstheorie",
        kennung: ["ITSE", "IST", "OSIS"],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Nuhad Shaabani"],
        nameLV: "Komplexitätstheorie"
    },
    konfliktUndKommunikationsmanagement: {
        kurz: "Kommunikations-<br />management",
        kennung: ["SSK-KO","SSK-MA"],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13,ws13_14, ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Michaela Schumacher"],
        nameLV: "Konflikt-<br />und Kommunikationsmanagement"
    },
    konzepteParallelerProgrammierung: {
        kurz: "Parallel<br />Programming",
        kennung: ["ITSE", "VT OSIS"],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        vertiefung: [""],
        cp: 6,
        dozent: ["Dr. Peter Tröger"],
        nameLV: "Konzepte paralleler Programmierung"
    },
    nlp: {
        kurz: "NLP",
        kennung: ["OSIS", "BPET"],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Mariana Neves", "Prof. Dr. Felix Naumann"],
        nameLV: "Natural Language Processing"
    },
    linkeddatapublishing: {
        kurz: "Linked Data<br /> Publishing",
        kennung: ["ITSE", "IST", "BPET"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Harald Sack"],
        nameLV: "Principles of Linked Data Publishing"
    },
    linkedopendata: {
        kurz: "Linked<br />Open Data",
        kennung: ["ITSE", "BPET", "IST"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. rer. nat. Harad Sack"],
        nameLV: "A LOD of Movies - Linked Open Data Knowledge Mining"
    },
    managementEssentials: {
        kurz: "Management Essentials",
        kennung: ["SSK-MA"],
        lehrform: ["Vorlesung"],
        modul: ["Softskills"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Katharina Hölzle"],
        nameLV: "Management Essentials"
    },
    methodikGeoinformationstechnik: {
        kurz: "Methodik<br />GeoInfo",
        kennung: ["VT HCT", "VT IST"],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 3,
        dozent: ["Dr. techn. Markus Jobst"],
        nameLV: "Methodik der Geoinformationstechnik"
    },
    middleware: {
        kurz: "Komponenten<br />& Middleware",
        kennung: ["OSIS", "SAMT"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Christian Neuhaus", "Frank Feinbube"],
        nameLV: "Komponentenprogrammierung und Middleware"
    },
    networkSecurityPractice: {
        kurz: "Network<br />Security",
        kennung: ["ITSE", "VT IST", "VT OSIS"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Dr. Feng Cheng", "Prof. Dr. Christoph Meinel"],
        nameLV: "Network Security in Practice"
    },
    pearlsComputerScience: {
        kurz: "Pearls",
        kennung: ["VT BPET", "VT OSIS", "VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        vertiefung: ["Information Systems", " Business Computing"],
        cp: 3,
        dozent: ["Prof. Dr. Mathias Weske"],
        nameLV: "Pearls of Computer Science"
    },
    pearlsofBPM: {
        kurz: "Business Processybr />Management",
        kennung: ["OSIS", "BPET"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "Ekaterina Bazhenova"],
        nameLV: "Pearls of Business Process Management"
    },
    penTesting: {
        kurz: "Penetration Testing",
        kennung: ["ITSE","VT IST","VT OSIS"],
        lehrform: ["Seminar"," Projekt"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel","Hosnieh Rafiee"],
        nameLV: "Penetration Testing and Securing IPv6 Networks"
    },
    persoenlichkeitUndSelbstmanagement: {
        kurz: "Persönlichkeit &<br />Selbstmanagement",
        kennung: ["SSK-KO","SSK-MA"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Michaela Schumacher"],
        nameLV: "Persönlichkeit und Selbstmanagement"
    },
    personalManagementSkills: {
        kurz: "Personal<br />Management",
        kennung: ["SSK-MA"],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ws13_14],
        benotet: true,
        cp: 3,
        dozent: ["Dr. Rolf Specht"],
        nameLV: "Personal Management Skills"
    },
    privacyAndSecurityIPv6: {
        kurz: "Privacy&Sec<br />IPv6",
        kennung: ["ITSE", "VT IST", "VT OSIS"],
        lehrform: ["Seminar", " Projekt"],
        modul: ["Vertiefungsgebiete", " IT-Systems Engineering"],
        semester: [ws13_14],
        benotet: true,
        vertiefung: [""],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Hosnieh Rafiee"],
        nameLV: "Privacy and Security in IPv6"
    },
    productInnovationAndEngineering: {
        kurz: "Product Innovation",
        kennung: ["ITSE","VT BPET","VT HCT"],
        lehrform: ["Projekt"," Seminar"],
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Franziska Häger", "Thomas Kowark"],
        nameLV: "Global Team-Based Product Innovation & Engineering II -<br />ME 310"
    },
    productInnovationEngineeringI: {
        kurz: "Product<br />Engineering I",
        kennung: ["MA1"],
        lehrform: ["Seminar", " Projekt"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 3,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger", "Thomas Kowark", "Franziska Häger"],
        nameLV: "Global Team-Based Product Innovation & Engineering III - ME 310 Coaching Research"
    },
    productInnovationEngineeringII: {
        kurz: "Product<br />Engineering II",
        kennung: ["MA1"],
        lehrform: ["Seminar", " Projekt"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 3,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger", "Thomas Kowark", "Franziska Häger"],
        nameLV: "Global Team-Based Product Innovation & Engineering III - ME 310 Coaching Research"
    },
    reverseengineering: {
        kurz: "Reverse<br />Engineering",
        kennung: ["ITSE", "IST", "OSIS"],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "David Jäger", "Amir Azodi"],
        nameLV: "Vulnerabilities through Reverse Engineering"
    },
    regelungSteuerung: {
        kurz: "Regelung & Steuerung",
        kennung: ["ITSE","VT OSIS","VT SAMT"],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr.-Ing. Ralf Wollowski"],
        nameLV: "Systemtechnische Grundlagen der Regelungs-<br />und Steuerungstechnik"
    },
    schnittstellenGeoinformationGeokommunikation: {
        kurz: "Geo-Schnittstellen",
        kennung: ["VT HCT","VT IST"],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. techn. Markus Jobst","Sebastian Pasewaldt"],
        nameLV: "Schnittstellen der Geoinformation und Geokommunikation"
    },
    selfadaptivesystems: {
        kurz: "Self-adaptive<br />Systems",
        kennung: ["ITSE", "SAMT"],
        lehrform: ["Vorlesung", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Thomas Vogel"],
        nameLV: "Software Engineering for Self-adaptive Systems"
    },
    semanticMultimedia: {
		kurz: "Semantic Multimedia",
        kennung: ["VT IST","VT OSIS","VT HCT"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. rer. nat. Harald Sack","Jörg Waitelonis","Nadine Steinmetz","Magnus Knuth"],
        nameLV: "Semantic Multimedia"
    },
    semanticWebTechnologien: {
        kurz: "Semantic<br />Web",
        kennung: ["ITSE", "VT BPET", "VT IST"],
        lehrform: ["Vorlesung", " Übung"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Dr. rer. nat. Harald Sack"],
        nameLV: "Semantic Web Technologien"
    },
    seminarDesForschungskollegs: {
        kurz: "Seminar des<br />Forschungskollegs",
        kennung: ["VT BPET","VT HCT","VT IST","VT OSIS","VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13, ws13_14, ss14],
        benotet: false,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze","Prof. Dr. Robert Hirschfeld"],
        nameLV: "Seminar des Forschungskollegs"
    },
    seminarGeovisualisierung: {
        kurz: "Geo Seminar",
        kennung: ["ITSE", "VT HCT", "VT IST"],
        lehrform: ["Seminar", " Projekt"],
        modul: ["Vertiefungsgebiete", " IT-Systems Engineering"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Amir Semmo"],
        nameLV: "Seminar Geovisualisierung"
    },
    servicebasedvisualization: {
        kurz: "Service-based<br />Visualization",
        kennung: ["HCT", "IST"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Benjamin Hagendorn", "Jan Klimke"],
        nameLV: "Service-based Visualization"
    },
    sicherheitInKomplexenITLandschaften: {
        kurz: "Sicherheit<br />komplexer IT",
        kennung: ["ITSE", "VT IST", "VT BPET", "VT OSIS"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Dr. Michael Menzel"],
        nameLV: "Sicherheit in komplexen IT-Landschaften"
    },
    socialMediaAnalyses: {
        kurz: "Social<br />Media",
        kennung: ["ITSE", "VT IST", "VT OSIS"],
        lehrform: ["Seminar", " Projekt"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Philipp Berger", "Patrick Hennig"],
        nameLV: "Social Media Analyses"
    },
    softwareAdaption: {
		kurz: "Software Adaption",
        kennung: ["ITSE","VT SAMT"],
        lehrform: ["Vorlesung"," Projekt"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese","Thomas Vogel"],
        nameLV: "Software Adaption"
    },
    softwareAnalytics: {
        kurz: "Software<br />Analytics",
        kennung: ["ITSE", "VT HCT", "VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Sebastian Schmechel", "Sebastian Kay Belle", "Jonas Trümper", "Daniel Limberger"],
        nameLV: "Software Analytics"
    },
    softwareAsAService: {
        kurz: "Software as a Service",
        kennung: ["ITSE","VT IST","VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Christoph Meinel","Eyad Saleh"],
        nameLV: "Software-as-a-Service and Multi-tenancy"
    },
    softwareEngineeringEmbeddedSystems: {
        kurz: "SE for<br />Embedded Systems",
        kennung: ["ITSE", "VT SAMT"],
        lehrform: ["Vorlesung", " Übung", " Projekt"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        vertiefung: ["Mobile & Embedded Systems", " Systems Architecture", " Software Engineering", " Security and Safety Engineering"],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese"],
        nameLV: "Software Engineering for Embedded Systems"
    },
    softwareProfiling: {
        kurz: "Software Profiling",
        kennung: ["ITSE","VT OSIS"],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Peter Tröger","Frank Feinbube"],
        nameLV: "Software Profiling"
    },
    Softwarevisualisierung: {
        kurz: "Software-<br />visualisierung",
        kennung: ["VT HCT","VT OSIS","VT SAMT"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner","Jonas Trümper","Sebastian Schmechel","Sebastian Kay Belle"],
        nameLV: "Softwarevisualisierungsverfahren"
    },
    statistischeDatenanalyse: {
        kurz: "statistische<br />Datenanalyse",
        kennung: ["ITSE", "VT BPET"],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        vertiefung: [""],
        cp: 6,
        dozent: ["apl. Prof. Dr. Hannelore Liero"],
        nameLV: "Statistische Datenanalyse"
    },
    studiumPlus: {
        kurz: "Studium Plus",
        kennung: ["SSK-SK","SSK2"],
        lehrform: [""],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14],
        benotet: false,
        pflicht: false,
        cp: 3,
        dozent: [""],
        nameLV: "StudiumPlus"
    },
    trendconceptsexercise: {
        kurz: "Trends & Concepts<brf />Exercise",
        kennung: ["ITSE", "SAMT", "OSIS", "BPET"],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Dr. Matthias Ulfacker", "Martin Boissier", "Christian Schwarz"],
        nameLV: "Trends and Concepts Exercise: Designing and Programming Applications for In-Memory Databases"
    },
    toc1: {
        kurz: "ToC I",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Hasso Plattner"],
        nameLV: "Trends and Concepts in the Software Industry I: Inner Mechanics of In-Memory Databases"
    },
    toc2: {
		kurz: "ToC II",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Hasso Plattner"],
        nameLV: "Trends and Concepts in the Software Industry I: Inner Mechanics of In-Memory Databases"
    },
    unternehmensarchitektur: {
        kurz: "IT-Unternehmens-<br />architektur",
        kennung: ["ITSE", "BPET", "OSIS", "SAMT"],
        lehrform: ["Vorlesung"],
        modul: ["IT Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Sabine Buckl", "Wolfgang Keller", "Prof. Dr. Robert Hirschfeld"],
        nameLV: "IT-Unternehmensarchitektur"
    },
    ueberzeugendPraesentieren: {
        kurz: "Überzeugend<br />präsentieren",
        kennung: ["SSK-KO"],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Dr. Werner Dieball"],
        nameLV: "Überzeugend präsentieren -<br />Noch besser auftreten!"
    },
    unternehmensgruendung: {
        kurz: "Unternehmens-<br />gründung",
        kennung: ["SSK-KO","SSK-MA","SSK-RE"],
        lehrform: ["Vorlesung"],
        modul: ["Softskills"],
        semester: [ss13, ss14],
        benotet: true,
        pflicht: false,
        cp: 6,
        dozent: ["Prof. Dr. Katharina Hölzle","Dr. Jens Schmidt-Ehmcke"],
        nameLV: "Unternehmensgründung im IT-Sektor"
    },
    verlaesslichesysteme: {
        kurz: "Verlässliche<br />Systeme",
        kennung: ["SAMT", "OSIS"],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        benotet: true,
        pflicht: false,
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Daniel Richter", "Lena Herscheid"],
        nameLV: "Verlässliche konfigurierbare Systeme"
    },
    virtuelleMaschinen: {
        kurz: "Virtuelle<br />Maschinen",
        kennung: ["VT OSIS", "VT SAMT"],
        lehrform: ["Projekt", " Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        benotet: true,
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tobias Pape", "Tim Felgentreff", "Bastian Steinert"],
        nameLV: "Virtuelle Maschinen und Ausführungsumgebungen"
    }
}
