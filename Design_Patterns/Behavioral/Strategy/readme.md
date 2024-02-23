# Strategy Pattern

Das Strategy-Muster ermöglicht es, eine Familie von Algorithmen zu definieren, sie zu kapseln und austauschbar zu machen.

In diesem Beispiel:

- Das Strategy-Interface definiert eine Methode, die von allen konkreten Strategien implementiert wird.
- Die konkreten Strategien (BubbleSortStrategy und QuickSortStrategy) implementieren das Strategy-Interface und definieren jeweils einen Algorithmus für das Sortieren von Daten.
- Der Context verwendet eine bestimmte Strategie, um eine Operation auszuführen. Die Strategie kann zur Laufzeit ausgetauscht werden.

Das Strategy-Muster ermöglicht es, Algorithmen auszutauschen, ohne die Verwendung des Algorithmus im Client-Code zu ändern. Dies erhöht die Flexibilität und Wartbarkeit des Codes, da neue Algorithmen einfach hinzugefügt oder vorhandene Algorithmen ausgetauscht werden können.