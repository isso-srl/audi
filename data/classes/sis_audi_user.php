<?php session_start(); ?>
<?php
/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

require_once '../include.php';
    class sis_audi_user 
    {
        public $_iduser;
        public $_tablename;

        public function __construct($iduser) {
            $this->_iduser=$iduser;
            $this->_tablename=  audi_user::table_name();
        }
        public function __call($option,$att) {
            $datos=$att[0];
            switch ($option)
            {
                case 'isLoged':
                    if ($this->_iduser!=0) {
                       $users=  audi_user::find('first',array('conditions'=>array('id_user=?',  $this->_iduser)));
                       $enterprise=  audi_enterprise::find('first',array('conditions'=>array('id_enterprise=?',$users->id_enterprise)));
                       $result=array("success"=>true,"login"=>$users->login,"enterprise"=>$enterprise->bussiness_name);
                       echo json_encode($result);
                    }else{
                       $result=array("success"=>false);
                       echo json_encode($result);
                    }
                break;
                case 'login':
                    
                    //$types=  erp_type::find_by_sql("SELECT * FROM ".$this->_tablename." WHERE login=? AND password=? AND active=true", array($datos['login'],$datos['password']));
                    $user= audi_user::find('first',array('conditions'=>array('login=? AND password=? AND active=?',$datos['login'],$datos['password'],true)));
                    
                    if ($user) {
                        $enterprise=  audi_enterprise::find('first',array('conditions'=>array('id_enterprise=?',$user->id_enterprise)));
                        $_SESSION['audi']['id_user']=$user->id_user;
                        $_SESSION['audi']['id_enterprise']=$user->id_enterprise;
                        $message="Usuario: ".$user->login."<br/>Empresa:".$enterprise->bussiness_name;
                       echo '{"success":true,"title":"Bienvenido!!","msg":"'.$message.'","login":"'.$user->login.'","enterprise":"'.$enterprise->bussiness_name.'"}'; 
                    }else{
                       echo '{"success":false,"title":"Error!!","msg":"Usuario o Password Incorrecto!!"}'; 
                    }
                    
                    
                break;
                case 'logout':
                    unset($_SESSION['audi']);
                    echo '{"success":true,"title":"Gracias:","msg":"Gracias por usar nuestro Sistema!!"}'; 
                break;
            }
        }
    }
    
    $iduser=isset($_SESSION['audi']['id_user'])?$_SESSION['audi']['id_user']:0;
    $xaction=$_POST['xaction'];
    $tipo=new sis_audi_user($iduser);
    $tipo->$xaction($_POST);
?>
