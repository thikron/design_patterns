# Facade Pattern
Das Flyweight-Muster wird verwendet, um den Speicherverbrauch zu reduzieren, indem gemeinsam genutzte Daten zwischen mehreren ähnlichen Objekten geteilt werden.Das Flyweight-Muster wird verwendet, um den Speicherverbrauch zu reduzieren, indem gemeinsam genutzte Daten zwischen mehreren ähnlichen Objekten geteilt werden.

In diesem Beispiel haben wir das Fassaden-Designmuster implementiert, um eine vereinfachte Schnittstelle zur Steuerung eines Computers bereitzustellen, der aus verschiedenen Subsystemen besteht.

- Die Klassen CPU, Memory und HardDrive repräsentieren die verschiedenen Subsysteme des Computers.
- Die Klasse ComputerFacade dient als Fassade und kapselt die Komplexität der Interaktionen mit den Subsystemen.
- Die Methoden startComputer() und shutdownComputer() der Fassade führen die erforderlichen Aktionen auf den Subsystemen aus, um den Computer zu starten bzw. herunterzufahren.

Das Beispiel zeigt, wie die Fassade verwendet wird, um den Computer zu starten und herunterzufahren, während die Details der Interaktion mit den einzelnen Subsystemen verborgen bleiben. Dies vereinfacht die Verwendung des Computers und ermöglicht eine einfachere Handhabung der Komplexität.