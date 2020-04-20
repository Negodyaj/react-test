import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import About from './components/about/About';
import Projects from './components/projects/Projects';

import slide1 from './img/slide1.jpg';
import './App.scss';

function App() {
    const activeClass = "active";

    return (
        <Router>
            <div className="App">
                <div className="navigation-panel">
                    <div className="container">
                        <div className="logo-container">
                            <span className="logo-text">
                                Green Fair
                    <i className="fab fa-envira leaf-icon"></i>
                                <i className="fab fa-envira leaf-icon"></i>
                            </span>
                        </div>
                        <nav>
                            <NavLink exact={true} className="nav-link" activeClassName={activeClass} to="/">Home</NavLink >
                            <NavLink className="nav-link" activeClassName={activeClass} to="/about">About</NavLink >
                            <NavLink className="nav-link" activeClassName={activeClass} to="/projects">Projects</NavLink >
                            <a href="" className="nav-link">Achivement</a>
                            <a href="" className="nav-link">Event</a>
                            <a href="" className="nav-link">Testimonial</a>
                            <a href="" className="nav-link">Blog</a>
                            <a href="" className="nav-link">Contact us</a>
                        </nav>
                    </div>
                </div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <div>
                            <section className="slider-section">
                                <img src={slide1} className="slide-back" />
                            </section>

                            <section className="latest-work">
                                <div className="container">
                                    <h2>Our latest work</h2>
                                    <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                                    <div className="tab-control">
                                        <button className="tab-button">Show all</button>
                                        <button className="tab-button">Environment</button>
                                        <button className="tab-button">Climate</button>
                                        <button className="tab-button">Photography</button>
                                        <button className="tab-button">Species</button>
                                    </div>
                                    <div className="tab-item active">
                                        <div className="work-case">
                                            <img src="https://i.ytimg.com/vi/lkQ0LDx9jHs/maxresdefault.jpg" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                        <div className="work-case">
                                            <img src="https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                        <div className="work-case row-span-2">
                                            <img src="https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                        <div className="work-case">
                                            <img src="https://cs7.pikabu.ru/post_img/big/2019/01/22/10/1548178639131425422.jpg" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                        <div className="work-case">
                                            <img src="https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-item"></div>
                                    <div className="tab-item"></div>
                                    <div className="tab-item"></div>
                                    <div className="tab-item"></div>
                                </div>
                            </section>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
