import React from 'react'
import { BsTruck } from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'
import { IoMdHeart } from 'react-icons/io'
import { TiStarFullOutline } from 'react-icons/ti'

export const Card = (props) => {
  return (
    <div class="card">
        <div class="row g-0">
            <div class="col-md-3 text-center">
                <img title={props.title} src={props.imagesrc} class="img-fluid" alt="..." />
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h6 class="card-subtitle me-2 d-inline">
                        <a class="text-decoration-none" href="/product/detail">Great product name goes here</a>
                    </h6>
                    <span style={{"display":props.displaybadge}}>
                        <span class="badge bg-success me-2">{props.badgevalue1}</span>
                        <span class="badge bg-danger me-2">{props.badgevalue2}</span>
                        <span class="badge bg-secondary">
                            <TiStarFullOutline style={{marginBottom:"5%"}} color='rgb(255, 193, 7)' />{props.starvalue}
                        </span>
                    </span>
                </div>
                <div class="card-footer">
                    <div class="mb-2">
                        <span class="fw-bold h5 me-2">{props.originalprice}</span>
                        <span style={{display:props.displaydiscount}}>
                            <del class="small text-muted me-2" >{props.saveamount}</del>
                            <span class="rounded p-1 bg-warning me-2 small">{props.discountrate}</span>
                        </span>
                        <span class="text-success small mb-2" style={{"display":props.showdelivery}}>
                            <BsTruck /> Free shipping
                        </span>
                    </div>
                    <div class="btn-group d-flex" role="group">
                        <button type="button" class="btn btn-sm btn-primary" title="Add to cart"><FaCartPlus /></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" title="Add to wishlist"><IoMdHeart/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
