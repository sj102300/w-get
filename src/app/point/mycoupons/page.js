'use client'

import Headerbar from "@/app/headerbar";
import './mycoupons.scss'
import { useState, useEffect } from "react";

async function MyCoupons() {

    let [myCoupons, setMyCoupons] = useState([]);
    let [barcodeId, setBarcodeId] = useState(false);

    useEffect(() => {
        let accessToken = sessionStorage.getItem('accessToken');
        fetch(`/api/mycoupons`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }).then(response => response.json())
            .then((result) => {
                setMyCoupons(result.myCoupons);
            })
    }, [])


    return (
        <div>
            <Headerbar title={'내 쿠폰함'} color={'#fff'} />
            {
                barcodeId ? <Barcode barcodeId={barcodeId} setBarcodeId={setBarcodeId} /> : null
            }
            <div className="my-coupons">
                {myCoupons.map(e => <Coupon setBarcodeId={setBarcodeId} data={e} />)}
            </div>
        </div>
    )
}


function Coupon({ data, setBarcodeId }) {

    return (
        <div
            onClick={() => { setBarcodeId(data.id); }}
            className="coupon">
            <div className="coupon-left">
                <h1>{data.coupons.content}</h1>
                <p>{data.coupons.storename}</p>
                <p>{data.coupons.address}</p>
                <h4>터치해서 바코드를 제시 해주세요.</h4>
            </div>
            <div className="coupon-right">
                <h1>{data.coupons.required_point}P</h1>
            </div>
        </div>
    )
}

function Barcode({ barcodeId, setBarcodeId }) {

    let id = barcodeId.split('-')[4];

    return (
        <div onClick={()=>{
            setBarcodeId(false);
        }} className="barcode">
            <img src={`http://bwipjs-api.metafloor.com/?bcid=code128&text=${id}&scale=3&includetext&backgroundcolor=ffffff&paddingwidth=20&paddingheight=20`} alt="바코드" />
        </div>
    )
}


export default MyCoupons;