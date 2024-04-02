'use client';

import { useRouter } from "next/navigation";
import "./stylesheets/headerbar.scss";

function Headerbar({ title, color }) {

    let router = useRouter();

    return (
        <div className="headerbar">
            <svg onClick={()=>{ router.back(); }} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M15 19L8 12L15 5" stroke="black" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>
                {title}
            </p>
            <svg onClick={()=>{ color === 'black' && router.push('/main'); }}xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" fill="white" />
                <path d="M18 6L6 18M18 18L6 6" stroke={color} stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
    )
}

export default Headerbar;