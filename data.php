<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

$user = 'root';
$password = 'root';
$db = 'infovis';
$host = 'localhost';
$port = 8889;

$mysqli = new mysqli(
   $host,
   $user,
   $password,
   $db,
   $port
);

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

// Convert to clean dates
// if($result = $mysqli->query('SELECT `id`, `Datum Inschrijving` FROM `Amsterdam` WHERE `Datum Inschrijving` <> ""')){
//
// 	while ($row = $result->fetch_assoc()) {
// 		$phpdate = strtotime($row['Datum Inschrijving']);
// 		$date = date( 'Y-m-d', $phpdate );
// 		$query = 'UPDATE `Amsterdam` SET `CLEAN DATE` = "'.$date.'" WHERE `id` = '.$row['id'].'';
// 		$mysqli->query($query);
// 		print_r($mysqli->error);
// 	}
// } else {
// 	print_r($mysqli->error);
// }
// $amsterdamFields = array('582', '5821', '5829', '611', '6110', '612', '6120', '613', '6130', '619', '6190', '620', '6201', '6202', '6203', '6209', '631', '6311', '6312', '639', '6391', '6399', '7410', '802', '8020', '951', '9511', '9512');
// $queryfields = '';
// foreach($amsterdamFields as $field){
// 	if($queryfields != ''){
// 		 $queryfields .= ' OR ';
// 	}
//
// 	$queryfields .= '`SBI Hoofdact` = "'.$field.'" OR `SBI Nevenact1` = "'.$field.'" OR `SBI Nevenact2` = "'.$field.'"';
// }

$laFields = array('All other professional, scientific, & technical services',
	'Cellular and Other Wireless Telecommunications',
	'Computer & electronic product mfg.',
	'Computer & software stores',
	'Computer systems design & related services',
	'Data processing, hosting, & related services',
	'Hardware, & plumbing & heating equipment  & supplies',
	'Internet publishing & broadcasting',
	'Internet service providers',
	'Management, scientific, & technical consulting services',
	'Telecommunications'
);
$queryfields = '';
foreach($laFields as $field){
	if($queryfields != ''){
		 $queryfields .= ' OR ';
	}

	$queryfields .= '`PRIMARY NAICS DESCRIPTION` = "'.$field.'"';
}


$data = [];
for($year = 1900; $year < 2015; $year++) {
	$query = 'SELECT id FROM `Los Angeles` WHERE `CLEAN DATE` >= "'.$year.'-01-01" AND `CLEAN DATE` <= "'.$year.'-12-31" AND ('.$queryfields.')';
	if($result = $mysqli->query($query)){
		$data[$year] = $result->num_rows;
	} else {
		print_r($mysqli->error);
	}
}
?>
<style>
table td {
	border: 1px solid black;
}

</style>
<table>
	<?php foreach($data as $key => $value) { ?>
		<tr>
			<td><?=$key?></td>
			<td><?=$value?></td>
		</tr>
	<?php } ?>
</table>