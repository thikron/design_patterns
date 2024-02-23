# Fleyweight Pattern

Das Flyweight-Muster wird verwendet, um den Speicherverbrauch zu reduzieren, indem gemeinsam genutzte Daten zwischen mehreren ähnlichen Objekten geteilt werden.

In diesem Beispiel:

- CoffeeOrder ist das Flyweight-Interface, das die Methode serveCoffee definiert, um Kaffee zu servieren.
- CoffeeFlavor ist eine konkrete Flyweight-Klasse, die eine Kaffeesorte repräsentiert und die Methode serveCoffee implementiert, um Kaffee zu servieren.
- CoffeeOrderContext ist der Kontext, der den Tisch repräsentiert, an dem der Kaffee serviert wird.
- CoffeeFlavorFactory ist die Flyweight-Fabrik, die Flyweight-Objekte verwaltet und bei Bedarf neue erzeugt.
- In der takeOrder-Funktion wird eine Bestellung für eine bestimmte Kaffeesorte aufgenommen und an den entsprechenden Tisch serviert. 

Durch Verwendung des Flyweight-Musters können Kaffeebestellungen effizient verwaltet werden, da gemeinsam genutzte Kaffeesorten wiederverwendet werden, anstatt für jede Bestellung eine neue Instanz zu erstellen.




