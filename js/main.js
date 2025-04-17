document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    // Aktuelle Sprache als globale Variable
    let currentLanguage = localStorage.getItem('language') || 'de';
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            
            this.classList.add('active');
            
            
            const sectionId = this.getAttribute('data-section');
            
            
            document.getElementById(sectionId).classList.add('active');
            
            
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
            
            
            updateSectionContent(sectionId, currentLanguage);
            
            
            window.scrollTo({
                top: document.getElementById(sectionId).offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    
    const langDe = document.getElementById('lang-de');
    const langEn = document.getElementById('lang-en');
    
    langDe.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            setLanguage('de');
            langEn.classList.remove('active');
            this.classList.add('active');
        }
    });
    
    langEn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            setLanguage('en');
            langDe.classList.remove('active');
            this.classList.add('active');
        }
    });
    
    
    function setLanguage(lang) {
        currentLanguage = lang; 
        
        
        document.querySelectorAll('[data-de]').forEach(element => {
            if (lang === 'de') {
                element.textContent = element.getAttribute('data-de');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        });
        
        
        if (lang === 'de') {
            document.getElementById('glossary-search').placeholder = 'Suchen...';
        } else {
            document.getElementById('glossary-search').placeholder = 'Search...';
        }
        
        
        updateContentSections(lang);
        
        
        updateGlossary(lang);
        
        
        localStorage.setItem('language', lang);
    }
    
    
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
        if (storedLang === 'en') {
            langEn.click();
        } else {
            langDe.click();
        }
    } else {
        
        langDe.click();
    }
    
    
    document.querySelectorAll('.cta-buttons a').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            
            document.querySelector(`[data-section="${targetId}"]`).classList.add('active');
            document.getElementById(targetId).classList.add('active');
            
            
            updateSectionContent(targetId, currentLanguage);
            
            
            window.scrollTo({
                top: document.getElementById(targetId).offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    
    if (window.location.hash) {
        const initialSection = window.location.hash.substring(1);
        if (document.getElementById(initialSection)) {
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            document.querySelector(`[data-section="${initialSection}"]`).classList.add('active');
            document.getElementById(initialSection).classList.add('active');
            
            
            updateSectionContent(initialSection, currentLanguage);
        }
    }
    
    
    const searchInput = document.getElementById('glossary-search');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const glossaryItems = document.querySelectorAll('.glossary-item');
        let resultsFound = false;
        
        glossaryItems.forEach(item => {
            const term = item.querySelector('.glossary-term').textContent.toLowerCase();
            const definition = item.querySelector('.glossary-definition').textContent.toLowerCase();
            
            if (term.includes(searchTerm) || definition.includes(searchTerm)) {
                item.style.display = 'block';
                resultsFound = true;
                
                
                if (searchTerm.length > 0) {
                    highlightText(item, searchTerm);
                }
            } else {
                item.style.display = 'none';
            }
        });
        
        
        const noResultsMsg = document.getElementById('no-results-message');
        if (!resultsFound && searchTerm.length > 0) {
            if (!noResultsMsg) {
                const message = document.createElement('div');
                message.id = 'no-results-message';
                message.className = 'no-results';
                
                
                const currentLang = document.getElementById('lang-de').classList.contains('active') ? 'de' : 'en';
                message.textContent = currentLang === 'de' ? 
                    'Keine Ergebnisse gefunden. Bitte versuchen Sie einen anderen Suchbegriff.' : 
                    'No results found. Please try a different search term.';
                
                document.querySelector('.glossary-container').appendChild(message);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
    
    
    function highlightText(item, searchTerm) {
    
        const termElement = item.querySelector('.glossary-term');
        const definitionElement = item.querySelector('.glossary-definition');
        
    
        if (!termElement.hasAttribute('data-original')) {
            termElement.setAttribute('data-original', termElement.textContent);
            definitionElement.setAttribute('data-original', definitionElement.textContent);
        }
        
    
        const originalTerm = termElement.getAttribute('data-original');
        const originalDefinition = definitionElement.getAttribute('data-original');
        
    
        const highlightedTerm = highlightMatch(originalTerm, searchTerm);
        const highlightedDefinition = highlightMatch(originalDefinition, searchTerm);
        
    
        termElement.innerHTML = highlightedTerm;
        definitionElement.innerHTML = highlightedDefinition;
    }
    
    
    function highlightMatch(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(searchTerm, 'gi');
        return text.replace(regex, match => `<span class="highlight">${match}</span>`);
    }
    
    
    function resetHighlights() {
        document.querySelectorAll('.glossary-item').forEach(item => {
            const termElement = item.querySelector('.glossary-term');
            const definitionElement = item.querySelector('.glossary-definition');
            
            if (termElement.hasAttribute('data-original')) {
                termElement.textContent = termElement.getAttribute('data-original');
                definitionElement.textContent = definitionElement.getAttribute('data-original');
            }
        });
        
    
        const noResultsMsg = document.getElementById('no-results-message');
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        } else if (this.value === '') {
    
            document.querySelectorAll('.glossary-item').forEach(item => {
                item.style.display = 'block';
            });
            resetHighlights();
        }
    });
    
    searchBtn.addEventListener('click', performSearch);
    
    
    const sourcesToggle = document.getElementById('sources-toggle');
    const sourcesContainer = document.getElementById('sources-container');
    
    sourcesToggle.addEventListener('click', function() {
        sourcesContainer.classList.toggle('active');
        
    
        const isActive = sourcesContainer.classList.contains('active');
        const buttonText = sourcesToggle.querySelector('span');
        
        if (currentLanguage === 'de') {
            buttonText.textContent = isActive ? 'Quellen ausblenden' : 'Quellen anzeigen';
        } else {
            buttonText.textContent = isActive ? 'Hide Sources' : 'Show Sources';
        }
    });
    
    // Schließen des Quellen-Containers bei Klick außerhalb
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.sources-widget') && 
            sourcesContainer.classList.contains('active')) {
            sourcesContainer.classList.remove('active');
            
    
            const buttonText = sourcesToggle.querySelector('span');
            buttonText.textContent = currentLanguage === 'de' ? 'Quellen anzeigen' : 'Show Sources';
        }
    });
    
    
    function updateSourcesLanguage(lang) {
        const buttonText = sourcesToggle.querySelector('span');
        const isActive = sourcesContainer.classList.contains('active');
        
        if (lang === 'de') {
            buttonText.textContent = isActive ? 'Quellen ausblenden' : 'Quellen anzeigen';
        } else {
            buttonText.textContent = isActive ? 'Hide Sources' : 'Show Sources';
        }
    }
    
    
    const originalSetLanguage = setLanguage;
    setLanguage = function(lang) {
        originalSetLanguage(lang);
        updateSourcesLanguage(lang);
    };
});


