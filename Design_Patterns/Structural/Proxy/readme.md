# Proxy Pattern

Das Proxy-Muster ermöglicht es, zusätzliches Verhalten hinzuzufügen, bevor oder nachdem die Anfrage an das echte Objekt weitergeleitet wird.

In diesem Beispiel wird das Proxy verwendet, um den Zugriff auf bestimmte Websites zu kontrollieren:

- Das Internet-Interface definiert die Methode connectTo, die von allen Implementierungen des Internets verwendet wird.
- Die Klasse RealInternet ist die echte Implementierung des Internets, die den Zugriff auf eine URL ermöglicht.
- Die Klasse InternetProxy ist ein Proxy, der vor dem Zugriff auf das Internet steht und den Zugriff auf bestimmte URLs einschränken kann.
- Im InternetProxy wird überprüft, ob die angeforderte URL in der Liste der gesperrten Websites enthalten ist. Falls ja, wird der Zugriff verweigert, ansonsten wird die Anfrage an das echte Internet weitergeleitet.
