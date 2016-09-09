<?php

namespace App\Services;

class Helper
{
    /**
    * 创建盐
    * @author tangtanglove <dai_hang_love@126.com>
    */
	static function createSalt($length=-6)
    {
        return $salt = substr(uniqid(rand()), $length);
    }

    /**
    * 创建uuid,系统内唯一标识符
    * @author tangtanglove <dai_hang_love@126.com>
    */
    static function createUuid()
    {
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtolower(md5(uniqid(rand(), true)));
        $hyphen = chr(45);// "-"
        $uuid = substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12);
        return $uuid;
    }

    /**
    * 加密方法
    * @author tangtanglove <dai_hang_love@126.com>
    */
    static function blockscloudMd5($string,$salt)
    {
        return md5(md5($string).$salt);
    }

    /**
    * 获取目录列表
    * @author tangtanglove <dai_hang_love@126.com>
    */
    static function getDir(& $dir) {  
        if(is_dir($dir)) {  
            if(false != ($handle = opendir($dir))) {  
                while(false != ($file = readdir($handle))) {  
                    if($file!='.' && $file!='..' && !strpos($file,'.')) {  
                        $dirArray[] = $file;  
                    }  
                }  
                closedir($handle);  
            }  
        }else{  
            $dirArray[] = '[path]:\''.$dir.'\' is not a dir or not found!';  
        }  
        return $dirArray;  
    }  
  
    /**
    * 获取文件列表
    * @author tangtanglove <dai_hang_love@126.com>
    */
    static function getFile(& $dir) {
        $fileArray = '';
        if(is_dir($dir)) {  
            if(false != ($handle = opendir($dir))) {  
                while(false != ($file = readdir($handle))){  
                    if($file!='.' && $file!='..' && strpos($file,'.')) {  
                        $fileArray[] = $file;  
                    }  
                }  
                closedir( $handle );  
            }  
        } else {  
            $fileArray[] = '[path]:\''.$dir.'\' is not a dir or not found!';  
        }  
        return $fileArray;  
    }  
  
  
    /**
    * 获取目录/文件列表 
    * @author tangtanglove <dai_hang_love@126.com>
    */
    static function getDirFile(& $dir){  
        if(is_dir($dir)){  
            $dirFileArray['dirList'] = self::getDir($dir);  
            if($dirFileArray) {  
                foreach($dirFileArray['dirList'] as $handle){  
                    $file = $dir.DIRECTORY_SEPARATOR.$handle;  
                    $dirFileArray['fileList'][$handle] = self::getFile($file);  
                }  
            }  
        } else {  
            $dirFileArray[] = '[path]:\''.$dir.'\' is not a dir or not found!';  
        }  
        return $dirFileArray;  
    }

    /**
    * 将数组中的gbk字符串转换为utf8 
    * @author tangtanglove <dai_hang_love@126.com>
    */
    static function arrGbkToUtf8($data) {
        foreach ($data as $key => $value) {
            $strType = mb_detect_encoding($value, array("ASCII","UTF-8","GB2312","GBK","BIG5"));
            if($strType == 'EUC-CN') {
                $data[$key] = mb_convert_encoding($value, "UTF-8", "GBK");
            }
        }
        return $data;
    }
      
}
