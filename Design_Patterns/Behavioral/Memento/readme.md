# Memento Pattern

Das Memento-Muster wird verwendet, um den internen Zustand eines Objekts zu erfassen und wiederherzustellen, ohne die Kapselung zu verletzen.

In diesem Beispiel:

- Der Memento speichert den internen Zustand des Originator.
- Der Originator ist das Objekt, dessen Zustand gespeichert und wiederhergestellt werden soll.
- Der Caretaker ist dafür verantwortlich, die Mementos zu verwalten, ohne deren interne Struktur offenzulegen.
- Die Methode saveStateToMemento() im Originator erstellt ein neues Memento-Objekt, um den aktuellen Zustand zu speichern. getStateFromMemento() stellt den Zustand von einem Memento wieder her.

Das Memento-Muster ermöglicht es, den Zustand eines Objekts zu erfassen und wiederherzustellen, ohne die Kapselung zu verletzen. Dies erleichtert die Implementierung von Undo- und Redo-Funktionen oder das Speichern und Laden des Zustands eines Objekts in einem bestimmten Zeitpunkt.