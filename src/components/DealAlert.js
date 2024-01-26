import React from 'react'
import { FaBell, FaRegClock } from 'react-icons/fa'

export const DealAlert = (props) => {
  return (
    <a class="list-group-item list-group-item-action active" aria-current="true" href="/">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
            <FaBell /> {props.title}
            </h5>
            <span class="small">
            <FaRegClock /> {props.time} ago
            </span>
        </div>
        <p class="mb-1">{props.msg}</p>
    </a>
  )
}
