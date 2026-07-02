/**
 * AI-Wissensbasis — der KI-Assistent antwortet auf Basis dieser Daten.
 *
 * WICHTIG: Nur diese Datei bearbeiten. Die AI-Antworten aktualisieren sich
 * automatisch (dev: Hot-Reload, prod: nach Deploy). Kein Neu-Build nötig.
 *
 * Unbekannte / noch nicht befüllte Punkte leer lassen — die AI verweist dann
 * einfach auf den Anruf, statt Informationen zu erfinden.
 */

export const knowledge = {
    // Welche Leistungen angeboten werden (die AI bietet NUR diese an)
    leistungen: [
        "Tatortreinigung (forensische Reinigung nach Todesfällen, Unfällen, Gewaltverbrechen)",
        "Leichenfundort-Reinigung (auch nach längerer Liegezeit)",
        "Reinigung nach Suizid",
        "Messie-Reinigung & Reinigung bei Verwahrlosung",
        "Entrümpelung, Nachlassräumung & besenreine Übergabe",
        "Blut- & Sekretbeseitigung, Beseitigung biologischer Rückstände",
        "Desinfektion & Hygienereinigung",
        "Geruchsneutralisation (inkl. Ozonbehandlung, Luftreinigung)",
        "Schädlingsbekämpfung",
        "Schimmelentfernung im Rahmen der Reinigung/Sanierung",
        "Fachgerechte Entsorgung kontaminierter Materialien",
        "Sanierung & Wiederherstellung der Räume",
        "Dokumentation für Vermieter, Hausverwaltung, Versicherung oder Nachlass",
    ],

    // Einsatzgebiet
    einsatzgebiet:
        "Salzburg und Umgebung sowie das angrenzende Bayern (DE). Überregionale Anfragen werden geprüft.",

    // Für wen gearbeitet wird
    zielgruppen: [
        "Angehörige und Privatpersonen",
        "Vermieter und Hausverwaltungen",
        "Notare, Erben, Verlassenschaftskuratoren und Erwachsenenvertretungen",
        "Gemeinden, Behörden und soziale Einrichtungen",
        "Hotels, Unternehmen und Gewerbebetriebe",
    ],

    // Sofort-Hinweise für Betroffene (was Angehörige tun / nicht tun sollen)
    soforthilfe: [
        "Betroffene Räume möglichst nicht betreten.",
        "Nicht selbst reinigen und keine Oberflächen berühren.",
        "Nichts eigenständig entsorgen, den Bereich unverändert lassen.",
        "Falls noch nicht geschehen, Arzt, Rettung oder Polizei verständigen.",
        "Die Reinigung beginnt erst nach Freigabe durch Polizei oder Behörden.",
    ],

    // Ablauf eines Auftrags
    ablauf:
        "1) Erste Erfassung telefonisch oder per WhatsApp. 2) Besichtigung oder Fotoeinschätzung. 3) Transparentes Angebot. 4) Terminplanung. 5) Reinigung, Desinfektion, Geruchsbeseitigung und Entsorgung. 6) Abschlusskontrolle und Übergabe, auf Wunsch mit Dokumentation.",

    // Kontaktwege
    kontakt:
        "Telefon ist bei Notfällen der schnellste Weg. Über WhatsApp können Fotos, Standort und kurze Rückfragen geteilt werden. Eine erste anonyme Anfrage ist möglich; für Angebot, Termin und Rechnung werden später Kontaktdaten benötigt.",

    // Reaktionszeit / Verfügbarkeit
    verfuegbarkeit:
        "24/7 für Notfälle erreichbar, auch an Wochenenden und Feiertagen. Bei dringenden Fällen in der Regel zeitnah vor Ort.",

    // Preispolitik (keine konkreten Preise nennen — jeder Fall ist individuell)
    preise:
        "Jeder Einsatz wird individuell kalkuliert — nach Art des Vorfalls, Fläche, Kontamination, Geruch, Materialschaden und Entsorgungsmenge. Eine erste telefonische Einschätzung ist unverbindlich. Ein seriöses Angebot erfolgt nach Fotos oder Besichtigung. Ob eine Vor-Ort-Besichtigung kostenpflichtig ist, hängt von Entfernung und Aufwand ab und wird vorher klar kommuniziert. Keine konkreten Preise vor der Einschätzung nennen.",

    // Versicherung
    versicherung:
        "Je nach Fall kommen Haushalts-, Gebäude-, Haftpflicht- oder andere Versicherungen in Frage. Wir stellen Rechnung und Dokumentation zur Einreichung bereit; in manchen Fällen ist eine direkte Abrechnung mit der Versicherung möglich.",

    // Diskretion
    diskretion:
        "Diskrete Abwicklung, auf Wunsch neutrale/unmarkierte Fahrzeuge und unauffällige Anfahrt. Es werden keine Informationen an Nachbarn oder unbeteiligte Personen weitergegeben. Vertraulichkeit und Datenschutz haben oberste Priorität.",

    // Qualifikation
    qualifikation:
        "Erfahrene Mitarbeiter, moderne Methoden und Geräte, fachgerechte und zertifizierte Desinfektion und Entsorgung nach geltenden Vorschriften.",

    // Was die AI NICHT tun darf (Sicherheitsgrenzen)
    grenzen: [
        "Bei akuter Gefahr, ungeklärtem Todesfall, Brand, Gewalt oder medizinischem Notfall immer zuerst auf den Notruf verweisen — nicht auf die Reinigungsfirma. Österreich: 144 (Rettung) oder 112. Deutschland: 112.",
        "Immer klarstellen: Die Reinigung beginnt erst nach Freigabe durch Polizei oder Behörden.",
        "Niemals eine Situation als gesundheitlich sicher oder unbedenklich erklären.",
        "Keine medizinischen, rechtlichen oder psychologischen Ratschläge geben.",
        "Keine konkreten Festpreise nennen.",
        "Nur Informationen aus dieser Wissensbasis verwenden. Nichts erfinden. Bei fehlender Information ehrlich sagen, dass das am Telefon geklärt wird.",
    ],

    /**
     * Häufige Fragen & Antworten — Grundlage für die Antworten des Assistenten.
     * Ton: einfühlsam, ruhig, sachlich. Keine klinisch-kalten oder alarmierenden
     * Formulierungen. Antworten möglichst nah an diesen Texten halten.
     */
    faq: [
        // 1. Soforthilfe für Angehörige
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Mein Vater wurde tot aufgefunden. Was muss ich jetzt tun?",
            antwort:
                "Es tut mir leid, dass Sie diese Situation erleben. Bitte betreten Sie die betroffenen Räume nicht und versuchen Sie nicht, selbst zu reinigen. Falls noch nicht geschehen, verständigen Sie Arzt, Rettung oder Polizei. Sobald die Wohnung von Polizei oder Behörden freigegeben ist, können wir Reinigung, Desinfektion, Geruchsbeseitigung und Entsorgung übernehmen.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Die Polizei ist gerade fertig. Können Sie sofort kommen?",
            antwort:
                "Ja, sobald die Räumlichkeiten offiziell freigegeben sind, können wir den Einsatz planen. Wichtig sind Ort, Erreichbarkeit, Art des Vorfalls, ungefähre Fläche und ob starker Geruch oder sichtbare Verunreinigungen vorhanden sind. Danach nennen wir Ihnen die nächsten Schritte.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Ich bin völlig überfordert. Können Sie sich um alles kümmern?",
            antwort:
                "Ja. Sie müssen die betroffenen Räume nicht selbst betreten oder reinigen. Wir können Besichtigung, Reinigung, Desinfektion, Geruchsbeseitigung, Entsorgung kontaminierter Gegenstände und auf Wunsch eine Dokumentation für Vermieter, Hausverwaltung oder Versicherung übernehmen.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Darf ich die Wohnung betreten?",
            antwort:
                "Bitte betreten Sie die betroffenen Räume möglichst nicht. Nach einem Todesfall können biologische Rückstände, Geruchsstoffe und Krankheitserreger ein Gesundheitsrisiko darstellen. Wenn Sie wichtige Unterlagen benötigen, besprechen wir gemeinsam, wie diese sicher entnommen werden können.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Muss ich etwas anfassen oder vorbereiten?",
            antwort:
                "Nein. Bitte lassen Sie den Bereich unverändert, berühren Sie keine Oberflächen und entsorgen Sie nichts eigenständig. Das schützt Sie gesundheitlich und erleichtert uns die fachgerechte Bewertung und Reinigung.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Muss ich bei der Reinigung anwesend sein?",
            antwort:
                "Nein. Nach der Schlüsselübergabe können wir die Arbeiten selbstständig durchführen. Sie erhalten auf Wunsch Zwischeninformationen und nach Abschluss eine Übergabe oder Dokumentation.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Kann ich persönliche Gegenstände behalten?",
            antwort:
                "Ja, soweit es hygienisch vertretbar ist. Wir trennen persönliche Dokumente, Fotos, Schmuck, Wertsachen und Erinnerungsstücke nach Absprache. Kontaminierte Gegenstände können gereinigt, separat verpackt oder falls notwendig fachgerecht entsorgt werden.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Was passiert mit Dokumenten, Fotos und Erinnerungsstücken?",
            antwort:
                "Solche Gegenstände werden nicht einfach entsorgt. Wir sichern sie nach Absprache, verpacken sie getrennt und klären mit Ihnen, was gereinigt, aufbewahrt oder entsorgt werden soll.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Kann ich Ihnen Fotos per WhatsApp schicken?",
            antwort:
                "Ja. Fotos helfen bei einer ersten Einschätzung. Bitte betreten Sie dafür aber keinen gefährdeten Bereich. Fotografieren Sie nur, wenn es sicher möglich ist, oder warten Sie auf unsere Besichtigung.",
        },
        {
            kategorie: "Soforthilfe für Angehörige",
            frage: "Wie schnell bekomme ich eine Rückmeldung?",
            antwort:
                "Bei Notfällen ist ein direkter Anruf am sinnvollsten. Halten Sie möglichst Telefonnummer, Einsatzort und den Freigabe-Status durch die Behörden bereit — so können wir uns schnellstmöglich telefonisch zurückmelden.",
        },

        // 2. Leichenfundortreinigung
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Was ist eine Leichenfundortreinigung?",
            antwort:
                "Eine Leichenfundortreinigung ist die fachgerechte Reinigung, Desinfektion und Wiederherstellung eines Bereichs nach einem Todesfall, besonders wenn die verstorbene Person erst nach Stunden, Tagen oder Wochen gefunden wurde. Dabei werden biologische Verunreinigungen, Gerüche und kontaminierte Materialien sicher entfernt.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Mein Angehöriger wurde erst nach mehreren Tagen gefunden. Was passiert jetzt?",
            antwort:
                "Nach mehreren Tagen können starke Gerüche, Flüssigkeiten und biologische Rückstände entstehen. Wir prüfen Boden, Möbel, Wände und angrenzende Bereiche, entfernen kontaminierte Materialien, desinfizieren gründlich und behandeln Gerüche mit geeigneten Verfahren.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Bekommt man Leichengeruch vollständig weg?",
            antwort:
                "In den meisten Fällen ja. Entscheidend ist, ob Geruchsstoffe in Boden, Estrich, Möbel, Textilien oder Wandbereiche eingedrungen sind. Wir entfernen die Quelle des Geruchs und setzen danach professionelle Geruchsneutralisation ein.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Reicht normales Putzen nicht aus?",
            antwort:
                "Nein. Normales Putzen entfernt sichtbare Verschmutzung, aber nicht unbedingt biologische Belastungen, Geruchsquellen oder Verunreinigungen in Fugen, Bodenaufbauten und porösen Materialien. Deshalb ist eine fachgerechte Reinigung und Desinfektion notwendig.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Muss der Boden entfernt werden?",
            antwort:
                "Das hängt vom Schadensbild ab. Wenn Flüssigkeiten in Teppich, Parkett, Laminat, Fugen oder darunterliegende Schichten eingedrungen sind, kann eine Teilentfernung notwendig sein. Wir entfernen nur, was hygienisch oder technisch erforderlich ist.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Muss der Estrich entfernt werden?",
            antwort:
                "Nur bei tief eingedrungenen Verunreinigungen. Zuerst wird geprüft, ob Reinigung, Trocknung, Versiegelung oder Teilrückbau ausreichen. Ein Estrichrückbau ist nicht automatisch notwendig.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Wie lange dauert eine Leichenfundortreinigung?",
            antwort:
                "Kleinere Einsätze können innerhalb eines Tages erledigt werden. Bei starkem Geruch, tief eingedrungenen Flüssigkeiten, Entrümpelung oder Sanierung kann der Einsatz mehrere Tage dauern.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Ist die Wohnung danach wieder bewohnbar?",
            antwort:
                "Ja, wenn alle belasteten Bereiche gereinigt, desinfiziert und Geruchsquellen entfernt wurden. Bei größeren Schäden kann zusätzlich eine Renovierung oder Sanierung erforderlich sein.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Wird alles desinfiziert?",
            antwort:
                "Alle betroffenen und angrenzenden Risikobereiche werden fachgerecht gereinigt und desinfiziert. Dazu zählen Böden, Wände, Möbel, Sanitärbereiche, Kontaktflächen und je nach Fall auch Nebenräume.",
        },
        {
            kategorie: "Leichenfundortreinigung",
            frage: "Können Nachbarn den Geruch wahrnehmen?",
            antwort:
                "Das kann bei längerem Leichenfund vorkommen, besonders in Mehrparteienhäusern. Wir arbeiten diskret und konzentrieren uns darauf, die Geruchsquelle schnell zu entfernen und die Belastung für Nachbarn zu reduzieren.",
        },

        // 3. Tatortreinigung und Suizid
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Reinigen Sie nach einem Suizid?",
            antwort:
                "Ja. Nach Freigabe durch Polizei oder Behörden übernehmen wir Reinigung, Desinfektion, Geruchsbeseitigung und Entsorgung kontaminierter Materialien. Angehörige müssen die Räume nicht selbst betreten oder reinigen.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Reinigen Sie nach einem Gewaltverbrechen?",
            antwort:
                "Ja. Wir reinigen nach Gewaltverbrechen, Unfällen und anderen Ereignissen mit Blut, Körperflüssigkeiten oder biologischen Rückständen. Die Arbeiten beginnen erst nach Freigabe durch die zuständigen Stellen.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Entfernen Sie Blutspuren vollständig?",
            antwort:
                "Ja. Sichtbare und verdeckte Blutspuren werden fachgerecht entfernt. Wir prüfen auch Fugen, Sockelleisten, Bodenübergänge, Polster, Matratzen und schwer zugängliche Bereiche.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Was passiert, wenn Blut in den Boden eingedrungen ist?",
            antwort:
                "Dann reicht Oberflächenreinigung nicht aus. Je nach Material müssen Teppich, Laminat, Parkett, Sockelleisten oder Unterlagen teilweise entfernt und der Untergrund behandelt werden.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Kann die Familie während der Reinigung in der Wohnung bleiben?",
            antwort:
                "Das ist meistens nicht empfehlenswert. Aus hygienischen und psychischen Gründen sollten betroffene Bereiche während der Arbeiten nicht genutzt werden. Wir klären vor Ort, welche Räume sicher sind.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Arbeiten Sie mit neutralen Fahrzeugen?",
            antwort:
                "Auf Wunsch ja. Bei sensiblen Einsätzen achten wir auf unauffällige Anfahrt, diskrete Kommunikation und vertrauliche Abwicklung.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Sprechen Sie mit Nachbarn über den Einsatz?",
            antwort:
                "Nein. Wir geben keine Informationen an Nachbarn oder unbeteiligte Personen weiter. Falls organisatorisch notwendig, wird nur das Nötigste kommuniziert, ohne Details zum Vorfall.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Muss die Polizei vorher fertig sein?",
            antwort:
                "Ja. Wir beginnen erst, wenn Polizei, Gerichtsmedizin oder Behörden den Bereich freigegeben haben. Vorher dürfen Spuren oder Gegenstände nicht verändert werden.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Kann ich direkt nach der Freigabe anrufen?",
            antwort:
                "Ja. Das ist sogar sinnvoll, damit wir schnell planen können. Hilfreich sind Einsatzort, Telefonnummer, Freigabe-Status und eine kurze Beschreibung des Schadens.",
        },
        {
            kategorie: "Tatortreinigung und Suizid",
            frage: "Ist die Reinigung psychisch belastend für Angehörige?",
            antwort:
                "Ja, oft sehr. Deshalb ist es wichtig, dass Angehörige die Räume nicht selbst reinigen müssen. Wir übernehmen diese Aufgabe respektvoll und mit der nötigen Distanz.",
        },

        // 4. Messie-Reinigung und Verwahrlosung
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Reinigen Sie Messie-Wohnungen?",
            antwort:
                "Ja. Wir übernehmen Entrümpelung, Sortierung, Entsorgung, Grundreinigung, Desinfektion und Geruchsbeseitigung. Ziel ist, die Wohnung wieder sicher nutzbar oder vermietbar zu machen.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Wie läuft eine Messie-Reinigung ab?",
            antwort:
                "Zuerst erfolgt eine Besichtigung oder Fotoeinschätzung. Danach werden verwertbare Gegenstände, Dokumente und Wertsachen getrennt. Anschließend folgen Räumung, Entsorgung, Reinigung, Desinfektion und bei Bedarf Geruchsbeseitigung oder Sanierung.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Wer entscheidet, was weggeworfen wird?",
            antwort:
                "Das wird vorher abgestimmt. Wichtige Dokumente, persönliche Gegenstände, Wertgegenstände und Erinnerungsstücke werden nicht unkontrolliert entsorgt. Bei Vermieter- oder Nachlassfällen erfolgt die Entscheidung nach Auftrag und rechtlicher Grundlage.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Entfernen Sie auch Gerüche in Messie-Wohnungen?",
            antwort:
                "Ja. Gerüche entstehen häufig durch Müll, Lebensmittelreste, Tierhaltung, Feuchtigkeit, Schimmel oder biologische Rückstände. Wir entfernen zuerst die Ursache und behandeln danach die Raumluft und betroffene Materialien.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Beseitigen Sie Schimmel?",
            antwort:
                "Ja, soweit dies im Rahmen der Reinigung und Sanierung möglich ist. Bei größerem Schimmelbefall kann eine gesonderte Schimmelsanierung notwendig sein.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Was passiert bei Ungeziefer oder Schädlingen?",
            antwort:
                "Bei Schädlingsbefall wird der Bereich gesichert und die notwendige Reinigung mit geeigneten Maßnahmen abgestimmt. Falls erforderlich, wird ein Schädlingsbekämpfer einbezogen.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Kann die Wohnung danach wieder vermietet werden?",
            antwort:
                "In vielen Fällen ja. Nach Räumung, Reinigung, Desinfektion und Geruchsbeseitigung kann die Wohnung oft wieder vorbereitet werden. Bei Schäden an Boden, Wänden oder Sanitärbereichen können Renovierungsarbeiten notwendig sein.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Wie lange dauert eine Messie-Räumung?",
            antwort:
                "Das hängt von Größe, Füllgrad, Zugangsmöglichkeiten und Entsorgungsmenge ab. Kleine Wohnungen können in wenigen Tagen erledigt sein, große oder stark belastete Objekte dauern länger.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Arbeiten Sie vertraulich bei Messie-Fällen?",
            antwort:
                "Ja. Messie-Fälle sind für Betroffene oft sehr unangenehm. Wir behandeln alle Informationen vertraulich und vermeiden unnötige Aufmerksamkeit.",
        },
        {
            kategorie: "Messie-Reinigung und Verwahrlosung",
            frage: "Kann der Bewohner während der Räumung dabei sein?",
            antwort:
                "Das ist möglich, wenn es sicher und organisatorisch sinnvoll ist. Oft ist es besser, vorher klare Entscheidungen zu treffen und die Arbeiten dann ohne ständige Belastung für den Bewohner durchzuführen.",
        },

        // 5. Vermieter und Hausverwaltungen
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Ich bin Vermieter und habe eine stark belastete Wohnung. Was können Sie übernehmen?",
            antwort:
                "Wir können Besichtigung, Räumung, Entsorgung, Tatort- oder Leichenfundortreinigung, Desinfektion, Geruchsbeseitigung und besenreine Übergabe übernehmen. Auf Wunsch dokumentieren wir den Zustand für Versicherung oder Verwaltung.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Können Sie die Wohnung wieder vermietbar machen?",
            antwort:
                "Ja. Unser Ziel ist die Wiederherstellung der Nutzbarkeit. Je nach Zustand gehören dazu Entrümpelung, Reinigung, Desinfektion, Geruchsbeseitigung und Vorbereitung für Renovierung oder Wiedervermietung.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Erstellen Sie eine Dokumentation für die Hausverwaltung?",
            antwort:
                "Ja. Auf Wunsch dokumentieren wir Ausgangszustand, durchgeführte Arbeiten, entsorgte Materialien und Abschlusszustand. Fotos werden nur nach Auftrag und im notwendigen Umfang erstellt.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Können Sie Schlüssel von der Hausverwaltung übernehmen?",
            antwort:
                "Ja, nach Absprache ist eine Schlüsselübernahme und Rückgabe möglich. Dabei sollte dokumentiert werden, wer den Schlüssel übergibt und wann die Rückgabe erfolgt.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Können Sie mit Mietern oder Angehörigen abstimmen?",
            antwort:
                "Ja. Wir können organisatorisch mit Mietern, Angehörigen, Hausverwaltung oder Eigentümer kommunizieren, sofern der Auftrag und die Berechtigung geklärt sind.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Wie schnell kann die Wohnung wieder übergeben werden?",
            antwort:
                "Das hängt vom Schaden ab. Eine reine Reinigung kann schnell abgeschlossen sein. Bei Geruch im Bodenaufbau, starker Kontamination oder Renovierungsbedarf dauert die Wiederherstellung länger.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Können Sie auch Keller, Dachboden oder Nebenräume räumen?",
            antwort:
                "Ja. Wir übernehmen auch Kellerabteile, Dachböden, Garagen, Lagerräume und Nebenflächen, wenn diese Teil des Auftrags sind.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Entsorgen Sie Möbel und Hausrat?",
            antwort:
                "Ja. Wir trennen und entsorgen Möbel, Hausrat, Textilien und kontaminierte Materialien fachgerecht. Verwertbare oder wichtige Gegenstände werden nach Absprache separiert.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Können Sie kurzfristig bei Geruchsbeschwerden im Haus helfen?",
            antwort:
                "Ja. Bei Geruchsbeschwerden ist schnelles Handeln wichtig. Wir prüfen die Ursache und setzen geeignete Maßnahmen zur Entfernung der Geruchsquelle und Neutralisation ein.",
        },
        {
            kategorie: "Vermieter und Hausverwaltungen",
            frage: "Erhalte ich ein Angebot vor Beauftragung?",
            antwort:
                "Ja. Nach Besichtigung oder aussagekräftigen Fotos erhalten Sie ein klares Angebot mit Leistungsumfang. Bei Notfällen kann zuerst eine Sofortmaßnahme vereinbart werden.",
        },

        // 6. Notare, Nachlass und Erben
        {
            kategorie: "Notare, Nachlass und Erben",
            frage: "Räumen Sie Nachlasswohnungen?",
            antwort:
                "Ja. Wir übernehmen komplette Nachlassräumungen, Reinigung, Entsorgung und besenreine Übergabe. Wichtige Dokumente, Wertsachen und persönliche Gegenstände werden nach Absprache gesichert.",
        },
        {
            kategorie: "Notare, Nachlass und Erben",
            frage: "Können Sie für Notare arbeiten?",
            antwort:
                "Ja. Wir können im Auftrag von Notaren, Erben, Erwachsenenvertretungen, Verlassenschaftskuratoren oder Hausverwaltungen arbeiten, wenn die Beauftragung und Zugangsberechtigung geklärt sind.",
        },
        {
            kategorie: "Notare, Nachlass und Erben",
            frage: "Dokumentieren Sie Wertgegenstände?",
            antwort:
                "Ja. Auf Wunsch werden gefundene Wertgegenstände, Dokumente und relevante Gegenstände separat erfasst und übergeben. Die genaue Form der Dokumentation wird vor Beginn abgestimmt.",
        },
        {
            kategorie: "Notare, Nachlass und Erben",
            frage: "Können Sie eine Wohnung für Verkauf oder Übergabe vorbereiten?",
            antwort:
                "Ja. Nach Räumung und Reinigung kann die Wohnung besenrein übergeben oder für weitere Sanierung, Bewertung, Verkauf oder Vermietung vorbereitet werden.",
        },
        {
            kategorie: "Notare, Nachlass und Erben",
            frage: "Was passiert mit Unterlagen und persönlichen Papieren?",
            antwort:
                "Unterlagen werden getrennt gesammelt und nicht ohne Absprache entsorgt. Dazu gehören Ausweise, Verträge, Bankunterlagen, Versicherungsdokumente, Fotos und persönliche Schriftstücke.",
        },
        {
            kategorie: "Notare, Nachlass und Erben",
            frage: "Können Sie auch ohne Angehörige vor Ort arbeiten?",
            antwort:
                "Ja, wenn Schlüssel, Auftrag und Berechtigung geklärt sind. Die Kommunikation kann telefonisch oder per E-Mail erfolgen.",
        },
        {
            kategorie: "Notare, Nachlass und Erben",
            frage: "Erstellen Sie ein Übergabeprotokoll?",
            antwort:
                "Ja. Auf Wunsch dokumentieren wir Schlüsselübergabe, Leistungsumfang, besondere Funde und Abschlusszustand.",
        },
        {
            kategorie: "Notare, Nachlass und Erben",
            frage: "Können Sie eine Wohnung besenrein übergeben?",
            antwort:
                "Ja. Besenreine Übergabe ist möglich. Falls zusätzlich hygienische Reinigung, Desinfektion oder Geruchsbeseitigung erforderlich ist, wird dies gesondert vereinbart.",
        },

        // 7. Behörden, Polizei und Gemeinden
        {
            kategorie: "Behörden, Polizei und Gemeinden",
            frage: "Arbeiten Sie mit Polizei oder Behörden zusammen?",
            antwort:
                "Ja. Wir werden jedoch erst tätig, wenn der Einsatzort freigegeben wurde. Vorher dürfen mögliche Spuren, Gegenstände oder betroffene Bereiche nicht verändert werden.",
        },
        {
            kategorie: "Behörden, Polizei und Gemeinden",
            frage: "Können Gemeinden oder Behörden Sie beauftragen?",
            antwort:
                "Ja. Wir können für Gemeinden, Behörden, soziale Einrichtungen, Erwachsenenvertretungen und andere berechtigte Stellen arbeiten, wenn Auftrag und Zugang geklärt sind.",
        },
        {
            kategorie: "Behörden, Polizei und Gemeinden",
            frage: "Können Sie kurzfristige Notfalleinsätze übernehmen?",
            antwort:
                "Ja. Bei dringenden Fällen wird zuerst die Lage abgefragt: Standort, Freigabe, Gefahrenlage, Zugangsmöglichkeit, betroffene Fläche und erforderliche Diskretion.",
        },
        {
            kategorie: "Behörden, Polizei und Gemeinden",
            frage: "Erstellen Sie Einsatzberichte?",
            antwort:
                "Ja. Auf Wunsch erstellen wir eine sachliche Dokumentation über Zustand, Maßnahmen, Entsorgung und Abschluss. Der Umfang richtet sich nach Auftrag und Zweck.",
        },
        {
            kategorie: "Behörden, Polizei und Gemeinden",
            frage: "Entsorgen Sie kontaminierte Materialien fachgerecht?",
            antwort:
                "Ja. Kontaminierte Materialien werden getrennt behandelt, sicher verpackt und entsprechend den geltenden Anforderungen entsorgt.",
        },
        {
            kategorie: "Behörden, Polizei und Gemeinden",
            frage: "Können Sie in öffentlichen Gebäuden reinigen?",
            antwort:
                "Ja. Wir können auch in Amtsgebäuden, Heimen, Schulen, Verkehrsbereichen, Unterkünften oder sonstigen Liegenschaften arbeiten, wenn der Bereich gesichert und freigegeben ist.",
        },
        {
            kategorie: "Behörden, Polizei und Gemeinden",
            frage: "Können Sie diskret bei sensiblen Behördenfällen arbeiten?",
            antwort:
                "Ja. Diskretion, Datenschutz und sachliche Kommunikation sind bei solchen Einsätzen besonders wichtig. Informationen werden nur an berechtigte Ansprechpartner weitergegeben.",
        },
        {
            kategorie: "Behörden, Polizei und Gemeinden",
            frage: "Welche Angaben werden bei einer Behördenanfrage benötigt?",
            antwort:
                "Hilfreich sind Ansprechpartner, Behörde, Telefonnummer, Einsatzort, Freigabe-Status, Dringlichkeit, Art des Vorfalls und die gewünschte Dokumentation. Damit können wir den Fall direkt weiterleiten.",
        },

        // 8. Hotels, Unternehmen und Gewerbe
        {
            kategorie: "Hotels, Unternehmen und Gewerbe",
            frage: "Arbeiten Sie für Hotels?",
            antwort:
                "Ja. Wir können diskret in Hotels, Pensionen und Beherbergungsbetrieben arbeiten, auch außerhalb normaler Betriebszeiten. Wichtig ist eine schnelle Abstimmung mit Direktion, Housekeeping oder Technik.",
        },
        {
            kategorie: "Hotels, Unternehmen und Gewerbe",
            frage: "Können Sie ein Hotelzimmer nach einem Todesfall reinigen?",
            antwort:
                "Ja. Nach Freigabe übernehmen wir Reinigung, Desinfektion, Geruchsbeseitigung und bei Bedarf Entfernung kontaminierter Matratzen, Teppiche oder Möbel. Ziel ist eine sichere Wiederherstellung des Zimmers.",
        },
        {
            kategorie: "Hotels, Unternehmen und Gewerbe",
            frage: "Können Sie arbeiten, ohne Gäste zu beunruhigen?",
            antwort:
                "Ja. Wir planen die Anfahrt, Wege im Gebäude und Arbeitszeiten so diskret wie möglich. Auf Wunsch erfolgt die Kommunikation nur mit einer verantwortlichen Kontaktperson.",
        },
        {
            kategorie: "Hotels, Unternehmen und Gewerbe",
            frage: "Arbeiten Sie nachts oder am Wochenende?",
            antwort:
                "Ja. Für Hotels und Unternehmen sind Einsätze außerhalb der Gäste- oder Betriebszeiten möglich, damit der laufende Betrieb möglichst wenig gestört wird.",
        },
        {
            kategorie: "Hotels, Unternehmen und Gewerbe",
            frage: "Können Sie für Unternehmen nach Unfällen reinigen?",
            antwort:
                "Ja. Wir reinigen nach Arbeitsunfällen, biologischen Verunreinigungen, starken Gerüchen oder sonstigen Sonderfällen, sobald der Bereich freigegeben und gesichert ist.",
        },
        {
            kategorie: "Hotels, Unternehmen und Gewerbe",
            frage: "Können Teilbereiche abgesperrt und andere Bereiche weiter genutzt werden?",
            antwort:
                "Das hängt von Gefahrenlage und Raumstruktur ab. Wir prüfen, ob eine sichere Trennung möglich ist, damit der Betrieb teilweise weiterlaufen kann.",
        },
        {
            kategorie: "Hotels, Unternehmen und Gewerbe",
            frage: "Erhalten Unternehmen eine Rechnung und Dokumentation?",
            antwort:
                "Ja. Unternehmen erhalten eine ordnungsgemäße Rechnung und auf Wunsch eine Dokumentation der Arbeiten für interne Unterlagen, Versicherung oder Verwaltung.",
        },
        {
            kategorie: "Hotels, Unternehmen und Gewerbe",
            frage: "Was soll ein Hotel im Notfall tun?",
            antwort:
                "Den Bereich absperren, Gäste fernhalten, Behörden informieren, nichts reinigen und anschließend einen Spezialreiniger kontaktieren. Hilfreich für uns sind Telefonnummer, Hotelname, Zimmernummer, Freigabe-Status und Dringlichkeit.",
        },

        // 9. Kosten, Angebot und Versicherung
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Was kostet eine Tatortreinigung?",
            antwort:
                "Die Kosten richten sich nach Art des Vorfalls, Fläche, Kontamination, Geruch, Materialschaden, Entsorgungsmenge und notwendiger Sanierung. Nach Besichtigung oder Fotos erstellen wir ein klares Angebot.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Kann man einen Preis am Telefon nennen?",
            antwort:
                "Eine grobe Einschätzung ist möglich, ein seriöser Festpreis jedoch meist erst nach Fotos oder Besichtigung. Bei Tatort-, Leichenfund- und Messie-Fällen kann der Aufwand stark variieren.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Übernimmt die Versicherung die Kosten?",
            antwort:
                "Das hängt vom Versicherungsvertrag und Schadenfall ab. In Frage kommen je nach Situation Haushalts-, Gebäude-, Haftpflicht- oder andere Versicherungen. Wir können eine Rechnung und Dokumentation für die Einreichung bereitstellen.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Können Sie direkt mit der Versicherung abrechnen?",
            antwort:
                "In manchen Fällen ist das möglich, wenn Versicherung, Auftraggeber und Kostenübernahme geklärt sind. Andernfalls erhält der Auftraggeber eine Rechnung zur Einreichung.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Erhalte ich ein schriftliches Angebot?",
            antwort:
                "Ja. Nach Einschätzung erhalten Sie ein Angebot mit Leistungsumfang. Bei dringenden Notfällen kann vorab eine Sofortmaßnahme vereinbart und danach der weitere Aufwand festgelegt werden.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Ist die Erstberatung kostenlos?",
            antwort:
                "Eine erste telefonische Einschätzung ist in der Regel unverbindlich. Ob eine Vor-Ort-Besichtigung kostenpflichtig ist, hängt von Entfernung, Aufwand und Dringlichkeit ab und wird vorher klar kommuniziert.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Gibt es Festpreise?",
            antwort:
                "Bei klar abgrenzbaren Einsätzen können Festpreise möglich sein. Bei unklarem Schadensbild, verdeckter Kontamination oder großer Entsorgungsmenge kann eine Abrechnung nach Aufwand sinnvoller sein.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Warum kann eine Tatortreinigung teuer sein?",
            antwort:
                "Weil nicht nur geputzt wird. Es geht um Gefahrenbewertung, Schutzmaßnahmen, Spezialreinigung, Desinfektion, Geruchsbeseitigung, Entsorgung, Dokumentation und manchmal Rückbau belasteter Materialien.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Welche Zahlungsarten sind möglich?",
            antwort:
                "Das wird individuell vereinbart. Üblich sind Rechnung, Überweisung oder je nach Situation andere Zahlungsvereinbarungen.",
        },
        {
            kategorie: "Kosten, Angebot und Versicherung",
            frage: "Bekomme ich eine Rechnung?",
            antwort:
                "Ja. Sie erhalten eine ordnungsgemäße Rechnung mit Leistungsbeschreibung, die Sie bei Bedarf bei Versicherung, Hausverwaltung oder Nachlass einreichen können.",
        },

        // 10. Ablauf, Einsatzgebiet und Kontakt
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Wie läuft ein Auftrag ab?",
            antwort:
                "Zuerst erfassen wir die Situation telefonisch oder per WhatsApp. Danach folgen Besichtigung oder Fotoeinschätzung, Angebot, Terminplanung, Durchführung, Entsorgung, Abschlusskontrolle und Übergabe.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Welche Informationen werden zuerst benötigt?",
            antwort:
                "Hilfreich sind Name, Telefonnummer, Einsatzort, Art des Vorfalls, Freigabe durch Behörden, Dringlichkeit, ob Fotos möglich sind, und die gewünschte Rückrufzeit.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Sind Sie 24 Stunden erreichbar?",
            antwort:
                "Ja. Für Notfälle können Sie jederzeit eine Rückrufanfrage stellen; bei dringenden Fällen leiten wir direkt an den Notdienst weiter.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "In welchem Gebiet arbeiten Sie?",
            antwort:
                "Wir nehmen Anfragen aus Salzburg, der Umgebung und überregional auf und prüfen diese intern. Der genaue Einsatzbereich ist auf der Website angegeben.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Kann ich per WhatsApp Kontakt aufnehmen?",
            antwort:
                "Ja. WhatsApp ist sinnvoll für Fotos, Standort, kurze Rückfragen und schnelle Abstimmung. Sensible Informationen werden vertraulich behandelt.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Kann ich anonym anfragen?",
            antwort:
                "Ja. Eine erste anonyme Anfrage ist möglich. Für Angebot, Termin und Rechnung werden später die notwendigen Kontaktdaten benötigt.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Was passiert nach dem Absenden des Kontaktformulars?",
            antwort:
                "Der Fall wird geprüft und ein Mitarbeiter meldet sich zur Klärung der Details. Bei Notfällen ist ein direkter Anruf besser als nur ein Formular.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Was soll ich bei akuter Gefahr tun?",
            antwort:
                "Bei akuter Gefahr für Personen, ungeklärtem Todesfall, Brand, Gewalt oder medizinischem Notfall wenden Sie sich zuerst an Polizei, Rettung oder Feuerwehr. Die Reinigung erfolgt erst nach Freigabe.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Kann ich einen festen Termin vereinbaren?",
            antwort:
                "Ja. Nach Einschätzung des Umfangs kann ein Termin vereinbart werden. Bei dringenden Fällen wird die schnellstmögliche Einsatzzeit geprüft.",
        },
        {
            kategorie: "Ablauf, Einsatzgebiet und Kontakt",
            frage: "Was passiert nach Abschluss der Arbeiten?",
            antwort:
                "Der Bereich wird übergeben. Auf Wunsch erhalten Sie eine Dokumentation, Rechnung, Hinweise zu weiteren Sanierungsschritten und Informationen zur Wiederbenutzung der Räume.",
        },

        // 11. Antwortbausteine für schwierige Kundennachrichten
        {
            kategorie: "Schwierige Nachrichten",
            frage: "Ich kann nicht mehr in die Wohnung gehen.",
            antwort:
                "Das müssen Sie auch nicht. Bitte betreten Sie die Wohnung nicht, wenn Sie sich unwohl fühlen oder eine Belastung vermuten. Wir können die Situation vor Ort prüfen und die notwendigen Arbeiten übernehmen.",
        },
        {
            kategorie: "Schwierige Nachrichten",
            frage: "Es riecht schon im Stiegenhaus.",
            antwort:
                "Dann sollte die Ursache schnell geprüft und entfernt werden. Bitte informieren Sie Hausverwaltung oder Eigentümer und vermeiden Sie eigene Reinigungsversuche. Wir können kurzfristig eine Einschätzung vornehmen.",
        },
        {
            kategorie: "Schwierige Nachrichten",
            frage: "Ich schäme mich wegen der Messie-Wohnung.",
            antwort:
                "Sie müssen sich nicht schämen. Solche Situationen kommen häufiger vor, als viele denken. Wir behandeln den Fall vertraulich und konzentrieren uns auf eine sachliche Lösung.",
        },
        {
            kategorie: "Schwierige Nachrichten",
            frage: "Ich habe wenig Geld, brauche aber Hilfe.",
            antwort:
                "Wir verstehen die Situation. Die Kosten hängen vom Umfang ab. Senden Sie uns, wenn möglich, Fotos oder beschreiben Sie die Lage, damit wir einschätzen können, welche Maßnahmen wirklich notwendig sind.",
        },
        {
            kategorie: "Schwierige Nachrichten",
            frage: "Die Nachbarn sollen nichts mitbekommen.",
            antwort:
                "Wir achten auf eine diskrete Abwicklung. Auf Wunsch verwenden wir neutrale Fahrzeuge und kommunizieren nur mit den vereinbarten Ansprechpartnern.",
        },
        {
            kategorie: "Schwierige Nachrichten",
            frage: "Kann ich das nicht selbst mit Desinfektionsmittel reinigen?",
            antwort:
                "Davon raten wir ab. Sichtbare Verschmutzungen sind oft nur ein Teil des Problems. Biologische Rückstände und Geruchsquellen können in Materialien eindringen und gesundheitliche Risiken verursachen.",
        },
        {
            kategorie: "Schwierige Nachrichten",
            frage: "Ich brauche nur eine schnelle Reinigung.",
            antwort:
                "Wir prüfen gerne, ob eine schnelle Reinigung ausreicht. Bei biologischer Kontamination muss jedoch sichergestellt werden, dass Reinigung, Desinfektion und Entsorgung fachgerecht erfolgen.",
        },
        {
            kategorie: "Schwierige Nachrichten",
            frage: "Ich bin Hausverwalter und brauche heute noch jemanden.",
            antwort:
                "Bitte senden Sie Einsatzort, Telefonnummer, Objektart, Freigabe-Status, kurze Schadensbeschreibung und Fotos, falls vorhanden. Wir prüfen die schnellstmögliche Einsatzzeit.",
        },
    ],
};