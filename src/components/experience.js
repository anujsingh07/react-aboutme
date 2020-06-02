import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section class="colorlib-experience" data-section="experience">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">Experience</span>
                <h2 class="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="timeline-centered">
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-1">
                        <i class="icon-pen2"></i>
                      </div>

                      <div class="timeline-label">
                        <h2>
                          <a href="#">
                            Software Developer at e-Zest Solutions Pvt.Ltd, Pune
                          </a>{" "}
                          <span>June 2018-Present</span>
                        </h2>

                        <ul>
                          <li>Design and Development of functional modules</li>
                          <li>Designing workflows for application</li>
                          <li>
                            Extensive work on Designing and managing database
                            for online systems
                          </li>
                          <li>Requirement gathering and analysis</li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-2">
                        <i class="icon-pen2"></i>
                      </div>
                      <div class="timeline-label">
                        <h2>
                          <a href="#">Professional Projects</a>{" "}
                          <span>Jan 2019-Present</span>
                        </h2>
                        <p>
                          For more information on Professional Projects I worked
                          on, Kindly view or download CV from Introduction
                          section{" "}
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    class="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
