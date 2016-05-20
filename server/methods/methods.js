Meteor.methods({
	addContacts: function (form) {
		var contacts = Contacts.insert({
			email: form.email,
			tema: form.tema,
			text: form.text
		});
		return contacts;
	},
})