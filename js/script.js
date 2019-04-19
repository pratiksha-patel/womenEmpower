const contribute_button = document.querySelector('.contribute_button');
const form__button = document.querySelector('.form__button');
const myModal1 = document.querySelector('#myModal1');

contribute_button.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(Contribute__Form);
    let Contribute__Form = document.querySelector('#Contribute__Form select').value;
    document.querySelector('.model__text').innerHTML = Contribute__Form;
});

form__button.addEventListener('click', function(e){
    e.preventDefault();
    let form__name = document.querySelector('.form__name').value;
    let form__email = document.querySelector('.form__email').value;
    let form__contact = document.querySelector('.form__contact').value;
    let form__textarea = document.querySelector('.form__textarea').value;

    if(form__name && form__email && form__contact && form__textarea ){

        myModal1.innerHTML = `
    <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Registration Successfull!</h4>
        </div>
        <div class="modal-body">
        <p>Thankyou so much for registering <strong> ${form__name} </strong>. <br> You will be informed for the help or we'll mail you <strong> @${form__email} </strong>. </br>With Regards </p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
    </div>
    </div>
    `;
    } else{
        myModal1.innerHTML = `
        <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Registration Unsuccessfull!</h4>
            </div>
            <div class="modal-body">
            <p>OOPS! something is wrong.</p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
        `;
    }

});
