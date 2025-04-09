// PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Sprach-Einstellungen
let currentLang = 'en';
const languages = {
    en: {
        code: 'en',
        name: 'English',
        label: 'ENG'
    },
    de: {
        code: 'de',
        name: 'Deutsch',
        label: 'DE'
    }
};

// PDF-Dateien
const pdfFiles = [
    'OpenAIEthicalHacking.pdf',
    'DeepResearchEthicalHacking.pdf'
];

// Glossar-Definitionen
const glossary = {
    'ethical hacking': {
        en: 'The practice of testing computer systems, networks, or web applications to find security vulnerabilities that a malicious hacker could potentially exploit.',
        de: 'Die Praxis des Testens von Computersystemen, Netzwerken oder Webanwendungen, um Sicherheitslücken zu finden, die ein böswilliger Hacker potenziell ausnutzen könnte.'
    },
    'penetration testing': {
        en: 'A method of evaluating the security of a computer system or network by simulating an attack from malicious outsiders.',
        de: 'Eine Methode zur Bewertung der Sicherheit eines Computersystems oder Netzwerks durch Simulation eines Angriffs von böswilligen Außenstehenden.'
    },
    'vulnerability assessment': {
        en: 'The process of identifying, quantifying, and prioritizing security vulnerabilities in a system.',
        de: 'Der Prozess der Identifizierung, Quantifizierung und Priorisierung von Sicherheitslücken in einem System.'
    },
    'exploit': {
        en: 'A piece of software, a chunk of data, or a sequence of commands that takes advantage of a bug or vulnerability.',
        de: 'Ein Stück Software, ein Datenblock oder eine Befehlssequenz, die einen Fehler oder eine Sicherheitslücke ausnutzt.'
    },
    'payload': {
        en: 'The part of an exploit that contains the code to be executed when the exploit is successful.',
        de: 'Der Teil eines Exploits, der den auszuführenden Code enthält, wenn der Exploit erfolgreich ist.'
    },
    'backdoor': {
        en: 'A method of bypassing normal authentication or encryption in a computer system.',
        de: 'Eine Methode zum Umgehen der normalen Authentifizierung oder Verschlüsselung in einem Computersystem.'
    },
    'social engineering': {
        en: 'The psychological manipulation of people into performing actions or divulging confidential information.',
        de: 'Die psychologische Manipulation von Menschen, um sie zu bestimmten Handlungen zu veranlassen oder vertrauliche Informationen preiszugeben.'
    },
    'phishing': {
        en: 'A type of social engineering attack where attackers deceive users into revealing sensitive information.',
        de: 'Eine Art von Social Engineering-Angriff, bei dem Angreifer Benutzer täuschen, um sensible Informationen preiszugeben.'
    },
    'malware': {
        en: 'Software designed to harm or exploit any programmable device or network.',
        de: 'Software, die darauf ausgelegt ist, programmierbare Geräte oder Netzwerke zu schädigen oder auszunutzen.'
    },
    'firewall': {
        en: 'A network security system that monitors and controls incoming and outgoing network traffic.',
        de: 'Ein Netzwerksicherheitssystem, das ein- und ausgehenden Netzwerkverkehr überwacht und kontrolliert.'
    },
    'encryption': {
        en: 'The process of encoding information to prevent unauthorized access.',
        de: 'Der Prozess der Verschlüsselung von Informationen, um unbefugten Zugriff zu verhindern.'
    },
    'authentication': {
        en: 'The process of verifying the identity of a user or system.',
        de: 'Der Prozess der Überprüfung der Identität eines Benutzers oder Systems.'
    },
    'authorization': {
        en: 'The process of giving someone permission to do or have something.',
        de: 'Der Prozess der Erteilung von Berechtigungen für bestimmte Aktionen oder Ressourcen.'
    },
    'zero-day': {
        en: 'A vulnerability that is unknown to those who should be interested in mitigating it.',
        de: 'Eine Sicherheitslücke, die den für ihre Behebung zuständigen Personen unbekannt ist.'
    },
    'brute force': {
        en: 'A trial-and-error method used to obtain information such as a user password or personal identification number.',
        de: 'Eine Trial-and-Error-Methode, die verwendet wird, um Informationen wie Benutzerpasswörter oder PINs zu erhalten.'
    },
    'denial of service': {
        en: 'An attack where the perpetrator seeks to make a machine or network resource unavailable to its intended users.',
        de: 'Ein Angriff, bei dem der Täter versucht, eine Maschine oder Netzwerkressource für die beabsichtigten Benutzer unzugänglich zu machen.'
    },
    'man in the middle': {
        en: 'An attack where the attacker secretly relays and possibly alters the communication between two parties.',
        de: 'Ein Angriff, bei dem der Angreifer die Kommunikation zwischen zwei Parteien heimlich weiterleitet und möglicherweise verändert.'
    },
    'cross-site scripting': {
        en: 'A type of security vulnerability typically found in web applications.',
        de: 'Eine Art von Sicherheitslücke, die typischerweise in Webanwendungen gefunden wird.'
    },
    'sql injection': {
        en: 'A code injection technique used to attack data-driven applications.',
        de: 'Eine Code-Injection-Technik, die verwendet wird, um datenbankgesteuerte Anwendungen anzugreifen.'
    },
    'buffer overflow': {
        en: 'A programming error that occurs when a program writes more data to a buffer than it can hold.',
        de: 'Ein Programmierfehler, der auftritt, wenn ein Programm mehr Daten in einen Puffer schreibt, als dieser aufnehmen kann.'
    }
};

