

if(localStorage.getItem("firstTime")==null){
   
    Swal.fire({
        title: 'This website is non-responsive. We recommend you to visit this site on desktop/laptop.',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'I am on laptop / desktop',
        denyButtonText: 'Leave',
      }).then((result) => {
      
        
        if (result.isConfirmed) {
          Swal.fire('Enter Website!')
        }        
        else if (result.isDenied) {           
            document.body.style.display ="none"
        }
        
      })
    
    localStorage.setItem("firstTime","done");
 }

 