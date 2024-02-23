import React from 'react'
import { BsCartCheckFill, BsCash } from 'react-icons/bs'

export const OrderPlaced = (props) => {
  return (
    <a class="list-group-item list-group-item-action bg-success text-white" href="/">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
            <BsCash /> {props.title}
            </h5>
            <span class="small text-white">
            <BsCartCheckFill /> {props.time} ago
            </span>
        </div>
        <p class="mb-1">{props.msg}</p>
    </a>
  )
}
