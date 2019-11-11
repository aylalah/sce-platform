<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Category;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Category::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cate= Category::create($request-> all());
        return $cate;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id=$request->id;
     
        // return $id;
       
        $update=DB::table('categories')
        ->where('id', $id)
        ->update(['catname' =>$request->catname,'destription' => $request->destription]); 
      
        //  return $trash;
        if($update){
            return '
                "success":"true"
            ';
        }
    }
    public function catetrash(Request $request)
    {
        $id=$request[0];
     
        //  return $id;
       
        $trash=DB::table('categories')
    ->where('id', $id)
    ->update(['status' =>'T']); 
    return $trash;
        //  if($trash){
        //     return '
        //         "success":"true"
        //     ';
        // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function movetrashc(Request $request)
    {
    $id=$request[0];
     
    //  return $id;
   
    $updatetitle=DB::table('categories')
    ->where('id', $id)
    ->update(['status' =>'Y']); 
  
     return $updatetitle;
    // if($update){
    //     return '
    //         "success":"true"
    //     ';
    // }
    }

    public function destroycat(Request $request)
    {
        $id=$request[0];
    
        // $deletet=DB::table('titles')->where('id', $id)->delete();
        // $deletec=DB::table('contents')->where('name_id', $id)->delete();
    //     if($deletet){
    //     return '
    //         "success":"true"
    //     ';
    // }else{
    //     return '
    //     "danger":"false"
    // ';
    // }
    return $id;
    }
    public function deletecat(Request $request)
    {
        $id=$request[0];
        // return $id;
        $deletecat=DB::table('categories')->where('id', $id)->delete();
        $deletet=DB::table('titles')->join('categories','titles.category_id','=','categories.id')->join('activities','categories.activity_id','=','activities.id')
        ->select('titles.*','categories.id','activities.id')
        ->where('categories.id', $id)->delete();
         $deletec=DB::table('contents')->join('titles','contents.name_id','=','titles.id')->join('categories','titles.category_id','=','categories.id')->join('activities','categories.activity_id','=','activities.id')
         ->select('contents.*','titles.id','categories.id','activities.id')
         ->where('categories.id', $id)->delete();
       
   
    return $deletet;
    }
    public function destroy($id)
    {
        // $id=$request[0];
     
        //  return $id;
       
        // $trash=DB::table('categories')
        // ->where('id', $id)->delete();
        // // ->update(['status' =>'T']); 
        //     if($trash){
        //         return '
        //             "success":"true"
        //         ';
        //     }
    }
}
