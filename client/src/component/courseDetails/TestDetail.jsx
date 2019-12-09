import React from 'react'

class Detail extends React.Component{


     render(){
         return(
             <div>
                 <h2>Test series</h2>
                  <h3>Details of Courses offered by Science Circle Classes</h3><hr/>
                  <ol>
                    <li>We offer free test series for class 10th in various Subjects to enthusiastic and meritorious students.</li>
                    <li>Aspiring students need to register their name via the provided registration link as below.</li>
                    <button>registration</button>
                    <li>Students need to visit the office of Science Circle Classes for confirmation of their registration and further processing their application.</li>
                    <li>Students shall bring following documents with them while visiting Science circle classes.</li>                
                       <ol>
                           <li>Photocopy of any valid ID card, (AADHAR card, School ID, Passport etc.)</li>
                           <li>One Recent Passport Size Photograph.</li>
                       </ol>
                   </ol>
                    
             </div>
         )
     }
}
export default Detail