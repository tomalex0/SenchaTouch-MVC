Contacts.views.ContactForm =  Ext.extend(Ext.form.FormPanel,{
    scroll:'vertical',
    initComponent : function(){
        
        this.items = [{
            xtype:'fieldset',
            instructions : 'Fill in atleast a first and last name',
            defaults:{
                labelWidth : '40%'
            },
            items:[{
                xtype:'textfield',
                label:'First Name',
                name :'firstName',
                required:true
            },{
                xtype:'textfield',
                label:'Last Name',
                name :'lastName',
                required:true
            },{
                xtype:'textfield',
                label:'Email',
                name :'email'
            }]
        }];
        
        this.dockedItems = {
            xtype : 'toolbar',
            dock : 'top',
            ui:'light',
            title : 'Contacts',
            items:[{
                    itemId:'cancelButton',
                    text : 'Cancel',
                    ui : 'back'
            },{xtype:'spacer'},{
                    itemId:'doneButton',
                    text : 'Save',
                    ui : 'action'
            }]
        };
        
        Contacts.views.ContactForm.superclass.initComponent.apply(this, arguments);;
    }
});
Ext.reg('contact-form',Contacts.views.ContactForm);