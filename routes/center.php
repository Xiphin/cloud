<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Auth::routes();

// Center登录默认路由
Route::get('center/login', 'Auth\CenterLoginController@login');
Route::post('center/login', 'Auth\CenterLoginController@login');

// Center退出
Route::get('center/logout', 'Auth\CenterLoginController@logout');

// Center路由组
Route::group(['prefix' => 'center','middleware' => ['web','auth:center'],'namespace' => 'Center'], function()
{
    Route::get('index/', 'IndexController@index');
    Route::get('index/index', 'IndexController@index');
});