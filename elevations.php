<?php 

	$today = getdate();
	
	$url = "http://dev1.gothamanalytics.net/chart.php?loc=".$_GET['id']."&from=".$today['mon']."/".($today['mday']-1)."/".$today['year']."&to=".$today['mon']."/".$today['mday']."/".$today['year'];
	$curl = curl_init();
	curl_setopt_array($curl, array(
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_URL => $url,
	));
	$response = curl_exec($curl);
	$response = json_encode($response);
	

	
	$downstream = substr($response, strpos($response, "Downstream,"));
	$downstream = substr($downstream, strpos($downstream, ","));
	$downstream = substr($downstream, 1);
	$downstream = substr($downstream, 0, strpos($downstream, ","));
 	
	$upstream = substr($response, strpos($response, "Upstream,"));
	$upstream = substr($upstream, strpos($upstream, ","));
	$upstream = substr($upstream, 1);
	$upstream = substr($upstream, 0, strpos($upstream, ","));

	$timedate = substr($response, strpos($response, "Value"));
	$timedate = substr($timedate, strpos($timedate, "2"));
	$timedate = substr($timedate, 0,19);


	$json['timedate'] = $timedate;
	$json['downstream'] = $downstream;
	$json['upstream'] = $upstream;

	echo json_encode($json);

	curl_close($curl);
?>