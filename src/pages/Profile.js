import React from 'react'
import { BsCalendarDate, BsCreditCard2Front, BsCreditCard2FrontFill, BsFillPersonLinesFill, BsPerson, BsTrash3 } from 'react-icons/bs'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { MdOutlineLocationOn } from 'react-icons/md'
import { SlEnvolope } from 'react-icons/sl'
import { IoMdKey } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { GoShieldLock } from "react-icons/go";
import { FaGear } from 'react-icons/fa6'
import { FaBell, FaPercent, FaPlus, FaTrash } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export const Profile = () => {
  return (
    <>
      <div class="container-fluid my-3">
        <div class="row">
          <div class="col-md-4">
            <form class="needs-validation " novalidate="">
              <div class="card border-primary">
                <h6 class="card-header"><BsFillPersonLinesFill /> Profile Detail</h6>
                <img src="https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg" alt="" class="card-img-top rounded-0 img-fluid bg-secondary" />
                <div class="card-body">
                  <div class="mb-3"><label class="form-label d-none" for="formFile">formFile</label>
                  <input type="file" name="formFile" class="form-control form-control-sm" id="formFile" accept="image/x-png,image/jpeg"
                      required="" />
                    <div class="d-flex">
                      <div class="form-text">You don't allow uploading a photo more than 5MB</div>
                    </div>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="form-group undefined">
                      <div class="input-group"><span class="input-group-text"><BsPerson /></span><input name="name" input="[object Object]" meta="[object Object]" type="text"
                          placeholder="Your name" icon="[object Object]" required="" id="name" class="form-control" value=""/>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="form-group undefined">
                      <div class="input-group"><span class="input-group-text"><HiOutlineDevicePhoneMobile size={"20"} /></span><input name="mobileNo" input="[object Object]" meta="[object Object]" type="number"
                          placeholder="Mobile no without country code" icon="[object Object]" required=""
                          max="999999999999999" min="9999" id="mobileNo" class="form-control" value=""/></div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="form-group undefined">
                      <div class="input-group"><span class="input-group-text"><SlEnvolope /></span><input name="email" input="[object Object]" meta="[object Object]" type="email"
                          placeholder="Your email" icon="[object Object]" required="" id="email" class="form-control"
                          value=""/></div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="form-group undefined">
                      <div class="input-group"><span class="input-group-text"><MdOutlineLocationOn /></span><input name="location" input="[object Object]" meta="[object Object]" type="text"
                          placeholder="Your location" icon="[object Object]" required="" id="location" class="form-control"
                          value=""/></div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="form-group undefined">
                      <div class="input-group"><span class="input-group-text"><BsCalendarDate /></span><input name="dob" input="[object Object]" meta="[object Object]" type="date"
                          placeholder="Your birthdate" icon="[object Object]" required="" id="dob" class="form-control"
                          value=""/></div>
                    </div>
                  </li>
                </ul>
                <center>
                <div class="card-body"><button type="submit" class="btn btn-primary  d-flex">Submit</button></div>
                </center>
              </div>
            </form>
          </div>
          <div class="col-md-8">
            <div class="card border-info">
              <h6 class="card-header bg-info text-white"><IoMdKey /> Change Password</h6>
              <div class="card-body">
                <form class="needs-validation " novalidate="">
                  <div class="form-group mb-3"><label class="form-label required" for="currentPassword">Current
                      Password</label>
                    <div class="input-group"><span class="input-group-text"><CiLock /></span><input name="currentPassword" input="[object Object]" meta="[object Object]"
                        type="password" label="Current Password" placeholder="******" icon="[object Object]" required=""
                        maxlength="20" minlength="8" class="form-control" id="currentPassword" value=""/></div>
                  </div>
                  <div class="form-group mb-3"><label class="form-label required" for="password">New Password</label>
                    <div class="input-group"><span class="input-group-text"><CiLock /></span><input name="password" input="[object Object]" meta="[object Object]" type="password"
                        label="New Password" placeholder="******" icon="[object Object]" required="" maxlength="20"
                        minlength="8" class="form-control" id="password" value=""/></div>
                  </div>
                  <div class="form-group mb-3"><label class="form-label required" for="confirmPassword">Confirm New
                      password</label>
                    <div class="input-group"><span class="input-group-text"><GoShieldLock /></span><input name="confirmPassword" input="[object Object]" meta="[object Object]"
                        type="password" label="Confirm New password" placeholder="******" icon="[object Object]" required=""
                        maxlength="20" minlength="8" class="form-control" id="confirmPassword" value=""/></div>
                  </div>
                  <center>
                  <button type="submit" class="btn btn-info  d-flex">Submit</button>
                  </center>
                </form>
              </div>
            </div><br/>
            <div class="card border-danger">
              <h6 class="card-header"><FaGear /> Settiing</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><FaBell /> Notification<div
                    class="form-check form-switch float-end"><input class="form-check-input" type="checkbox"/></div>
                </li>
                <li class="list-group-item"><IoMail /> E-Mail and SMS<div
                    class="form-check form-switch float-end"><input class="form-check-input" type="checkbox"/></div>
                </li>
                <li class="list-group-item"><FaPercent /> Promotional offers E-Mail and SMS<div
                    class="form-check form-switch float-end"><input class="form-check-input" type="checkbox" disabled="" />
                  </div>
                </li>
                <li class="list-group-item bg-danger text-white"><FaTrash /> Delete Account <button
                    type="button" class="btn btn-sm btn-light ms-3">Submit</button></li>
              </ul>
            </div><br />
            <div class="card border-success">
              <h6 class="card-header"><BsCreditCard2FrontFill /> Saved Card<button
                  class="btn btn-sm btn-primary float-end"><FaPlus /></button></h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><BsCreditCard2Front /> 123 *** *** 123 <button type="button"
                    class="btn btn-sm btn-danger ms-3"><BsTrash3 /></button></li>
                <li class="list-group-item"><BsCreditCard2Front /> 123 *** *** 123 <button type="button"
                    class="btn btn-sm btn-danger ms-3"><BsTrash3 /></button></li>
                <li class="list-group-item"><BsCreditCard2Front /> 123 *** *** 123 <button type="button"
                    class="btn btn-sm btn-danger ms-3"><BsTrash3 /></button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
