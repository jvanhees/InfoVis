/* All */
SELECT 
`Werknemers`,
COUNT(*) AS `num`
FROM `Amsterdam`
WHERE `Werknemers` != ''
AND
(
	   `SBI Hoofdact` = '6312'
	OR `SBI Hoofdact` = '6201'
	OR `SBI Hoofdact` = '5821'
	OR `SBI Hoofdact` = '5829'
	OR `SBI Hoofdact` = '5820'
	OR `SBI Nevenact1` = '6312'
	OR `SBI Nevenact1` = '6201'
	OR `SBI Nevenact1` = '5821'
	OR `SBI Nevenact1` = '5829'
	OR `SBI Nevenact1` = '5820'
	OR `SBI Nevenact2` = '6312'
	OR `SBI Nevenact2` = '6201'
	OR `SBI Nevenact2` = '5821'
	OR `SBI Nevenact2` = '5829'
	OR `SBI Nevenact2` = '5820'
	OR `SBI Hoofdact` = '6202'
	OR `SBI Hoofdact` = '6203'
	OR `SBI Hoofdact` = '802'
	OR `SBI Nevenact1` = '6202'
	OR `SBI Nevenact1` = '6203'
	OR `SBI Nevenact1` = '802'
	OR `SBI Nevenact2` = '6202'
	OR `SBI Nevenact2` = '6203'
	OR `SBI Nevenact2` = '802'
	OR `SBI Hoofdact` = '9511'
	OR `SBI Hoofdact` = '9512'
	OR `SBI Nevenact1` = '9511'
	OR `SBI Nevenact1` = '9512'
	OR `SBI Nevenact2` = '9511'
	OR `SBI Nevenact2` = '9512'
	OR `SBI Hoofdact` = '6110'
	OR `SBI Hoofdact` = '6120'
	OR `SBI Hoofdact` = '6130'
	OR `SBI Nevenact1` = '6110'
	OR `SBI Nevenact1` = '6120'
	OR `SBI Nevenact1` = '6130'
	OR `SBI Nevenact2` = '6110'
	OR `SBI Nevenact2` = '6120'
	OR `SBI Nevenact2` = '6130'
)
GROUP BY `Werknemers`
ORDER BY `Werknemers` ASC

/* Development */
SELECT 
`Werknemers`,
COUNT(*) AS `num`
FROM `Amsterdam`
WHERE `Werknemers` != ''
AND
(
	   `SBI Hoofdact` = '6312'
	OR `SBI Hoofdact` = '6201'
	OR `SBI Hoofdact` = '5821'
	OR `SBI Hoofdact` = '5829'
	OR `SBI Hoofdact` = '5820'
	OR `SBI Nevenact1` = '6312'
	OR `SBI Nevenact1` = '6201'
	OR `SBI Nevenact1` = '5821'
	OR `SBI Nevenact1` = '5829'
	OR `SBI Nevenact1` = '5820'
	OR `SBI Nevenact2` = '6312'
	OR `SBI Nevenact2` = '6201'
	OR `SBI Nevenact2` = '5821'
	OR `SBI Nevenact2` = '5829'
	OR `SBI Nevenact2` = '5820'
)
GROUP BY `Werknemers`
ORDER BY `Werknemers` ASC



/* Management, security & consultancy */
SELECT 
`Werknemers`,
COUNT(*) AS `num`
FROM `Amsterdam`
WHERE `Werknemers` != ''
AND
(
	   `SBI Hoofdact` = '6202'
	OR `SBI Hoofdact` = '6203'
	OR `SBI Hoofdact` = '802'
	OR `SBI Nevenact1` = '6202'
	OR `SBI Nevenact1` = '6203'
	OR `SBI Nevenact1` = '802'
	OR `SBI Nevenact2` = '6202'
	OR `SBI Nevenact2` = '6203'
	OR `SBI Nevenact2` = '802'
)
GROUP BY `Werknemers`
ORDER BY `Werknemers` ASC

/* Hardware */
SELECT 
`Werknemers`,
COUNT(*) AS `num`
FROM `Amsterdam`
WHERE `Werknemers` != ''
AND
(
	   `SBI Hoofdact` = '9511'
	OR `SBI Hoofdact` = '9512'
	OR `SBI Nevenact1` = '9511'
	OR `SBI Nevenact1` = '9512'
	OR `SBI Nevenact2` = '9511'
	OR `SBI Nevenact2` = '9512'
)
GROUP BY `Werknemers`
ORDER BY `Werknemers` ASC

/* Communication */
SELECT 
`Werknemers`,
COUNT(*) AS `num`
FROM `Amsterdam`
WHERE `Werknemers` != ''
AND
(
	   `SBI Hoofdact` = '6110'
	OR `SBI Hoofdact` = '6120'
	OR `SBI Hoofdact` = '6130'
	OR `SBI Nevenact1` = '6110'
	OR `SBI Nevenact1` = '6120'
	OR `SBI Nevenact1` = '6130'
	OR `SBI Nevenact2` = '6110'
	OR `SBI Nevenact2` = '6120'
	OR `SBI Nevenact2` = '6130'
)
GROUP BY `Werknemers`
ORDER BY `Werknemers` ASC