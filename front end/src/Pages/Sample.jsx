import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { viewDetailApi } from '../API/Allapi';


function Sample() {
  const [user, setUser] = React.useState([]);

  const ViewusersDetals = async () => {
    const token =sessionStorage.getItem("token");
    console.log(token);
    if(token){
      const reqHeader={
        "Authorization":`Bearer ${token}`
      }
      try {
      const result = await viewDetailApi(reqHeader);
      console.log(result);
      if (result.status === 200) {
        setUser(result.data.existingUser);
      } else {
        console.log(result.response?.data);
        
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
    }else{
      alert("Please login first to view user details");
    }

    
  };

    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '22rem', padding: "10px" }}>
        <Card.Body>
          <Card.Title>User Details</Card.Title>

          <Card.Text>
            {user && user.length > 0 ? (
              user.map((u, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <p><strong>ID:</strong> {u.user_id}</p>
                  <p><strong>Name:</strong> {u.username}</p>
                  <p><strong>Email:</strong> {u.email}</p>
                  
                  <hr />
                </div>
              ))
            ) : (
              "No user data loaded"
            )}
          </Card.Text>

          <Button onClick={ViewusersDetals}>View</Button>
          <Button style={{ marginLeft: "10px" }} onClick={() => window.location.href = '/'}>Back to Home</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Sample;
