# Mediator Pattern

Das Mediator-Muster wird verwendet, um die Kommunikation zwischen verschiedenen Objekten zu kapseln, indem sie über einen zentralen Vermittler interagieren, anstatt direkt miteinander zu kommunizieren.

In diesem Beispiel:

- Das Mediator-Interface definiert die Methode sendMessage, über die Kollegen miteinander kommunizieren.
- Das Colleague-Interface definiert die Methoden send und receive, die von den Kollegen implementiert werden, um Nachrichten zu senden bzw. zu empfangen.
- Die Klasse ConcreteMediator ist ein konkreter Mediator, der die Kommunikation zwischen den Kollegen koordiniert.
- Die Klasse ConcreteColleague ist ein konkreter Kollege, der mit dem Mediator kommuniziert, um Nachrichten zu senden oder zu empfangen.
- Im Client-Code werden Kollegen und ein Mediator erstellt, die Kollegen dem Mediator hinzugefügt und dann Nachrichten zwischen den Kollegen gesendet.

Das Mediator-Muster ermöglicht es, die Abhängigkeiten zwischen Objekten zu reduzieren, indem sie über einen zentralen Vermittler interagieren. Dies erleichtert die Wartung und Änderung des Codes, da die Objekte nicht direkt voneinander abhängig sind.