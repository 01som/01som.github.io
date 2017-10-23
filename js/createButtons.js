  function createButtons() {
    background(255, bgCol, bgCol);
    buttons[0] = createButton(bpmList[0]);
    buttons[0].mousePressed(function() {
      changeBG(235);
      Tone.Transport.bpm.value = bpmList[0];
    });

    buttons[1] = createButton(bpmList[1]);
    buttons[1].mousePressed(function() {
      changeBG(238);
      Tone.Transport.bpm.value = bpmList[1];
    });
    buttons[2] = createButton(bpmList[2]);
    buttons[2].mousePressed(function() {
      changeBG(241);
      Tone.Transport.bpm.value = bpmList[2];
    });
    buttons[3] = createButton(bpmList[3]);
    buttons[3].mousePressed(function() {
      changeBG(244);
      Tone.Transport.bpm.value = bpmList[3];
    });
    buttons[4] = createButton(bpmList[4]);
    buttons[4].mousePressed(function() {
      changeBG(247);
      Tone.Transport.bpm.value = bpmList[4];
    });
    buttons[5] = createButton(bpmList[5]);
    buttons[5].mousePressed(function() {
      changeBG(250);
      Tone.Transport.bpm.value = bpmList[5];
    });

    playButton = createButton("Play");
    playButton.id("button1");
    playButton.addClass('play');
    playButton.mousePressed(function() {
      handleControls();
    });
  }