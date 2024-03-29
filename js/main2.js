var indNum, cover,audio,corpus,comp1,comp2,index9,index15,index18,index21,index22,index24,index27,index32,index45,index46,index47,index51,toggleBtn,txtNotes;
//var colorPalette = ["#E97611", "#8A63D3", "#7A2500", "#504623", "#3F4B23", "#A04B82"];


var uploadLoading = false;

function preload() {
    audio = loadSound("audio/Corpus.mp3");
    corpus = loadSound("audio/Corpus.mp3");
    index9 = loadSound("audio/Index 9.mp3");
    index15 = loadSound("audio/Index 15.mp3");
    index18 = loadSound("audio/Index 18.mp3");
    index21 = loadSound("audio/Index 21.mp3");
    index22 = loadSound("audio/Index 22.mp3");
    index24 = loadSound("audio/Index 24.mp3");
    index27 = loadSound("audio/Index 27.mp3");
    index32 = loadSound("audio/Index 32.mp3");
    index45 = loadSound("audio/Index 45.mp3");
    index46 = loadSound("audio/Index 46.mp3");
    index47 = loadSound("audio/Index 47.mp3");
    index51 = loadSound("audio/Index 51.mp3");
    comp1 = loadSound("audio/comp1.mp3");
    comp2 = loadSound("audio/comp2.mp3");

    plyArr = [corpus,index9,index15,index18,index21,index22,index24,index27,index32,index45,index46,index47,index51,comp1,comp2];
    txtArr =["Audio only: No text"," 9. A body's visible, the soul is not. We can easily see that a paralytic cannot move his good leg. We cannot see that a bad man cannot move his good soul: but we should take it as the effect of a paralysis of the soul. And we have to struggle against it and subdue it. Such is the foundation of ethics, my dear Nicomachos.","15. The body's an envelope: and so it serves to contain what it then has to develop. The development is interminable. The finite body con- tains the infinite, which is neither soul nor spirit, but in fact the develop- ment of the body.","18. The body's simply a soul. A soul, wrinkled, fat or dry, hairy or callous, rough, supple, cracking, gracious, flatulent, iridescent, pearly, daubed with paint, wrapped in muslin or camouflaged in khaki, multicol- ored, covered with grease, wounds, warts. The soul is an accordion, a trumpet, the belly of a viola.","21. A body is a difference. Since it is a difference from every other body-while minds are identical-it's never done with differing. It also differs from itself. How are we to ponder a baby and an old man next to one another?","22. Different, bodies are all somewhat deformed. A perfectly formed body is a disturbing, indiscreet body in the world of bodies, unacceptable. It's a diagram, not a body.","24. A headless body's closed in on itself. It ties its muscles together, hooks its organs up to one another. The head's simple, a combination of alveoli and liquids in a triple envelope.","27. Bodies cross paths, rub up and press against each other, embrace or collide with one another: they send each other all these signals, so many signals, addresses, notices, which no defined sense can exhaust. Bodies produce a sense beyond sense. They're an extravagance of sense. Which is why a body seems to assume its sense only once it's dead, fixed. And maybe why we interpret the body as the soul's tomb. In reality, a body never stops stirring. Death freezes the movement of letting go and declin- ing to stir. A body is the stirring of the soul.","32. Eating isn't incorporating, but opening the body to the thing we devour, exhaling our insides in the tasting of fish or fig. Running unfolds those same insides with strides, fresh air on the skin, spent breath. Think- ing swings tendons, and various springs, back and forth with jets ofsteam and forced steps over great salt lakes with no discernable horizon. There's never any incorporation, but always exits, twists, openings-out, channel- ings or disgorgings, crossings, balancings. Intussusception is a metaphysi- cal chimera.","45. The body is ours and proper to us precisely to the degree that it doesn't belong to us and evades the intimacy of our proper being, if this being ever even exists, something the body, precisely, should make us seri- ously doubt. But to this degree, which suffers no limitation, our body isn't just outs but us, ourselves, even unto death, meaning its death and decomposition, in which we can be, and are, identically decomposed.","46. Why indices? Because there's no totality to the body, no synthetic unity. There are pieces, zones, fragments. There's one bit after another, a stomach, an eyelash, a thumb-nail, a shoulder, a breast, a nose, an upper intestine, a choledoch, a pancreas: anatomy is endless, until eventually running into an exhaustive enumeration of cells. But this doesn't yield a totality. On the contrary, we must immediately run through the whole nomenclatute allover again, so as to find, if possible, a trace of the soul imprinted on every piece. But the pieces, the cells, change as the calcula- tion enumerates in vain.","47. The body's exteriority and alterity include the unbearable: dejec- tion, filth, the ignoble waste that is still part of it, still belongs to its sub- stance and especially its activity, since it has to expel it, which is not one of its lesser functions. From excrement to the outgrowth of nails, hairs, or every kind of wart or purulent malignity, it has to put outside, and sepa- rate from itself, the residue or excess of its assimilatory processes, the ex- cess of its own life. The body doesn't want to say, see, or smell this. It feels shame about it, and all kinds of daily distress and embarrassment. The soul enjoins itself to silence concerning a whole part of the body whose own form it is.","51. Beauty spot: this is the name for those brown or black particles, slightly prominent, that sometimes (and, for some, often) make a point, a mark, or a mole on the skin. Rather than spot the skin, they accentuate its whiteness, or at least this is what was often said in days when snow and milk served as points of comparison par excellence for women's skin. Women would then, if need be, put velvet ''flies'' on their cheeks and neck. Today, we prefer darker skin, sunbathed or tanned. But the beauty spot keeps its appeal: it signals skin, sets off its expanse, and configures it, guides the eye and affects it as a mark of desire. We'd almost be inclined to call a beauty spot the seed of desire, a minuscule rise in intensity, a corpuscle whose dark tint concentrates the energy of the entire body, as does the nipple of the breast.","21. A body is a difference. Since it is a difference from every other body-while minds are identical-it's never done with differing. It also differs from itself. How are we to ponder a baby and an old man next to one another? </br> 7. The soul is extended everywhere along the body, says Descartes; it is entirely everywhere all along it, on its very surface, insinuated within it,and slipped into it, infiltrated, impregnating, tentacular, inflating, model- ing, omnipresent.</br>3. A body isn't empty. It's full of other bodies, pieces, organs, parts, tissues, knee-caps, rings, tubes, levers, and bellows. It's also full of itself: that's all it is.</br>","15. The body's an envelope: and so it serves to contain what it then has to develop. The development is interminable. The finite body con- tains the infinite, which is neither soul nor spirit, but in fact the develop- ment of the body.</br>22. Different, bodies are all somewhat deformed. A perfectly formed body is a disturbing, indiscreet body in the world of bodies, unacceptable. It's a diagram, not a body.</br>27. Bodies cross paths, rub up and press against each other, embrace or collide with one another: they send each other all these signals, so many signals, addresses, notices, which no defined sense can exhaust. Bodies produce a sense beyond sense. They're an extravagance of sense. Which is why a body seems to assume its sense only once it's dead, fixed. And maybe why we interpret the body as the soul's tomb. In reality, a body never stops stirring. Death freezes the movement of letting go and declin- ing to stir. A body is the stirring of the soul.</br>32. Eating isn't incorporating, but opening the body to the thing we devour, exhaling our insides in the tasting of fish or fig. Running unfolds those same insides with strides, fresh air on the skin, spent breath. Think- ing swings tendons, and various springs, back and forth with jets ofsteam and forced steps over great salt lakes with no discernable horizon. There's never any incorporation, but always exits, twists, openings-out, channel- ings or disgorgings, crossings, balancings. Intussusception is a metaphysi- cal chimera.</br>45. The body is ours and proper to us precisely to the degree that it doesn't belong to us and evades the intimacy of our proper being, if this being ever even exists, something the body, precisely, should make us seri- ously doubt. But to this degree, which suffers no limitation, our body isn't just outs but us, ourselves, even unto death, meaning its death and decomposition, in which we can be, and are, identically decomposed.</br>46. Why indices? Because there's no totality to the body, no synthetic unity. There are pieces, zones, fragments. There's one bit after another, a stomach, an eyelash, a thumb-nail, a shoulder, a breast, a nose, an upper intestine, a choledoch, a pancreas: anatomy is endless, until eventually running into an exhaustive enumeration of cells. But this doesn't yield a totality. On the contrary, we must immediately run through the whole nomenclatute allover again, so as to find, if possible, a trace of the soul imprinted on every piece. But the pieces, the cells, change as the calcula- tion enumerates in vain.</br>49. The imprecision of bodies: here's a man who's about forty years old, who appears rather dry and nervous, looks rather worried, perhaps even a little shifty. He walks with a certain stiffness; he might be a profes- sor or a doctor, or else a judge or administrator. He's not very attentive to his clothes. He has high cheekbones and a slightly rugged hue: no doubt he's ofa somewhat Mediterranean stock, certainly not, in any case, Nordic. Anyway, he's of middling size. One gets the feeling he is clumsy, and one wonders whether he has any authority and determination. One also doubts that he likes himself. We could go on at length in this register, with all those indices scattered across one sole body. We'd certainly be wrong on many points, and maybe on all of them. But it is not possible to be completely wide of the mark, unless an artfully contrived disguise is able to deceive us. And this disguise will have borrowed its features from some typical and schematic reservoir of species or genus. For there are types of humans (as, indeed, there are of animals). Inextricably, these are biological or zoological, physiological, psychological, social and cultural; they come from constants of diet and education, sexuation and subjection by work, condition, history: but they impress their typology, even at the price of, and in the midst of, an infinite individual differentiation. We can never say where the singular begins and the typical ends."];
}

