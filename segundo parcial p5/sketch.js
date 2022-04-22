var xDesp;
var yDesp;
var sizeDesp;

var xFach;
var yFach;
var sizeFach;

var xInt;
var yInt;
var sizeInt;

var xPlan;
var yPlan;
var sizePlan;

var xPers;
var yPers;
var sizePers;

var xEmp;
var yEmp;
var sizeEmp;

var xCort;
var yCort;
var sizeCort;

var volumen;

//IMAGENES
var home;
var IDesp;
var IFach;
var IInt;
var IPlan;
var IPers;
var IEmp;
var ICort;

//CANCIONES
var cDesp;
var cFach;
var cInt;
var cPlan;
var cPers;
var cEmp;
var cCort;

function preload() {
  cDesp = loadSound("HOME.mp3");
  cFach = loadSound("FACHADA.mp3");
  cInt = loadSound("INTERIOR.mp3");
  cPlan = loadSound("PLANTA.mp3");
  cPers = loadSound("PERSPECTIVA.mp3");
  cEmp = loadSound("HOME.mp3");
  cCort = loadSound("HOME.mp3");
}

var VISTA1;
var VISTA2;
var VISTA3;
var VISTA4;
var VISTA5;
var VISTA6;
var VISTA7;

let gui;
var volumen;

function setup() {
  createCanvas(1920, 1080);
  background(245, 240, 235);

  gui = createGui();

  volumen = createSlider("volumen", 10, 10, 300, 50, 0, 1);

  xDesp = 170;
  yDesp = 160;
  sizeDesp = 120;

  xFach = 170;
  yFach = 300;
  sizeFach = 120;

  xInt = 170;
  yInt = 440;
  sizeInt = 120;

  xPlan = 170;
  yPlan = 600;
  sizePlan = 120;

  xPers = 170;
  yPers = 740;
  sizePers = 120;

  xEmp = 170;
  yEmp = 900;
  sizeEmp = 120;

  xCort = 170;
  yCort = 1040;
  sizeCort = 120;

  home = loadImage("TABLERO.png");
  IDesp = loadImage("DESPIECE.png");
  IFach = loadImage("CORTE2.png");
  IInt = loadImage("VISTA INTERIOR.png");
  IPlan = loadImage("PLANTAS2.png");
  IPers = loadImage("PERSPECTIVA EXTERIOR2.png");
  IEmp = loadImage("ISOMETRICO DE SITIO2.png");
  ICort = loadImage("CORTE PERSPECTIVADO.png");
}

