# Singleton Pattern

In diesem Beispiel haben wir das Singleton Design Pattern implementiert, um sicherzustellen, dass nur eine Instanz einer Klasse existiert und auf diese zugegriffen werden kann.

- Die Klasse Singleton hat einen privaten statischen Member instance, der die einzige Instanz der Klasse speichert.
- Der Konstruktor der Klasse ist privat, um eine direkte Instanziierung von außerhalb der Klasse zu verhindern.
- Die statische Methode getInstance() stellt sicher, dass nur eine Instanz der Klasse erstellt wird und gibt diese Instanz zurück, wenn sie bereits vorhanden ist.
- Die Methode someBusinessLogic() dient dazu, einige Geschäftslogikoperationen auf der Singleton-Instanz auszuführen.

Beim Aufrufen der Methode getInstance() wird immer dasselbe Singleton-Objekt zurückgegeben, unabhängig davon, wie oft die Methode aufgerufen wird. Dies stellt sicher, dass es nur eine Instanz der Klasse gibt.