Contacts.views.ContactListPanel =  Ext.extend(Ext.Panel,{
    layout : 'fit',
    initComponent : function(){
        this.store = new Ext.data.Store({
            autoLoad : true,
            model : 'Contact',
            sorters : ['lastName'],
            getGroupString : function(record){
                return record.get('lastName')[0];
            }
        });
        
        this.dockedItems = [{
            xtype : 'toolbar',
            dock : 'top',
            title : 'Contacts',
            items:[
                { xtype:'spacer'},
                {
                    itemId:'addButton',
                    iconCls:'add',
                    iconMask:true,
                    ui:'plain',
                    handler:this.onAddTap,
                    scope:this
            
            }]
        }];
        
        this.list = new Ext.List({
            itemTpl:'{firstName} <strong>{lastName}</strong>',
            store:this.store,
            grouped:true,
            emptyText :'<div class="emptyText">No Contacts</div>',
            indexBar:true
        });
        this.items = [this.list]
        Contacts.views.ContactListPanel.superclass.initComponent.apply(this, arguments);;
    }

});

Ext.reg('contact-listpanel',Contacts.views.ContactListPanel);