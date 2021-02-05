
import './App.css';
import './styles.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-Parent">
          <div className="Contaniner-fluid">
              <div className="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#top">
                      PIZZAMANIA
                  </a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#top">Home</a></li>
                  <li><a href="#top">About Pizza</a></li>
                  <li><a href="#top">Pizza Type</a></li>
                </ul>
              </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                  </ol>

                  <div className="carousel-inner carousel-images" role="listbox">
                        <div className="item active">
                          <img src="images/bk1.jpg" alt="pizza"/>
                        </div>
                        <div className="item">
                        <img src="images/bk2.jpg" alt="pizza"/>
                        </div>
                        <div className="item">
                        <img src="images/bk3.jpg" alt="pizza"/>
                        </div>
                        <div className="item">
                          <img src="images/blackpizza1.jpg" alt="pizza"/>
                        </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
          </div>
        </div>

        <div className="container about-pizza">
              <div className="row">
                  <h2 className="text-center">About Pizza</h2>

                  <div className="col-md-6">
                    <img src="images/side2.jpg" alt="about Pizza" class="img-responsive"/>
                  </div>
                  <div className="col-md-6">
                    <h3>Pizza is Awesome</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore corporis, odio nulla aliquid dolores repellat 
                        non inventore omnis, sed exercitationem optio voluptatem 
                        voluptatibus sequi dolore, facere aperiam! Iusto, quis nisi.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore corporis, odio nulla aliquid dolores repellat 
                        non inventore omnis, sed exercitationem optio voluptatem 
                        voluptatibus sequi dolore, facere aperiam! Iusto, quis nisi.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore corporis, odio nulla aliquid dolores repellat 
                        non inventore omnis, sed exercitationem optio voluptatem 
                        voluptatibus sequi dolore, facere aperiam! Iusto, quis nisi.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore corporis, odio nulla aliquid dolores repellat 
                        non inventore omnis, sed exercitationem optio voluptatem 
                        voluptatibus sequi dolore, facere aperiam! Iusto, quis nisi.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore corporis, odio nulla aliquid dolores repellat 
                        non inventore omnis, sed exercitationem optio voluptatem 
                        voluptatibus sequi dolore, facere aperiam! Iusto, quis nisi.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore corporis, odio nulla aliquid dolores repellat 
                        non inventore omnis, sed exercitationem optio voluptatem 
                        voluptatibus sequi dolore, facere aperiam! Iusto, quis nisi.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore corporis, odio nulla aliquid dolores repellat 
                        non inventore omnis, sed exercitationem optio voluptatem 
                        voluptatibus sequi dolore, facere aperiam! Iusto, quis nisi.
                    </p>
                </div>
            </div>
        </div>
          <div className="container pizza-types">
              <div className="row">
                  <h2 class="text-center">Pizza Types</h2>

                  <div className="col-md-3">
                    <div className="thumbnail">
                      <img src="images/pizza1.jpg" alt="corn"/>
                      <div className="caption">
                              <h4>Corn Pizza</h4>
                              <p>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Et esse iste, ad nostrum labore repudiandae 
                              porro dolorem aut illo ratione architecto,
                              corrupti laboriosam necessitatibus. 
                              Nobis temporibus rerum porro iusto fugit?
                              </p>
                          </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="thumbnail">
                      <img src="images/pizza2.jpg" alt="veg"/>
                      <h4>Chicken Pizza</h4>
                       <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                       Et esse iste, ad nostrum labore repudiandae 
                       porro dolorem aut illo ratione architecto,
                       corrupti laboriosam necessitatibus. 
                       Nobis temporibus rerum porro iusto fugit?
                       </p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="thumbnail">
                    <img src="images/pizza5.jpg" alt="beef pizza"/>
                    <h4>Vegetables Pizza</h4>
                       <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                       Et esse iste, ad nostrum labore repudiandae 
                       porro dolorem aut illo ratione architecto,
                       corrupti laboriosam necessitatibus. 
                       Nobis temporibus rerum porro iusto fugit?
                       </p>
                    </div>
                  </div>

                  <div class="col-md-3">
                  <div class="thumbnail">
                      <img src="images/pizza5.jpg" alt="beef pizza"/>
                      <div class="caption">
                          <h4>Plain Pizza</h4>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                          Et esse iste, ad nostrum labore repudiandae 
                          porro dolorem aut illo ratione architecto,
                          corrupti laboriosam necessitatibus. 
                          Nobis temporibus rerum porro iusto fugit?
                        </p>
                      </div>
                  </div>
              </div>
           </div>
          </div>
          <div class="footer">
            <div class="container">
               <div class="row">
                <p class="text-center">
                    &copy;2019 Pizzamainia All Right Reserved !
                </p>
            </div>
          </div>
      </div>

    </div>
  );
}

export default App;
