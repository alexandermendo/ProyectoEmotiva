SELECT 
EMOCEL.identi,
EMOCEL.nombre, 
EMOCEL.apelli, 
EMOCAT.nom_cat, 
EMOCEL.fot_fam
FROM EMOCEL 
INNER JOIN EMOCAT 
ON EMOCAT.ide_cat = EMOCEL.ide_cat