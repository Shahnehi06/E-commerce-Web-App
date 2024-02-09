import React from 'react'
import { Search } from '../components/Search'

export const PageNotFound = () => {
  return (
    <>
        <div class="container text-center p-5">
            <div class="display-1">
                <i class="bi bi-exclamation-triangle-fill text-warning"></i>
                404
            </div>
            <h1 class="mb-3">Oops... Page Not Found!</h1>
            <div class="row justify-content-md-center">
                <div class="col-md-6">
                    <Search id='pagenotfoundsearch' />
                </div>
            </div>
        </div>
    </>

  )
}
