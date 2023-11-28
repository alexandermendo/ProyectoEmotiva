  SELECT
    EMOCEL.identi,
    EMOCEL.nombre, 
    EMOCEL.apelli, 
    EMOCEL.red_soc,
    EMOCAT.nom_cat,
    EMOCEL.fec_nac,
    EMOCIU.nom_ciu,
    EMOCEL.biograf,
    EMOCEL.fot_fam
  FROM EMOCEL
  INNER JOIN EMOCAT ON EMOCEL.nom_cat = EMOCAT.nom_cat
  INNER JOIN EMOCIU ON EMOCEL.nom_ciu = EMOCIU.nom_ciu  