'use client'

import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`;

const KakaoMap = () => {

    return (
        <>
            <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
            <Map center={{ lat: 37.50, lng: 126.9207 }} style={{ width: '100%', height: '100%' }}>
                <MapMarker position={{ lat: 37.50, lng: 126.9207 }}
                    image={{
                        src: "/images/current-location.png",
                        size: {
                            width: 24,
                            height: 24
                        },
                    }}>
                </MapMarker>
            </Map>
        </>
    );
};

export default KakaoMap;

//framer motion