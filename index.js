
                //   1   FIRST VALIDATION CODES ..THIS WORKS
// document.getElementById('form').addEventListener('submit',(e)=>{

//     e.preventDefault()

//     if(validate()){
//         form.submit()
//     }

//     function validate() {
        
//     var firstName=document.getElementById("firstName").value
//     const lastName=document.getElementById("lastName").value
//     const Email=document.getElementById("Email").value

//     if(firstName===''){
//         alert('Firstname cannot be blank')
//         return false
//     }

//     if(lastName===''){
//         alert('lastName  cannot be blank')
//         return false
//     }

    
//     if(Email===''){
//         alert(' Email  cannot be blank')
//         return false
//     }

//     alert('You have succesfully submitted your form')

//     }

// })


                  //   2  SECOND VALIDATION CODES ..IS NOT WORKING

// document.addEventListener('DomContentLoaded', ()=>{
//     const form = document.getElementById('form');
//     const firstName = document.getElementById('firstName');
//     const lastName = document.getElementById('lastName');
//     const emailID = document.getElementById('Email');
//     const message = document.getElementById('textarea');
//     const consent = document.getElementById('checkbox');
//     const submit = document.getElementById('btn');
//     const errorMessages =document.getElementsByClassName('error-message');
//     const popup = document.getElementById('popup');
//     const closePopup = document.getElementById('close-popup');

   
//                         form.addEventListener('submit', (e)=>{
//                             e.preventDefault()
//                             clearErrors();
//                             let isValid=ValidateForm()
//                             if(isValid){
//                                 showPopup();
//                             }     
//                                });

//                                closePopup.addEventListener('click',()=>{
//                                 hidePopup();
 
//                                })
//                                function ValidateForm() {
//                                 let valid =true;
//                                 if(firstName.value.trim()===""){
//                                     showError('firtName', 'firstname is required');
//                                     valid=false;
//                                 }

//                                 if(lastName.value.trim()===""){
//                                     showError('lastName', 'lastname is required');
//                                     valid=false;
//                                 }
//                                 if(emailID.value.trim()===""){
//                                     showError('emailID', 'email is required');
//                                     valid=false;
//                                 } else if(!validateEmail(emailID.value)){
//                                     showError('emailID', 'email is not valid')
//                                     valid=false
//                                 }
//                                 if(message.value.trim()===""){
//                                     showError('textarea', 'message is required');
//                                     valid=false;
//                                }

//                                if(errorMessages.checked){
//                                 showError('error-message', 'This fiels is required');
//                                 valid=false;
//                            }

                              
//                                if(consent.checked){
//                                 showError('checkbox', 'To  submit this code, consent to being contacted');
//                                 valid=false;
//                             }
//                             return valid

//                         }


//                         function showError(id, message) {
//                             const errorElement=document.getElementById(id)
//                             errorElement.textContent=message
//                         }

//                         function clearErrors() {
//                             const errors=document.querySelectorAll('.error');
//                             errors.forEach(error=>error.textContent='')
//                         }

//                         function validateEmail( emailID) {
//                             const re=/^{^\s@{^\s@}+\.{^\s@}+$/;
//                             return re.test(String( emailID).toLowerCase);
//                         } 

//                         function showPopup() {
//                             popup.classList.add('show')
                            
//                         }

//                         function hidePopup() {
//                             popup.classList.add('show')
                            
//                         }
                    
                     
// })


  //   3    VALIDATION CODES ..NOT WORKING AS WELL, KINDLY LET ME KNOW WHERE MY MISTAKES IS

document.addEventListener('DomContentLoaded', function(){
    const form = document.getElementById('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const emailID = document.getElementById('Email');
    const message = document.getElementById('textarea');
    const consent = document.getElementById('checkbox');
    const submitButton = document.getElementById('btn');
    const errorMessages =document.getElementsById('error-message');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    let queryType = null; 

    // function to get the value of radio 

    function updateQueryType(){
        const radios = document.getElementsByName('queryType');
        for(const radio of radios){
            if(radio.checked){
                queryType = radio.value;
                break;
            }
        }
    }

    function showErrorMessage(elementName,position, message, errorValue){
        elementName.style.border ='solid 1px red';
        errorMessages[position].textContent = message;
        errorMessages[position].style.visibility = 'visible';
        hasError = errorValue;
    }

    function clearAllErrors(){
        for (const error of errorMessages) {
            console.log(error);
            error.textContent = '';
            error.style.visibility = 'hidden';
        }
        const inputs = [firstName, lastName, emailID, message];
        for (const input of inputs) {
            input.style.border = 'solid 1px var(--clr-neutral-grey-500)'; 
        }

    }
    function showPopup(){
        popup.style.visibility = 'visible';
    }
    function hidePopup(){
        popup.style.visibility = 'hidden';
    }

    form.addEventListener('submit', function(event){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hasError = false;
        event.preventDefault();
        clearAllErrors();
       
        if(!firstName.value){
            showErrorMessage(firstName,0,'This field is required',true);

        }
        if(!lastName.value){
            showErrorMessage(lastName,1,'This field is required',true);
        }
        if(!emailID.value){
            showErrorMessage(emailID,2,'This field is required',true);

        }else if(!emailRegex.test(emailID.value)){
            showErrorMessage(emailID,2,'Please enter a valid email address',true);
        }
        updateQueryType();
        if(!queryType){
            errorMessages[3].textContent = 'This field is required';
            errorMessages[3].style.visibility = 'visible';
            hasError = true;
        }
        if(!message.value){
            showErrorMessage(message,4,'This field is required',true);
        }
     
        if(!consent.checked){
            showErrorMessage(consent,5,'To submit this form please consent to being contacted',true);
            hasError = true;
        }

        if(!hasError){
            showPopup();
            form.reset();
        }
    });
    closePopup.addEventListener('click', hidePopup)
    
});