// Kategorien für die Inhalte
const categories = {
    overview: [],
    techniques: [],
    tools: [],
    'best-practices': []
};

// Sprachwechsel-Funktion
function switchLanguage() {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    const langLabel = document.querySelector('.lang-label');
    langLabel.textContent = languages[currentLang].label;
    
    // UI-Elemente aktualisieren
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });
    
    // Platzhalter aktualisieren
    document.querySelectorAll('[data-en-placeholder]').forEach(element => {
        element.placeholder = element.getAttribute(`data-${currentLang}-placeholder`);
    });
    
    // Glossar aktualisieren
    updateGlossary();
}

// PDF-Inhalte laden und bereinigen
async function loadPDFContent(pdfPath) {
    try {
        const loadingTask = pdfjsLib.getDocument(pdfPath);
        const pdf = await loadingTask.promise;
        let fullText = '';

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            
            // Verbesserte Textextraktion mit Bereinigung
            const pageText = textContent.items
                .map(item => {
                    // Prüfe auf gültige Textzeilen und entferne fehlerhafte Formatierungen
                    if (item.str && typeof item.str === 'string') {
                        return item.str.trim()
                            // Entferne doppelte Leerzeichen
                            .replace(/\s+/g, ' ')
                            // Entferne fehlerhafte Zeichenketten
                            .replace(/\.+/g, '.')
                            // Entferne alleinstehende Sonderzeichen
                            .replace(/[^\w\s](?![^\w\s])/g, ' ')
                            // Bereinige Zeilenumbrüche
                            .replace(/\r?\n|\r/g, ' ');
                    }
                    return '';
                })
                .filter(text => text.length > 0) // Entferne leere Zeilen
                .join(' ');

            // Prüfe auf vollständige Sätze
            const sentences = pageText.match(/[^.!?]+[.!?]+/g) || [];
            fullText += sentences.join(' ') + ' ';
        }

        // Finale Textbereinigung
        return fullText
            .replace(/\s+/g, ' ') // Entferne mehrfache Leerzeichen
            .replace(/\s+\./g, '.') // Korrigiere Punktsetzung
            .trim();

    } catch (error) {
        console.error('Error loading PDF:', error);
        return '';
    }
}

// Text in Kategorien einteilen und Keywords hervorheben
function categorizeContent(text) {
    const keywords = {
        overview: ['introduction', 'overview', 'what is', 'definition'],
        techniques: ['technique', 'method', 'approach', 'attack'],
        tools: ['tool', 'software', 'application', 'platform'],
        'best-practices': ['best practice', 'guideline', 'recommendation', 'security']
    };

    // Bereinige die Kategorien
    Object.keys(categories).forEach(category => {
        categories[category] = [];
    });

    // Verbesserte Kategorisierung mit Kontextprüfung
    for (const [category, words] of Object.entries(keywords)) {
        for (const word of words) {
            const regex = new RegExp(`[^.!?]*(?:\\b${word}\\b)[^.!?]*[.!?]`, 'gi');
            const matches = text.match(regex);
            if (matches) {
                // Filtere doppelte und fehlerhafte Einträge
                const validMatches = matches
                    .filter(match => 
                        match.length > 20 && // Mindestlänge für einen sinnvollen Satz
                        !match.includes('undefined') && // Keine fehlerhaften Einträge
                        !/\b(\w+)\b(?:\s+\1\b)+/i.test(match) // Keine Wortwiederholungen
                    )
                    .map(match => match.trim());
                categories[category].push(...validMatches);
            }
        }
    }
}

// Keywords im Text hervorheben
function highlightKeywords(text) {
    let highlightedText = text;
    const glossaryTerms = Object.keys(glossary);
    
    glossaryTerms.forEach(term => {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        highlightedText = highlightedText.replace(regex, match => 
            `<span class="keyword" data-definition="${glossary[term.toLowerCase()][currentLang]}">${match}</span>`
        );
    });
    
    return highlightedText;
}

// Glossar aktualisieren
function updateGlossary() {
    const glossaryList = document.querySelector('.glossary-list');
    const sortedTerms = Object.keys(glossary).sort();
    
    glossaryList.innerHTML = sortedTerms.map(term => `
        <div class="glossary-item">
            <h3>${term}</h3>
            <p>${glossary[term][currentLang]}</p>
        </div>
    `).join('');
}

// Glossar-Suche
function setupGlossarySearch() {
    const searchInput = document.getElementById('glossarySearch');
    const glossaryItems = document.querySelectorAll('.glossary-item');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        glossaryItems.forEach(item => {
            const term = item.querySelector('h3').textContent.toLowerCase();
            const definition = item.querySelector('p').textContent.toLowerCase();
            
            if (term.includes(searchTerm) || definition.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// UI aktualisieren
function updateUI() {
    for (const [category, content] of Object.entries(categories)) {
        const section = document.querySelector(`#${category} .content-box`);
        if (section && content.length > 0) {
            const highlightedContent = content.map(item => highlightKeywords(item.trim())).join('');
            section.innerHTML = `
                <div class="content-list">
                    ${highlightedContent}
                </div>
            `;
        }
    }
}

// Event Listener für Sprachwechsel
document.getElementById('langSwitch').addEventListener('change', switchLanguage);

// Smooth Scroll für Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hauptfunktion
async function initialize() {
    for (const pdfFile of pdfFiles) {
        const content = await loadPDFContent(pdfFile);
        categorizeContent(content);
    }
    updateUI();
    updateGlossary();
    setupGlossarySearch();
}

// Starte die Anwendung
initialize(); 