function setup() {

    createCanvas(500, 500);
    toggleBtn = createButton("Play Index");
    toggleBtn.addClass("toggle-btn");

    toggleBtn.mousePressed(toggleAudio);
    toggleBtn.mousePressed(textHandler);

    //toggleBtn.mousePressed(toggleBtn);
    //toggleBtn.mousePressed(fullscreen);

    fft = new p5.FFT();
    fft.setInput(audio);

    txtNotes = createDiv('<p>Indices On The Body - A Selection of Soundworks and Musical Pieces Incorporating </p>');
    txtNotes.addClass("txt-note");

  //  cover = createDiv('<img src="lib/cover.jpg"></img>');
  //  cover.addClass("hc-img");
}

function draw() {
  background(0);
  fft.setInput(audio);
  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,255,255); // waveform is red
  strokeWeight(3);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

}


function toggleAudio() {
  //  plyArr= plyArr;
    if (audio.isPlaying()) {
      audio.stop();
      rndIndx = Math.floor((Math.random() * 11));
      audio = plyArr[rndIndx];
      indNum = rndIndx;
      audio.play();
    } else {
      audio.stop();
      rndIndx = Math.floor((Math.random() * 11));
      audio = plyArr[rndIndx];
      indNum = rndIndx;
      audio.play();
    }
      return audio, indNum;
}

function textHandler() {
  txtNotes.remove();
  txtNotes = createDiv('<p>'+txtArr[indNum]+'<div class = "att"></br>-Jean-luc Nancy, <i>Corpus, 1992:(Trans. R.A. Rand)</i></div>'+'</p>');
  txtNotes.addClass("txt-note");
}


function fullScren() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
