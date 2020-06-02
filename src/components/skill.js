import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div>
        		<section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Specialty</span>
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>HTML5 & CSS3</h3>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>jQuery,AJAX,JSON</h3>
                <div className="progress">
                  <div className="progress-bar color-2" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>JAVASCRIPT, ES6/ES7</h3>
                <div className="progress">
                  <div className="progress-bar color-3" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>ReactJS</h3>
                <div className="progress">
                  <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>Adobe Experience Manager (AEM) 6.1, 6.3, 6.4 </h3>
                <div className="progress">
                  <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>ExpressJs</h3>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>DevOps,GIT</h3>
                <div className="progress">
                  <div className="progress-bar color-2" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>
                    <span>45%</span>
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
