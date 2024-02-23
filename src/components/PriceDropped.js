import React from 'react'
import { BsCash } from 'react-icons/bs'
import { FaRegClock } from 'react-icons/fa'

export const PriceDropped = (props) => {
  return (
    <a class="list-group-item list-group-item-action" href="/">
        <div class="d-flex w-100 justify-content-between text-danger">
            <h5 class="mb-1">
            <BsCash /> {props.title}
            </h5>
            <span class="small text-muted">
            <FaRegClock /> {props.time} ago
            </span>
        </div>
            <p class="mb-1">{props.msg}</p>
        </a>
  )
}
