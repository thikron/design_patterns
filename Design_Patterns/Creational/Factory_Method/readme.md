# Factory Method

In diesem Beispiel haben wir das Factory Method Design Pattern implementiert, um die Erstellung von Pizza-Objekten zu delegieren.

- Das Pizza-Interface definiert die Methoden, die von allen konkreten Produkten (Pizza-Typen) implementiert werden müssen.
- Die Klassen PepperoniPizza und VeggiePizza sind konkrete Implementierungen von Pizza.
- Die abstrakte Klasse PizzaStore dient als Creator und definiert die Factory-Methode createPizza(), die von den konkreten Erzeugerklassen implementiert wird.
- Die Klassen PepperoniPizzaStore und VeggiePizzaStore sind konkrete Erzeugerklassen, die jeweils die Factory-Methode implementieren, um die entsprechende Art von Pizza zu erstellen.

Das Beispiel zeigt, wie der Pizza-Store die Bestellung einer Pizza durchführt, indem er die Factory-Methode aufruft, um das entsprechende Pizza-Objekt zu erstellen und es dann vorzubereiten, zu backen, zu schneiden und zu verpacken.
