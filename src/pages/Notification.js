import React from 'react'
import { DealAlert } from '../components/DealAlert'
import { CouponAlert } from '../components/CouponAlert'
import { PriceDropped } from '../components/PriceDropped'
import { OrderPlaced } from '../components/OrderPlaced'
import { OrderCancelled } from '../components/OrderCancelled'

export const Notification = () => {
  return (
    <>
        <div class="container mb-3">
            <h4 class="my-3">Notification</h4>
            <div class="list-group">
                <DealAlert msg='Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.' time='2 min' title='Deal Alert!' />
                <CouponAlert msg='Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.' time='5 hours' title='Coupen Alert!' />
                <PriceDropped msg={['Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
                <small class="text-muted">Donec id elit non mi porta.</small>]} time='10 hours' title='Price dropped!'></PriceDropped>
                <OrderPlaced msg='Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.' title='Order Placed' time='12 hours'/>
                <OrderCancelled msg='Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.' title='Order Cancelled' time='2 ago' />
            </div>
        </div>
    </>
  )
}
