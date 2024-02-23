# Builder Pattern

In diesem Beispiel haben wir das Builder Design Pattern implementiert, um eine flexible und schrittweise Erstellung von Pizza-Objekten zu ermöglichen.

- Die Klasse Pizza repräsentiert das zu erstellende Produkt und bietet Methoden zum Setzen der Teile einer Pizza.
- Das Interface PizzaBuilder definiert die Methoden, die ein Builder implementieren muss, um eine Pizza zu erstellen.
- Die Klasse PepperoniPizzaBuilder ist eine konkrete Implementierung des Builders, der eine spezifische Art von Pizza erstellt.
- Die Klasse PizzaMaker fungiert als Director und nimmt einen Builder entgegen, um eine Pizza zu erstellen, indem sie die entsprechenden Methoden des Builders aufruft. 

Das Beispiel zeigt, wie der Pizza-Builder verwendet wird, um eine Pepperoni-Pizza schrittweise zu erstellen und sie dann zu beschreiben.