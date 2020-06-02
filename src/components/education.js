import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <section class="colorlib-education" data-section="education">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">Education</span>
                <h2 class="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div class="fancy-collapse-panel">
                  <div
                    class="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Bachelor Degree in Electronics & Communication
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div class="panel-body">
                          <p>
                            Graduated from Medicaps Institute of Technology and Management
                          </p>
                          <ul>
                            <li>
                            Year of Passing: 2018
                            </li>
                            <li>
                            Marks(CGPA): 7.2
                            </li>
                           </ul>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            High School Secondary Education
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseFive"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFive"
                      >
                        <div class="panel-body">
                          <p>
                            Golden Internaational School,CAT Road, Indore (M.P)
                            </p>
                            <ul>
                                <li>
                            Year Of Passing: 2014
                            </li>
                            <li>
                            Marks(%): 83.2
                            </li>
                            </ul>
   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
