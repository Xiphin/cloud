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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index');

// Center登录默认路由
Route::get('center/login', 'Auth\LoginController@centerLogin');

// Center登录执行
Route::post('center/login', 'Auth\LoginController@centerLogin');

// Center路由组
Route::group(['prefix' => 'center','middleware' => ['web'],'namespace' => 'Center'], function()
{
    Route::get('index/', 'IndexController@index');
    Route::get('index/index', 'IndexController@index');
});