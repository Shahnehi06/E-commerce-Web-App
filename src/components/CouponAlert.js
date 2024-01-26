import React from 'react'
import { FaRegClock, FaTag } from 'react-icons/fa'

export const CouponAlert = (props) => {
  return (
    <a class="list-group-item list-group-item-action" href="/">
        <div class="d-flex w-100 justify-content-between text-success">
            <h5 class="mb-1">
            <FaTag /> {props.title}
            </h5>
            <span class="small text-muted">
            <FaRegClock /> {props.time} ago
            </span>
        </div>
        <p class="mb-1">{props.msg}</p>
    </a>
  )
}
