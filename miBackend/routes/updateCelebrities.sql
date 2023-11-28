DECLARE @identi INT = '{identi}';
DECLARE @nombre VARCHAR(50) = '{nombre}';
DECLARE @apelli VARCHAR(50) = '{apellido}';
DECLARE @nom_cat VARCHAR(50) = '{nom_cat}';
DECLARE @nom_ciu VARCHAR(50) = '{nom_ciu}';
DECLARE @fec_nac DATETIME = '{fec_nac}';
DECLARE @biograf VARCHAR(MAX) = '{biograf}';
DECLARE @red_soc VARCHAR(255) = '{red_soc}';
DECLARE @fot_fam VARCHAR(255) = '{fotoFilePath}';


UPDATE EMOCEL
SET nombre = @nombre,
    apelli = @apelli,
    nom_cat = @nom_cat,
    nom_ciu = @nom_ciu,
    fec_nac = @fec_nac,
    biograf = @biograf,
    red_soc = @red_soc,
    fot_fam = @fot_fam
WHERE identi = @identi;
