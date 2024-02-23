# Abstract Factory

Das Abstract Factory Design Pattern wird angewendet, wenn eine Anwendung eine Familie von verwandten oder abhängigen Objekten erzeugen muss, ohne deren konkrete Klassen zu kennen.

In diesem TypeScript-Beispiel haben wir die gleiche Struktur wie im Python-Beispiel implementiert, jedoch mit TypeScript-Syntax und Typisierung. Das Interface AbstractPizzaFactory definiert die Methoden für das Erstellen von Teig, Sauce und Belägen. Die Klassen PepperoniPizzaFactory und VeggiePizzaFactory implementieren dieses Interface und stellen spezifische Implementierungen bereit.

Der PizzaStore dient wieder als Client und nimmt eine Fabrik entgegen, um Pizzen zu bestellen. Abhängig von der übergebenen Fabrik erstellt der PizzaStore eine Pizza mit den entsprechenden Teilen (Teig, Sauce, Beläge) und gibt die Details aus.