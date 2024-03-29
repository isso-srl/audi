
/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

Ext.define('Audi.controller.ControllerLogin', {
    extend  : 'Ext.app.Controller',
    stores  : ['StoreUser'],
    models  : ['ModelUser'],
    views   : ['Login'],
    init:function(){
        var thiss=this;
        this.control({
            'login'      :{
                    beforerender	 : thiss.iniciarVentana
                    
	    }
            ,'login button':{
                click:this.actionLogin
            }
        });
    },
    win:0,
    mape:0,
    enter:0,
    iniciarVentana: function (window){
        var me=this;
        var win=window;
        this.win=window;
        var form=window.down('form');
        var btn=window.down('button[option=aceptar]');
           //console.log(form);
           var map = new Ext.util.KeyMap({
                target: document,
                key: Ext.EventObject.ENTER,//13, // or 
                fn: me.dale,
                scope: me
            });
            map.enable();
            me.mape=map;
            //console.log(document);
            //console.log(map);
    }
    ,actionLogin:function(button){
        var me=this;
        if(me.enter==0){
        switch(button.option){
            case 'aceptar':
               //console.log('hola');
                var win=button.up('login');
                var form=win.down('form');
                
                if (form.getForm().isValid()) {
                    
                    form.getForm().submit({
                        clientValidation: true,
                        url: 'data/classes/sis_audi_user.php',
                        params: {xaction:'login'},
                        success: function(frm, action) {
                            win.close();
                            Ext.create('widget.uxNotification', {
                                    title: action.result.title,
                                    position: 't',
                                    manager: 'instructions',
                                    cls: 'ux-notification-light',
                                    iconCls: 'ux-notification-icon-information',
                                    html: action.result.msg,
                                    autoHideDelay: 4000,
                                    slideBackDuration: 500,
                                    slideInAnimation: 'bounceOut',
                                    slideBackAnimation: 'easeIn'
                            }).show();
                            var headmenu=Ext.create('Audi.view.HeadMenu',{
                                    items:[{text:action.result.login,
                                            iconCls:'icon-user',
                                            option:'usuario'},
                                            {text:action.result.enterprise,
                                            iconCls:'icon-empresa',
                                            option:'empresa'},
											{
                                            xtype: 'splitbutton',
                                            text: 'Configuracion',
											iconCls:'icon-config',
                                            //width:198,
                                            menuAlign:'bl',
                                            menu: {
                                                xtype: 'menu',
                                                //width: 198,
															items: [
																{
                                                                    xtype: 'menuitem',
                                                                    option:'btnempresa',
                                                                    text: 'Registrars Empresa'
                                                                },{
																	xtype: 'menuitem',
																	option:'btnusuario',
																	text: 'Registrar Usuario'
																},{
																	xtype: 'menuitem',
																	option      : 'btnBG',
																	text        : 'Registrar B.G.'
																} ,   
																		
																{
																	xtype       : 'menuitem',
																	option      : 'btnER',
																	text        : 'Registrar E.R.'

																}
															]
														}
											},
											{text:'Legajo de Planificacion',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'legPla'},
											{text:'Legajo de Ejecucion',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'lege'},
											{text:'Comunicacion de Resultados',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'legr'},
                                            {text:'Salir',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-logout',
                                            option:'salir'}
                                    ]
                                });
                            var head=Ext.create('Audi.view.HeadPanel',{
                                tbar:[headmenu]
                            });
                            var viewport=Ext.create('Audi.view.Principal',{

                            });
                            viewport.add(head);
                             me.mape.setDisabled(true);
                        },
                        failure: function(frm, action) {
                            Ext.create('widget.uxNotification', {
                                title: action.result.title,
                                position: 't',
                                manager: 'instructions',
                                cls: 'ux-notification-light',
                                iconCls: 'ux-notification-icon-error',
                                html: action.result.msg,
                                autoHideDelay: 4000,
                                slideBackDuration: 500,
                                slideInAnimation: 'bounceOut',
                                slideBackAnimation: 'easeIn'
                            }).show();
                        }
                    });
                }
            break;
            case 'cancelar':
                 document.location.href = 'index.php';
                 
            break;
        }
        }
    },
    dale: function(){
        //console.log('chau');
        var me=this;
        me.enter=1;
        var win=this.win;
                var form=win.down('form');

                if (form.getForm().isValid()) {
                    
                    form.getForm().submit({
                        clientValidation: true,
                        url: 'data/classes/sis_audi_user.php',
                        params: {xaction:'login'},
                        success: function(frm, action) {
                            win.close();
                            Ext.create('widget.uxNotification', {
                                    title: action.result.title,
                                    position: 't',
                                    manager: 'instructions',
                                    cls: 'ux-notification-light',
                                    iconCls: 'ux-notification-icon-information',
                                    html: action.result.msg,
                                    autoHideDelay: 4000,
                                    slideBackDuration: 500,
                                    slideInAnimation: 'bounceOut',
                                    slideBackAnimation: 'easeIn'
                            }).show();
                            var headmenu=Ext.create('Audi.view.HeadMenu',{
                                    items:[{text:action.result.login,
                                            iconCls:'icon-user',
                                            option:'usuario'},
                                            {text:action.result.enterprise,
                                            iconCls:'icon-empresa',
                                            option:'empresa'},
											{
                                            xtype: 'splitbutton',
                                            text: 'Configuracion',
											iconCls:'icon-config',
                                            //width:198,
                                            menuAlign:'bl',
                                            menu: {
                                                xtype: 'menu',
                                                //width: 198,
															items: [
																{
                                                                    xtype: 'menuitem',
                                                                    option:'btnempresa',
                                                                    text: 'Registrar Empresa'
                                                                },{
																	xtype: 'menuitem',
																	option:'btnusuario',
																	text: 'Registrar Usuario'
																},
																{
																	xtype: 'menuitem',
																	option      : 'btnBG',
																	text        : 'Registrar B.G.'
																} ,   
																		
																{
																	xtype       : 'menuitem',
																	option      : 'btnER',
																	text        : 'Registrar E.R.'

																}
															]
														}
											},
											{text:'Legajo de Planificacion',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'legPla'},
											{text:'Legajo de Ejecucion',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'lege'},
											{text:'Comunicacion de Resultados',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'legr'},
                                            {text:'Salir',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-logout',
                                            option:'salir'}
                                    ]
                                });
                            var head=Ext.create('Audi.view.HeadPanel',{
                                tbar:[headmenu]
                            });
                            var viewport=Ext.create('Audi.view.Principal',{

                            });
                            viewport.add(head);
                            me.mape.setDisabled(true);
                        },
                        failure: function(frm, action) {
                            Ext.create('widget.uxNotification', {
                                title: action.result.title,
                                position: 't',
                                manager: 'instructions',
                                cls: 'ux-notification-light',
                                iconCls: 'ux-notification-icon-error',
                                html: action.result.msg,
                                autoHideDelay: 4000,
                                slideBackDuration: 500,
                                slideInAnimation: 'bounceOut',
                                slideBackAnimation: 'easeIn'
                            }).show();
                        }
                    });
                }
    }
});


