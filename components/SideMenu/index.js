import Link from "next/link";

export default function SideMenu({children})
{
    return (
        <section id="main">
            <aside id="sidebar" className="sidebar c-overflow">
                <div className="s-profile">
                    <a href="" data-ma-action="profile-menu-toggle">
                        <div className="sp-pic">
                            <img src="img/profile-pics/1.jpg" alt=""/>
                        </div>

                        <div className="sp-info">
                            Malinda Hollaway

                            <i className="zmdi zmdi-caret-down"></i>
                        </div>
                    </a>

                    <ul className="main-menu">
                        <li>
                            <a href="profile-about.html"><i className="zmdi zmdi-account"></i> View Profile</a>
                        </li>
                        <li>
                            <a href=""><i className="zmdi zmdi-input-antenna"></i> Privacy Settings</a>
                        </li>
                        <li>
                            <a href=""><i className="zmdi zmdi-settings"></i> Settings</a>
                        </li>
                        <li>
                            <a href=""><i className="zmdi zmdi-time-restore"></i> Logout</a>
                        </li>
                    </ul>
                </div>

                <ul className="main-menu">
                    <li><Link href="/users"><a href="#"><i className="zmdi zmdi-walk"></i> Users</a></Link></li>
                    <li><a href="index.html"><i className="zmdi zmdi-home"></i> Home</a></li>
                    <li className="sub-menu">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-view-compact"></i> Headers</a>

                        <ul>
                            <li><a href="textual-menu.html">Textual menu</a></li>
                            <li><a href="image-logo.html">Image logo</a></li>
                            <li><a href="top-mainmenu.html">Mainmenu on top</a></li>
                        </ul>
                    </li>
                    <li><a href="typography.html"><i className="zmdi zmdi-format-underlined"></i> Typography</a></li>
                    <li className="sub-menu">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-widgets"></i> Widgets</a>

                        <ul>
                            <li><a href="widget-templates.html">Templates</a></li>
                            <li><a href="widgets.html">Widgets</a></li>
                        </ul>
                    </li>
                    <li className="sub-menu">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-view-list"></i> Tables</a>

                        <ul>
                            <li><a href="tables.html">Normal Tables</a></li>
                            <li><a href="data-tables.html">Data Tables</a></li>
                        </ul>
                    </li>
                    <li className="sub-menu">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-collection-text"></i> Forms</a>

                        <ul>
                            <li><a href="form-elements.html">Basic Form Elements</a></li>
                            <li><a href="form-components.html">Form Components</a></li>
                            <li><a href="form-examples.html">Form Examples</a></li>
                            <li><a href="form-validations.html">Form Validation</a></li>
                        </ul>
                    </li>
                    <li className="sub-menu">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-swap-alt"></i>User Interface</a>
                        <ul>
                            <li><a href="colors.html">Colors</a></li>
                            <li><a href="animations.html">Animations</a></li>
                            <li><a href="box-shadow.html">Box Shadow</a></li>
                            <li><a href="buttons.html">Buttons</a></li>
                            <li><a href="icons.html">Icons</a></li>
                            <li><a href="alerts.html">Alerts</a></li>
                            <li><a href="preloaders.html">Preloaders</a></li>
                            <li><a href="notification-dialog.html">Notifications & Dialogs</a></li>
                            <li><a href="media.html">Media</a></li>
                            <li><a href="components.html">Components</a></li>
                            <li><a href="other-components.html">Others</a></li>
                        </ul>
                    </li>
                    <li className="sub-menu">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-trending-up"></i>Charts</a>
                        <ul>
                            <li><a href="flot-charts.html">Flot Charts</a></li>
                            <li><a href="other-charts.html">Other Charts</a></li>
                        </ul>
                    </li>
                    <li><a href="calendar.html"><i className="zmdi zmdi-calendar"></i> Calendar</a></li>
                    <li className="sub-menu active toggled">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-image"></i>Photo Gallery</a>
                        <ul>
                            <li><a className="active" href="photos.html">Default</a></li>
                            <li><a href="photo-timeline.html">Timeline</a></li>
                        </ul>
                    </li>

                    <li><a href="generic-classes.html"><i className="zmdi zmdi-layers"></i> Generic Classes</a></li>
                    <li className="sub-menu">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-collection-item"></i> Sample
                            Pages</a>
                        <ul>

                            <li><a href="profile-about.html">Profile</a></li>
                            <li><a href="list-view.html">List View</a></li>
                            <li><a href="messages.html">Messages</a></li>
                            <li><a href="pricing-table.html">Pricing Table</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="wall.html">Wall</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="login.html">Login and Sign Up</a></li>
                            <li><a href="lockscreen.html">Lockscreen</a></li>
                            <li><a href="404.html">Error 404</a></li>

                        </ul>
                    </li>
                    <li className="sub-menu">
                        <a href="" data-ma-action="submenu-toggle"><i className="zmdi zmdi-menu"></i> 3 Level Menu</a>

                        <ul>
                            <li><a href="form-elements.html">Level 2 link</a></li>
                            <li><a href="form-components.html">Another level 2 Link</a></li>
                            <li className="sub-menu">
                                <a href="" data-ma-action="submenu-toggle">I have children too</a>

                                <ul>
                                    <li><a href="">Level 3 link</a></li>
                                    <li><a href="">Another Level 3 link</a></li>
                                    <li><a href="">Third one</a></li>
                                </ul>
                            </li>
                            <li><a href="form-validations.html">One more 2</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>

            <aside id="chat" className="sidebar">

                <div className="chat-search">
                    <div className="fg-line">
                        <input type="text" className="form-control" placeholder="Search People"/>
                        <i className="zmdi zmdi-search"></i>
                    </div>
                </div>

                <div className="lg-body c-overflow">
                    <div className="list-group">
                        <a className="list-group-item media" href="">
                            <div className="pull-left p-relative">
                                <img className="lgi-img" src="img/profile-pics/2.jpg" alt=""/>
                                <i className="chat-status-busy"></i>
                            </div>
                            <div className="media-body">
                                <div className="lgi-heading">Jonathan Morris</div>
                                <small className="lgi-text">Available</small>
                            </div>
                        </a>

                        <a className="list-group-item media" href="">
                            <div className="pull-left">
                                <img className="lgi-img" src="img/profile-pics/1.jpg" alt=""/>
                            </div>
                            <div className="media-body">
                                <div className="lgi-heading">David Belle</div>
                                <small className="lgi-text">Last seen 3 hours ago</small>
                            </div>
                        </a>

                        <a className="list-group-item media" href="">
                            <div className="pull-left p-relative">
                                <img className="lgi-img" src="img/profile-pics/3.jpg" alt=""/>
                                <i className="chat-status-online"></i>
                            </div>
                            <div className="media-body">
                                <div className="lgi-heading">Fredric Mitchell Jr.</div>
                                <small className="lgi-text">Availble</small>
                            </div>
                        </a>

                        <a className="list-group-item media" href="">
                            <div className="pull-left p-relative">
                                <img className="lgi-img" src="img/profile-pics/4.jpg" alt=""/>
                                <i className="chat-status-online"></i>
                            </div>
                            <div className="media-body">
                                <div className="lgi-heading">Glenn Jecobs</div>
                                <small className="lgi-text">Availble</small>
                            </div>
                        </a>

                        <a className="list-group-item media" href="">
                            <div className="pull-left">
                                <img className="lgi-img" src="img/profile-pics/5.jpg" alt=""/>
                            </div>
                            <div className="media-body">
                                <div className="lgi-heading">Bill Phillips</div>
                                <small className="lgi-text">Last seen 3 days ago</small>
                            </div>
                        </a>

                        <a className="list-group-item media" href="">
                            <div className="pull-left">
                                <img className="lgi-img" src="img/profile-pics/6.jpg" alt=""/>
                            </div>
                            <div className="media-body">
                                <div className="lgi-heading">Wendy Mitchell</div>
                                <small className="lgi-text">Last seen 2 minutes ago</small>
                            </div>
                        </a>
                    </div>
                </div>
            </aside>

            {children}

        </section>
    )
}