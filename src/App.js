import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {


  const [foods,setFoods] = useState([
      {id:1,'discount':0,'food':'Home Made Pizza','rating':'4.7','price':'19','delivery':'50-79','image':require('./assets/foods/food1.png')},
      {id:2,'discount':0,'food':'Home Made Pizza','rating':'4.7','price':'19','delivery':'50-79','image':require('./assets/foods/food2.png')},
      {id:3,'discount':20,'food':'Home Made Pizza','rating':'4.7','price':'19','delivery':'50-79','image':require('./assets/foods/food3.png')},
      {id:4,'discount':0,'food':'Home Made Pizza','rating':'4.7','price':'19','delivery':'50-79','image':require('./assets/foods/food4.png')},
      {id:5,'discount':20,'food':'Home Made Pizza','rating':'4.7','price':'19','delivery':'50-79','image':require('./assets/foods/food5.png')},
      {id:6,'discount':0,'food':'Home Made Pizza','rating':'4.7','price':'19','delivery':'50-79','image':require('./assets/foods/food6.png')},
      {id:7,'discount':20,'food':'Home Made Pizza','rating':'4.7','price':'19','delivery':'50-79','image':require('./assets/foods/food7.png')},
      {id:9,'discount':20,'food':'Home Made Pizza','rating':'4.7','price':'19','delivery':'50-79','image':require('./assets/foods/food8.png')},
    ])

  return (
    <div>
      
        <nav class="navbar navbar-expand-lg navbar-light bg-nav">
         <div class="container">
          <img src={require('./assets/logo.png')}/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:200}}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">Home</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-light" href="#">About</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-light" href="#">Menu</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-light" href="#">Blog</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-light" href="#">Content</a>
              </li>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <img class="icon" src={require('./assets/icon/search.png')}/>
              </li>
              <li class="nav-item">
                <img class="icon" src={require('./assets/icon/bag.png')}/>
              </li>  
            </ul>
          </div>
          </div>
        </nav>



        <div class="d-flex justify-content-between cover">
          <div>
            <p class="htitle">Authentic Home <br/> Food in UK</p>
            <p class="stitle">What2Eat is a courier service in which authentic home cook<br/> food is delivered to a customer.</p>
            <div class="searchBox d-flex">
              <input class="w-75" type="text" placeholder="Search your food here"/>
              <button>Search</button>
            </div>
          </div>

          <div>
            <img src={require('./assets/cuate.png')}/>
          </div>
        </div>





        <div class="midContent">
            <h5>Home Kitchen</h5>
            <div class="btn-group">
              <button class="btnactive">All</button>
              <button style={{borderRight:'none'}}>Button</button>
              <button>Free Delivery</button>
              <button>New</button>
              <button>Coming</button>
            </div>


            <div style={{marginTop:30,marginBottom:30}}>
              <select>
                <option>Filters</option>
                <option>Filters</option>
                <option>Filters</option>
                <option>Filters</option>
              </select>
            </div>

            
            <div class="foodCon">
            {foods.map(item=>(  
              <div class="items">
                {item.discount != 0 ?<div class="position-absolute top-0 start-0 discount">
                 {item.discount}%
                </div> : <></>}
                <img src={item.image} style={{width:'100%'}}/>
                <div class="m-3">
                  <div class="d-flex justify-content-between">
                    <p>{item.food}</p>
                    <p>${item.price}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="pocket">
                    <img src={require('./assets/icon/star.png')} style={{marginRight:4,width:15,height:15}}/>
                    {item.rating}</p>
                    <p class="pocket">${item.delivery} min</p>
                    <img src={require('./assets/icon/addtocart.png')} class="m-2" width="20" height="20"/>
                  </div>
                </div>
              </div>
            ))}
            </div>


            <br/>
            <br/>
            <center>
              <button class="ldbtn">+ Load More ...</button>
            </center>
        </div>





        <div class="blogContent">
           <div class="container">
              <h5 style={{marginLeft:3}}>Our Blog</h5>
              <div class="row">
                 <div class="col-sm-3 p-3">
                   <div>
                     <img src={require('./assets/blogs/blog1.png')}/>
                     <h5>Most satisfying cake decorating ideas</h5>
                     <small>Quis hendrerit nibh mauris sed faucibus</small>
                   </div>
                   <div>
                     <img src={require('./assets/blogs/blog3.png')}/>
                     <h5>Most satisfying cake decorating ideas</h5>
                     <small>Quis hendrerit nibh mauris sed faucibus</small>
                   </div>
                 </div>

                 <div class="col-sm-6 p-3">
                    <div>
                      <img src={require('./assets/blogs/blog2.png')}/>
                      <h5>Most satisfying cake decorating ideas</h5>
                      <small>Quis hendrerit nibh mauris sed faucibus</small>
                    </div>
                 </div>

                 <div class="col-sm-3 p-3">
                     <div>
                       <img src={require('./assets/blogs/blog4.png')}/>
                       <h5>Most satisfying cake decorating ideas</h5>
                       <small>Quis hendrerit nibh mauris sed faucibus</small>
                     </div>
                     <div>
                       <img src={require('./assets/blogs/blog5.png')}/>
                       <h5>Most satisfying cake decorating ideas</h5>
                       <small>Quis hendrerit nibh mauris sed faucibus</small>
                     </div>
                 </div>
               </div>
               </div>
           
          
        </div>



        <div class="midContent">
          <div class="d-flex justify-content-between">
          <div>
            <h4>Do you have a question <br/> or want to become a seller?</h4>
            <small>Fill this form and our manager will contact you next 48 hours.</small>
            <br/>
            <br/>
            <div class="frm">
              <div class="d-flex">
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Email"/>
              </div>

              <textarea rows="5" placeholder="Your message"></textarea>
            </div>
          </div>

          <div>
            <img src={require('./assets/deliveryman.png')}/>
          </div>
        </div>
        </div>





        <div class="footer">
           <nav class="navbar navbar-expand-lg">
             <div class="container">
               <h3 class="text-light">WHAT2EAT</h3>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:200}}>
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">Home</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">About</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">Menu</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">Blog</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">Content</a>
                    </li>
                  </ul>
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <img class="icon" src={require('./assets/icon/Facebook.png')}/>
                    </li>
                    <li class="nav-item">
                      <img class="icon" src={require('./assets/icon/insta.png')}/>
                    </li>  
                  </ul>
                </div>
              </div>
            </nav>
            
            <div class="container bottom">
                Copyright @2021 What2Eat
            </div>
        </div>
      
    </div>
  );
}

export default App;
