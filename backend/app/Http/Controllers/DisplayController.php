<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\title;
use App\Category;
use App\Content;
use App\Activities;
use App\comment_tbs;
use App\User;
class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
public function commentcount($id){
     return response()->json(
        comment_tbs::join('titles','titles.id','=','comment_tbs.title_id')
        ->select(DB::raw('count(*) AS number_of_comment'), 'title.name_title')
   
    ->where('comment_tbs.title_id','=',$id)
       
        ->get()
     );
}

    public function displayactbytitle()
    {
        return response()->json(
            
            [

                'event' =>Activities::all(),
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
            //    ->where('activity_id','=',1)
            ->where('status','=','Y')
               ->inRandomOrder()->limit(4)
                ->get()

            ]
        );
    }
    public function displayevent()
    {
        return response()->json(
            
            [
                // 'comment' =>comment_tbs::where('id','=',1)->get(),
                'event' =>Activities::where('id','=',2)->get(),
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',2)
               ->where('titles.status','=','Y')
               ->inRandomOrder()->limit(4)
                ->get()
            ]
            
        );
    }

    
    public function displayartifact()
    {
      
       return response()->json(
            [

                'event' =>Activities::where('id','=',6)->get(),
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                // ->join('comment_tbs','titles.id','=','comment_tbs.title_id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',6)
               ->where('titles.status','=','Y')
            //    ->groupBy('comment')
            ->inRandomOrder()->limit(4)
               ->get()
            ]
        );
        
        // array_map(function($s){
        //     $title = $s['id'];
        //     $comms = DB::raw("SELECT count(*) from comment_tbs where title_id=$title");
        //     $s['comm_count'] = $comms;
        // }, $res['subevent']);
    }
    public function displaybusiness()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',7)->get(),
                
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',7)
               ->where('titles.status','=','Y')
               ->inRandomOrder()->limit(4)
                ->get()
            ]
        );
    }
    public function displaypeople()
    {
        return response()->json(
            [
                'event' =>Activities::where('id','=',4)->get(),
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',4)
               ->where('titles.status','=','Y')
               ->inRandomOrder()->limit(4)
              ->get()
            ]
        );
    }

    public function displaytourist()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',3)->get(),
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
              ->where('activity_id','=',3)
              ->where('titles.status','=','Y')
              ->inRandomOrder()->limit(4)
               ->get()
            ]
        );
    }
    public function displaynews()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',5)->get(),
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
              ->where('activity_id','=',5)
              ->where('titles.status','=','Y')
              ->inRandomOrder()->limit(4)
               ->get()
            ]
        );
    }

    public function getalltitle()
    {
        return response()->json(
          
                title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename') 
               ->get()
        
        );
    }

    public function getalladmintitle()
    {
        return response()->json(
          
                title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename') 
            ->limit(10) 
            ->get()
        
        );
    }
   
    public function getfootertitle()
    {
        return response()->json([
            title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
            ->select('titles.*','categories.catname')
            ->where('titles.status','=','Y')

            ->inRandomOrder()->limit(2)
               ->get()
        ]);
    }


    public function usertrashtitle()
    {
        return response()->json(
           User::orderBy('id', 'desc')->where('status','=','T')
            ->get()
    
    );
    }
    public function cattrashtitle()
    {
        return response()->json(
           Category::orderBy('id', 'desc')->where('status','=','T')
            ->get()
    
    );
    }
    public function acttrashtitle()
    {
        return response()->json(
           Activities::orderBy('id', 'desc')->where('status','=','T')
            ->get()
    
    );
    }
    public function getalltrashtitle()
    {
        return response()->json(
          
            title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
        //    ->where('activity_id','=',3)

           ->where('titles.status','=','T')

            ->get()
    
    );
    }
    
    public function search($searchTerm)
    {
       
       
        return response()->json(
            title::whereLike(['location', 'name_title'], $searchTerm)->get()
            
        
        );
    }

    public function gettitles($id)
    {
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('activity_id','=',$id)
            ->where('titles.status','=','Y')
            // ->inRandomOrder()->take(4) 
               ->get(),
            'acti' =>Activities::where('id','=', $id)->get(),
            'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
    public function gettitlesforadmin($id)
    {
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('activity_id','=',$id)
               ->get(),
            'acti' =>Activities::where('id','=', $id)->get(),
            'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
    public function getUtitles()
    {
        $id=auth()->user()->id;
        // return $id;
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('user_id','=',$id)
            // ->where('status','=','Y')
            // ->inRandomOrder()->take(4) 
               ->get(),
            // 'acti' =>Activities::where('id','=', $id)->get(),
            // 'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
    
    public function getUContent()
    {
        $id=auth()->user()->id;
        // return $id;
        return response()->json([
           'ucontents'=> content::orderBy('id','desc')  ->join('titles','contents.name_id','=','titles.id')
               ->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('contents.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('user_id','=',$id)
            // ->where('status','=','Y')
            // ->inRandomOrder()->take(4) 
               ->get(),
            // 'acti' =>Activities::where('id','=', $id)->get(),
            // 'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
}
