import React from "react";
function Navbar(){
    return(
        
      
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#navbar"><img src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" alt="logo" class="get"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#nav"><span class="sr-only">(current)</span></a>
      </li>
     
    </ul>
  </div>

 <div class="row">
  <div class="col-md-12">
    <img src="https://image.shutterstock.com/image-vector/ghana-national-flag-africa-coat-600w-1125806549.jpg" alt="Ghana" class="size"/>
     <img src="https://m.media-amazon.com/images/I/31ibIG9a4IL._AC_SX425_.jpg" alt=" Nigeria" class="sizes text"/>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TsnbAMjwdL6ssNwC_RwujGVIJF2EjL6VD7NqQorsfigvtD3gY5ONc1mpacs2LaMTp2w&usqp=CAU" alt="Kenya" class="siz"/>
  </div> 
 </div>


<a href="#aboutus.html">ABOUT US</a>

</nav>


    )
}

export default Navbar;   