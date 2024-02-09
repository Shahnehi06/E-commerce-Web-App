import React from 'react'

export const Blog = () => {
  return (
    <>
      <div class="container my-3">
        <div id="carouselBlogBanner" class="carousel slide mb-3" data-bs-ride="carousel" style={{minHeight: "100px"}}>
          <ol class="carousel-indicators">
            <li data-bs-target="#carouselBlogBanner" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselBlogBanner" data-bs-slide-to="1" class=""></li>
            <li data-bs-target="#carouselBlogBanner" data-bs-slide-to="2" class=""></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active"><a href="/blog/detail">
              <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.98259409.1708992000&semt=sph"
                  class="img-fluid" style={{width:"100%", height:"280px"}} alt="First slide label" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                </div>
              </a>
            </div>
          <div class="carousel-item ">
            <a href="/blog/detail">
              <img style={{width:"100%",height:"280px"}} src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg" class="img-fluid"
              alt="Second slide label"/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </a>
          </div>
          <div class="carousel-item ">
            <a href="/blog/detail">
              <img style={{width:"100%",height:"280px"}} src="https://media.istockphoto.com/id/184266033/photo/forest.jpg?s=612x612&w=0&k=20&c=NxnOuxGeg2IPP9qz9bpTkcQaHufGnGBmUOXPllKJ4Lk=" class="img-fluid"
                  alt="Third slide label"/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl.</p>
              </div>
            </a>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselBlogBanner" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselBlogBanner" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h4 class="mb-0">Featured post</h4>
                <div class="mb-1 text-muted small">Oct 06, 2020</div>
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a class="stretched-link btn btn-sm btn-light" href="/">Continue reading
                  <i class="bi bi-chevron-right"></i>
                </a>
              </div>
              <div class="col-auto d-none d-lg-block"><img style={{height:"260px",width:"200px"}} src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.98259409.1708992000&semt=sph" alt="..."/></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">Design</strong>
                <h4 class="mb-0">Post title</h4>
                <div class="mb-1 text-muted small">Oct 08, 2020</div>
                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <a class="stretched-link btn btn-sm btn-light" href="/">Continue reading
                  <i class="bi bi-chevron-right"></i>
                </a>
              </div>
              <div class="col-auto d-none d-lg-block"><img style={{height:"260px",width:"200px"}} src="https://media.istockphoto.com/id/184266033/photo/forest.jpg?s=612x612&w=0&k=20&c=NxnOuxGeg2IPP9qz9bpTkcQaHufGnGBmUOXPllKJ4Lk=" alt="..."/></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="card mb-3"><img  src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"><a class="text-decoration-none" href="/blog/detail">It is a long established fact that
                    a reader will be distracted by the readable content</a></h5>
                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry's standard dummy text ever since the 1500s.</p>
                <p class="card-text"><small class="me-3"><i class="bi bi-calendar-event me-1"></i>Jul 05, 2020</small><small
                    class="me-3"><i class="bi bi-tags me-1"></i><span><a class="text-decoration-none" href="/">Branding</a>,
                    </span><span><a class="text-decoration-none" href="/">Design</a>, </span></small><small class=""><i
                      class="bi bi-chat-right-text me-1"></i><a class="text-decoration-none" href="/">2 Comments</a></small>
                </p>
              </div>
            </div>
            <div class="card mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRb_9ehX_0xfXUdbhTJTltTROpJHZzsxdnWmNmhb_Weg&s" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"><a class="text-decoration-none" href="/blog/detail">Contrary to popular belief, Lorem
                    Ipsum is not simply random text</a></h5>
                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour</p>
                <p class="card-text"><small class="me-3"><i class="bi bi-calendar-event me-1"></i>Aug 05, 2020</small><small
                    class="me-3"><i class="bi bi-tags me-1"></i><span><a class="text-decoration-none" href="/">Branding</a>,
                    </span><span><a class="text-decoration-none" href="/">Design</a>, </span></small><small class=""><i
                      class="bi bi-chat-right-text me-1"></i><a class="text-decoration-none" href="/">3 Comments</a></small>
                </p>
              </div>
            </div>
            <div class="card mb-3"><img src="https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/solo_leveling_1698871259943_1703697976509.jfif" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"><a class="text-decoration-none" href="/">The standard chunk of Lorem Ipsum used since
                    the 1500s</a></h5>
                <p class="card-text">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.</p>
                <p class="card-text"><small class="me-3"><i class="bi bi-calendar-event me-1"></i>Sep 05, 2020</small><small
                    class="me-3"><i class="bi bi-tags me-1"></i><span><a class="text-decoration-none" href="/">Branding</a>,
                    </span><span><a class="text-decoration-none" href="/">Design</a>, </span></small><small class=""><i
                      class="bi bi-chat-right-text me-1"></i><a class="text-decoration-none" href="/">4 Comments</a></small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 mb-3 bg-light rounded ">
              <h4 class="fst-italic">About Me</h4>
              <div class="progress mb-2" style={{height: "1px"}}>
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                  style={{width: "25%"}}></div>
              </div>
              <p class="mb-0">Quis vero phasellus hac nullam, in quam vitae duis adipiscing mauris leo, laoreet eget at quis,
                ante vestibulum vivamus vel. Sapien lobortis, eget orci purus amet pede, consectetur neque risus.</p>
            </div>
            <div class="mb-4 px-4 ">
              <h4 class="fst-italic">Follow Me</h4>
              <div class="progress mb-2" style={{height: "1px"}}>
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                  style={{width: "25%"}}></div>
              </div><a class="btn btn-light btn-sm bg-twitter me-2" href="/"><i
                  class="bi bi-twitter-x text-white mx-1"></i></a><a class="btn btn-light btn-sm bg-facebook me-2" href="/"><i
                  class="bi bi-facebook text-white mx-1"></i></a><a class="btn btn-light btn-sm bg-instagram me-2" href="/"><i
                  class="bi bi-instagram text-white mx-1"></i></a><a class="btn btn-light btn-sm bg-google me-2" href="/"><i
                  class="bi bi-youtube text-white mx-1"></i></a>
            </div>
            <div class="mb-4 px-4 ">
              <h4 class="fst-italic">Most Viewed</h4>
              <div class="progress mb-2" style={{height: "1px"}}>
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                  style={{width: "25%"}}></div>
              </div>
              <div class="card text-white">
                <a class="stretched-link text-decoration-none text-white" href="/">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmfNl9puwmMigRFFcoYydVQfnnDjj3PC4EuCVSZF2Eg&s" class="card-img" alt="..."/>
                </a>
              </div>
            </div>
            <div class="mb-4 px-4 ">
              <h4 class="fst-italic">Tags</h4>
              <div class="progress mb-2" style={{height: "1px"}}>
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                  style={{width: "25%"}}></div>
              </div><a class="btn btn-sm btn-outline-info me-2 mb-2" href="/">Summer</a><a
                class="btn btn-sm btn-outline-secondary me-2 mb-2" href="/">Clothing</a><a
                class="btn btn-sm btn-outline-success me-2 mb-2" href="/">Woman</a><a
                class="btn btn-sm btn-outline-danger me-2 mb-2" href="/">Hot Trend</a><a
                class="btn btn-sm btn-outline-dark me-2 mb-2" href="/">Jacket</a><a
                class="btn btn-sm btn-outline-primary me-2 mb-2" href="/">Men</a><a
                class="btn btn-sm btn-outline-warning me-2 mb-2" href="/">Luxyry</a>
            </div>
            <div class="mb-4 px-4 ">
              <h4 class="fst-italic">Archives</h4>
              <div class="progress mb-2" style={{height: "1px"}}>
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                  style={{width: "25%"}}></div>
              </div><a class="d-block mb-1" href="/">March 2020 (40)</a><a class="d-block mb-1" href="/">April 2020 (08)</a><a
                class="d-block mb-1" href="/">May 2020 (11)</a><a class="d-block mb-1" href="/">Jun 2020 (21)</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
