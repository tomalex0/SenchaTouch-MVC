Contacts.views.ContactDetails =  Ext.extend(Ext.Panel,{
    tpl:'<h2>{firstName} {lastName}</h2><p><a href="mailto:{email}">{email}</a></p>',
    styleHtmlContent : true,
    scroll:'vertical',
    initComponent : function(){
        
        this.dockedItems = {
            xtype : 'toolbar',
            dock : 'top',
            title : 'Contacts',
            items:[
                {
                    itemId:'backButton',
                    text : 'Back',
                    ui : 'back'
            
            }]
        };
        
        Contacts.views.ContactDetails.superclass.initComponent.apply(this, arguments);;
    }
});
Ext.reg('contact-details',Contacts.views.ContactDetails);