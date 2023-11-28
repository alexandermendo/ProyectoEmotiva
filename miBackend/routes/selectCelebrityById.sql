DECLARE @identi INT = '{id}';

SELECT
  EMOCEL.identi,
  EMOCEL.nombre,
  EMOCEL.apelli,
  EMOCEL.red_soc,
  EMOCAT.nom_cat,
  EMOCEL.fec_nac,
  EMOCIU.nom_ciu,
  EMOPAI.nom_pai, 
  EMOCEL.biograf,
  EMOCEL.fot_fam
FROM EMOCEL
  INNER JOIN EMOCAT ON EMOCEL.nom_cat = EMOCAT.nom_cat
  INNER JOIN EMOCIU ON EMOCEL.nom_ciu = EMOCIU.nom_ciu
  INNER JOIN EMOPAI ON EMOCIU.ide_pai = EMOPAI.ide_pai
WHERE EMOCEL.identi = @identi;