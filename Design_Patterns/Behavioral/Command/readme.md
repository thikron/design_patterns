# Command Pattern

Das Command-Muster ermöglicht es, Aktionen als Objekte zu kapseln, was es ermöglicht, sie zu parametrisieren, zu speichern, zu übertragen und rückgängig zu machen. 

In diesem Beispiel werden Befehle verwendet, um das Licht ein- und auszuschalten, und es wird demonstriert, wie der Aufrufer Befehle ausführt und rückgängig macht:

- Das Command-Interface definiert die Methoden execute() und undo() für alle Befehlsimplementierungen.
- Die Klasse Light ist der Empfänger, der die eigentliche Aktion ausführt.
- Die Klassen TurnOnCommand und TurnOffCommand sind konkrete Befehlsimplementierungen, die die Aktionen zum Ein- und Ausschalten des Lichts darstellen.
- Der RemoteControl ist der Aufrufer, der Befehle entgegennimmt und sie ausführt.
- Mit dem RemoteControl können Befehle ausgeführt und rückgängig gemacht werden.