Template.contact.events({ // плавна прокрутка до якоря
    'submit form':function(e){
        e.preventDefault();
        var contactForm = {
            email: $(e.target).find('[id=inputEmail]').val(),
            tema: $(e.target).find('[id=tema]').val(),
            text: $(e.target).find('[id=textArea]').val()
        }
        if(contactForm.email === '' || contactForm.tema === ''){
            var mainContacts = document.getElementById('fieldForm');
            var dangerWindow = mainContacts.getElementsByClassName('alert-danger');
            var div = document.createElement('div');
            div.className = "alert alert-dismissible alert-danger";
            div.id = 'dangerAler';
            div.innerHTML = "<strong>Помилка!</strong> Ви не заповнили тему або емейл";
            if(dangerWindow[0]){
                var dangerAlertRemove = document.getElementById('dangerAler');
                dangerAlertRemove.remove();
                mainContacts.insertBefore(div, fieldForm.children[1]);
             }else{
                mainContacts.insertBefore(div, fieldForm.children[1]);
            }

        }else{
            Meteor.call('addContacts',contactForm,function(err,res) { // добавляемо в колецию резерв
                if(res){
                    var dangerAlertRemove = document.getElementById('dangerAler');
                    var mainContacts = document.getElementById('fieldForm');
                    var successrAlert = mainContacts.getElementsByClassName('alert-success');
                    var div = document.createElement('div');
                    div.className = "alert alert-dismissible alert-success";
                    div.id = 'successAlert';
                    div.innerHTML = "<strong>Відправлено!</strong>Ваше повiдомленя доставленно!Ми з вами зв\'яжемося як зможем";
                    if(dangerAlertRemove){
                        dangerAlertRemove.remove();
                        console.log('erors');
                    }
                    if(successrAlert[0]){
                        var successAlertRemove = document.getElementById('successAlert');
                        mainContacts.insertBefore(div, fieldForm.children[1]);
                        $('#successAlert').fadeOut(3000, function () {
                            successAlertRemove.remove();
                        });
                    }else{
                        mainContacts.insertBefore(div, fieldForm.children[1]);
                        $('#successAlert').fadeOut(3000, function () {
                        });
                    }

                }
                if(err){
                    alert('error');
                }

            });
        }

    }
});