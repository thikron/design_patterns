# Adapter Pattern

In diesem Beispiel haben wir das Adapter Design Pattern implementiert, um die Kompatibilität zwischen verschiedenen Arten von Media Playern zu ermöglichen.

- Das MediaPlayer-Interface definiert die Methode play, die von allen Media Playern implementiert werden muss.
- Die AdvancedMediaPlayer-Klasse repräsentiert den vorhandenen Advanced Media Player, der jedoch nicht mit dem MediaPlayer-Interface kompatibel ist.
- Der MediaAdapter dient als Adapter, der den Advanced Media Player an das MediaPlayer-Interface anpasst, indem er eine Kompatibilitätsschicht bereitstellt.
- Der AudioPlayer ist der Client, der den MediaAdapter verwendet, um verschiedene Arten von Audiodateien abzuspielen. Wenn der Audiotyp nicht direkt unterstützt wird, delegiert der AudioPlayer die Wiedergabe an den MediaAdapter.

Das Beispiel zeigt, wie der AudioPlayer verschiedene Arten von Audiodateien abspielen kann, indem er den entsprechenden Adapter verwendet, um die Wiedergabe zu ermöglichen.