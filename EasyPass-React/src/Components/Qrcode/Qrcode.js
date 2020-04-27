import React, {Component} from 'react';
import QRcode from './qrcode.png'
import {Link} from 'react-router-dom'

class Qrcode extends Component{
    render(){
        return(
            <div>
                    <Link to="/profile">
                        <img className="qr-code" src={QRcode} alt="QRcode" />
                    </Link>
            </div>

        )
    }

}

export default Qrcode;