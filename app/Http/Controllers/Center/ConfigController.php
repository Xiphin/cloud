<?php

namespace App\Http\Controllers\Center;

use App\Http\Controllers\Controller;

class ConfigController extends Controller
{
    public function index()
    {
        return view('center/index');
    }
}