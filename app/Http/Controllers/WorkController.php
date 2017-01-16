<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WorkController extends Controller
{
     public function getProject($name){
    	return view('pages.project')->withName($name);
    }

}
