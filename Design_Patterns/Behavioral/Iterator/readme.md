# Iterator Pattern

Das Iterator-Muster wird verwendet, um eine Möglichkeit bereitzustellen, um sequenziell über die Elemente einer Sammlung zu iterieren, ohne deren interne Struktur offenlegen zu müssen.

In diesem Beispiel:

- Das Aggregate-Interface definiert eine Methode createIterator, die einen Iterator erstellt.
- Das Iterator-Interface definiert die Methoden hasNext und next für die Iteration über die Elemente einer Sammlung.
- Die Klasse Collection ist ein konkreter Aggregate, der Elemente speichert und einen Iterator für diese Elemente erstellt.
- Die Klasse CollectionIterator ist ein konkreter Iterator, der die Elemente der Sammlung sequenziell durchläuft.
- Im Client-Code wird eine Sammlung erstellt, Elemente hinzugefügt und anschließend über einen Iterator durch die Elemente iteriert.

Das Iterator-Muster ermöglicht es, über die Elemente einer Sammlung zu iterieren, ohne die interne Struktur der Sammlung preiszugeben. Dies verbessert die Trennung von Verantwortlichkeiten und macht den Code flexibler und wiederverwendbarer.