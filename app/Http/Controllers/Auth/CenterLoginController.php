<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class CenterLoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * 验证要登录的字段 name,email
     *
     * @return string
     */
    protected function username()
    {
        return 'name';
    }

    /**
     * 需要认证的guard
     *
     * @return string
     */
    protected function guard()
    {
        return Auth::guard('center');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * 用户登录方法
     * @author  tangtanglove <dai_hang_love@126.com>
     */
    public function login(Request $request)
    {
        if($request->isMethod('post')){
            $username = $request->input('username');
            $password = $request->input('password');
        } else {
            return view('auth.centerlogin');
        }
    }

}
