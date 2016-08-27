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
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * 用户退出方法
     * @author  tangtanglove <dai_hang_love@126.com>
     */
    public function logout()
    {
        Auth::guard('center')->logout();
        return redirect()->intended('center/login');
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
            if (Auth::guard('center')->attempt(['name' => $username, 'password' => $password])) {
                // Authentication passed...
                return redirect()->intended('center');
            } else {
                return '登录失败';
            }
        } else {
            return view('auth.centerlogin');
        }
    }

}
