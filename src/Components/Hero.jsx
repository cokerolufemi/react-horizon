import React from "react";

function Hero(){
    return(

        
<div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
              </ol>
          <div class="carousel-inner  carousel-content">
              <div class="carousel-item active">
                  <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=692&amp;q=80" class="d-block w-100 h-55" alt="house"/>
              </div>
   <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1031&amp;q=80" class="d-block w-100 h-55" alt="house"/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" class="d-block w-100 h-55" alt="house"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
 </div>
 </div>
 </div>
 <br/>
 <br/>
 </div>

    )
}

export default Hero;