// Glossary data for the website
const glossaryData = [
    {
        term: {
            de: "Ethisches Hacking",
            en: "Ethical Hacking"
        },
        definition: {
            de: "Das legale Eindringen in Computersysteme mit ausdrücklicher Erlaubnis des Eigentümers, um Sicherheitsschwachstellen zu identifizieren und zu beheben.",
            en: "The legal intrusion into computer systems with explicit permission from the owner to identify and fix security vulnerabilities."
        }
    },
    {
        term: {
            de: "White-Hat-Hacker",
            en: "White Hat Hacker"
        },
        definition: {
            de: "Ein Sicherheitsexperte, der mit Genehmigung in Systeme eindringt, um Schwachstellen zu finden und die Sicherheit zu verbessern.",
            en: "A security expert who intrudes into systems with permission to find vulnerabilities and improve security."
        }
    },
    {
        term: {
            de: "Black-Hat-Hacker",
            en: "Black Hat Hacker"
        },
        definition: {
            de: "Ein krimineller Hacker, der ohne Erlaubnis in Systeme eindringt, mit böswilligen Absichten wie Datendiebstahl oder Sabotage.",
            en: "A criminal hacker who breaks into systems without permission, with malicious intentions such as data theft or sabotage."
        }
    },
    {
        term: {
            de: "Grey-Hat-Hacker",
            en: "Grey Hat Hacker"
        },
        definition: {
            de: "Ein Hacker, der ohne ausdrückliche Erlaubnis in Systeme eindringt, jedoch ohne böswillige Absicht, oft um auf Sicherheitslücken hinzuweisen.",
            en: "A hacker who breaks into systems without explicit permission, but without malicious intent, often to point out security vulnerabilities."
        }
    },
    {
        term: {
            de: "Penetrationstest",
            en: "Penetration Test"
        },
        definition: {
            de: "Eine autorisierte Simulation eines Cyberangriffs auf ein Computersystem, um Sicherheitsschwachstellen zu bewerten.",
            en: "An authorized simulation of a cyber attack on a computer system to evaluate security vulnerabilities."
        }
    },
    {
        term: {
            de: "Social Engineering",
            en: "Social Engineering"
        },
        definition: {
            de: "Die Manipulation von Menschen, um sie dazu zu bringen, vertrauliche Informationen preiszugeben oder Sicherheitsmaßnahmen zu umgehen.",
            en: "The manipulation of people to get them to disclose confidential information or bypass security measures."
        }
    },
    {
        term: {
            de: "Phishing",
            en: "Phishing"
        },
        definition: {
            de: "Eine Betrugsform, bei der versucht wird, sensible Informationen zu stehlen, indem man sich als vertrauenswürdige Entität ausgibt.",
            en: "A form of fraud in which an attacker tries to steal sensitive information by posing as a trustworthy entity."
        }
    },
    {
        term: {
            de: "Schwachstellenbewertung",
            en: "Vulnerability Assessment"
        },
        definition: {
            de: "Der Prozess des Identifizierens, Quantifizierens und Priorisierens von Schwachstellen in Systemen und Software.",
            en: "The process of identifying, quantifying, and prioritizing vulnerabilities in systems and software."
        }
    },
    {
        term: {
            de: "Exploit",
            en: "Exploit"
        },
        definition: {
            de: "Ein Programm oder Code, der eine Sicherheitslücke ausnutzt, um unbefugten Zugriff auf ein System zu erlangen.",
            en: "A program or code that takes advantage of a security flaw to gain unauthorized access to a system."
        }
    },
    {
        term: {
            de: "Metasploit",
            en: "Metasploit"
        },
        definition: {
            de: "Ein Framework für die Entwicklung und Ausführung von Exploits gegen entfernte Zielsysteme.",
            en: "A framework for developing and executing exploits against remote target systems."
        }
    },
    {
        term: {
            de: "Nmap",
            en: "Nmap"
        },
        definition: {
            de: "Ein Netzwerk-Scanner, der zur Entdeckung von Hosts und Diensten in einem Computernetzwerk verwendet wird.",
            en: "A network scanner used to discover hosts and services on a computer network."
        }
    },
    {
        term: {
            de: "Wireshark",
            en: "Wireshark"
        },
        definition: {
            de: "Ein Netzwerk-Protokoll-Analysator, der zur Erfassung und Untersuchung von Netzwerkverkehr verwendet wird.",
            en: "A network protocol analyzer used to capture and inspect network traffic."
        }
    },
    {
        term: {
            de: "Burp Suite",
            en: "Burp Suite"
        },
        definition: {
            de: "Eine integrierte Plattform für die Durchführung von Sicherheitstests von Webanwendungen.",
            en: "An integrated platform for performing security testing of web applications."
        }
    },
    {
        term: {
            de: "DDoS-Angriff",
            en: "DDoS Attack"
        },
        definition: {
            de: "Ein Distributed-Denial-of-Service-Angriff, bei dem mehrere kompromittierte Systeme verwendet werden, um einen einzelnen Zieldienst zu überlasten.",
            en: "A Distributed Denial of Service attack, where multiple compromised systems are used to flood a single target service."
        }
    },
    {
        term: {
            de: "SQL-Injection",
            en: "SQL Injection"
        },
        definition: {
            de: "Eine Code-Injection-Technik, die schädlichen SQL-Code in Datenbankanfragen einfügt, um Daten zu manipulieren oder zu stehlen.",
            en: "A code injection technique that inserts malicious SQL code into database queries to manipulate or steal data."
        }
    },
    {
        term: {
            de: "Cross-Site-Scripting (XSS)",
            en: "Cross-Site Scripting (XSS)"
        },
        definition: {
            de: "Eine Sicherheitslücke, die es Angreifern ermöglicht, Client-seitige Skripte in Webseiten einzuschleusen, die von anderen Benutzern angesehen werden.",
            en: "A security vulnerability that allows attackers to inject client-side scripts into web pages viewed by other users."
        }
    },
    {
        term: {
            de: "Firewall",
            en: "Firewall"
        },
        definition: {
            de: "Ein Netzwerksicherheitssystem, das den ein- und ausgehenden Netzwerkverkehr basierend auf festgelegten Sicherheitsregeln überwacht und kontrolliert.",
            en: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules."
        }
    },
    {
        term: {
            de: "Kali Linux",
            en: "Kali Linux"
        },
        definition: {
            de: "Eine auf Debian basierende Linux-Distribution, die für digitale Forensik und Penetrationstests entwickelt wurde.",
            en: "A Debian-based Linux distribution designed for digital forensics and penetration testing."
        }
    },
    {
        term: {
            de: "CVE (Common Vulnerabilities and Exposures)",
            en: "CVE (Common Vulnerabilities and Exposures)"
        },
        definition: {
            de: "Eine Liste öffentlich bekannter Informationssicherheitslücken und -expositionen.",
            en: "A list of publicly disclosed computer security flaws and exposures."
        }
    },
    {
        term: {
            de: "Zero-Day-Exploit",
            en: "Zero-Day Exploit"
        },
        definition: {
            de: "Ein Exploit, der eine bisher unbekannte Sicherheitslücke ausnutzt, bevor der Entwickler davon erfährt oder einen Patch veröffentlichen kann.",
            en: "An exploit that takes advantage of a previously unknown security vulnerability before the developer learns about it or can release a patch."
        }
    },
    {
        term: {
            de: "Red Team",
            en: "Red Team"
        },
        definition: {
            de: "Eine Gruppe von Sicherheitsexperten, die autorisierte Angriffe auf ein Unternehmen durchführt, um Schwachstellen in Systemen, Prozessen und Mitarbeiterverhalten zu identifizieren.",
            en: "A group of security professionals who conduct authorized attacks against an organization to identify vulnerabilities in systems, processes, and employee behavior."
        }
    },
    {
        term: {
            de: "Blue Team",
            en: "Blue Team"
        },
        definition: {
            de: "Eine Gruppe von Sicherheitsexperten, die für die Verteidigung eines Unternehmens gegen Angriffe verantwortlich ist, indem sie Sicherheitsmaßnahmen implementiert, überwacht und verbessert.",
            en: "A group of security professionals responsible for defending an organization against attacks by implementing, monitoring, and improving security measures."
        }
    },
    {
        term: {
            de: "Bug-Bounty-Programm",
            en: "Bug Bounty Program"
        },
        definition: {
            de: "Ein Anreizprogramm, bei dem Unternehmen Belohnungen für das Finden und Melden von Sicherheitslücken in ihren Systemen oder Anwendungen anbieten.",
            en: "An incentive program where companies offer rewards for finding and reporting security vulnerabilities in their systems or applications."
        }
    },
    {
        term: {
            de: "OWASP (Open Web Application Security Project)",
            en: "OWASP (Open Web Application Security Project)"
        },
        definition: {
            de: "Eine gemeinnützige Organisation, die sich auf die Verbesserung der Sicherheit von Software konzentriert und Ressourcen wie den Web Security Testing Guide bereitstellt.",
            en: "A nonprofit organization focused on improving software security that provides resources such as the Web Security Testing Guide."
        }
    },
    {
        term: {
            de: "OSCP (Offensive Security Certified Professional)",
            en: "OSCP (Offensive Security Certified Professional)"
        },
        definition: {
            de: "Eine praxisorientierte Zertifizierung für Penetrationstester, bei der Kandidaten in einer 24-stündigen praktischen Prüfung in mehrere Zielsysteme eindringen müssen.",
            en: "A hands-on certification for penetration testers requiring candidates to compromise multiple target systems during a 24-hour practical exam."
        }
    },
    {
        term: {
            de: "CEH (Certified Ethical Hacker)",
            en: "CEH (Certified Ethical Hacker)"
        },
        definition: {
            de: "Eine grundlegende Zertifizierung im ethischen Hacking, die vom EC-Council angeboten wird und ein breites Spektrum an Hacking-Techniken und -Methoden abdeckt.",
            en: "A foundational ethical hacking certification offered by EC-Council that covers a broad range of hacking techniques and methodologies."
        }
    },
    {
        term: {
            de: "GIAC (Global Information Assurance Certification)",
            en: "GIAC (Global Information Assurance Certification)"
        },
        definition: {
            de: "Eine Reihe von Zertifizierungen für Informationssicherheit, die vom SANS Institute angeboten werden, darunter spezialisierte Zertifikate für Penetrationstests wie GPEN und GXPN.",
            en: "A series of information security certifications offered by the SANS Institute, including specialized penetration testing certifications like GPEN and GXPN."
        }
    },
    {
        term: {
            de: "Pretexting",
            en: "Pretexting"
        },
        definition: {
            de: "Eine Form des Social Engineering, bei der sich der Angreifer als jemand anders ausgibt, um Vertrauen zu gewinnen und an vertrauliche Informationen zu gelangen.",
            en: "A form of social engineering where the attacker impersonates someone else to build trust and gain access to confidential information."
        }
    },
    {
        term: {
            de: "Tailgating",
            en: "Tailgating"
        },
        definition: {
            de: "Eine physische Social-Engineering-Technik, bei der ein unbefugter Zugang zu einem gesicherten Bereich erlangt wird, indem man einer autorisierten Person folgt, ohne selbst Zugangsberechtigungen nachzuweisen.",
            en: "A physical social engineering technique where unauthorized access to a secure area is gained by following an authorized person without providing credentials."
        }
    },
    {
        term: {
            de: "Digitale Forensik",
            en: "Digital Forensics"
        },
        definition: {
            de: "Der Prozess der Sammlung, Analyse und Dokumentation digitaler Beweise für Ermittlungen und rechtliche Zwecke, oft verwendet, um Cyberkriminalität aufzuklären.",
            en: "The process of collecting, analyzing, and documenting digital evidence for investigative and legal purposes, often used to solve cybercrime cases."
        }
    },
    {
        term: {
            de: "PCI DSS (Payment Card Industry Data Security Standard)",
            en: "PCI DSS (Payment Card Industry Data Security Standard)"
        },
        definition: {
            de: "Ein Informationssicherheitsstandard für Organisationen, die mit Kreditkartendaten umgehen, der regelmäßige Sicherheitsbewertungen vorschreibt.",
            en: "An information security standard for organizations that handle credit card data, requiring regular security assessments."
        }
    },
    {
        term: {
            de: "ISO 27001",
            en: "ISO 27001"
        },
        definition: {
            de: "Ein internationaler Standard für Informationssicherheits-Managementsysteme (ISMS), der Anforderungen für die Einrichtung, Umsetzung, Aufrechterhaltung und kontinuierliche Verbesserung eines ISMS festlegt.",
            en: "An international standard for information security management systems (ISMS) that specifies requirements for establishing, implementing, maintaining, and continually improving an ISMS."
        }
    },
    {
        term: {
            de: "CISSP (Certified Information Systems Security Professional)",
            en: "CISSP (Certified Information Systems Security Professional)"
        },
        definition: {
            de: "Eine fortgeschrittene Zertifizierung für Informationssicherheitsexperten, die ein breites Verständnis von Sicherheitsmanagement und -technologien nachweist.",
            en: "An advanced certification for information security professionals that demonstrates broad knowledge of security management and technologies."
        }
    },
    {
        term: {
            de: "CISM (Certified Information Security Manager)",
            en: "CISM (Certified Information Security Manager)"
        },
        definition: {
            de: "Eine Zertifizierung für IT-Sicherheitsmanager, die auf Führungskompetenzen im Bereich Informationssicherheit und die Ausrichtung von Sicherheitsstrategien an Unternehmenszielen fokussiert.",
            en: "A certification for IT security managers that focuses on leadership abilities in information security and aligning security strategies with business objectives."
        }
    }
];
