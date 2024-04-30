<?php
function regularPolygon($diameter,$sides)
{	
	$radius = $diameter/2 * 96 * pi() /50.8;
	$img = imagecreatetruecolor(794,1122); // A4 at 96dpi
	$white = imagecolorallocate($img, 255, 255, 255);
	imagefill($img, 0, 0, $white);
	
	$color = 0x000000;
	
	$leafs = $sides;
    $points = array();
	$points2 = array();
	$p = array();
	
	 for ($l = 0; $l < $leafs; $l++) {
		 unset($points);
		  $points = array();
		  unset($points2);
		  $points2 = array();
      for ($a = 0; $a < 90; $a++) { 
		  $an = $a*pi()/180.0;
		  $p[0] = intval(sin($an) *$radius*pi()/$leafs/1.5);
		  $p[1] = intval($a * $radius/90.0);
		  $p = rot($p,$l* 360/$leafs);
		  $points[] = $p[0] + intval($radius);
		  $points[] = $p[1] + intval($radius);
		  
		  $p[0] = intval(-sin($an) *$radius*pi()/$leafs/1.5);
		  $p[1] = intval($a * $radius/90.0);
		  $p = rot($p,$l* 360/$leafs);
		  $points2[] = $p[0] + intval($radius);
		  $points2[] = $p[1] + intval($radius);
	  }
		 //print_r ($points2);
		 imagepolygon($img,$points,90,$color);
		 imagepolygon($img,$points2,90,$color);
		 imageline($img,$points[178],$points[179],$points2[178],$points2[179],$color);
	 }
	header('Content-Disposition: Attachment;filename=image.jpg'); 
	header('Content-type: image/jpg');
	imagejpeg($img);
	imagedestroy($img);
	
}
function rot($p, $angle)
  {
    $an = $angle * pi() / 180.0;
	
    $pr = array();

    $pr[0] = intval($p[0] * cos($an) + $p[1] * sin($an));
    $pr[1] = intval($p[1] * cos($an) - $p[0] * sin($an));
	//print_r ($pr);

    return $pr;
  }
  $param1 = $_GET['diam'];
  $param2 = $_GET['leaves'];
regularPolygon($param1,$param2);