function draw() {
  imageMode(CORNER);
  noStroke();
  image(home, 500, 70, home.width * 0.3, home.height * 0.3);

  fill(0);

  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text("PROYECTO CASA CS5 ", 960, 40);

  /////////////////////////////

  fill(245, 240, 235);

  if (VISTA1 == true) {
    background(245, 240, 235);
    imageMode(width / 2, height / 2);
    noStroke();
    image(IDesp, 550, 150, IDesp.width * 0.8, IDesp.height * 0.8);

    textSize(20);
    fill(0);
    textAlign(CORNER);
    text(
      "A PARTIR DEL TERRENO SE GENERO UNA SECUENCIA DE VOLUMENES ",
      width / 2,
      height / 20
    );
    text(
      "QUE AL IR CREANDO DIFERENTES VANOS, ALTURAS Y VACIOS",
      width / 2,
      height / 20 + 40
    );
    text(
      "SE LLEGÓ A LA PROPUESTA FINAL DEL PROYECTO HACIENDO USO",
      width / 2,
      height / 20 + 80
    );
    text(
      "DE TODO EL TERRENO, CON SU MEJOR APROVECHAMIENTO ",
      width / 2,
      height / 20 + 120
    );
    text(
      "Y TOMANDO E CUENTA TODAS LAS NECESIDADES DEL USUARIO",
      width / 2,
      height / 20 + 160
    );

    cDesp.setVolume(volumen.val);
    if (cDesp.isPlaying()) {
    } else {
      cDesp.play();
    }
  } else {
    fill(250);
    if (cDesp.isPlaying()) {
      cDesp.stop();
    } else {
    }
  }

  rect(xDesp - 65, yDesp - 65, sizeDesp, sizeDesp, 50, 50);
  strokeWeight(2);
  stroke(1);
  fill(0);

  textSize(15);
  text("DESPIECE", xDesp, yDesp);

  /////////////////////////////////

  if (VISTA2 == true) {
    background(245, 240, 235);
    imageMode(CORNER);
    noStroke();
    image(IFach, 450, 350, IFach.width * 0.5, IFach.height * 0.5);

    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
    text(
      "EN LA FACHADA PODEMOS OBSERVAR UN BALCÓN COLINDANTE A LA CALLE",
      width / 2,
      height / 8
    );
    text(
      "Y VANOS EN LOS OTROS 2 VOLUMENES QUE PERMITEN LA ENTRADA DE LUZ NATUAL. ",
      width / 2,
      height / 8 + 40
    );
    text(
      "PARA LA MATERIALIDAD SE PROPONEN 3 MATERIALES DIFERENTES PARA ENFATIZAR LOS ELEMENTOS DE LA CASA",
      width / 2,
      height / 8 + 80
    );
    text(
      "DE LA CASA Y ASI DARLE UNA TEXTURA CÁLIDA Y SENCILLA SIN SER DEMASIADO SIMPLE.",
      width / 2,
      height / 8 + 120
    );
    text(
      "LOS COLORES DE LA FACHADA QUEDAN AL GUSTO DEL CLIENTE.",
      width / 2,
      height / 8 + 160
    );

    cFach.setVolume(volumen.val);
    if (cFach.isPlaying()) {
    } else {
      cFach.play();
    }
  } else {
    fill(250);
    if (cFach.isPlaying()) {
      cFach.stop();
    } else {
    }
  }

  rect(xFach - 65, yFach - 65, sizeFach, sizeFach, 50, 50);
  strokeWeight(2);
  stroke(1);
  fill(0);

  textSize(15);
  text("FACHADA", xFach, yFach);

  //////////////////////////////

  if (VISTA3 == true) {
    background(245, 240, 235);
    imageMode(CORNER);
    noStroke();
    image(IInt, 550, 150, IInt.width * 0.8, IInt.height * 0.8);

    textSize(20);
    fill(0);
    textAlign(CENTER);
    text(
      "EN EL INTERIOR SE PROPUSO CREAR UNA ATMÓSFERA CALIDA Y BIEN DISTRIUBUIDA ",
      width / 2,
      height / 12
    );
    text(
      "PARA APROVECHAR TODO EL ESPACIO EN SU TOTALIDAD ",
      width / 2,
      height / 12 + 40
    );

    cInt.setVolume(volumen.val);

    if (cInt.isPlaying()) {
    } else {
      cInt.play();
    }
  } else {
    fill(250);
    if (cInt.isPlaying()) {
      cInt.stop();
    } else {
    }
  }

  rect(xInt - 65, yInt - 65, sizeInt, sizeInt, 50, 50);
  strokeWeight(2);
  stroke(1);
  fill(0);

  textSize(15);
  text("INTERIOR", xInt, yInt);

  ////////////////////////////////////////////////////////////////////////

  if (VISTA4 == true) {
    background(245, 240, 235);
    imageMode(CORNER);
    noStroke();
    image(IPlan, 550, 150, IPlan.width * 0.25, IPlan.height * 0.25);

    textSize(20);
    fill(0);
    text(
      "CUENTA CON LOS ESPACIOS NECESARIOS Y EL ÁREA IDEAL EN CADA UNO DE ELLOS PARA HACER ",
      width / 1.7,
      height / 12
    );
    text("DE ESTA VIVIENDA UN HOGAR FUNCIONAL", width / 1.7, height / 12 + 40);

    cPlan.setVolume(volumen.val);
    if (cPlan.isPlaying()) {
    } else {
      cPlan.play();
    }
  } else {
    fill(250);
    if (cPlan.isPlaying()) {
      cPlan.stop();
    } else {
    }
  }

  rect(xPlan - 65, yPlan - 65, sizePlan, sizePlan, 50, 50);
  strokeWeight(2);
  stroke(1);
  fill(0);

  textSize(15);
  text("PLANTAS", xPlan, yPlan);

  /////////////////////////////////////////////////////////////////////////////

  if (VISTA5 == true) {
    fill(245, 240, 235);

    background(245, 240, 235);
    imageMode(CORNER);
    noStroke();
    image(IPers, 550, 70, IPers.width * 0.5, IPers.height * 0.5);

    textSize(20);
    fill(0);
    textAlign(CENTER);
    text(
      "AQUI PODEMOS OBSERVAR EL CONTEXTO DE LA VIVIENDA Y SU USO.",
      width / 2.1,
      height / 15
    );
    text(
      "TENIENDO UN JARDIN FRONTAL AMPLIO Y PRIVADO",
      width / 2.1,
      height / 15 + 40
    );

    cPers.setVolume(volumen.val);
    if (cPers.isPlaying()) {
    } else {
      cPers.play();
    }
  } else {
    fill(250);
    if (cPers.isPlaying()) {
      cPers.stop();
    } else {
    }
  }

  rect(xPers - 65, yPers - 65, sizePers, sizePers, 50, 50);
  strokeWeight(2);
  stroke(1);
  fill(0);

  textSize(15);
  text("PERSPECTIVA", xPers, yPers);
  // *La ciudadela de Machu Picchu en Cusco, Perú

  /////////////////////////////////////////////////////////////////////////////

  if (VISTA6 == true) {
    fill(255, 10, 127);

    background(245, 240, 235);
    imageMode(CORNER);
    noStroke();
    image(IEmp, 550, 150, IEmp.width * 0.8, IEmp.height * 0.8);

    textSize(20);
    fill(0);
    textAlign(CENTER);
    text(
      "VISTA AEREA DE LA VIVIENDA EMPLAZADA EN EL TERRENO Y SUS COLINDANTES",
      width / 2,
      height / 8
    );

    cEmp.setVolume(volumen.val);
    if (cEmp.isPlaying()) {
    } else {
      cEmp.play();
    }
  } else {
    fill(250);
    if (cEmp.isPlaying()) {
      cEmp.stop();
    } else {
    }
  }
  rect(xEmp - 65, yEmp - 65, sizeEmp, sizeEmp, 50, 50);
  strokeWeight(2);
  stroke(1);
  fill(0);

  textSize(15);
  text("EMPLAZAMIENTO", xEmp, yEmp);

  /////////////////////////////////////////////////////////////////////////////

  if (VISTA7 == true) {
    fill(245, 240, 235);

    background(245, 240, 235);
    imageMode(CORNER);
    noStroke();
    image(ICort, 600, 150, ICort.width * 1, ICort.height * 1);

    textSize(20);
    fill(0);
    textAlign(CENTER);
    text(" ", width / 2, height / 20);
    text(
      "SE OBSERVA EL INTERIOR DE LOS ESPACIOS DE LA CASA Y SU DIMENSIÓN",
      width / 1.5,
      height / 12 + 40
    );

    cCort.setVolume(volumen.val);
    if (cCort.isPlaying()) {
    } else {
      cCort.play();
    }
  } else {
    fill(250);
    if (cCort.isPlaying()) {
      cCort.stop();
    } else {
    }
  }
  rect(xCort - 65, yCort - 65, sizeCort, sizeCort, 50, 50);
  strokeWeight(2);
  stroke(1);
  fill(0);

  textSize(15);
  text("CORTE", xCort, yCort);

  drawGui();
}

