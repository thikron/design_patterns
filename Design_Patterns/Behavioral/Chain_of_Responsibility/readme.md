# Chain of Responsibility Pattern
Das Chain of Responsibility-Muster ermöglicht es, eine Anfrage durch eine Kette von Handlern zu leiten, wobei jeder Handler entscheidet, ob er die Anfrage behandelt oder an den nächsten Handler in der Kette weiterleitet. In diesem Beispiel wird die Genehmigung von Einkäufen durch verschiedene Führungsebenen (Manager, Director, CEO) veranschaulicht.

In diesem Beispiel:
- Das PurchaseApproval-Interface definiert die Methoden, die von allen Approvals (Handler) implementiert werden müssen. Jeder Handler hat eine Methode, um den Betrag zu genehmigen und die Verantwortung an den nächsten Handler in der Kette zu delegieren, falls erforderlich.
- Die Klassen Manager, Director und CEO sind konkrete Handler, die Entscheidungen über den Betrag einer Einkaufsgenehmigung treffen. Jeder Handler kann den Betrag genehmigen oder die Verantwortung an den nächsten Handler in der Kette delegieren.
- Die Handler werden in einer Kette gesetzt, in der die setNextApproval-Methode verwendet wird, um den nächsten Handler in der Kette festzulegen.
