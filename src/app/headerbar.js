import "./stylesheets/headerbar.scss";

function Headerbar({title}) {

    return (
        <div className="headerbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M15 19L8 12L15 5" stroke="black" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>
                {title}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M15 19L8 12L15 5" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default Headerbar;