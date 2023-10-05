    DECLARE @nombre VARCHAR(50) = '{nombre}';
    DECLARE @apelli VARCHAR(50) = '{apellido}';
    DECLARE @ide_cat INT = '{ide_cat}';  
    DECLARE @ide_pai INT = '{ide_pai}';  
    DECLARE @ide_ciu INT = '{ide_ciu}';  
    DECLARE @fec_nac DATETIME = '{fec_nac}';  
    DECLARE @biograf VARCHAR(MAX) = '{biograf}';  
    DECLARE @red_soc VARCHAR(255) = '{red_soc}';  
    DECLARE @fot_fam VARCHAR(255) = '{fotoFilePath}';  
    
    INSERT INTO EMOCEL (nombre, apelli, ide_cat, ide_pai, ide_ciu, fec_nac, biograf, red_soc, fot_fam)
    VALUES (@nombre, @apelli, @ide_cat, @ide_pai, @ide_ciu, @fec_nac, @biograf, @red_soc, @fot_fam)