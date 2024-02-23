import React from 'react'
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs'

export const QuestionAndAnswer = (props) => {
  return (
    <div class="border-bottom mb-3">
        <dt>
          Q: {props.question}
        </dt>
        <dd>
          <p>
            <strong>A:</strong> {props.answer}
          </p>
          <div class="text-muted mb-2">
            By {props.user} on {props.date}
          </div>
          <div class="mb-2">
            <i>Was this answer helpful?</i>
            <button class="btn btn-sm btn-outline-success me-2 ms-2">
            <BsFillHandThumbsUpFill />
            </button>
            <button class="btn btn-sm btn-outline-danger me-2">
            <BsFillHandThumbsDownFill />
            </button>
          </div>
        </dd>
  </div>
  )
}
