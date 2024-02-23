import React from 'react'

export const Navbar1 = () => {
    return (
        <div class="header-top d-none d-sm-block">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="d-flex justify-content-between flex-wrap align-items-center">
                            <div class="header-info-left">
                                <ul>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Privacy</a></li>
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">Careers</a></li>
                                </ul>
                            </div>
                            <div class="header-info-right d-flex">
                                <ul class="order-list">
                                    <li><a href="/">My Wishlist</a></li>
                                    <li><a href="/">Track Your Order</a></li>
                                </ul>
                                <ul class="header-social">
                                    <li><a href="/"><i class="fab fa-facebook"></i></a></li>
                                    <li> <a href="/"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li> <a href="/"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
