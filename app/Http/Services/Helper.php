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
}
