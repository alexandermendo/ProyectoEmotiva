DECLARE @identi INT = '{identi}';
DECLARE @nombre VARCHAR(50) = '{nombre}';
DECLARE @apelli VARCHAR(50) = '{apellido}';
DECLARE @ide_cat INT = '{ide_cat}';
DECLARE @ide_pai INT = '{ide_pai}';
DECLARE @ide_ciu INT = '{ide_ciu}';
DECLARE @fec_nac DATETIME = '{fec_nac}';
DECLARE @biograf VARCHAR(MAX) = '{biograf}';
DECLARE @red_soc VARCHAR(255) = '{red_soc}';
DECLARE @fot_fam VARCHAR(255) = '{fotoFilePath}';


UPDATE EMOCEL
SET nombre = @nombre,
    apelli = @apelli,
    ide_cat = @ide_cat,
    ide_pai = @ide_pai,
    ide_ciu = @ide_ciu,
    fec_nac = @fec_nac,
    biograf = @biograf,
    red_soc = @red_soc,
    fot_fam = @fot_fam
WHERE identi = @identi;
