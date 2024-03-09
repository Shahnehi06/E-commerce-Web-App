import React from 'react'
import { Search } from '../components/Search'
import { BsNewspaper, BsJournalCheck, BsFilePerson, BsCalculator, BsCart3, BsReceiptCutoff } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";



const Support = () => {
    return (
        <>
            <div>
                <div class="bg-dark bg-gradient p-5 text-white text-center">
                    <div class="display-5 mb-4">How can we help you today?
                    </div>
                    <div class="container px-5">
                        <Search></Search>
                    </div>
                </div>
                <div class="bg-secondary py-4">
                    <div class="container">
                        <div class="row gx-5">
                            <div class="col-md-4">
                                <div class="row bg-white p-4 text-center">
                                    <div class="col-2"><BsJournalCheck color='#ffc107' size={48} />
                                    </div>
                                    <div class="col ">
                                        <h5 style={{ marginLeft: "20px" }}>Knowledge Base
                                        </h5>
                                        <div class="small text-muted">40 Article / 12 Categories
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row bg-white p-4 text-center">
                                    <div class="col-2"><MdOutlineMessage color="#198754" size={48} />
                                    </div>
                                    <div class="col">
                                        <h5 style={{ marginLeft: "20px" }}>Forums
                                        </h5>
                                        <div class="small text-muted">10 Topics / 7 Posts
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row bg-white p-4 text-center">
                                    <div class="col-2"><BsNewspaper color='#dc3545' size={48} />
                                    </div>
                                    <div class="col">
                                        <h5 style={{ marginLeft: "20px" }}>News
                                        </h5>
                                        <div class="small text-muted">15 Posts / 12 Categories
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container pt-3 mb-3">
                    <div class="container">
                        <div class="row gx-3">
                            <div class="col-md-3">
                                <div class="border pt-3">
                                    <div class="text-center py-2"><BsFilePerson color='#0dcaf0' size={48} />
                                        <div class="fw-bold py-2">My Account
                                        </div>
                                    </div>
                                    <div class="list-group list-group-flush"><a class="list-group-item list-group-item-action" href="/">Cras
                                        justo odio</a><a class="list-group-item list-group-item-action" href="/">Dapibus ac facilisis in
                                        </a>
                                          <a class="list-group-item list-group-item-action" href="/">Morbi leo risus
                                          </a>
                                        <a class="list-group-item list-group-item-action" href="/">Porta ac consectetur ac
                                        </a>
                                        <a class="list-group-item list-group-item-action" href="/">Vestibulum at eros</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="border pt-3">
                                    <div class="text-center py-2"><BsReceiptCutoff color='#ffc107' size={48} />
                                        <div class="fw-bold py-2">Charges &amp; Refunds</div>
                                    </div>
                                    <div class="list-group list-group-flush"><a class="list-group-item list-group-item-action" href="/">Cras
                                        justo odio</a>
                                        <a class="list-group-item list-group-item-action" href="/">Dapibus ac facilisis in</a>
                                        <a class="list-group-item list-group-item-action" href="/">Morbi leo risus</a>
                                        <a class="list-group-item list-group-item-action" href="/">Porta ac consectetur ac</a>
                                        <a class="list-group-item list-group-item-action" href="/">Vestibulum at eros</a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="border pt-3">
                                    <div class="text-center py-2"><BsCalculator color='#dc3545' size={48} />
                                        <div class="fw-bold py-2">Accounting &amp; Textes</div>
                                    </div>
                                    <div class="list-group list-group-flush"><a class="list-group-item list-group-item-action" href="/">Cras
                                        justo odio</a>
                                        <a class="list-group-item list-group-item-action" href="/">Dapibus ac facilisis in</a>
                                        <a class="list-group-item list-group-item-action" href="/">Morbi leo risus</a><a
                                                class="list-group-item list-group-item-action" href="/">Porta ac consectetur ac</a>
                                                <a class="list-group-item list-group-item-action" href="/">Vestibulum at eros</a></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="border pt-3">
                                    <div class="text-center py-2"><BsCart3 color='#198754' size={48} />
                                        <div class="fw-bold py-2">Cart</div>
                                    </div>
                                    <div class="list-group list-group-flush"><a class="list-group-item list-group-item-action" href="/">Cras
                                        justo odio</a><a class="list-group-item list-group-item-action" href="/">Dapibus ac facilisis in</a>
                                        <a class="list-group-item list-group-item-action" href="/">Morbi leo risus</a><a
                                                class="list-group-item list-group-item-action" href="/">Porta ac consectetur ac</a>
                                                <a class="list-group-item list-group-item-action" href="/">Vestibulum at eros</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Support