# Prototype Pattern

In diesem Beispiel haben wir das Prototype Design Pattern implementiert, um die Erstellung von Pizza-Objekten durch Klonen von Prototypen zu ermöglichen.

- Das PizzaPrototype-Interface definiert die Methoden, die von allen konkreten Prototypen (Pizza-Typen) implementiert werden müssen, sowie die clone()-Methode zum Klonen.
- Die Klassen PepperoniPizza und VeggiePizza sind konkrete Implementierungen von Pizza und implementieren das PizzaPrototype-Interface.
- Der PizzaStore dient als Client und verwaltet eine Sammlung von Pizza-Prototypen. Er ermöglicht es, neue Prototypen hinzuzufügen und Pizzen zu bestellen, indem er die entsprechenden Prototypen kloniert und dann die Schritte zur Zubereitung, zum Backen, Schneiden und Verpacken durchführt.

Das Beispiel zeigt, wie der Pizza-Store Pizza-Objekte erstellt, indem er Prototypen kloniert und dann die entsprechenden Aktionen darauf ausführt.




