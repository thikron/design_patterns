# Composite Pattern

In diesem Beispiel ist das Composite Design Pattern implementiert, um eine hierarchische Struktur von Mitarbeitern in einem Unternehmen darzustellen.

- Das Employee-Interface definiert die gemeinsamen Operationen, die sowohl für Blattknoten als auch für Composite-Knoten gelten.
- Die Klasse Developer repräsentiert einen Blattknoten im Baum, der einen einzelnen Entwickler darstellt.
- Die Klasse Manager repräsentiert einen Composite-Knoten, der mehrere Mitarbeiter (Entwickler oder Manager) enthalten kann.
- Die Methode print() wurde implementiert, um die Struktur des Unternehmens zu drucken, beginnend mit dem CEO und rekursiv die Hierarchie hinuntergehend.

Das Beispiel zeigt, wie das Composite Pattern verwendet werden kann, um eine hierarchische Struktur von Objekten zu erstellen und sie wie ein einzelnes Objekt zu behandeln.