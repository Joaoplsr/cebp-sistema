<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function admin() {
        return $this->belongTo(Admin::class);
    }
}