function mousePressed() {
  ////////////////////////////////////////////////////
  var dDesp = dist(xDesp, yDesp, mouseX, mouseY);
  if (dDesp < sizeDesp / 2) {
    VISTA1 = true;
  } else {
    VISTA1 = false;
  }
  ////////////////////////////////////////////////////
  var dFach = dist(xFach, yFach, mouseX, mouseY);
  if (dFach < sizeFach / 2) {
    VISTA2 = true;
  } else {
    VISTA2 = false;
  }
  ////////////////////////////////////////////////////

  var dInt = dist(xInt, yInt, mouseX, mouseY);
  if (dInt < sizeInt / 2) {
    VISTA3 = true;
  } else {
    VISTA3 = false;
  }
  ////////////////////////////////////////////////////
  var dPlan = dist(xPlan, yPlan, mouseX, mouseY);
  if (dPlan < sizePlan / 2) {
    VISTA4 = true;
  } else {
    VISTA4 = false;
  }

  ////////////////////////////////////////////////////
  var dPers = dist(xPers, yPers, mouseX, mouseY);

  if (dPers < sizePers / 2) {
    VISTA5 = true;
  } else {
    VISTA5 = false;
  }

  ////////////////////////////////////////////////////
  var dEmp = dist(xEmp, yEmp, mouseX, mouseY);

  if (dEmp < sizeEmp / 2) {
    VISTA6 = true;
  } else {
    VISTA6 = false;
  }

  ////////////////////////////////////////////////////
  var dCort = dist(xCort, yCort, mouseX, mouseY);

  if (dCort < sizeCort / 2) {
    VISTA7 = true;
  } else {
    VISTA7 = false;
  }
}
