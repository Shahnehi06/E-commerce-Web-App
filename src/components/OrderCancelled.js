import React from 'react'
import { BsCartXFill } from 'react-icons/bs'
import { FaRegClock } from 'react-icons/fa'

export const OrderCancelled = (props) => {
  return (
    <a class="list-group-item list-group-item-action bg-danger text-white" href="/">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
            <BsCartXFill/> {props.title}
            </h5>
            <span class="small text-white">
            <FaRegClock /> {props.time} ago
            </span>
        </div>
        <p class="mb-1">{props.msg}</p>
    </a>
  )
}
