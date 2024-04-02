'use client';

import Postcode from 'react-daum-postcode';
import '../stylesheets/postModal.scss'

export default function PostModal({ setModal, handleComplete }){

    return(
        <div onClick={() => {
            setModal(false);
        }} className="postmodal-background">
            <Postcode
                className="postmodal"
                onComplete={handleComplete}
                autoClose
            />
        </div>
    )
}