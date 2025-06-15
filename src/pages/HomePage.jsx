import Header from "../components/Header/Header";
const HomePage = () =>{
    return (

        <div style={{backgroundColor:" #040e34"}}>
            <Header/>
            <center><div style={{backgroundColor:"#000000", height:"70px", width:"900px",borderRadius:"45%"}}><h1 style={{color:"white", textAlign:"center"}}>College Data Dashboard</h1></div></center><br />
            <center><div style={{backgroundColor:"#000000", height:"320px", justifyContent:"center", justifyItems:"center", alignContent:"center", width:"900px", borderRadius:"10px"}}><img src="\Images\viv.png" alt="logo" style={{backgroundcolor:"white", width:"90%", height:"250px"}}/></div></center>
            <h3>Section One. Overview of Current Academic Year</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta reprehenderit dignissimos! Amet laudantium ab quibusdam dolores nulla pariatur qui, numquam, quis eos consequatur corrupti quaerat, perspiciatis veritatis nihil a.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta reprehenderit dignissimos! Amet laudantium ab qui
            </p>
            <hr />
            <h3>Section Two: Key Matrics and Announcements</h3>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta reprehenderit </p>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            <br />
            <hr />
            <h3>Section Three: Live Enrollment Count by Department</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta reprehenderit </p>
            <center>Lorem ipsum dolor sit amet consectetur</center>
            <center>
            <table border="3" bordercolor="white" cellPadding="10" cellSpacing="0" width="70%">
                <thead>
                <tr>
                    <th>flower</th>
                    <th>color</th>
                    <th>flower</th>
                    <th>color</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>rose</td>
                    <td>red</td>
                    <td>rose</td>
                    <td>red</td>
                    
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>rose</td>
                    <td>red</td>
                    <td>rose</td>
                    <td>red</td>
                    
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>rose</td>
                    <td>red</td>
                    <td>rose</td>
                    <td>red</td>
                    
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>rose</td>
                    <td>red</td>
                    <td>rose</td>
                    <td>red</td>
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>rose</td>
                    <td>red</td>
                    <td>rose</td>
                    <td>red</td>
                </tr>
                </tbody>
            </table>
            </center>
            <p style={{marginleft:"200px"}}> this on job training going on!</p>
        </div>
    )
}
export default HomePage;