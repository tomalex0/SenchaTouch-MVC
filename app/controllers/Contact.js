Ext.regController("Contact",{
    index : function(){
        if(!this.listPanel){
            var anim = {type:'slide', direction:'left'};
            this.listPanel = this.render({
                xtype : 'contact-listpanel',
                listeners :{
                    list : {
                        select : this.show,
                        scope : this
                    },
                    activate : function(listPanel){
                        listPanel.list.getSelectionModel().deselectAll();
                    }
                }
            },anim);
            
            this.listPanel.query('#addButton')[0].on({
                tap : this.compose,
                scope:this
            });
            
            this.application.viewport.setActiveItem(this.listPanel);
        } else {
            this.listPanel.store.sort();
            this.application.viewport.setActiveItem(this.listPanel,{
                type:'slide',
                direction:'right'
            });
        }
    },
    
    show : function(list, record){
        var anim = {type:'slide', direction:'left'};
        var details = this.render({
            xtype : 'contact-details',
            data: record.data,
            listeners :{
                deactivate:function(details){
                    details.destroy();
                }
            }
        },anim);
        
        details.query('#backButton')[0].on({
            tap : this.index,
            scope:this
        });
        
        this.application.viewport.setActiveItem(details,anim);
    },
    
    compose : function(){
        var anim = {type:'slide', direction:'left'};
        this.form = this.render({
            xtype : 'contact-form',
            listeners :{
                deactivate : function(form){
                    form.destroy();
                }
            }
        },anim);
        
        this.form.query('#cancelButton')[0].on({
            tap : this.index,
            scope:this
        });
        
        this.form.query('#doneButton')[0].on({
            tap : this.create,
            scope:this
        });
        
        this.application.viewport.setActiveItem(this.form,anim);
    },
    
    create : function(){
        var modelData = Ext.ModelMgr.create(this.form.getValues(), 'Contact');
        if(this.validate(modelData)){
            this.listPanel.store.create(this.form.getValues());
            this.index();
        }
    },
    
    validate : function(model){
        var errors = model.validate(),message = "";
        if(errors.isValid()){
            return true;
        } else {
            Ext.each(errors.items,function(rec,i){
                message += rec.message+"<br>";
            });
            Ext.Msg.alert("Validate", message, function(){}).doComponentLayout();
            return false;
        }
    }
});