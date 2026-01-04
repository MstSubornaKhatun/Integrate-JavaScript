console.log('handler file added');


// for h1 tag
 document.getElementById('btn-update-title')
        .addEventListener('click', function(){
            // console.log('btn clicked');
            const pageTitleElement = document.getElementById('page-title');
            console.log(pageTitleElement);
            pageTitleElement.innerText = 'Updated page title text'
        })
        // ekhn btn a click korle text update hoye jabe


// for login
        document.getElementById('btn-login')
        .addEventListener('click', function(){
            // console.log('login btn clicked')
            const userInfoEl = document.getElementById('user-info');
            console.log(userInfoEl)
            userInfoEl.innerText = 'user logged in successfully'
        })