function updateSectionContent(sectionId, lang) {
    if (!contentData) return;
    
    switch(sectionId) {
        case 'introduction':
            document.getElementById('intro-content').innerHTML = contentData.introduction[lang];
            break;
        case 'methods':
            document.getElementById('methods-content').innerHTML = contentData.methods[lang];
            break;
        case 'tools':
            document.getElementById('tools-content').innerHTML = contentData.tools[lang];
            break;
        case 'education':
            document.getElementById('education-content').innerHTML = contentData.education[lang];
            break;
        case 'career':
            document.getElementById('career-content').innerHTML = contentData.career[lang];
            break;
        case 'legal':
            document.getElementById('legal-content').innerHTML = contentData.legal[lang];
            break;
        case 'glossary':
            updateGlossary(lang);
            break;
    }
}


function updateContentSections(lang) {
    

    if (contentData) {
        document.getElementById('intro-content').innerHTML = contentData.introduction[lang];
        document.getElementById('methods-content').innerHTML = contentData.methods[lang];
        document.getElementById('tools-content').innerHTML = contentData.tools[lang];
        document.getElementById('education-content').innerHTML = contentData.education[lang];
        document.getElementById('career-content').innerHTML = contentData.career[lang];
        document.getElementById('legal-content').innerHTML = contentData.legal[lang];
    }
}


function updateGlossary(lang) {


    if (glossaryData) {
        const glossaryContainer = document.getElementById('glossary-content');
        glossaryContainer.innerHTML = '';
        
        glossaryData.forEach(item => {
            const glossaryItem = document.createElement('div');
            glossaryItem.className = 'glossary-item';
            
            const term = document.createElement('div');
            term.className = 'glossary-term';
            term.textContent = item.term[lang];
            
            const definition = document.createElement('div');
            definition.className = 'glossary-definition';
            definition.textContent = item.definition[lang];
            
            glossaryItem.appendChild(term);
            glossaryItem.appendChild(definition);
            glossaryContainer.appendChild(glossaryItem);
        });
    }
}
