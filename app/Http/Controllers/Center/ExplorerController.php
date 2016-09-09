<?php

namespace App\Http\Controllers\Center;

use App\Http\Controllers\Controller;
use App\Services\Helper;
use Illuminate\Http\Request;

class ExplorerController extends Controller
{
    public function index()
    {
        return view('center/explorer');
    }

	/**
     * 当前路径文件列表
     * @author tangtanglove
	 */
    public function pathList(Request $request)
    {
        $dirPath   = $request->input('path');
        $list['files'] = Helper::arrGbkToUtf8(Helper::getFile($dirPath));
        $list['dirs']  = Helper::arrGbkToUtf8(Helper::getDir($dirPath));
        return $list;
    }
}