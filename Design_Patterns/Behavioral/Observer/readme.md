# Observer Pattern

Das Observer-Muster wird verwendet, um eine Abhängigkeit zwischen Objekten herzustellen, sodass Änderungen in einem Objekt automatisch in anderen Objekten reflektiert werden können.

In diesem Beispiel:

- Das Subject-Interface definiert Methoden zum Anfügen, Abtrennen und Benachrichtigen von Beobachtern.
- Das ConcreteSubject ist das konkrete Subjekt, das den Zustand speichert und die Beobachter benachrichtigt.
- Das Observer-Interface definiert die Methode update(), die von allen Beobachtern implementiert werden muss.
- Der ConcreteObserver ist ein konkreter Beobachter, der über Änderungen im Zustand des Subjekts informiert wird. 

Die ConcreteSubject-Klasse speichert ihren Zustand und benachrichtigt alle registrierten Beobachter über Änderungen. Die ConcreteObserver-Klasse wird benachrichtigt, wenn sich der Zustand des Subjekts ändert.

Das Observer-Muster ermöglicht eine lose Kopplung zwischen Objekten, indem sie sich über Änderungen informieren, ohne direkt voneinander abhängig zu sein. Dies fördert eine flexible und wartbare Architektur.