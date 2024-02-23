import React from 'react'

export const Navbar2 = () => {
    return (
        <div class="header-mid header-sticky">
            <div class="container">
                <div class="menu-wrapper">

                    <div class="logo">
                        <a href="/"><img src="assets/img/logo/logo.png" alt="" /></a>
                    </div>

                    <div class="main-menu d-none d-lg-block">
                        <nav>
                            <ul id="navigation">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Men</a></li>
                                <li><a href="/">Women</a></li>
                                <li class="new"><a href="/">Baby Collection</a></li>
                                <li><a href="/">Pages <i class="fas fa-angle-down"></i></a>
                                    <ul class="submenu">
                                        <li><a href="/">Login</a></li>
                                        <li><a href="/">Cart</a></li>
                                        <li><a href="/">Product Details</a></li>
                                        <li><a href="/">Product Checkout</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Blog</a>
                                    <ul class="submenu">
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">Element</a></li>
                                        <li><a href="/">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div class="header-right">
                        <ul>
                            <li>
                                <div class="nav-search search-switch hearer_icon">
                                    <a id="search_1" href="/">
                                        <span class="flaticon-search"></span>
                                    </a>
                                </div>
                            </li>
                            <li> <a href="/"><span class="flaticon-user"></span></a></li>
                            <li class="cart"><a href="/"><span class="flaticon-shopping-cart"></span></a> </li>
                        </ul>
                    </div>
                </div>

                <div class="search_input" id="search_input_box" style={{display: "none"}}>
                    <form class="search-inner d-flex justify-content-between ">
                        <input type="text" class="form-control" id="search_input" placeholder="Search Here" />
                            <button type="submit" class="btn"></button>
                            <span class="ti-close" id="close_search" title="Close Search"></span>
                    </form>
                </div>

                <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"><div class="slicknav_menu"><a href="/" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style={{outline: "none"}}><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: "none"}}>
                        <li><a href="/" role="menuitem" tabindex="-1">Home</a></li>
                        <li><a href="/" role="menuitem" tabindex="-1">Men</a></li>
                        <li><a href="/" role="menuitem" tabindex="-1">Women</a></li>
                        <li class="new"><a href="categories.html" role="menuitem" tabindex="-1">Baby Collection</a></li>
                        <li class="slicknav_collapsed slicknav_parent"><a href="/" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style={{outline: "none"}}><a href="/" tabindex="-1">Pages <i class="fas fa-angle-down"></i></a>
                            <span class="slicknav_arrow">+</span></a><ul class="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>
                                <li><a href="/" role="menuitem" tabindex="-1">Login</a></li>
                                <li><a href="/" role="menuitem" tabindex="-1">Cart</a></li>
                                <li><a href="/" role="menuitem" tabindex="-1">Product Details</a></li>
                                <li><a href="/" role="menuitem" tabindex="-1">Product Checkout</a></li>
                            </ul>
                        </li>
                        <li class="slicknav_collapsed slicknav_parent"><a href="/" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style={{outline: "none"}}><a href="/" tabindex="-1">Blog</a>
                            <span class="slicknav_arrow">+</span></a><ul class="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>
                                <li><a href="/" role="menuitem" tabindex="-1">Blog</a></li>
                                <li><a href="/" role="menuitem" tabindex="-1">Element</a></li>
                                <li><a href="/" role="menuitem" tabindex="-1">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="/" role="menuitem" tabindex="-1">Contact</a></li>
                    </ul></div></div>
                </div>
            </div>
        </div>
    )
}
