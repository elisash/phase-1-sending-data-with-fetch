// Add your code here

function submitData(userNames, userEmails) {
    const userData = {
        name: userNames,
        email: userEmails,
    }
        return fetch('http://localhost:3000/users',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML = data.id
        })
        .catch(error => {
          let message = 'Unauthorized Access';
          document.body.innerHTML = error;
       })
      }
    
    
    
    
    
    
    
    