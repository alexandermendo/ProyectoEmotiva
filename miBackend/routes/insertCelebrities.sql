    DECLARE @nombre VARCHAR(50) = '{nombre}';
    DECLARE @apelli VARCHAR(50) = '{apellido}';
    DECLARE @nom_cat VARCHAR(50) = '{nom_cat}';  
    DECLARE @nom_ciu VARCHAR(50) = '{nom_ciu}';  
    DECLARE @fec_nac DATETIME = '{fec_nac}';  
    DECLARE @biograf VARCHAR(MAX) = '{biograf}';  
    DECLARE @red_soc VARCHAR(255) = '{red_soc}';  
    DECLARE @fot_fam VARCHAR(255) = '{fotoFilePath}';  
    
    INSERT INTO EMOCEL (nombre, apelli, nom_cat, nom_ciu, fec_nac, biograf, red_soc, fot_fam)
    VALUES (@nombre, @apelli, @nom_cat, @nom_ciu, @fec_nac, @biograf, @red_soc, @fot_fam)