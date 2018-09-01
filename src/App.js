import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import jsPDF from 'jspdf';

class App extends Component{

  constructor(){
    super();
    this.state = {
      nama:'',
      pesan:'',
      tinggi:11.69,
      lebar:'08.27',
      judul:'Lintang.pdf',
      gambar:'https://4.bp.blogspot.com/-89TxYwvuJyA/WxOWE4WkHPI/AAAAAAAAAiM/MBWeo995SbkEC6XQVJmtS_ZeKKZsG6MYgCLcBGAs/s400/lin.png'
    }
  }

  unduhPdf(e){
    e.preventDefault();

    var doc = new jsPDF({
      // orientation: 'landscape',
      unit: 'in',
      // format: [4, 2]  // tinggi, lebar
      format: [this.state.tinggi, this.state.lebar]
    })
    doc.text(`PDF size: ${this.state.tinggi} x ${this.state.lebar} in`, 0.5, 0.5)
    doc.text(`PDF filename: ${this.state.judul}`, 0.5, 0.8)
    doc.text(`Recipient: ${this.state.nama}`, 0.5, 1.1)
    doc.text(`Message: ${this.state.pesan}`, 0.5, 1.4)
    doc.addImage(this.state.gambar, 0.5, 2, 2.5, 2.5)
    // format: (image_file, 'image_type', X_init, Y_init, X_fin, Y_fin)

    doc.save(`${this.state.judul}`)
  };

render() {

    return (
      <div style={{margin:'20px', fontFamily:'Roboto'}}>

      <p style={{width:'100%'}}>Select PDF Size: &nbsp;
        <select ref="ukuran"
        onChange={(x)=>this.setState({
          tinggi: x.target.value[0]+x.target.value[1]+x.target.value[2]+x.target.value[3]+x.target.value[4],
          lebar: x.target.value[6]+x.target.value[7]+x.target.value[8]+x.target.value[9]+x.target.value[10]
        })}>
          <option value={[11.69,'08.27']}> A4 (210mm x 297mm) </option>
          <option value={[46.81,33.11]}> A0 (841mm x 1189mm) </option>
          <option value={[33.11,23.39]}> A1 (594mm x 841mm) </option>
          <option value={[23.39,16.54]}> A2 (420mm x 594mm) </option>
          <option value={[16.54,11.69]}> A3 (297mm x 420mm) </option>
          <option value={['08.27','05.83']}> A5 (148mm x 210mm) </option>
          <option value={['05.83','04.13']}> A6 (105mm x 148mm) </option>
          <option value={['04.13','02.91']}> A7 (74mm x 105mm) </option>
          <option value={['02.91','02.05']}> A8 (52mm x 74mm) </option>
          <option value={['02.05','01.46']}> A9 (37mm x 52mm) </option>
          <option value={['01.46','01.02']}> A10 (26mm x 37mm) </option>
        </select>
        </p>

        <span style={{width:'100%'}}>
            <p>PDF Filename:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="Input pdf filename that will be downloaded..."
            onChange={(x)=>this.setState({judul: x.target.value+'.pdf'})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>To:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="Type the recipient here..."
            onChange={(x)=>this.setState({nama: x.target.value})} />
            </p>
        </span>

        <span style={{width:'100%'}}>
            <p>Message:
            <textarea id="pesan" type="text" size="30" style={{width:'100%'}}
            placeholder="Type your messages here..."
            onChange={(x)=>this.setState({pesan: x.target.value})}/>
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Image:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="Input jpg/jpeg image link here..."
            onChange={(x)=>this.setState({gambar: x.target.value})} />
            </p>
        </span>

        <center>
        <Button onClick={this.unduhPdf.bind(this)}
        variant="raised" color="secondary" style={{margin:'5px'}}>
          Download PDF
        </Button>
        </center>

      </div>      
    )
}
}
export default App;