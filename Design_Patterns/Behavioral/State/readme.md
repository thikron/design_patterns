# State Pattern

Das State-Muster ermöglicht einem Objekt, sein Verhalten basierend auf seinem internen Zustand zu ändern.

In diesem Beispiel:

- Das Context-Objekt verwaltet seinen internen Zustand, indem es einen konkreten Zustand hält und seine Zustände aktualisiert.
- Das State-Interface definiert die Methode handleRequest, die von allen konkreten Zuständen implementiert wird, um Anforderungen zu verarbeiten.
- Die konkreten Zustände ConcreteStateA und ConcreteStateB implementieren das State-Interface und ändern den Zustand des Kontexts basierend auf den Anforderungen.

Das State-Muster ermöglicht es einem Objekt, sein Verhalten zu ändern, wenn sein interner Zustand sich ändert, ohne dabei seine Schnittstelle zu ändern. Dies führt zu einer besseren Strukturierung von Code und erleichtert die Wartung und Erweiterung von Software.
