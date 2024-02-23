# Template Method Pattern

Das Template Method Pattern definiert das Skelett eines Algorithmus in einer Methode und delegiert einige Schritte an abstrakte Methoden, die von Unterklassen implementiert werden.

In diesem Beispiel:

- Die abstrakte Klasse Recipe definiert den Template-Methodenrumpf cook() und deklariert abstrakte Methoden, die von konkreten Unterklassen implementiert werden müssen.
- Die konkreten Klassen PizzaRecipe und CakeRecipe erben von Recipe und implementieren die abstrakten Methoden.
- Die Template-Methode cook() führt den Algorithmus aus, indem sie die abstrakten Methoden aufruft. Die Methode serve() hat eine Standardimplementierung, die jedoch von den Unterklassen überschrieben werden kann.

Das Template Method Pattern ist nützlich, wenn Sie eine gemeinsame Abfolge von Schritten haben, die in verschiedenen Kontexten verwendet werden können, aber einige Schritte von den Unterklassen angepasst werden müssen. Es hilft, den Code zu strukturieren und die Wartbarkeit zu verbessern, indem gemeinsamer Code zentralisiert wird und nur spezifische Teile in den Unterklassen implementiert werden müssen.