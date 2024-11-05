<?php
// index.php
require_once 'IPService.php';

$ipService = new IpService();
header('Content-Type: application/json');
//echo $ipService->getIPSingle();


$apiKey = "c51cd95862ec4173a497df137bd8d1d7";
$ip = $ipService->getIPSingle();

$location = get_geolocation($apiKey, $ip);

$decodedLocation = json_decode($location, true);


echo($location);


function get_geolocation($apiKey, $ip, $lang = "en", $fields = "*", $excludes = "")
{
    $url = "https://api.ipgeolocation.io/ipgeo?apiKey=" . $apiKey . "&ip=" . $ip . "&lang=" . $lang . "&fields=" . $fields . "&excludes=" . $excludes;
    $cURL = curl_init();

    curl_setopt($cURL, CURLOPT_URL, $url);
    curl_setopt($cURL, CURLOPT_HTTPGET, true);
    curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($cURL, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ' . $_SERVER['HTTP_USER_AGENT']
    ));

    return curl_exec($cURL);
}