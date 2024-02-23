import React from 'react'
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill, BsFillPatchCheckFill } from 'react-icons/bs'
import { GoStarFill } from 'react-icons/go'

export const RatingsAndReviews = (props) => {
  return (
    <div class="border-bottom mb-3">
    <div class="mb-2">
      <span>
        <GoStarFill className="text-warning me-1"/>
        <GoStarFill className="text-warning me-1"/>
        <GoStarFill className="text-warning me-1"/>
        <GoStarFill className="text-warning me-1"/>
        <GoStarFill className="text-secondary me-1" />
      </span>
      <span class="text-muted">
      <BsFillPatchCheckFill className='text-success me-1' />
        <span style={{backgroundColor:"yellow"}}>{props.username}</span> | Reviewed on{" "}
        <i class="fw-bold">{props.date}</i>
      </span>
    </div>
    <p>
      {props.msg}
    </p>
    <div class="mb-2">
      <button class="btn btn-sm btn-outline-success me-2">
      <BsFillHandThumbsUpFill /> {props.thumbsup}
      </button>
      <button class="btn btn-sm btn-outline-danger me-2">
      <BsFillHandThumbsDownFill /> {props.thumbsdown}
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
      >
        Report abuse
      </button>
    </div>
  </div>
  )
}
