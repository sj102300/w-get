
import "./write.scss";

import Headerbar from "../../headerbar";

function Write(){

    return(
        <div>
            <Headerbar title={"방 만들기"}/>
            <h1>원하는 정보를 입력해주세요.</h1>
            <h2>방 이름</h2><input />
        </div>
    )
}

export default Write;