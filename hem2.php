<?php
$img = imagecreatetruecolor(794,1122); // A4 at 96dpi
	$white = imagecolorallocate($img, 255, 255, 255);
	imagefill($img, 0, 0, $white);

function make_seam(&$x, &$y,$r,$steps,$N) {
	$r_uv = $r*0.5*pi()/$steps;
	while($r_uv <= $r*0.5*pi()+1E-9) {
		$odiff = 2*pi()*($r_uv - $r*sin($r_uv/$r));
		$dphi = $odiff/($r_uv*$N);
		$phi = -$dphi/2;
		$x[] = intval($r_uv*cos($phi));
		$y[] = intval($r_uv*sin($phi));
		$r_uv += $r*0.5*pi()/$steps;
	}
}
function make_overlap_seam(&$x, &$y, $r,$steps,$N,$overlap) {
	make_seam($x, $y ,$r,$steps,$N);
	for ($i = count($y)-1; $i > -1 ;$i--) {
		$y[$i] += $overlap;
		if ($y[$i] > 0) {
			unset($x[$i]); 
			unset($y[$i]); 
		}
		
	}
}

function make_circle(&$x, &$y, $r, $steps, $N, $overlap) {
	$r_uv = $r*0.5*pi();
	$odiff = 2*pi()*($r_uv - $r*sin($r_uv/$r));
	$dphi = $odiff/($r_uv*$N);
	$dphi2 = 0.8*$overlap/$r_uv;
	$phi = -2*pi()/$N+$dphi/2-$dphi2;
	while ($phi <= -$dphi/2+$dphi2) {
		$x[] = intval($r_uv*cos($phi));
		$y[] = intval($r_uv*sin($phi));
		$phi += (0.5*pi()-$dphi)/$steps;
	}
}
function make_cut_line(&$x, &$y, $r, $steps, $N, $overlap, $color, $img) {
	make_circle($x, $y,$r,$steps,$N,$overlap);
	//imagepolygon($img,centre($points),count($points)/2,$color);
	$tx = array();
	$ty = array();
	make_overlap_seam($tx, $ty,$r,$steps,$N,$overlap);
	
	$tx = array_reverse($tx);
	$ty = array_reverse($ty);
	
	for ($i = 0; $i<count($tx);$i++) {
		$x[] = $tx[$i];
	}
	for ($i = 0; $i<count($ty);$i++) {
		$y[] = $ty[$i];
	}
	$x[] = min($tx)-2*$overlap;
	$y[] = 0;
	
	$tx = array_reverse($tx);
	$ty = array_reverse($ty);
	for ($i = 0; $i<count($tx);$i++) {
		$x[] = $tx[$i];
	}
	for ($i = 0; $i<count($ty);$i++) {
		$y[] = -$ty[$i];
	}
	$n = count($x);
	for ($i = 1; $i<$N;$i++) {
		$phi = 2*pi()*$i/$N;
		for ($j = 0; $j<$n;$j++) {
			$x[] = cos($phi)*$x[$j]-sin($phi)*$y[$j];
			$y[] = sin($phi)*$x[$j]+cos($phi)*$y[$j];
		}
	}
	
	
	//imagepolygon($img,centre($points2),count($points2)/2,$color);
	//print_r($points2);
}
 $param1 = $_GET['diam'];
 $param2 = $_GET['leaves'];
 $param3 = $_GET['overlap'];

$x = array();
$y = array();
$steps = 500;
$color = 0x000000;
$diameter = $param1;
$radius = $diameter*1.9;
make_cut_line($x, $y,$radius,$steps,$param2,$param3*1.9, $color, $img);
for ($i = 0; $i<count($x);$i++) {
		imagesetpixel($img,400+$x[$i],500+$y[$i],$color);	
	}

//imagepolygon($img,$points,$steps,$color);
	header('Content-Disposition: Attachment;filename=image.jpg'); 
	header('Content-type: image/jpg');
	imagejpeg($img);
	imagedestroy($img);

//print_r($points);