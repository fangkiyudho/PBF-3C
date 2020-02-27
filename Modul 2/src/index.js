import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import myPhoto from './myPhoto.JPG';

const Hello = () =>{
    return <p>Hello</p>
}

const Biodata = () =>{
    return(
    <body>
        <div className="container">
            <div id="card">
                <h3 id="biodata">Personal Detail</h3>
                <img src={myPhoto} id="myPhoto" />
                <table id="table" align="center" className="table table-borderless">
                        <tr>
                            <td>Nama</td><td>:</td><td>Fangki Yudhodiharjo</td>
                        </tr>
                        <tr>
                            <td>NIM</td><td>:</td><td>1741720071</td>
                        </tr>
                        <tr>
                            <td>Jurusan</td><td>:</td><td>Teknologi Informasi</td>
                        </tr>
                        <tr>
                            <td>Prodi</td><td>:</td><td>DIV Teknik Informatika</td>
                        </tr>
                        <tr>
                            <td>Kelas</td><td>:</td><td>TI-3C</td>
                        </tr>
                    </table>
            </div>
        </div>
        </body>
    );
}

ReactDOM.render(<Biodata />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
