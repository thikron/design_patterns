# Visitor Pattern

Das Visitor-Muster ermöglicht es, Operationen auf Elementen einer Objektstruktur auszuführen, ohne die Klassen dieser Elemente zu ändern.

In diesem Beispiel:

- Das Element-Interface definiert die Methode accept, die von allen konkreten Elementen implementiert wird, um den Besucher zu akzeptieren.
- Die konkreten Elemente ConcreteElementA und ConcreteElementB implementieren das Element-Interface und rufen die entsprechende Methode des Besuchers auf.
- Das Visitor-Interface definiert die Besucheroperationen für jedes konkrete Element.
- Der konkrete Besucher ConcreteVisitor implementiert das Visitor-Interface und führt die Besucheroperationen für jedes konkrete Element aus.
- Die ObjectStructure-Klasse enthält eine Liste von Elementen und ermöglicht es dem Besucher, über alle Elemente zu iterieren und Operationen auf ihnen auszuführen.

Das Visitor-Muster ermöglicht es, neue Operationen zu einer Objektstruktur hinzuzufügen, ohne die Klassen dieser Struktur zu ändern. Es ermöglicht auch, die Logik der Operationen von den Klassen der Elemente zu trennen und diese in separaten Besucherimplementierungen zu definieren.