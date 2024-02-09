import React from 'react'

export const BlogDetail = () => {
  return (
    <>
      <div>
        <div class="card bg-dark text-white rounded-0 mb-3">
          <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.98259409.1708992000&semt=sph" class="card-img rounded-0" alt="..."/>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="display-6 border-bottom pb-3 mb-1">Sample blog post</div>
              <p class="text-muted small"><i class="bi bi-calendar-event me-1"></i>Jan 1, 2021 <i>Updated on Jan 02, 2020</i>
                by <a class="me-2" href="/">Admin</a> <span class="text-success me-2"><i
                    class="bi bi-hand-thumbs-up me-1"></i>21k</span><span class="text-primary"><i class="bi bi-chat-text"></i>
                  22k</span></p>
              <div class="mb-3"><a class="badge text-decoration-none bg-warning me-2" href="/">#react</a><a
                  class="badge text-decoration-none bg-danger me-2" href="/">#bootstrap</a><a
                  class="badge text-decoration-none bg-dark me-2" href="/">#html5</a></div>
              <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic
                typography, images, and code are all supported.</p>
              <hr />
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              <blockquote class="blockquote bg-secondary p-3 text-white">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </blockquote>
              <div class="row">
                <div class="col-md-6">
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit<ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                      </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <div>
                    <p class="fst-italic">Italic text.</p>
                    <p class="font-normal">Text without font style</p>
                    <p class="font-monospace">This is in monospace</p>
                    <p class="text-decoration-underline">This text has a line underneath it.</p>
                    <p class="text-decoration-line-through">This text has a line going through it.</p><a
                      class="text-decoration-none" href="/">This link has its text decoration removed</a>
                  </div>
                </div>
              </div>
              <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. For example,
                <code>&lt;section&gt;</code> should be wrapped as inline.</p>
              <ol>
                <li class="fw-bold">Vestibulum id ligula porta felis euismod semper.</li>
                <li class="fw-bolder">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </li>
                <li class="font-weight-normal">Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                <li class="font-weight-light">Light weight text.</li>
                <li class="font-weight-lighter">Lighter weight text (relative to the parent element).</li>
              </ol><img src="https://lilacinfotech.com/lilac_assets/images/blog/How-to-Create-a-Shopping-App-for-Your-Business:Features-Cost-and-More.jpg" class="img-fluid" alt="..."/>
              <figure class="text-end">
                <blockquote class="blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
                <figcaption class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              <dl class="row">
                <dt class="col-sm-3">Description lists</dt>
                <dd class="col-sm-9">A description list is perfect for defining terms.</dd>
                <dt class="col-sm-3">Euismod</dt>
                <dd class="col-sm-9">
                  <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                  <p>Donec id elit non mi porta gravida at eget metus.</p>
                </dd>
                <dt class="col-sm-3">Malesuada porta</dt>
                <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                  massa justo sit amet risus.</dd>
                <dt class="col-sm-3">Nesting</dt>
                <dd class="col-sm-9">
                  <dl class="row">
                    <dt class="col-sm-4">Nested definition list</dt>
                    <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                  </dl>
                </dd>
              </dl>
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <table class="table mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">A</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope="row">B</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope="row">C</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <div class="mb-3">
                <pre
                  class="p-2 bg-dark text-white"><code>&lt;p&gt;Sample text here...&lt;/p&gt; &lt;p&gt;And another line of sample text here...&lt;/p&gt;</code></pre>
                <div><var>y</var> = <var>m</var><var>x</var> + <var>b</var><br/>To switch directories, type <kbd>cd</kbd>
                  followed by the name of the directory.<br/>To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-8">
                  <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                  <p><del>This line of text is meant to be treated as deleted text.</del></p>
                  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                  <p><u>This line of text will render as underlined.</u></p>
                  <p><small>This line of text is meant to be treated as fine print.</small></p>
                  <p><strong>This line rendered as bold text.</strong></p>
                  <p><em>This line rendered as italicized text.</em></p>
                </div>
                <div class="col-md-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLwdEUiFcq8GLDPbJYTJxXXU1t8JPOdSkkS6rNOabE3ctuEKWiMwIuVbZ_VXCLb54lNc&usqp=CAU" class="img-thumbnail" alt="..." />
                </div>
              </div>
              <div class="border-top border-bottom py-3 mb-3"><span class="me-1">TAGS:</span><a
                  class="me-2 bg-dark p-1 rounded text-decoration-none text-white small" href="/">Business</a><a
                  class="me-2 bg-success p-1 rounded text-decoration-none text-white small" href="/">Coffee</a><a
                  class="me-2 bg-primary p-1 rounded text-decoration-none text-white small" href="/">Design</a><a
                  class="me-2 bg-info p-1 rounded text-decoration-none text-white small" href="/">Morning</a><a
                  class="me-2 bg-warning p-1 rounded text-decoration-none text-white small" href="/">Fresh</a><a
                  class="me-2 bg-danger p-1 rounded text-decoration-none text-white small" href="/">Idea</a>
                <div class="float-end"><a class="btn btn-sm bg-twitter me-2 p-0" href="/"><i
                      class="bi bi-twitter-x text-white mx-1"></i></a><a class="btn btn-sm bg-facebook me-2 p-0" href="/"><i
                      class="bi bi-facebook text-white mx-1"></i></a><a class="btn btn-sm bg-instagram me-2 p-0" href="/"><i
                      class="bi bi-instagram text-white mx-1"></i></a><a class="btn btn-sm bg-google p-0" href="/"><i
                      class="bi bi-youtube text-white mx-1"></i></a></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-4 mb-3 bg-light rounded ">
                <h4 class="fst-italic">About Me</h4>
                <div class="progress mb-2" style={{height: "1px"}}>
                  <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                    style={{width:"25%"}}></div>
                </div>
                <p class="mb-0">Quis vero phasellus hac nullam, in quam vitae duis adipiscing mauris leo, laoreet eget at
                  quis, ante vestibulum vivamus vel. Sapien lobortis, eget orci purus amet pede, consectetur neque risus.</p>
              </div>
              <div class="mb-4 px-4 ">
                <h4 class="fst-italic">Follow Me</h4>
                <div class="progress mb-2" style={{height: "1px"}}>
                  <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                    style={{width:"25%"}}></div>
                </div><a class="btn btn-light btn-sm bg-twitter me-2" href="/"><i
                    class="bi bi-twitter-x text-white mx-1"></i></a><a class="btn btn-light btn-sm bg-facebook me-2"
                  href="/"><i class="bi bi-facebook text-white mx-1"></i></a><a class="btn btn-light btn-sm bg-instagram me-2"
                  href="/"><i class="bi bi-instagram text-white mx-1"></i></a><a class="btn btn-light btn-sm bg-google me-2"
                  href="/"><i class="bi bi-youtube text-white mx-1"></i></a>
              </div>
              <div class="mb-4 px-4 ">
                <h4 class="fst-italic">Most Viewed</h4>
                <div class="progress mb-2" style={{height: "1px"}}>
                  <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                    style={{width:"25%"}}></div>
                </div>
                <div class="card text-white"><a class="stretched-link text-decoration-none text-white" href="/"><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmfNl9puwmMigRFFcoYydVQfnnDjj3PC4EuCVSZF2Eg&s" class="card-img" alt="..."/>
                  </a></div>
              </div>
              <div class="mb-4 px-4 ">
                <h4 class="fst-italic">Tags</h4>
                <div class="progress mb-2" style={{height: "1px"}}>
                  <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                    style={{width:"25%"}}></div>
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
                    style={{width:"25%"}}></div>
                </div><a class="d-block mb-1" href="/">March 2020 (40)</a><a class="d-block mb-1" href="/">April 2020
                  (08)</a><a class="d-block mb-1" href="/">May 2020 (11)</a><a class="d-block mb-1" href="/">Jun 2020 (21)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
