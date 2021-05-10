const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload() {
 bi = loadImage("op/abc.jpg")
 abc = "op/mom.jpg"
}

function setup(){
    var canvas = createCanvas(1000,657);
    engine = Engine.create();
    world = engine.world;

    h1 = new H(80,100,50,40)
    a1 = new A(130,100,50,40)
    p1 = new P(180,100,50,40)
    p2 = new P(230,100,50,40)
    y1 = new Y(280,100,50,40)

    m1 = new M(380,100,50,40)
    o1 = new O(430,100,50,40)
    t1 = new T(480,100,50,40)
    h2 = new H(530,100,50,40)
    e1 = new E(580,100,50,40)
    r1 = new R(630,100,50,40)
    s1 = new S(680,100,50,40)

    d1 = new D(780,100,50,40)
    a2 = new A(830,100,50,40)
    y2 = new Y(880,100,50,40)

    g1 = new Ground(500,650,1000,20)
    g2 = new Ground(980,657/2,20,657)

  //  im1 = new Imgg(100,100,200,200,abc)
}

function draw(){
    background("black")
    Engine.update(engine);


    h1.display();
    a1.display();
    p1.display();
    p2.display();
    y1.display();

    m1.display();
    o1.display();
    t1.display();
    h2.display();
    e1.display();
    r1.display();
    s1.display();

    d1.display();
    a2.display();
    y2.display();

    //im1.display();

}
