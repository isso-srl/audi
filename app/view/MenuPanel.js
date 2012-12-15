
/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

Ext.define('Audi.view.MenuPanel', {
    extend: 'Ext.panel.Panel',
    alias:'widget.menupanel',
    region: 'west',
    title: 'Menu Principal',
    layout:'accordion',
    //collapseMode:'mini',
    width: 200,
	hidden:true,
    collapsible:true,
    margins:'0 0 5 5',
    split:true,
    items:[
                     {
                            xtype: 'panel',
                            collapsed: false,
                            title: 'Finanzas',
                            items:[{
                                    xtype: 'button',
                                    option:'btnplancuentas',
                                    autoWidth:true,
                                    width:198,
                                    text: '<h1>Plan de Cuentas</h1>'
                                },
                                {
                                    xtype: 'button',
                                    option:'btntipocambio',
                                    autoWidth:true,
                                    width:198,
                                    text: '<h1>Tipos de Cambio</h1>'
                                }
                            ]
                        },{
                            xtype: 'panel',
                            collapsed: false,
                            title: 'Inventarios',
                            items:[
                            {
                                    xtype: 'button',
                                    option:'btnitem',
                                    width:198,
                                    text: 'Maestro Items'
                                },
                                {
                                    xtype: 'button',
                                    option:'btnitemprecios',
                                    width:198,
                                    text: 'Precios Items'
                                },
                                {
                                    xtype: 'button',
                                    option:'btncategorias',
                                    width:198,
                                    text: 'Categorias'
                                },
                                {
                                    xtype: 'button',
                                    option:'btnunit',
                                    width:198,
                                    text: 'Unidades'
                                },{
                                    xtype: 'button',
                                    option:'btnproveedor',
                                    width:198,
                                    text: 'Proveedores'
                                },{
                                    xtype: 'button',
                                    option:'btncompras',
                                    width:198,
                                    text: 'Compra de Items'
                                },
                                {
                                    xtype: 'button',
                                    option:'btnentradas',
                                    width:198,
                                    text: 'Entrada de Items'
                                },
                                {
                                    xtype: 'button',
                                    option:'btnsalidas',
                                    width:198,
                                    text: 'Salida de Items'
                                },
                                {
                                    xtype: 'button',
                                    option:'btnmaestroalmacen',
                                    width:198,
                                    text: 'Maestro Almacenes'
                                },
                                {
                                    xtype: 'button',
                                    option:'btntransferencias',
                                    width:198,
                                    text: 'Transferencias'
                                },
                                {
                                    xtype: 'button',
                                    option:'btnrecepciontransferencias',
                                    width:198,
                                    text: 'Recepcion tranferencia'
                                },
                                {
                                    xtype: 'button',
                                    option:'btnkardexitem',
                                    width:198,
                                    text: 'Kardex Items'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            collapsed: false,
                            title: 'RRHH',
                            items:[
                                {
                                            xtype: 'splitbutton',
                                            text: 'Maestros',
                                            width:198,
                                            menuAlign:'tr',
                                            menu: {
                                                xtype: 'menu',
                                                width: 120,
                                                items: [
                                                    {
                                                        xtype: 'menuitem',
                                                        text: 'Menu Item',
                                                        option:'uno'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        text: 'Menu Item'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        text: 'Menu Item'
                                                    }
                                                ]
                                            }
                                },
                                {
                                    xtype: 'button',
                                    option:'btnEstructuraOrganica',
                                    autoWidth:true,
                                    width:198,
                                    text: 'Estructura organizacional'
                                },{
                                    xtype: 'button',
                                    option:'btnpersonal',
                                    autoWidth:true,
                                    width:198,
                                    text: 'Maestro Empleados'
                                },
                                {
                                    xtype       : 'button',
                                    option      : 'btnPlanilla',
                                    autoWidth   : true,
                                    width       : 198,
                                    text        : 'Planilla'
                                },
                                {
                                    xtype       : 'button',
                                    option      : 'btnCostoSalarialtotal',
                                    autoWidth   : true,
                                    width       : 198,
                                    text        : 'Costo Salarial Total'
                                },
                                {
                                    xtype       : 'button',
                                    option      : 'btnKardex',
                                    autoWidth   : true,
                                    width       : 198,
                                    text        : 'Kardex'

                                },
                                {
                                    xtype       : 'button',
                                    option      : 'btnMemorandum',
                                    autoWidth   : true,
                                    width       : 198,
                                    text        : 'Memorandum'

                                },
                                {
                                    xtype       : 'button',
                                    option      : 'btnReasignaciones',
                                    text        : 'Promociones y Bajas',
                                    width       : 198
                
                                },
                                {
                                    xtype       : 'button',
                                    option      : 'btnContratos',
                                    text        : 'Contratos',
                                    width       : 198
                                },   
                                {
                                    xtype       : 'button',
                                    option      : 'btnMaestroDocumentos',
                                    text        : 'Maestro Documentos',
                                    width       : 198
                                },                              
                                {
                                    xtype       : 'button',
                                    option      : 'btnControlAsistencia',
                                    autoWidth   : true,
                                    width       : 198,
                                    text        : 'Control de Asistencia'

                                },                              
                                {
                                    xtype       : 'button',
                                    option      : 'btnRcivaPersonal',
                                    autoWidth   : true,
                                    width       : 198,
                                    text        : 'RC-IVA Personal'

                                }
                                ,                              
                                {
                                    xtype       : 'button',
                                    option      : 'btnPrestamosAnticipos',
                                    autoWidth   : true,
                                    width       : 198,
                                    text        : 'Prestamos Anticipos'

                                }
                                
                            ]
                        }
                        ,
                        {
                            xtype: 'panel',
                            collapsed: false,
                            title: 'Configuraciones',
                            items:[{
                                    xtype: 'button',
                                    option:'btnconfplancuentas',
                                    autoWidth:true,
                                    width:198,
                                    text: '<h1>Plan de Cuentas</h1>'
                                },{
                                    xtype: 'button',
                                    option:'btnconfAlmacenes',
                                    autoWidth:true,
                                    width:198,
                                    text: '<h1>Almacenes</h1>'
                                },
                                {
                                    xtype: 'button',
                                    option: 'btnconfrrhh',
                                    autoWidth: true,
                                    width:198,
                                    text:'<h1>RRHH</h1>'
                                }
                            ]
                        }
                    ],
    initComponet:function(){

    }
});