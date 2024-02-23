# Decorator Pattern

In diesem Beispiel haben wir das Decorator Design Pattern implementiert, um das Verhalten eines Objekts dynamisch zu erweitern, ohne die Klasse selbst zu ändern.

- Das Coffee-Interface definiert die Methoden getCost() und getDescription(), die von allen konkreten Kaffeeklassen implementiert werden müssen.
- Die Klasse SimpleCoffee ist eine konkrete Implementierung des Coffee-Interfaces und stellt einen einfachen Kaffee dar.
- Die abstrakte Klasse CoffeeDecorator stellt die Grundlage für alle konkreten Dekoratorklassen dar und hält eine Referenz auf das dekorierte Kaffeeobjekt.
- Die Klassen MilkDecorator und SugarDecorator sind konkrete Dekoratoren, die das Verhalten des Kaffees erweitern, indem sie zusätzliche Kosten und Beschreibungen hinzufügen.

Das Beispiel zeigt, wie das Decorator Pattern verwendet werden kann, um das Verhalten eines Objekts zur Laufzeit zu ändern, indem neue Funktionalitäten dynamisch hinzugefügt werden, ohne die Klassenstruktur zu ändern.
