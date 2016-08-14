<?php

namespace App\Http\Controllers\Index;

use App\User;
use Validator;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index()
    {
        return '主页';
    }
}
