
/*
 * 
 */

Ext.define('Audi.controller.configuracion.ControllerRegistrarUsuario', {
    extend  : 'Ext.app.Controller',
      
    init:function(){
        var thiss=this;
        this.control({
            'windowregistrarusuario'      :{
                    beforerender     : thiss.iniciarVentana,
                    afterrender     : function(window){
                       var me=this;
                       var form=window.down('form');
                      
                      var mapRegistrarEmpresa = new Ext.util.KeyMap({
                            target: window.getEl(),
                            key: Ext.EventObject.ENTER,
                            fn: function(){
                                me.saveForm(form);
                             },
                            scope: thiss,
                            defaultEventAction: "stopEvent"
                        }); 
                     

                    }
                    
            },
            'windowregistrarusuario button'      :{
                    click	 : thiss.actionButton
                    
	       }
            
        });
    },
   
    iniciarVentana: function (window){
        var me=this;
        var form=window.down('form');

      
    },
    actionButton:function(button){
/*
        var me=this;
        var win=button.up('window');
        var form=win.down('form');
      
        switch(button.option){
            case 'btnregistrar':
                me.saveForm(form);
             
            break;
            case 'btncancelar':
                form.getForm().reset();
                win.close();
                 
            break;
            case 'btnnuevo':
                form.getForm().reset();
                
                 
            break;


        }
        */
    },
    saveForm   : function(form){
        var me=this;
    
        
        if (form.getForm().isValid()) {
            
            form.getForm().submit({
                clientValidation: true,
                url: 'data/classes/sis_audi_enterprise.php',
                params: {xaction:'save',yaction:'insertenterprise'},
                success: function(frm, action) {
                   
                    var id_enterprise=form.getForm().findField('id_enterprise');
                    id_enterprise.setValue(action.result.id_enterprise);
                    Audi.helper.Tools.showMsg(action.result,true,4000);
                   
                 
                 },  
                failure: function(frm, action) {
                    Audi.helper.Tools.showMsg({title:"error",msg:action.result.msg+"|"+action.result.error},false,4000);
                   
                }
            });
        }else
        {
             Audi.helper.Tools.showMsg({title:"Atencion",msg:"Complete el Formulario"},false,4000);
        }

        
    }

 
});


