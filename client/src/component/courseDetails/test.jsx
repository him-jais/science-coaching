import React from 'react';
import { Table } from 'reactstrap';

class Benefits extends React.Component{

    render(){
        return(
            <div > 
            <h2 className='hass'>Test Series</h2>
               <Table   bordered style={{marginTop:"1rem"}}>
      <thead>
        <tr>       
          <th>#</th>
          <th>Benefits</th>
          <th>Free Test Series</th>
          <th>Paid Test Series</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Subject
          </td>
          <td>Mathmatics <br/>
              Science<br/>
              Social Science<br/>
                English</td>
          <td>Mathmatics <br/>
              Science<br/>
              Social Science<br/>
                English</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Duration</td>
          <td>November-February</td>
          <td>November-February</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Test frequency</td>
          <td>Twice-Trice a week</td>
          <td>Twice-Trice a week</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Question paper<br/>
                   discussion</td>
          <td>Not Included</td>
          <td>Weekly</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Solution</td>
          <td>Not Included</td>
          <td>Provided</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Registration <br/>
                Charges</td>
          <td>100/Subject</td>
          <td>100/Subject</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Course Fee</td>
          <td>0/Subject</td>
          <td>1500/Subject</td>
        </tr>
      </tbody>
    </Table>
            </div>
        )
    }
}
export default Benefits