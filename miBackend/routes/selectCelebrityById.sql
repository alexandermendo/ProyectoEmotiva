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
  INNER JOIN EMOCAT
  ON EMOCEL.ide_cat = EMOCAT.ide_cat
  INNER JOIN EMOCIU
  ON EMOCEL.ide_ciu = EMOCIU.ide_ciu
  INNER JOIN EMOPAI
  ON EMOCEL.ide_pai = EMOCIU.ide_pai
WHERE EMOCEL.identi = @identi